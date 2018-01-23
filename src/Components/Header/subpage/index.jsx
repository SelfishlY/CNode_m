import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class HeaderNav extends Component{
    render(){
        const loginname = localStorage.loginname || '';
        const id = localStorage.cnodeId || '';
        const img = localStorage.avatar_url || '';
        return(
            <div>
                {
                    loginname && id && img
                    ?   <div className="HeaderNav">   
                            <Link to="/">首页</Link>
                            <Link to="/login">新手</Link>
                            <Link to="/login">关于</Link>
                            <Link to="/posted">发布</Link>
                            <a onClick={this.props.exit}>退出</a>
                        </div>
                    :   <div className="HeaderNav">
                            <Link to="/">首页</Link>
                            <Link to="/login">新手</Link>
                            <Link to="/login">关于</Link>
                            <Link to="/login">登录</Link>
                        </div>
                }
            </div>
        )
    }
}

export default HeaderNav