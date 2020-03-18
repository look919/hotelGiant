import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAIL,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL
} from './types';

export const getAllUsers = ({
  hotelForGuests,
  sortForGuests
}) => async dispatch => {
  try {
    const res = await axios.get(
      `/api/v1/users?fields=_id,login&hotel=${hotelForGuests}&limit=5&sort=${sortForGuests}&role=user`
    );

    dispatch({
      type: GET_ALL_USERS_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_USERS_FAIL,
      payload: { msg: 'error', status: 'not found' }
    });
  }
};

export const getUser = id => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/users/${id}`);

    dispatch({
      type: GET_USER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'danger'));

    dispatch({
      type: GET_USER_FAIL,
      payload: { msg: 'error', status: 'not found' }
    });
  }
};

export const updateUserExpenses = (
  id,
  expenses,
  totalExpenses
) => async dispatch => {
  try {
    const body = JSON.stringify({ expenses, totalExpenses });

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.patch(`/api/v1/users/${id}`, body, config);

    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: res.data.data.data
    });
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'danger'));

    dispatch({
      type: UPDATE_USER_FAIL,
      payload: { msg: 'error', status: 'not found' }
    });
  }
};
