import React,{Component} from 'react';


class User extends Component{
    render(){
        return(
            <div>
                User名字::: {this.props.match.params.name}
            </div>
        )
    }
}

export default User