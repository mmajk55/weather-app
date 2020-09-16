import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import WeatherForecast from './views/WeatherForecast';
import { theme } from './theme';

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
}
h1 {
  font-size: 2.4rem;
}
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <WeatherForecast />
    </ThemeProvider>
  );
};

export default App;
