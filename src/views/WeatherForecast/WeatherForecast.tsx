import React, { useContext, useCallback, useEffect } from 'react';
import Container from '../../components/Container/Container';
import DailyBox from '../../components/DailyBox/DailyBox';
import InputSearch from '../../components/InputSearch/InputSearch';
import Button from '../../components/Button/Button';
import Loader from 'react-loader-spinner';
import { StyledHeader, StyledSearchWrapper, StyledWeatherForecast } from './WeatherForecast.styles';
import { statusCodes } from '../../utils/consts';
import { WeatherForecastContext } from '../../store/weatherForecast/weatherForecastContext';
import {
  fetchWeatherForecastByLocationService,
  fetchWeatherForecastService,
} from '../../store/weatherForecast/weatherForecast.service';
import { AppContext } from '../../store/app/app.context';
import { WeatherForecastActionType } from '../../store/weatherForecast/weatherForecasttypes';
import { AppActionType, Cords } from '../../store/app/app.types';

const WeatherForecast: React.FC = () => {
  const [town, setTown] = React.useState(undefined);
  const { weatherForecastDispatch, weatherForecastState } = useContext(WeatherForecastContext);
  const {
    appDispatch,
    appState: { isLoading, userLocation },
  } = useContext(AppContext);

  useEffect(() => {
    userLocation.lat && userLocation.long && fetchWeatherForecastHandler(null, userLocation);
  }, [userLocation.lat, userLocation.long]);

  const fetchWeatherForecastHandler = useCallback(
    async (event?: React.MouseEvent<HTMLButtonElement>, location?: Cords) => {
      event && event.preventDefault();

      if (town || (location.lat && location.long)) {
        let forecast;
        appDispatch({ type: AppActionType.LOADING });

        try {
          town
            ? (forecast = await fetchWeatherForecastService({ town }))
            : (forecast = await fetchWeatherForecastByLocationService({ userLocation: location }));

          weatherForecastDispatch({ type: WeatherForecastActionType.FETCH_WEATHER_FORECAST, payload: forecast });
        } catch (error) {
          appDispatch({ type: AppActionType.ERROR, error: error });
        }

        appDispatch({ type: AppActionType.STOP_LOADING });
      }
      return;
    },
    [town, userLocation],
  );

  const inputHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => setTown(event.target.value), []);

  const handleKeypress = (event: React.KeyboardEvent<HTMLInputElement>) =>
    event.key === 'Enter' && fetchWeatherForecastHandler();

  const { city, statusCode, weatherForecastList } = weatherForecastState;

  return (
    <Container>
      <StyledWeatherForecast>
        <StyledHeader>Prognoza Pogody</StyledHeader>
        <StyledSearchWrapper>
          {!isLoading ? (
            <React.Fragment>
              <InputSearch onChange={inputHandler} onKeyPress={handleKeypress} />
              <Button text="Szukaj" onClick={fetchWeatherForecastHandler} />
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
      </StyledWeatherForecast>
    </Container>
  );
};

export default WeatherForecast;
