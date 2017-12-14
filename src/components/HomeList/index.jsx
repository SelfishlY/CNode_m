import React,{Component} from 'react';
import HomeListItem from './Item/index';
import './style.css';

class HomeList extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const data = this.props.data;
        return(
            <div className="homeBox">
                {
                    data.map((item,index) =>{
                        return <HomeListItem data={item} key={index}/>
                    })
                }
            </div>
        )
    }
}

export default HomeList;