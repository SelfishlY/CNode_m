import React,{Component} from 'react';
import './style.css';

class LoadMore extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="loadmore">
                {
                    this.props.isloadmore
                        ? <button onClick={this.props.hasLoadMore}>加载更多</button>
                        : <button>加载中</button>
                }
            </div>
        )
    }

    // componentDidMount(){

    //     window.addEventListener('scoll', () =>{
    //         console.log(223213)
    //     },false)

    //     console.log(!this.props.isloadmore)
    // }
}

export default LoadMore;