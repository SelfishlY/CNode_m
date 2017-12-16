import React,{Component} from 'react';
import './style.css';

class Collection extends Component{
    render(){
        return(
            <div>
                {
                    this.props.collect
                        ? <button className="float-right" onClick={this.props.delcollection}>取消收藏</button>
                        : <button className="float-right" onClick={this.props.collection}>收藏</button>
                }
            </div>
        )
    }


}

export default Collection;