import { combineReducers } from 'redux';
import alert from './alert';
import rooms from './rooms';
import auth from './auth';
import users from './users';
import orders from './orders';

export default combineReducers({
  alert,
  rooms,
  auth,
  users,
  orders
});
