import React, { useReducer } from 'react';
import { groupDays } from '../../utils/groupData';
import {
  ProviderValue,
  FetchWeatherForecast,
  WeatherForecastState,
  WeatherForecastActionType,
} from './weatherForecasttypes';

const initialState: WeatherForecastState = {
  weatherForecastList: undefined,
  statusCode: undefined,
  city: undefined,
};

const reducer = (state: WeatherForecastState, { type, payload }: FetchWeatherForecast) => {
  switch (type) {
    case WeatherForecastActionType.FETCH_WEATHER_FORECAST:
      return {
        ...state,
        weatherForecastList: payload.list ? groupDays(payload.list) : state.weatherForecastList,
        city: payload.city ? payload.city.name : state.city,
        statusCode: payload.cod,
      };
  }
};

export const WeatherForecastContext = React.createContext({} as ProviderValue);

export const WeatherForecastContextProvider = (props) => {
  const [weatherForecastState, weatherForecastDispatch] = useReducer(reducer, initialState);

  return (
    <WeatherForecastContext.Provider value={{ weatherForecastState, weatherForecastDispatch }}>
      {props.children}
    </WeatherForecastContext.Provider>
  );
};
