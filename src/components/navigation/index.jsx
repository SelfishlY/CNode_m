import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './style.css';

class Navigation extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const userName = this.props.userName;
    return(
      <div className="navUl">
        {
          this.props.islogin
          // 登录情况
          ? <div>
              <Link to="/" className="navlist">首页</Link>
              <Link to="/messages" className="navlist">新手入门</Link>
              <Link to="/about" className="navlist">关于</Link>
              <Link to="/login" className="navlist">退出</Link>
              <Link to={"/user/" + userName} className="navlist">用户信息</Link>
              <Link to="/news" className="navlist">未读消息</Link>
            </div>
          //未登录 
          : <div>
              <Link to="/" className="navlist">首页</Link>
              <Link to="/messages" className="navlist">新手入门</Link>
              <Link to="/about" className="navlist">关于</Link>
              <Link to="/login" className="navlist">登录</Link>
            </div>
        }
      </div>
    )
  }
}

export default Navigation;