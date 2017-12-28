import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../Redux/Actions/actions'
import { bindActionCreators } from 'redux';
import './style.css';
import {Link} from 'react-router-dom';


class Posted extends Component {
    render() {
        console.log(this.props.PostedData.Posted.id)
        const id = this.props.PostedData.Posted.id;
        return (
            <div className="posted">
                {
                    this.props.PostedData.Posted.id
                        ? <div className="success"><Link to={"/details/:"+id}>发表成功,点击跳转到文章页面</Link></div>
                    : <div>
                        <h2>标题:</h2>
                        <input className="content_title" onChange={this.titleClick} ref="title" />
                        <h2>选择文章类型:</h2>
                        <select name="" id="" value="类型" ref="select">
                            <option value="dev">dev</option>
                            <option value="dev">dev</option>
                            <option value="dev">dev</option>
                        </select>
                        <h2>输入文章内容:</h2>
                        <div className="content_box" contentEditable="true" ref="content_box"></div>
                        <button onClick={this.clickHeadle}>发布</button>
                    </div>
                }
            </div>
        )
    }

    clickHeadle = (e) =>{
        const accesstoken = localStorage.Accesstoken
        const title = this.refs.title.value
        const content = this.refs.content_box.innerHTML
        const tab = this.refs.select.value
        this.props.UserAction.POSTED({
            accesstoken: accesstoken,
            title: title,
            tab: 'dev',
            content: content
        })
    }

    componentDidMount(){

    }

}

const mapStateToProps = (state) =>{
    return {
        PostedData: state
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        UserAction: bindActionCreators(Actions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Posted)