import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Action from '../../Redux/Actions/actions';
import DetailsItem from '../../Components/DetailsItem/index'
import Loading from '../../Components/Loading/index';
import Comment from './Comment/index'


class Details extends Component {
    render() {
        const data = this.props.Article.DetaileData
        const iscollect = this.props.Article.iscollect
        return (
            <div>
                {
                    data
                        ? <div>
                            <DetailsItem data={data} iscollect={iscollect} collect={this.collect} nocollect={this.nocollect} />
                            <Comment replies={data.replies}/>
                          </div> 
                        : <Loading/>
                }
            </div>
        )
    }

    componentDidMount(){
        const id = this.props.match.params.id
        const accesstoken = localStorage.Accesstoken || '';
        this.props.ArticleAction.GET_ARTICLE(id,accesstoken)
    }

    // 点击收藏
    collect = () =>{
        const accesstoken = localStorage.Accesstoken
        const id = this.props.Article.DetaileData.id;
        this.props.ArticleAction.POST_COLLECT({ topic_id:id,accesstoken:accesstoken })
    }

    // 取消收藏
    nocollect = () =>{
        const accesstoken = localStorage.Accesstoken
        const id = this.props.Article.DetaileData.id;
        this.props.ArticleAction.POST_NOCOLLECT({ topic_id: id, accesstoken: accesstoken })
    }

}

const mapStateToProps = (state) =>{
    return{
        Article: state.Detailes
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        ArticleAction: bindActionCreators(Action,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Details)