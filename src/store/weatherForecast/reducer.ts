import { createReducer } from 'redux-act';
import { put, takeEvery } from 'redux-saga/effects';
import { fetchWeatherForecast, fetchWeatherForecastSuccess, fetchWeatherForecastFailure } from './actions';
import { fetchWeatherForecastService } from './service';
import { groupDays } from '../../utils/groupData';

const initialState: any = {
  weatherForecastList: undefined,
  statusCode: undefined,
  city: undefined,
  error: undefined,
};

export const weatherForecastReducer = createReducer(
  {
    [fetchWeatherForecast as any]: (state: any) => ({
      ...state,
    }),
    [fetchWeatherForecastSuccess as any]: (state: any, weatherForecast: any) => ({
      ...state,
      statusCode: weatherForecast.cod,
      city: weatherForecast.city ? weatherForecast.city.name : undefined,
      weatherForecastList: weatherForecast.list ? groupDays(weatherForecast.list) : undefined,
    }),
    [fetchWeatherForecastFailure as any]: (state: any, error: any) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

function* onFetchWeatherForecast({ payload }) {
  try {
    const weatherForecastData = yield fetchWeatherForecastService({ town: payload });

    yield put(fetchWeatherForecastSuccess(weatherForecastData));
  } catch (error) {
    console.log(error);
    yield put(fetchWeatherForecastFailure(error));
  }
}

export const weatherForecastSaga = takeEvery(fetchWeatherForecast, onFetchWeatherForecast);
