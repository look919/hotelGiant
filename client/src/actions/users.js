import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAIL,
  GET_USER_SUCCESS,
  GET_USER_FAIL
} from './types';

export const getAllUsers = ({
  hotelForGuests,
  sortForGuests
}) => async dispatch => {
  try {
    const res = await axios.get(
      `/api/v1/users?fields=_id&hotel=${hotelForGuests}&limit=5&sort=${sortForGuests}&role=user`
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
    console.log(id);
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
