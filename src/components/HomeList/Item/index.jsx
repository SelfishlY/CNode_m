import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import moment from 'moment';
import Sign from './Sign';

class HomeListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: ''
        }
    }

    render() {
        const data = this.props.data;
        console.log(data)
        return (
            <div className="homelist">
                <Link to="/about" className="clear-fix">
                    <div className="homelist-img float-left">
                        <img src={data.author.avatar_url} alt=""/>
                    </div>
                </Link>
                <Link to="/about" className="homelist-title">
                    <Sign tab={data.tab} top={data.top}/>
                    <span>{data.title}</span>
                    <div className="list-count">
                        <span>{data.reply_count}/</span>
                        <span>{data.visit_count}</span>
                    </div>
                </Link>
                <span className="homelist-time">{this.state.time}</span>
            </div>
        )
    }

    componentDidMount(){
        const now = new Date(this.props.data.last_reply_at);
        const time = moment(now).fromNow();
        this.setState({
            time: time
        })
    }
}

export default HomeListItem;