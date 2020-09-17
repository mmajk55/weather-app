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
  React.useEffect(() => {
    (async () => {
      const result = await fetch(
        `${process.env.REACT_APP_API_URL}/forecast/?q=london&units=metric&APPID=${process.env.REACT_APP_API_KEY}`,
      );
      const data = await result.json();

      console.log(data);
    })();
  }, []);

  return (
    <Container>
      <StyledWeatherForecast>
        <StyledSearchWrapper>
          <InputSearch />
          <Button text="Szukaj" />
        </StyledSearchWrapper>
        <Box>
          <h1>Weather</h1>
        </Box>
      </StyledWeatherForecast>
    </Container>
  );
};

export default WeatherForecast;
