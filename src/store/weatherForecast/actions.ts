import { createAction } from 'redux-act';

export const fetchWeatherForecast = createAction<any>('Fetch weather forecast');

export const fetchWeatherForecastSuccess = createAction<any>('Fetch weather forecast success');

export const fetchWeatherForecastFailure = createAction<any>('Fetch weather forecast failure');
