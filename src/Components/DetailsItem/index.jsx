import React, { Component } from 'react';
import Star from '../../Components/Star/index';
import './style.css';
import Collection from '../Collection/index'


class DetailsCom extends Component {

    render() {
        const data = this.props.data;
        return (
            <div className="detailsCom">
                {/* dangerouslySetInnerHTML: 将标签代码渲染出来 */}
                <div className="details-title">
                    <h2>
                        
                        <Collection iscollect={this.props.iscollect} nocollect={this.props.nocollect} collect={this.props.collect}/>
                    </h2>
                    <div className="data_title">
                        <Star top={data.top} good={data.good} tab={data.tab} />
                        <span>{data.title}</span>
                    </div>
                    <div className="datails-fo">
                        <span>发布于{data.create_at}</span>·
                        <span>作者{data.author.loginname}</span>·
                        <span>{data.visit_count}次浏览</span>·
                    </div>
                </div>
                <div className="hrrr"></div>
                
                <div dangerouslySetInnerHTML={{ __html: data.content }}>

                </div>
                <div className="data_comment">评论一下</div>                    
            </div>
        )
    }


}

export default DetailsCom;