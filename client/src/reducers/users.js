import {
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAIL,
  GET_USER_SUCCESS,
  GET_USER_FAIL
} from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        ...payload
      };
    case GET_USER_SUCCESS:
      return { ...state, userLoaded: payload };
    case GET_USER_FAIL:
    case GET_ALL_USERS_FAIL:
    default:
      return state;
  }
}
