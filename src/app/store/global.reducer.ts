import { Action, createReducer, on } from '@ngrx/store';
import * as GlobalActions from './global.action';

export interface GlobalState {
  isDarkMode: boolean;
}

const initialState: GlobalState = {
  isDarkMode: false,
};

const _globalReducer = createReducer(
  initialState,
  on(GlobalActions.turnOnDarkMode, (state, action) => ({
    ...state,
    isDarkMode: action.isDarkMode,
  })),
  on(GlobalActions.turnOffDarkMode, (state, action) => ({
    ...state,
    isDarkMode: action.isDarkMode,
  })),
);

export function globalReducer(state: GlobalState | undefined, action: Action) {
  return _globalReducer(state, action);
}
