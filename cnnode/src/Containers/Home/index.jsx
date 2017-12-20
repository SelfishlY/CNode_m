import React,{Component} from 'react';
import HomeNav from './subpage/HomeNav';
import './style.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as InitAction from '../../Redux/Actions/actions';
import ItemList from '../../Components/ItemList/ItemList';
import Loading from '../../Components/Loading/index';


class Home extends Component{
    render(){
        const data = this.props.HomeState.HomeData
        console.log(data)
        return(
            <div>  
                <HomeNav/>
                <div>
                    {
                        data.length > 0
                        ? data.map((item,index) =>{
                            return <ItemList data={item} key={index} />
                        })
                        : <Loading/>
                    }
                </div>
                <button onClick={this.onclickHandle}>点击</button>
            </div>
        )
    }


    // 第一次获取数据
    componentDidMount(){
        this.getAjaxData()
    }


    // 点击加载更多
    onclickHandle = () => {
        // console.log(this.props.HomeAction)
        this.props.HomeAction.MORE_PAGE()
        this.getAjaxData()
    }

    getAjaxData = () =>{
        const para = this.props.HomeState;
        const page = para.page;
        const tab = para.tab;
        const limit = para.limit;
        this.props.HomeAction.Has_Data(page, tab, limit)
    }
}



const mapStateToProps = (state) =>{
    return{
        HomeState: state.Home
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        HomeAction: bindActionCreators(InitAction,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);