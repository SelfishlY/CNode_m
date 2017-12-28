import React,{Component} from 'react';
import './style.css';

class Star extends Component{
    render(){
        return(
            <span className="HomeIcon">
                {
                    this.props.top
                        ? <i className="iconfont icon-zhiding1 zhiding"></i>
                    : this.props.good
                            ? <i className="iconfont icon-jinghua jinghua"></i>
                    : this.props.tab === 'share'
                    ? <i className="iconfont icon-icon-share fenxiang"></i>
                    : this.props.tab === 'ask'
                    ? <i className="iconfont icon-wenda ask"></i>
                    : this.props.tab === 'job'
                    ? <i className="iconfont icon-zhaopin job"></i>
                    : this.props.tab === 'dev'
                    ? <i className="iconfont icon-ceshi dev"></i>
                    : ''
                }
            </span>
            // <span><i className="iconfont icon-jinghua"></i></span>
            
        )
    }
}

export default Star;