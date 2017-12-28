
import { combineReducers } from 'redux';
import Home from './home';
import UserInfo from './userinfo'; 
import Detailes from './details'
import Login from './login';
import Posted from './posted'



export default combineReducers({
    Home,
    UserInfo,
    Detailes,
    Login,
    Posted
});
  
  

