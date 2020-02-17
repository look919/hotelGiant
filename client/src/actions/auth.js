import axios from 'axios';
import { setAlert } from './alert';
import setAuthToken from './../utils/setAuthToken';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_SUCCESS,
  AUTH_FAIL,
  LOGOUT
} from './types';

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/v1/users/auth');
    console.log(res.data.user);
    dispatch({
      type: AUTH_SUCCESS,
      payload: res.data.user
    });
  } catch (err) {
    dispatch({
      type: AUTH_FAIL
    });
  }
};

//register User
export const register = ({ login, password }) => async dispatch => {
  const body = JSON.stringify({ login, password });
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await axios.post('/api/v1/users/register', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.message
    });
  }
};

//login user
export const login = (login, password) => async dispatch => {
  const body = JSON.stringify({ login, password });
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await axios.post('/api/v1/users/login', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    console.log(err.response);
    dispatch(setAlert(err.response.data.message, 'danger'));
    dispatch({
      type: LOGIN_FAIL,
      payload: err.message
    });
  }
};

export const logout = () => async dispatch => {
  dispatch({
    type: LOGOUT
  });
};
