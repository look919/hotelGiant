import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  AUTH_SUCCESS,
  AUTH_FAIL,
  LOGOUT
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  user: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: payload
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        user: payload.data.user,
        isAuthenticated: true
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case AUTH_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null
      };

    default:
      return state;
  }
}
