import { combineReducers } from 'redux';
import login from './login';
import homelist from './homelist';


export default combineReducers({
  login,
  homelist
});
