import React, { Component } from 'react';
import './style.css';


class CommentItem extends Component {
    constructor(props){
        super(props)
        this.state={
            isdianzan :'',
            zan_len: '',
            ishuifu: false,
            value:''
        }
    }
    render() {
        const replies = this.props.replies;
        const create_at = replies.create_at
        const loginname = replies.author.loginname
        const avatar_url = replies.author.avatar_url
        const content = replies.content
        const id = replies.id
        const ups = replies.ups
        const zan = ups.length
        const userId = this.props.id;
        const is_dianzan = this.props.is_dianzan;
        return (
            <div className="comment-item">
                <div className="clear-fix">
                    <div className="float-left imgbox">
                        <img src={avatar_url} alt="" />
                    </div>
                    <div className="float-left info">
                        <span>{loginname}</span>
                        <span>3天前</span>
                    </div>
                    <div className="float-right icon">
                        <span>
                            {
                                this.state.isdianzan
                                ? <i className="iconfont icon-dianzan1 iscolor" onClick={this.is_dianzan}></i>
                                : <i className="iconfont icon-dianzan1 nscolor" onClick={this.is_dianzan}></i>
                            }
                            {this.state.zan_len}
                        </span>
                        <i className="iconfont icon-huifu2" onClick={this.display_huifu}></i>
                    </div>
                </div>
                <div className="content">
                    <p dangerouslySetInnerHTML={{ __html: content }}></p>
                </div>
                {
                    this.state.ishuifu
                        ? <div className="huifu">
                            <div className="content" contentEditable="true">{this.state.value}</div>
                            <button>回复</button>
                        </div>
                        : ''
                }
            </div>
        )
    }

    /**
     * 用户token与文章的ID
     */
    is_dianzan = () => {
        const accesstoken = localStorage.Accesstoken
        const id = this.props.replies.id
        this.props.DIAN_ZAN({ accesstoken: accesstoken }, id)
        if(this.state.isdianzan){
            this.setState({
                isdianzan: !this.state.isdianzan,
                zan_len: this.state.zan_len-1
            })
        }else{
            this.setState({
                isdianzan: !this.state.isdianzan,
                zan_len: this.state.zan_len+1
            })
        }
        
    }
    componentDidMount(){
        this.setState({
            isdianzan :this.props.replies.is_uped,
            zan_len: this.props.replies.ups.length
        })
    }

    display_huifu = () =>{
        this.setState({
            ishuifu: !this.state.ishuifu,
            value: '@'+this.props.replies.author.loginname
        })
    }
}

export default CommentItem