import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './style.css';

class Navigation extends Component{
  render(){
    return(
      <div className="navUl">
        <Link to="/" className="navlist">首页</Link>
        <Link to="/messages" className="navlist">新手入门</Link>
        <Link to="/about" className="navlist">关于</Link>
        <Link to="/login" className="navlist">登录</Link>
      </div>
    )
  }
}

export default Navigation;