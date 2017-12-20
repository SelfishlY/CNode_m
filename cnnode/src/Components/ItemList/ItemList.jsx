import React,{Component} from 'react';
import './style.css';


class ItemList extends Component{
    render(){
        const data = this.props.data;
        const userName = data.author.loginname;     //名字
        const avatar_url = data.author.avatar_url;  //头像
        const id = data.id;                         //id
        const content = data.content;               //内容
        const create_at = data.create_at;           //时间
        const good = data.good;                     //是否精华
        const reply_count = data.reply_count;       //评论
        const tab = data.tab;                       //类型
        const title = data.title;                   //标题
        const top = data.top;                       //是否置顶
        const visit_count = data.visit_count;       //评论数
        return(
            <div className="HomeItem">
                <div className="item">
                    <a><img src={avatar_url} alt=""/></a>
                    <span>类型</span>
                    <div className="item-right float-right">
                        <p>{title}</p>
                        <p>
                            <span>100/2000</span>
                            <span>3天前</span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemList;