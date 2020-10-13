export type AppState = {
  error: undefined | any;
  isLoading: boolean;
};

export type ProviderValue = {
  appState: AppState;
  appDispatch: (action: AppActions) => void;
}

export type Loading = {
  type: AppActionType.LOADING;
};

export type StopLoading = {
  type: AppActionType.STOP_LOADING;
};

export type Error = {
  type: AppActionType.ERROR;
  data: any;
};

export type AppActions = Loading | StopLoading | Error;

export enum AppActionType {
  LOADING,
  STOP_LOADING,
  ERROR,
}