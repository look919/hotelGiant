import axios from 'axios';
import { setAlert } from './alert';

import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';

//register User
export const register = ({ login, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-type': 'Application/json'
    }
  };
  const body = JSON.stringify({ login, password });
  try {
    const res = await axios.post('/api/v1/users', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL
    });
  }
};
