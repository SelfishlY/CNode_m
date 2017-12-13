import React, { Component } from 'react';
import About from './about/index';
import Home from './home/index';
import Login from './login/index';
import Messages from './messages/index';
// import NoFouned from './404';
import {HashRouter, Route} from 'react-router-dom';
import Header from '../components/header/index';

class Index extends Component {

  render() {
    return (
      <HashRouter>
        <div style={{height: '100%'}}>
          <Header />          
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/messages" component={Messages} />
        </div>
      </HashRouter>
    )
  }
}

export default Index;