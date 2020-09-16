import React from 'react';
import Container from '../components/Container/Container';
import Box from '../components/Box/Box';
import InputSearch from '../components/InputSearch/InputSearch';
import Button from '../components/Button/Button';
import styled from 'styled-components';

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
  return (
    <Container>
      <StyledWeatherForecast>
        <StyledSearchWrapper>
          <InputSearch />
          <Button text="Szukaj" />
        </StyledSearchWrapper>
        <Box boxWidth="75vw">
          <h1>Weather</h1>
        </Box>
      </StyledWeatherForecast>
    </Container>
  );
};

export default WeatherForecast;
