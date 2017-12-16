import React,{Component} from 'react';
import CommentItem from '../Comment/Item/index';

class Comment extends Component{
    render(){
        const comment = this.props.comment;
        return(
            <div>
                {
                    comment.map((item,index) =>{
                        return <CommentItem data={item} key={index} lou={index}/>
                    })
                }
            </div>
        )
    }


}

export default Comment;