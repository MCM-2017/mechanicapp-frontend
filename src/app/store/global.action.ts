import { createAction, props } from '@ngrx/store';

export const turnOnDarkMode = createAction(
  '[Global] Turn On Dark Mode',
  props<{ isDarkMode: boolean }>(),
);

export const turnOffDarkMode = createAction(
  '[Global] Turn On Dark Mode',
  props<{ isDarkMode: boolean }>(),
);
