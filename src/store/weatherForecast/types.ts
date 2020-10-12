export type WeatherForecastState = {
  weatherForecastList: undefined | any;
  statusCode: undefined | string;
  city: undefined | string;
};

export type FetchWeatherForecast = {
  type: WeatherForecastActionType.FETCH_WEATHER_FORECAST;
  payload: any;
}

export type ProviderValue = {
  weatherForecastState: WeatherForecastState;
  weatherForecastDispatch: (action: FetchWeatherForecast) => void;
};

export enum WeatherForecastActionType {
  FETCH_WEATHER_FORECAST,
}
