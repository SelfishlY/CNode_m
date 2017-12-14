import React, { Component } from 'react';
import About from './about/index';
import Home from './home/index';
import Login from './login/index';
import Messages from './messages/index';
// import NoFouned from './404';
import { HashRouter, Route} from 'react-router-dom'
import Header from '../components/header/index';
import User from './user/index';
import {connect} from 'react-redux';
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
            this.state.keys.length > 0
              ? <Header islogin={true} userName={this.props.login.userinfo.loginname}/>
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
    this.setState({
      keys:Object.keys(this.props.login)
    })
  }

}

const mapStateToProps = (state) =>{
  return{
    login: state.login
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{}
}

export default connect(mapStateToProps,mapDispatchToProps)(Index)