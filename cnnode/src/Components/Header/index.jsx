import React,{Component} from 'react'
import logo from '../../static/img/logo.svg'
import './style.css'
import HeaderNav from './subpage/index';

class Header extends Component{
    render(){
        return(
            <div className="navbar">
                <img src={logo} alt=""/>
                <HeaderNav/>    
            </div>
        )
    }
}

export default Header;