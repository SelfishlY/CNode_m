import React, { Component } from 'react';
import About from './about/index';
import Home from './home/index';
import Login from './login/index';
import Messages from './messages/index';
// import NoFouned from './404';
import { HashRouter, Route} from 'react-router-dom'
import Header from '../components/header/index';
import * as UserInfoActions from '../actions/actions';
import User from './user/index';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Details from './Details/index';

class Index extends Component {
  constructor(props,context){
    super(props,context);
    this.state = {
      keys: []
    }
  }

  render() {
    return (
      <HashRouter history={this.props.history}>
        <div style={{height: '100%'}}>
          {
            localStorage.accesstoken
            ? <Header islogin={true}/>
            : <Header islogin={false}/>
          }
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/messages" component={Messages} />
          <Route path="/user/:name" component={User}/>
          <Route path="/details/:id" component={Details}/>
        </div>
      </HashRouter>
    )
  }

  componentWillReceiveProps(prevState,prevProps){
    const keys = this.state.keys;
    const prevKeys = Object.keys(prevState.login);
    if(keys !== prevKeys){
      this.setState({
        keys: prevKeys
      })
    }
  }
  componentDidMount(){
    // 将AccessToken和用户信息存储到Redux中
    this.props.UserAccAction.updata({
      userAccessToken: localStorage.accesstoken,
      cnnodeUserName: localStorage.cnnodeUserName
    })
  }

}

const mapStateToProps = (state) =>{
  return{
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    UserAccAction: bindActionCreators(UserInfoActions, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Index)