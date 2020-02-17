import { combineReducers } from 'redux';
import alert from './alert';
import rooms from './rooms';
import auth from './auth';

export default combineReducers({
  alert,
  rooms,
  auth
});
