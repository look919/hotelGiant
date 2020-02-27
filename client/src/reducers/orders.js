import {
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAIL
} from '../actions/types';

const initialState = {
  id: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        order: payload
      };
    case CREATE_ORDER_FAIL:
    default:
      return state;
  }
}
