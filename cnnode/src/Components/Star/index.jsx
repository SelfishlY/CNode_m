import React,{Component} from 'react';
import './style.css';

class Star extends Component{
    render(){
        return(
            <span className="HomeIcon">
                {
                    this.props.top
                    ? <i className="iconfont icon-zhiding isColor"></i>
                    : this.props.good
                    ? <i className="iconfont icon-jinghua noColor"></i>
                    : this.props.tab === 'share'
                    ? <i className="iconfont icon-icon-share noColor"></i>
                    : this.props.tab === 'ask'
                    ? <i className="iconfont icon-wenda noColor"></i>
                    : ''
                }
            </span>
            // <span><i className="iconfont icon-jinghua"></i></span>
            
        )
    }
}

export default Star;