import React, { Component } from 'react';
import './style.css'
import List from '../List/index';

class UserInfo extends Component {

    constructor(props){
        super(props);
    }


    render() {
        const data = this.props.data;
        return (
            <div className="userinfo clear-fix">
                <div className="float-left userTou">
                    <img src={data.data.avatar_url} alt="" />
                </div>
                <div>
                    <div className="usertitle">{data.data.githubUsername}</div>
                    <div className="usertitle">积分:{data.data.score}</div>
                    <div className="usertitle">创建时间:{data.data.create_at}</div>
                </div>
                <div className="replies">
                    <h2>最近的回复</h2>
                {
                    data.data.recent_replies.map((item,index) =>{
                            return <List userdata={item} key={index}/>
                    })
                }
                </div>
                <div className="topics">
                    <h2>最近的话题</h2>
                    {
                        data.data.recent_topics.map((item,index) =>{
                            return <List userdata={item} key={index}/>
                        })
                    }
                </div>
                {/* <div>最近的话题: {data.data.recent_topics.length}</div> */}
            </div>
        )
    }
}

export default UserInfo;