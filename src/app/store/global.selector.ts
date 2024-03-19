import { createSelector } from '@ngrx/store';
import { AppState } from './app.reducer';
import { GlobalState } from './global.reducer';

export const selectGlobal = (state: AppState) => state.global;

export const selectIsDarkMode = createSelector(
  selectGlobal,
  (state: GlobalState) => state.isDarkMode,
);
