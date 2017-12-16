import React,{Component} from 'react';
import {connect} from 'react-redux';

class HomeList extends Component{
    render(){
        console.log(this.props.data.Home.HomeData)
        return(
            <div>
                HomeList
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        data: state
    }
}

export default connect(mapStateToProps,null)(HomeList)
// export default HomeList;