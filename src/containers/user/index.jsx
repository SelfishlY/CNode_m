import React, { Component } from 'react';
import {getUserInfo} from '../../fetch/user/index';
import UserInfo from '../../components/UserInfo/index';


class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: false
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.data
                    ? <UserInfo data={this.state.data} />
                    : ''
                }
                
            </div>
        )
    }

    componentDidMount(){
        const name = this.props.match.params.name;
        var result = getUserInfo(name);
        result.then((res) =>{
            return res.json()
        }).then((resJson) =>{
            this.setState({
                data: resJson
            })
        })
    }
}

export default User;