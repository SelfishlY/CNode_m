import React, { Component } from 'react';
import { getHomeList} from '../../fetch/homelist/index'
import HomeList from '../../components/HomeList/index';
import HomeNav from '../../components/HomeNva/index';
import './style.css';

class Home extends Component {

    constructor(props){
      super(props);
      this.state = {
        data: [],
        page: 1
      }
    }
    render() {
      return (
        <div className="home">
          <HomeNav/>
          {
            this.state.data.length>0
              ? <HomeList data={this.state.data}/>
              : <div>加载中...</div>
          }
          
        </div>
      )
    }

    componentDidMount() {
      this.oneHasData()
    }


    // 第一次获取数据
    oneHasData = () => {
      const page = this.state.page
      this.hasData(page, 'all', 10);
    }

    // 获取数据
    hasData = (page, tab, limit) => {
      var result = getHomeList(page, tab, limit)
      result.then((res) => {
        return res.json()
      }).then((resJson) => {
        this.setState({
          data: resJson.data
        })
      })
    }
}

export default Home;