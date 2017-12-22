import React,{Component} from 'react';
import Home from './Home/index'
import About from './About/index'
import User from './User/index'
import Login from './Login/index'
import Details from './Details/index';
import Header from '../Components/Header/index';
import { HashRouter, Route} from 'react-router-dom'
import '../static/getType';
import '../static/css/reset.css'


class App extends Component{
    render(){
        return(
            <HashRouter history={this.props.history}>
            <div>
                <Header/>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/about" component={About} />
                <Route path="/user/:name" component={User}/>
                <Route path="/details/:id" component={Details}/>
            </div>
            </HashRouter>
        )
    }
}

export default App