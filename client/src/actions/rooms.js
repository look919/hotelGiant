import axios from 'axios';
import { GET_ALL_ROOMS_SUCCESS, GET_ALL_ROOMS_FAIL } from './types';

export const getAllRooms = () => async dispatch => {
  try {
    const res = await axios.get('/api/v1/rooms?sort=createdAt');

    dispatch({
      type: GET_ALL_ROOMS_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_ROOMS_FAIL,
      payload: { msg: 'error', status: 'not found' }
    });
  }
};
