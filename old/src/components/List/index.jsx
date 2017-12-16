import React, { Component } from 'react';
import './style.css';
import moment from 'moment';
import {Link} from 'react-router-dom';

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            time: ''
        }
    }
    render() {
        const userdata = this.props.userdata;
        return (
            <div className="clear-fix list">
                <Link to={"/user/" + userdata.author.loginname}>
                    <div className="float-left"><img src={userdata.author.avatar_url} alt="" /></div>
                </Link>
                <Link to={"/details/" + userdata.id} id={userdata.id} className="title">{userdata.title}</Link>
                <div className="time">{this.state.time}</div>
            </div>
        )
    }

    componentDidMount(){
        var time = new Date(this.props.userdata.last_reply_at);
        var now = moment(time).startOf('day').fromNow()
        this.setState({
            time: now
        })
    }

}

export default List;