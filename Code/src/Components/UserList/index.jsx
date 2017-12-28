import React,{Component} from 'react';
import './style.css'
import {Link} from 'react-router-dom';

class UserList extends Component{
    render(){
        const data = this.props.data;
        console.log(data)
        return(
            <div className="UserList">
                <Link to={"/user/" + data.author.loginname} className="userlist-img"><img src={data.author.avatar_url} alt=""/></Link>
                <Link to={"/details/"+data.id} className="userlist-title">{data.title}</Link>
            </div>
        )
    }
}

export default UserList;