import { combineReducers } from 'redux';
import alert from './alert';
import rooms from './rooms';
import auth from './auth';
import orders from './orders';

export default combineReducers({
  alert,
  rooms,
  auth,
  orders
});
