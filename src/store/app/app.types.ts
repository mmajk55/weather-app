export type AppState = {
  error: undefined | any;
  isLoading: boolean;
  userLocation: Cords;
};

export type ProviderValue = {
  appState: AppState;
  appDispatch: (action: AppActions) => void;
};

export type Cords = {
  lat: number;
  long: number;
};

export type GetUserLocation = {
  type: AppActionType.GET_USER_LOCATION;
  cords: Cords;
};

export type Loading = {
  type: AppActionType.LOADING;
};

export type StopLoading = {
  type: AppActionType.STOP_LOADING;
};

export type Error = {
  type: AppActionType.ERROR;
  error: any;
};

export type AppActions = Loading | StopLoading | Error | GetUserLocation;

export enum AppActionType {
  LOADING,
  STOP_LOADING,
  ERROR,
  GET_USER_LOCATION,
}