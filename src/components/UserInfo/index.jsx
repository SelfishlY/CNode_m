import React, { Component } from 'react';
class UserInfo extends Component {

    constructor(props){
        super(props);
    }


    render() {
        const data = this.props.data;
        return (
            <div>
                <img src={data.data.avatar_url} alt=""/>
                <div>创建时间:{data.data.create_at}</div>
                <div>用户名:{data.data.githubUsername}</div>
                <div>最近的回复: {data.data.recent_replies.length}</div>
                <div>最近的话题: {data.data.recent_topics.length}</div>
                <div>赞:{data.data.score}</div>
            </div>
        )
    }
}

export default UserInfo;