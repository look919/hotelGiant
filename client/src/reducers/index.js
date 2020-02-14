import { combineReducers } from 'redux';
import alert from './alert';
import rooms from './rooms';

export default combineReducers({
  alert,
  rooms
});
