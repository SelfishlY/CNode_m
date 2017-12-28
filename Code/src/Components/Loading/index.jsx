import React, { Component } from 'react';
import './style.css';

class Loading extends Component {
    render() {
        return (
            <div className="loader-inner ball-clip-rotate">
                <div></div>
            </div>
        )
    }
}

export default Loading;