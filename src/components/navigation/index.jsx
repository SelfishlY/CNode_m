import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './style.css';

class Navigation extends Component{
  render(){
    return(
      <div>
        <ul className="clear-fix">
          <li className="float-left navlist"><Link to="/">首页</Link></li>
          <li className="float-left navlist"><Link to="/">新手入门</Link></li>
          <li className="float-left navlist"><Link to="/about">关于</Link></li>
          <li className="float-left navlist"><Link to="/login">登录</Link></li>
        </ul>
      </div>
    )
  }
}

export default Navigation;