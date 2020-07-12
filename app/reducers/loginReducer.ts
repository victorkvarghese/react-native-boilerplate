/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

import { ILoginState } from 'app/models/reducers/login';
import {
  ILoginRequestState,
  ILoginResponseState,
} from 'app/models/actions/login';
const initialState: ILoginState = {
  isLoggedIn: false,
  id: 0,
  username: '',
  password: '',
};

export const loginReducer = createReducer(initialState, {
  [types.LOGIN_REQUEST](state: ILoginState, action: ILoginRequestState) {
    return {
      ...state,
      username: action.username,
      password: action.password,
    };
  },
  [types.LOGIN_LOADING_ENDED](state: ILoginState) {
    return { ...state };
  },
  [types.LOGIN_RESPONSE](state: ILoginState, action: ILoginResponseState) {
    return {
      ...state,
      id: action.response.id,
      isLoggedIn: true,
    };
  },
  [types.LOGIN_FAILED](state: ILoginState) {
    return {
      ...state,
      isLoggedIn: false,
    };
  },
  [types.LOG_OUT](state: ILoginState) {
    return {
      ...state,
      isLoggedIn: false,
    };
  },
});
