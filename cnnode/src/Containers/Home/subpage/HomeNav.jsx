import React,{Component} from 'react';

class HomeNav extends Component{
    render(){
        return(
            <div className="homenav">
                <ul className="clear-fix">
                    <li className="float-left">全部</li>
                    <li className="float-left">精华</li>
                    <li className="float-left">分享</li>
                    <li className="float-left">问答</li>
                    <li className="float-left">招聘</li>
                    <li className="float-left">测试</li>
                </ul>
            </div>
        )
    }
}

export default HomeNav