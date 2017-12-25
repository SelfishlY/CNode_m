import React, { Component } from 'react';
import './style.css';

class Collection extends Component {
    render() {
        return (
            <div>
                {
                    this.props.col
                        ? <button className="float-right" >取消收藏</button>
                        : <button className="float-right" onClick={this.props.collect}>收藏</button>
                }
            </div>
        )
    }


}

export default Collection;