import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Action from '../../Redux/Actions/actions';
import DetailsItem from '../../Components/DetailsItem/index'
import Loading from '../../Components/Loading/index';


class Details extends Component {
    render() {
        const data = this.props.Article.DetaileData
        return (
            <div>
                {
                    data
                        ? <DetailsItem data={data} collect={this.collect}/>
                        : <Loading/>
                }
            </div>
        )
    }

    componentDidMount(){
        console.log(this.props.ArticleAction)
        const id = this.props.match.params.id
        this.props.ArticleAction.GET_ARTICLE(id)
    }

    collect = () =>{
        const token = '240455cf-2881-4333-b823-0c1a99b8d55d';
        const id = this.props.Article.DetaileData.id;
        this.props.ArticleAction.POST_COLLECT(token,id)
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