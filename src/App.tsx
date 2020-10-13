import React, { useEffect, useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import WeatherForecast from './views/WeatherForecast/WeatherForecast';
import { theme } from './theme';
import { WeatherForecastContextProvider } from './store/weatherForecast/weatherForecastContext';
import { AppActionType } from './store/app/app.types';
import { AppContext } from './store/app/app.context';

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
  const { appDispatch } = useContext(AppContext);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const positionCords = {
            lat: position.coords.latitude,
            long: position.coords.longitude,
          };

          appDispatch({ type: AppActionType.GET_USER_LOCATION, cords: positionCords });
        },
        (error) => {
          appDispatch({ type: AppActionType.ERROR, error: error });
        },
        { maximumAge: 600000, timeout: 10000 },
      );
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <WeatherForecastContextProvider>
        <WeatherForecast />
      </WeatherForecastContextProvider>
    </ThemeProvider>
  );
};

export default App;
