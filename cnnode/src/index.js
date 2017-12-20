import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/index';
import {Provider} from 'react-redux';
import configStore from './Redux/store';
import './static/font/iconfont.css'

const store=configStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>    
    </Provider>
, document.getElementById('root'));
