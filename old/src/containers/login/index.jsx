import React, { Component } from 'react';
import './style.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as UserInfoActions from '../../actions/actions';
import { postAccessToken} from '../../fetch/accesstoken/index';
import { history} from 'react-router-dom'

class Login extends Component {

  constructor(props,context){
    super(props,context);
    this.state={
      value: '',
      caveat: '' //警告
    }
  }

  render() {
    return (
      <div className="login">
          {/* <div className="login-title">国内最专业的 Nodejs 开源技术社区</div> */}
          <div className="login-btn"> 
          <span>Access Token:</span><input type="text" value={this.state.value} onChange={this.hasValue.bind(this)}  placeholder="请扫码输入或者手动输入"/><br/>
          {
            this.state.caveat
            ? <span className="caveat">{this.state.caveat}</span>
            : ''
          }
          <button className="erweima">扫码登录</button>
          <button onClick={this.hasAccessToken.bind(this)}>AccessToken登录</button>
          </div>
      </div>
    )
  }

  // 约束性组件,获取input框中的值
  hasValue(e){
    this.isCaveat()
    this.setState({
      value: e.target.value
    })
  }

  // 获取AccessToken
  hasAccessToken(){
    this.isCaveat();
    if(this.state.value === ''){
      return
    }
    // 获取数据
    var result = postAccessToken({ accesstoken: this.state.value });
    result.then((res) =>{
      return res.json()
    }).then((resJson) =>{
      if (resJson.success){
        // 将accesstoken存储到localStorage()
        localStorage.accesstoken = this.state.value;
        localStorage.cnnodeUserName = resJson.loginname;
        // 将AccessToken和用户信息存储到Redux中(第一次登录时手动存储,往后直接从localstorage中获取)
        this.props.UserAccAction.updata({
          userAccessToken: localStorage.accesstoken,
          cnnodeUserName: localStorage.cnnodeUserName
        })
        this.props.history.push('/user/' + resJson.loginname);
      }else{
        this.setState({
          caveat: 'accesstoken错误'
        })
      }
      
    })
    

  }

  // 判断是否显示警告框
  isCaveat(){
    if (this.state.value !== '') {
      this.setState({
        caveat: ''
      })
    } else {
      this.setState({
        caveat: '请先获取AccessToken'
      })
    }
  }
}

const mapStateToProps = (state) =>{
  return{
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    UserAccAction: bindActionCreators(UserInfoActions,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
// export default Login;