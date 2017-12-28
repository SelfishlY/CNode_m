import React,{Component} from 'react';
import Home from './Home/index'
import About from './About/index'
import User from './User/index'
import Login from './Login/index'
import Details from './Details/index';
import Header from '../Components/Header/index';
import Posted from '../Containers/Posted/index';
import { HashRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux';
import * as Actions from '../Redux/Actions/actions';
import { bindActionCreators} from 'redux';
import '../static/getType';
import '../static/css/reset.css'


class App extends Component{
    render(){
        
        return(
            <HashRouter history={this.props.history}>
            <div className="box" style={{'height':'100%'}}>
                <Header exit={this.props.UserAction.USER_EXIT}/>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/about" component={About} />
                <Route path="/user/:name" component={User}/>
                <Route path="/details/:id" component={Details}/>
                <Route path="/posted" component={Posted}/>
            </div>
            </HashRouter>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        UserAction: bindActionCreators(Actions,dispatch)
    }
}

export default connect(null,mapDispatchToProps)(App)
