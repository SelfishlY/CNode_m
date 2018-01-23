import React,{Component} from 'react';

class HomeNav extends Component{
    render(){
        const switchType = this.props.switchType;
        return(
            <div className="homenav">
                <ul className="clear-fix">
                    <li className="float-left" onClick={switchType} id="all">全部</li>
                    <li className="float-left" onClick={switchType} id="good">精华</li>
                    <li className="float-left" onClick={switchType} id="share">分享</li>
                    <li className="float-left" onClick={switchType} id="ask">问答</li>
                    <li className="float-left" onClick={switchType} id="job">招聘</li>
                    <li className="float-left" onClick={switchType} id="dev">测试</li>
                </ul>
            </div>
        )
    }
}

export default HomeNav