import React from 'react';
import Container from '../components/Container/Container';
import Box from '../components/Box/Box';
import InputSearch from '../components/InputSearch/InputSearch';
import Button from '../components/Button/Button';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { fetchWeatherForecast } from '../store/weatherForecast/actions';

const StyledWeatherForecast = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: ${(props) => props.theme.metrics.metricXL} 0;
`;

const StyledSearchWrapper = styled.div`
  disply: flex;
  flex-flow: column;
  margin-bottom: ${(props) => props.theme.metrics.metricM};
`;

const WeatherForecast: React.FC = () => {
  const dispatch = useDispatch();
  const [town, setTown] = React.useState('warszawa');

  const fetchWeatherForecastHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    dispatch(fetchWeatherForecast(town));
  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => setTown(event.target.value);

  return (
    <Container>
      <StyledWeatherForecast>
        <StyledSearchWrapper>
          <InputSearch onChange={inputHandler} />
          <Button text="Szukaj" onClick={fetchWeatherForecastHandler} />
        </StyledSearchWrapper>
        <Box>
          <h1>Weather</h1>
        </Box>
      </StyledWeatherForecast>
    </Container>
  );
};

export default WeatherForecast;
