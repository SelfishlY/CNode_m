import React, { Component } from 'react';
import CommentItem from '../../../Components/CommentItem/index'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Action from '../../../Redux/Actions/actions';

class Comment extends Component {
    render() {
        const replies = this.props.replies
        const id = localStorage.cnodeId
        return (
            <div className="comment" style={{'padding':'0 30px'}}>
                {
                    replies.map((item,index) =>{
                        return <CommentItem replies={item} id={id} key={index} DIAN_ZAN={this.props.UserActions.DIAN_ZAN}/>
                    })
                }
                
            </div>
        )
    }

    
    
}

const mapDispatchToProps = (dispatch) =>{
    return{
        UserActions: bindActionCreators(Action,dispatch)
    }
}
export default connect(null,mapDispatchToProps)(Comment)