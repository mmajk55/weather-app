import { weatherForecastSaga } from './weatherForecast/reducer';

export default function* rootSaga() {
  yield weatherForecastSaga;
}
