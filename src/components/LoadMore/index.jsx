import React,{Component} from 'react';
import './style.css';
import Loading from '../Loading/index';

class LoadMore extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="loadmore" ref="wrapper">
                {
                    this.props.isloadmore
                    ? <span></span>
                    : <Loading/>
                }
            </div>
        )
    }

    componentDidMount(){
        //下拉列表加载更多
        const hasLoadMore = this.props.hasLoadMore;
        const wrapper = this.refs.wrapper;
        let timeoutId;  //节流阀
        function callback(){
            const top = wrapper.getBoundingClientRect().top;
            const windowHeight = window.screen.height;
            if(top && top < windowHeight){
                hasLoadMore();
            }
        }
        

        window.addEventListener('scroll', () =>{
            if(!this.props.isloadmore){
                return
            }
            if(timeoutId){
                clearTimeout(timeoutId);
            }
            timeoutId=setTimeout(callback,50);
        },false)
    }
}

export default LoadMore;