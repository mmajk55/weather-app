import { createReducer } from 'redux-act';
import { put, takeEvery } from 'redux-saga/effects';
import { fetchWeatherForecast, fetchWeatherForecastSuccess, fetchWeatherForecastFailure } from './actions';
import { fetchWeatherForecastService } from './service';

const initialState: any = {
  weatherForecast: undefined,
  error: undefined,
};

export const weatherForecastReducer = createReducer(
  {
    [fetchWeatherForecast as any]: (state: any) => ({
      ...state,
    }),
    [fetchWeatherForecastSuccess as any]: (state: any, weatherForecast: any) => ({
      ...state,
      weatherForecast,
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
    yield put(fetchWeatherForecastFailure(error));
  }
}

export const weatherForecastSaga = takeEvery(fetchWeatherForecast, onFetchWeatherForecast);
