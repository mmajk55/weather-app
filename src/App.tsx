import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import WeatherForecast from './views/WeatherForecast/WeatherForecast';
import { theme } from './theme';
import { WeatherForecastContextProvider } from './store/weatherForecast/weatherForecastContext';
import { AppContextProvider } from './store/app/app.context';

const GlobalStyles = createGlobalStyle`
html {
  font-size: 62.5%
}
body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-size: 1.4rem;
    overflow-x: hidden;
}
h1 {
  font-size: 2.4rem;
}
`;

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <WeatherForecastContextProvider>
          <WeatherForecast />
        </WeatherForecastContextProvider>
      </ThemeProvider>
    </AppContextProvider>
  );
};

export default App;
