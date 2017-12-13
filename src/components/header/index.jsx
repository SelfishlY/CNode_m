import React, { Component } from 'react';
import logo from '../../img/logo.svg';
import './style.css';
import Navigation from '../navigation/index';

class Header extends Component {

  constructor(props){
    super(props)
  }

  render() {
    const islogin = this.props.islogin;
    const userName = this.props.userName;
    return (
      <div className="navbar">
        <img src={logo} alt=""/>
        <div>
          <div className="Input-Box">
            <input type="text" placeholder="请输入关键字" />
            <span className="icon-search search-icon"></span>    
          </div>      
        </div>
        <Navigation islogin={islogin} userName={userName}/>
      </div>
    )
  }
}

export default Header;