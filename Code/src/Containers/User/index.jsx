import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import * as Action from '../../Redux/Actions/actions';
import './style.css';
import UserList from '../../Components/UserList/index';

class User extends Component{
    render(){
        console.log(this.props.UserInfo)
        const data = this.props.UserInfo;
        const topic = data.recent_topics;
        const replies = data.recent_replies;
        return(
            <div className="user">
                <div className="UserInfo">
                    <div className="top"><img src={data.avatar_url} alt="" /></div>
                    <div className="username">{data.loginname}</div>
                    <div className="jifen">积分:{data.score}</div>
                    <div className="userTime">{data.create_at}</div>
                </div>
                <div className="topic">
                    <h3>最近创建的话题</h3>
                    {
                        topic
                        ? topic.map((item,index) =>{
                                return <UserList data={item} key={index}/>
                        })
                        : ''
                    }
                </div>
                <div className="replies">
                    <h3>最近回复的话题</h3>
                    {
                        replies
                        ? replies.map((item,index) =>{
                            return <UserList data={item} key={index}/>
                        })
                        : ''
                    }
                </div>
            </div>
            
        )
    }
    
    componentDidMount(){
        const name = this.props.match.params.name
        this.props.UserAction.GET_USERINFO(name)
    }

}


const mapStateToProps = (state) =>{
    return{
        UserInfo: state.UserInfo
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        UserAction: bindActionCreators(Action,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(User)
