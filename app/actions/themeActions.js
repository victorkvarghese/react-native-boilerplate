/*
 * Reducer actions related with login
 */
import * as types from './types';

export function setIsDarkTheme(value) {
  return {
    type: types.TOGGLE_THEME,
    isDark: value,
  };
}
