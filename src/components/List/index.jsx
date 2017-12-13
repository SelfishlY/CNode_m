import React, { Component } from 'react';
import './style.css';
class List extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const userdata = this.props.userdata;
        return (
            <div className="clear-fix list">
                <div username={userdata.author.loginname} className="float-left"><img src={userdata.author.avatar_url} alt=""/></div>
                <a id={userdata.id}>{userdata.title}</a>
                {/* <span>{userdata.last_reply_at}</span> */}
            </div>
        )
    }
}

export default List;