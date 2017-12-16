import React,{Component} from 'react';
import './style.css';

class HomeNav extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="homenva">
                <span id="all" onClick={this.listModfy}>全部</span>
                <span id="good" onClick={this.listModfy}>精华</span>
                <span id="share" onClick={this.listModfy}>分享</span>
                <span id="ask" onClick={this.listModfy}>问答</span>
                <span id="job" onClick={this.listModfy}>招聘</span>
                <span id="dev" onClick={this.listModfy}>客户端测试</span>
            </div>
        )
    }
    listModfy = (e) =>{
        const modifyTab = this.props.modifyTab;
        const tab = e.target.id;
        modifyTab(tab);
    }

}

export default HomeNav;