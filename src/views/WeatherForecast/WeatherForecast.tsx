import React from 'react';
import Container from '../../components/Container/Container';
import DailyBox from '../../components/DailyBox/DailyBox';
import InputSearch from '../../components/InputSearch/InputSearch';
import Button from '../../components/Button/Button';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherForecast } from '../../store/weatherForecast/actions';
import { statusCodes } from './consts';

const StyledWeatherForecast = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: ${(props) => props.theme.metrics.metricXL} 0;
`;

const StyledSearchWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props) => props.theme.metrics.metricM};
`;

const StyledHeader = styled.h1`
  color: ${(props) => props.theme.colors.blue};
  text-align: center;
  margin-bottom: ${(props) => props.theme.metrics.metricL};
`;

const WeatherForecast: React.FC = () => {
  const [town, setTown] = React.useState(undefined);
  const dispatch = useDispatch();
  const { statusCode, weatherForecastList, city, isLoading } = useSelector((state: any) => state);

  const fetchWeatherForecastHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (town) {
      dispatch(fetchWeatherForecast(town));
    }
    return;
  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => setTown(event.target.value);

  return (
    <Container>
      <StyledWeatherForecast>
        <StyledHeader>Prognoza Pogody</StyledHeader>
        <StyledSearchWrapper>
          <InputSearch onChange={inputHandler} />
          {!isLoading ? (
            <Button text="Szukaj" onClick={fetchWeatherForecastHandler} />
          ) : (
            <Loader type="Oval" color="#158ca1" height={50} width={50} />
          )}
        </StyledSearchWrapper>
        {city && <h2>Miasto: {city}</h2>}
        {weatherForecastList &&
          statusCode === statusCodes.SUCCESS &&
          Object.keys(weatherForecastList).map((key, i) => (
            <DailyBox key={i} day={key} data={weatherForecastList[key]} />
          ))}
        {statusCode === statusCodes.NOT_FOUND && <p>Nie znaleziono miasta.</p>}
      </StyledWeatherForecast>
    </Container>
  );
};

export default WeatherForecast;
