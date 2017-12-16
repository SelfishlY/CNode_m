import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import './style.css';

class CommentItem extends Component{

    constructor(props){
        super(props);
        this.state = {
            time: ''
        }
    }

    render(){
        const data = this.props.data;
        const lou = this.props.lou
        return(
            <div className="commentItem">
                <div className="commentItem-title">
                    <Link to={'/user/' + data.author.loginname} className="comment-title">
                        <img src={data.author.avatar_url} alt=""/>
                    </Link>
                    <div className="userInfo">
                        <span>{data.author.loginname}</span>
                        <span>{this.state.time}</span>
                        <span>{lou + 1 + '楼'}</span>
                        <span className="zan">{data.ups.length}个赞</span>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        var now = new Date(this.props.data.create_at);
        var time = moment(now).fromNow()
        this.setState({
            time: time
        })
    }
}

export default CommentItem;