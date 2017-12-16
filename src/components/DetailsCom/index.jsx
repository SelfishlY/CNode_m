import React,{Component} from 'react';
import Sign from '../../components/HomeList/Item/Sign';
import './style.css';
import Comment from '../Comment/index';
import moment from 'moment';
import Collection from '../Collection/index';
import { collection } from '../../fetch/collection/index';
import { nocollection } from '../../fetch/collection/index';

class DetailsCom extends Component{
    constructor(props){
        super(props);
        this.state={
            time: '',
            is_collect: false
        }
    }

    render(){
        console.log(this.props.data)
        const data = this.props.data;
        return(
            <div className="detailsCom">
                {/* dangerouslySetInnerHTML: 将标签代码渲染出来 */}
                <div className="details-title">
                    <h2>
                        <Sign tab={data.tab} top={data.top} good={data.good} />{data.title}
                    </h2>
                    <div>
                        <span>发布于{this.state.time}</span>·
                        <span>作者{data.author.loginname}</span>·
                        <span>{data.visit_count}次浏览</span>·
                        {/* <span>最后一次编辑是4天前</span>·
                        <span>来自分享</span> */}
                    </div>
                    <div className="clear-fix">
                        <Collection collect={this.state.is_collect} collection={this.collection} delcollection={this.delcollection}/>
                    </div>
                </div>
                <div className="hrrr"></div>
                <div dangerouslySetInnerHTML={{__html: data.content}}>

                </div>
                <Comment comment={data.replies} name={data.author.loginname}/>
            </div>
        )
    }

    componentDidMount(){
        const now = new Date(this.props.data.create_at);
        const time = moment(now).fromNow();
        this.setState({
            time: time,
            is_collect: this.props.data.is_collect
        })
    }

    // 收藏
    collection = () => {

        const topic_id = this.props.data.id;
        const accesstoken = localStorage.accesstoken;
        var result = collection({ topic_id: topic_id, accesstoken: accesstoken });
        result.then((res) =>{
            return res.json()
        }).then((resJson) =>{
            if(resJson.success){
                this.setState({
                    is_collect:true
                })
            }
        })
    }

    // 取消收藏
    delcollection = () => {
        const topic_id = this.props.data.id;
        const accesstoken = localStorage.accesstoken;
        var result = nocollection({ topic_id: topic_id, accesstoken: accesstoken });
        result.then((res) => {
            return res.json()
        }).then((resJson) => {
            console.log(resJson)
            if (resJson.success) {
                this.setState({
                    is_collect: false
                })
            }
        })
    }

}

export default DetailsCom;