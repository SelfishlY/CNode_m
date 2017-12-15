import React, { Component } from 'react';
import { getHomeList} from '../../fetch/homelist/index'
import HomeList from '../../components/HomeList/index';
import HomeNav from '../../components/HomeNva/index';
import './style.css';
import LoadMore from '../../components/LoadMore/index';

class Home extends Component {

    constructor(props){
      super(props);
      this.state = {
        data: [],
        page: 1,  //默认页数
        tab: 'all',  //默认文章类型
        limit: 15, //默认文章数量
        isloadmore: true //加载更多组件目前的动作 true  fasle正在加载中
       }
    }
    render() {
      return (
        <div className="home">
          <HomeNav modifyTab={this.modifyTab}/>
          {
            this.state.data.length>0
              ? <HomeList data={this.state.data}/>
              : <div>加载中...</div>
          }
          <LoadMore isloadmore={this.state.isloadmore} hasLoadMore={this.hasLoadMore}/>
        </div>
      )
    }


    componentDidMount() {
      this.oneHasData()
    }

    // 更改文章类型
    modifyTab = (tab) =>{
      // 因为this.setState 是异步的,所以这里使用回调
      this.setState({
        tab:tab,
        page:1  //切换类型的时候,要修改当前page的值
      },() =>{
        var page = this.state.page;
        var tab = this.state.tab;
        var limit = this.state.limit;
        this.tabHasData(page, tab, limit);
      })
    }

    // 第一次获取数据
    oneHasData = () => {
      var page = this.state.page;
      var tab = this.state.tab;
      var limit = this.state.limit;
      this.hasData(page, tab, limit);
    }

    // 加载更多
    hasLoadMore = () =>{
      this.setState({
        isloadmore: false
      })

      this.setState({
        page: this.state.page+1
      },() =>{
        console.log(this.state.page)
        var page = this.state.page;
        var tab = this.state.tab;
        var limit = this.state.limit;
        this.hasData(page, tab, limit);
      })
    }

    // 获取数据(更换类型)
    tabHasData = (page,tab,limit) =>{
      var result = getHomeList(page,tab,limit)
      result.then((res) =>{
        return res.json()
      }).then((resJson) =>{
        this.setState({
          data:resJson.data
        })
      })
    }

    // 获取数据(加载更多)
    hasData = (page, tab, limit) => {
      var result = getHomeList(page, tab, limit)
      result.then((res) => {
        return res.json()
      }).then((resJson) => {
        this.setState({
          data: this.state.data.concat(resJson.data),
          isloadmore:true
        })
      })
    }
}

export default Home;