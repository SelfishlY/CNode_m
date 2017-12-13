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
                <div className="float-left">
                    <img src={data.data.avatar_url} alt="" />
                </div>
                <div className="usertitle">{data.data.githubUsername}</div>    
                <div className="usertitle">积分:{data.data.score}</div>            
                <div className="usertitle">创建时间:{data.data.create_at}</div>
                <div>最近的回复</div>
                {
                    data.data.recent_replies.map((item,index) =>{
                        console.log(item.author.avatar_url)
                        return <List userdata={item} key={index}/>
                    })
                }
                {/* <div>最近的话题: {data.data.recent_topics.length}</div> */}
            </div>
        )
    }
}

export default UserInfo;