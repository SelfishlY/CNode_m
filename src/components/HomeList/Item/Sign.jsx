import React,{Component} from 'react';

class Sign extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <span>
                {/* {
                    this.props.top
                    ? <span className="sign-color">置顶</span>
                    : this.props.tab === 'share'
                    ? <span className="sign-nocolor">分享</span>
                    : this.props.tab === 'ask'
                    ? <span className="sign-nocolor">问答</span>
                    : this.props.tab === 'good'
                    ? <span className="sign-color">精华</span>
                    : ''
                } */}
                {
                    this.props.top
                    ? <span className="sign-color">置顶</span>
                    : this.props.good
                    ? <span className="sign-color">精华</span>
                    : this.props.tab === 'share'
                    ? <span className="sign-nocolor">分享</span>
                    : this.props.tab === 'ask'
                    ? <span className="sign-nocolor">问答</span>
                    : ''
                }
            </span>
        )
    }
}

export default Sign;