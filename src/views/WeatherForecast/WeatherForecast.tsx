import React, { useContext, useCallback, useEffect, useState } from 'react';
import Container from '../../components/Container/Container';
import DailyBox from '../../components/DailyBox/DailyBox';
import InputSearch from '../../components/InputSearch/InputSearch';
import Button from '../../components/Button/Button';
import Loader from 'react-loader-spinner';
import { StyledHeader, StyledSearchWrapper, StyledWeatherForecast } from './WeatherForecast.styles';
import { geolocationApiOptions, statusCodes } from '../../utils/consts';
import { WeatherForecastContext } from '../../store/weatherForecast/weatherForecast.context';
import {
  fetchWeatherForecastByLocationService,
  fetchWeatherForecastService,
} from '../../store/weatherForecast/weatherForecast.service';
import { AppContext } from '../../store/app/app.context';
import { WeatherForecastActionType } from '../../store/weatherForecast/weatherForecast.types';
import { AppActionType, Cords } from '../../store/app/app.types';
import { getUserLocationService } from '../../store/app/app.service';

const WeatherForecast: React.FC = () => {
  const [town, setTown] = useState(undefined);
  const {
    weatherForecastDispatch,
    weatherForecastState: { city, statusCode, weatherForecastList },
  } = useContext(WeatherForecastContext);
  const {
    appDispatch,
    appState: { isLoading, userLocation },
  } = useContext(AppContext);

  useEffect(() => {
    userLocation.lat && userLocation.long && fetchWeatherForecastByLocationHandler({ userLocation });
  }, [userLocation]);

  const fetchWeatherForecastHandler = useCallback(
    async (event?: React.MouseEvent<HTMLButtonElement>) => {
      event && event.preventDefault();

      if (town) {
        appDispatch({ type: AppActionType.LOADING });

        try {
          const forecast = await fetchWeatherForecastService({ town });

          weatherForecastDispatch({ type: WeatherForecastActionType.FETCH_WEATHER_FORECAST, payload: forecast });
        } catch (error) {
          appDispatch({ type: AppActionType.ERROR, error: error });
        }

        appDispatch({ type: AppActionType.STOP_LOADING });
      }
      return;
    },
    [town],
  );

  const inputHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => setTown(event.target.value), []);

  const fetchWeatherForecastByLocationHandler = async ({ userLocation }: { userLocation: Cords }) => {
    appDispatch({ type: AppActionType.LOADING });

    try {
      const forecast = await fetchWeatherForecastByLocationService({ userLocation });

      weatherForecastDispatch({ type: WeatherForecastActionType.FETCH_WEATHER_FORECAST, payload: forecast });
    } catch (error) {
      appDispatch({ type: AppActionType.ERROR, error: error });
    }

    appDispatch({ type: AppActionType.STOP_LOADING });
  };

  const getUserLocationHandler = async () => {
    try {
      const position = await getUserLocationService(geolocationApiOptions);
      const positionCords = {
        lat: position.coords.latitude,
        long: position.coords.longitude,
      };

      appDispatch({ type: AppActionType.GET_USER_LOCATION, cords: positionCords });
    } catch (error) {
      appDispatch({ type: AppActionType.ERROR, error: error });
    }
  };

  const handleKeypress = (event: React.KeyboardEvent<HTMLInputElement>) =>
    event.key === 'Enter' && fetchWeatherForecastHandler();

  return (
    <Container>
      <StyledWeatherForecast>
        <StyledHeader>Prognoza Pogody</StyledHeader>
        <StyledSearchWrapper>
          {!isLoading ? (
            <React.Fragment>
              <InputSearch onChange={inputHandler} onKeyPress={handleKeypress} />
              <Button text="Szukaj" onClick={fetchWeatherForecastHandler} />
              <Button text="Użyj mojej lokalizacji" onClick={getUserLocationHandler} />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <p>Wyszukiwanie miasta</p>
              <Loader type="Oval" color="#158ca1" height={50} width={50} />
            </React.Fragment>
          )}
        </StyledSearchWrapper>
        {city && <h2>Miasto: {city}</h2>}
        {statusCode &&
          statusCode === statusCodes.SUCCESS &&
          weatherForecastList &&
          Object.keys(weatherForecastList).map((key, i) => (
            <DailyBox key={i} day={key} data={weatherForecastList[key]} />
          ))}
        {statusCode && statusCode === statusCodes.NOT_FOUND && <p>Nie znaleziono miasta.</p>}
        {statusCode && !Object.values(statusCodes).includes(statusCode) && (
          <p>Coś poszło nie tak :( spróbuj ponownie później.</p>
        )}
      </StyledWeatherForecast>
    </Container>
  );
};

export default WeatherForecast;
