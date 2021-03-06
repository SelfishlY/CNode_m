import React,{Component} from 'react';
import HomeNav from './subpage/HomeNav';
import './style.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as InitAction from '../../Redux/Actions/actions';
import ItemList from '../../Components/ItemList/ItemList';
import Loading from '../../Components/Loading/index';
import Loadmore from '../../Components/Loadmore/index';


class Home extends Component{
    render(){
        const data = this.props.HomeState
        return(
            <div className="conent">  
                <HomeNav switchType={this.switchType}/>
                <div className="listBox">
                    {
                        data.HomeData.length > 0
                        ? data.HomeData.map((item,index) =>{
                            return <ItemList data={item} key={index} />
                        })
                        : <Loading/>
                    }
                </div>
                <Loadmore isLoadmore={data.isLoadmore} onclickHandle={this.onclickHandle}/>
            </div>
        )
    }


    // 第一次获取数据
    componentDidMount(){
        this.getAjaxData()
    }


    // 获取数据
    getAjaxData = () => {
        const { page,tab,limit } = this.props.HomeState
        this.props.HomeAction.Has_Data(page, tab, limit)
    }

    // 加载更多
    onclickHandle = () => {
        this.props.HomeAction.SET_ISLOADMORE()
        this.props.HomeAction.MORE_PAGE()        
        this.getAjaxData()
        this.props.HomeAction.SET_ISLOADMORE()        
    }

    // 切换文章类型
    switchType = (e) =>{
        const tab = e.target.id
        const {page,limit}  = this.props.HomeState;
        this.props.HomeAction.SWITCH_TYPE(1,tab,limit)
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