import React,{Component} from 'react';
import HomeNav from './subpage/HomeNav';
import './style.css';
import {getHomeList} from '../../Fetch/HomeList/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as InitAction from '../../Redux/Actions/actions';
import HomeList from './subpage/HomeList';



class Home extends Component{
    render(){
        // const data = this.props.HomeState.Home
        // console.log(this.props.HomeState.Home.HomeData)
        console.log(1)
        return(
            <div>
                <HomeNav/>
                <HomeList/>
            </div>
        )
    }

    componentDidMount(){
        var result = getHomeList(1,'all',5);
        result.then((res) =>{
            return res.json()
        }).then((resJson) =>{
            this.props.HomeAction.Has_Data(resJson.data)
            console.log(3)
            console.log(this.props.HomeState.Home.HomeData)
        })
    }
}

const mapStateToProps = (state) =>{
    return{
        HomeState: state
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        HomeAction: bindActionCreators(InitAction,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);