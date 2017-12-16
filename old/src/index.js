import React from 'react';
import ReactDOM from 'react-dom';
import Index from './containers/index';
import configStore from './store/store';
import {Provider} from 'react-redux';
import './static/css/reset.css';
import './static/css/font.css';



const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <Index/>    
  </Provider>
, document.getElementById('root'));
