import React,{Component} from 'react';
import Home from './Home/index'
import About from './About/index'
import User from './User/index'
import Login from './Login/index'
import Header from '../Components/Header/index';
import { HashRouter, Route} from 'react-router-dom'
import '../static/getType';
import '../static/css/reset.css'

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as InitAction from '../Redux/Actions/actions';

class App extends Component{
    render(){
        return(
            <HashRouter history={this.props.history}>
            <div>
                <Header/>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/about" component={About} />
                <Route path="/user" component={User}/>
            </div>
            </HashRouter>
        )
    }
}

export default App