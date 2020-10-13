import React, { useReducer } from 'react';
import { AppActionType, ProviderValue, AppState, AppActions } from './app.types';

const initialappState: AppState = {
  error: undefined,
  isLoading: false,
};

const reducer = (appState: AppState, payload: AppActions) => {
  switch (payload.type) {
    case AppActionType.LOADING:
      return { ...appState, isLoading: true };
    case AppActionType.STOP_LOADING:
      return {
        ...appState,
        isLoading: false,
      };
    case AppActionType.ERROR:
      return { ...appState, error: payload.data };
  }
};

export const AppContext = React.createContext({} as ProviderValue);

export const AppContextProvider = (props) => {
  const [appState, appDispatch] = useReducer(reducer, initialappState);

  return <AppContext.Provider value={{ appState, appDispatch }}>{props.children}</AppContext.Provider>;
};
