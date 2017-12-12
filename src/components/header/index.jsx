import React, { Component } from 'react';
import logo from '../../img/logo.svg';
import './style.css';
import Navigation from '../navigation/index';

class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <img src={logo} alt=""/>
        <div>
          <div className="Input-Box">
            <input type="text" placeholder="请输入关键字" />
            <span className="icon-search search-icon"></span>    
          </div>      
        </div>
        <Navigation/>
      </div>
    )
  }
}

export default Header;