import React,{Component} from 'react';
import Loading from '../Loading/index';
class Loadmore extends Component{
    render(){
        return(
            <div className="" ref="loadmore">
                {
                    this.props.isLoadmore
                    ? ''
                    : <Loading />
                }
                
            </div>
        )
    }

    componentDidMount(){
        const hasMore = this.props.onclickHandle
        let timeoutId; //节流阀
        const loadmoreBox = this.refs.loadmore;
        function callback (){
            const top = loadmoreBox.getBoundingClientRect().top;
            const windowHeight = window.screen.height;
            if(top && top < windowHeight*2){
                hasMore()
            }
        }

        window.addEventListener('scroll',()=>{
            if(this.props.isLoadmore){
                return
            }  
            if(timeoutId){
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(callback,100)
        },false)
    }

}


export default Loadmore;