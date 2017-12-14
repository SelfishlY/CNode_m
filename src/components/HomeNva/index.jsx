import React,{Component} from 'react';

class HomeNav extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <a href="">全部</a>
                <a href="">精华</a>
                <a href="">分享</a>
                <a href="">招聘</a>
            </div>
        )
    }
}

export default HomeNav;