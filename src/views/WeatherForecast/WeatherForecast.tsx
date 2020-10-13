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
    userLocation && fetchWeatherForecastHandler(null, userLocation);
  }, [userLocation]);

  const fetchWeatherForecastHandler = useCallback(
    async (event?: React.MouseEvent<HTMLButtonElement>, location?: Cords) => {
      event && event.preventDefault();

      if (town || location) {
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
    [town],
  );

  const inputHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => setTown(event.target.value), []);

  const handleKeypress = (event: React.KeyboardEvent<HTMLInputElement>) =>
    event.key === 'Enter' && fetchWeatherForecastHandler();

  return (
    <Container>
      <StyledWeatherForecast>
        <StyledHeader>Prognoza Pogody</StyledHeader>
        <StyledSearchWrapper>
          <InputSearch onChange={inputHandler} onKeyPress={handleKeypress} />
          {!isLoading ? (
            <Button text="Szukaj" onClick={fetchWeatherForecastHandler} />
          ) : (
            <Loader type="Oval" color="#158ca1" height={50} width={50} />
          )}
        </StyledSearchWrapper>
        {weatherForecastState && weatherForecastState.city && <h2>Miasto: {weatherForecastState.city}</h2>}
        {weatherForecastState &&
          weatherForecastState.weatherForecastList &&
          Object.keys(weatherForecastState.weatherForecastList).map((key, i) => (
            <DailyBox key={i} day={key} data={weatherForecastState.weatherForecastList[key]} />
          ))}
        {weatherForecastState &&
          weatherForecastState.statusCode &&
          weatherForecastState.statusCode === statusCodes.NOT_FOUND && <p>Nie znaleziono miasta.</p>}
      </StyledWeatherForecast>
    </Container>
  );
};

export default WeatherForecast;
