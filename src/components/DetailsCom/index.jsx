import React,{Component} from 'react';
import Sign from '../../components/HomeList/Item/Sign';
import './style.css';

class DetailsCom extends Component{
    constructor(props){
        super(props);
        this.state={
            time: ''
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
                        <span>发布于12天前</span>·
                        <span>作者 v5sollee</span>·
                        <span>3000次浏览</span>

                    </div>
                </div>
                <div dangerouslySetInnerHTML={{__html: data.content}}>

                </div>
            </div>
        )
    }

    componentDidMount(){
        const now = this.props.last_reply_at;
    }

}

export default DetailsCom;