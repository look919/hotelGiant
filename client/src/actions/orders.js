import axios from 'axios';
import { setAlert } from './alert';

import {
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  GET_ALL_ORDERS_SUCCESS,
  GET_ALL_ORDERS_FAIL,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAIL
} from './types';

export const createOrder = (
  { fname, lname, phone, email, country, town, zip, adress, hotel, room, info },
  { startDate, endDate }
) => async dispatch => {
  const body = JSON.stringify({
    name: fname,
    vorname: lname,
    phone,
    email,
    country,
    town,
    zip,
    adress,
    hotel,
    choosenRoom: room,
    info,
    startDate,
    endDate
  });

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await axios.post('/api/v1/orders', body, config);

    dispatch({
      type: CREATE_ORDER_SUCCESS,
      payload: res.data
    });
    dispatch(setAlert('Order created successfully', 'success'));
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'danger'));
    console.log(err.response.data.message);
    dispatch({
      type: CREATE_ORDER_FAIL,
      payload: err.message
    });
  }
};

export const getAllOrders = () => async dispatch => {
  try {
    const res = await axios.get(
      '/api/v1/rooms?fields=_id&hotel=Warsaw&limit=5'
    );

    dispatch({
      type: GET_ALL_ORDERS_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_ORDERS_FAIL,
      payload: { msg: 'error', status: 'not found' }
    });
  }
};
