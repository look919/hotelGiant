import {
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  GET_ALL_ORDERS_SUCCESS,
  GET_ALL_ORDERS_FAIL,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAIL
} from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        order: payload
      };
    case GET_ALL_ORDERS_SUCCESS:
      return { ...state, ...payload };
    case GET_ORDER_SUCCESS:
      return { ...state, order: payload };
    case GET_ORDER_FAIL:
    case CREATE_ORDER_FAIL:
    case GET_ALL_ORDERS_FAIL:
    default:
      return state;
  }
}
