import React,{Component} from 'react';


class ItemList extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <div>
                {this.props.data.title}
            </div>
        )
    }
}

export default ItemList;