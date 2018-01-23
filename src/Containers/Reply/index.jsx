import React, { Component } from 'react';
import './style.css';
import * as Actions from '../../Redux/Actions/actions'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';


class Reply extends Component {
    render() {
        console.log(this.props.RepltData.Reply)
        return (
            <div className="Reply">
            {
                    this.props.RepltData.Reply.reply_id 
                        ? <span className="succ" onClick={this.shua}>回复成功,点我手动刷新o(╥﹏╥)o....</span>
                    : <div>
                        <div className="reply-title">回复</div>
                        <div className="reply-box" contentEditable="true" ref="replybox">

                        </div>
                        <button onClick={this.onclickHeadle}>回复</button>
                    </div>
            }
            </div>
        )
    }
    onclickHeadle = () =>{
        const accesstoken = localStorage.accesstoken
        const content = this.refs.replybox.innerHTML;
        const topic_id = this.props.data.id
        this.props.ReplyAction.POST_REPLY({ accesstoken: accesstoken, content: content }, topic_id)
    }

    // 手动刷新~~~~~(尴尬)
    shua = () =>{
        window.location.reload()
    }
    
}
const mapStateToProps = (state) =>{
    return {
        RepltData: state
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        ReplyAction: bindActionCreators(Actions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Reply)

// function refresh(){
//     location.reload();
// }