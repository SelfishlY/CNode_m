import React, { Component } from 'react';
import './style.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as UserInfoActions from '../../actions/actions';

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
    if(this.state.value == ''){
      return
    }
    // 将AccessToken存储到Redux中
    this.props.UserAccAction.updata({
      userAccessToken: this.state.value
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