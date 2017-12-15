import React, { Component } from 'react';
import { getDetailsData} from '../../fetch/details/index';
import Loading from '../../components/Loading/index';
import DetailsCom from '../../components/DetailsCom/index';

class Details extends Component {

    constructor(props){
        super(props)
        this.state = {
            data:false
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.data
                    ? <DetailsCom data={this.state.data}/>
                    : <Loading/>
                }
            </div>
        )
    }

    componentDidMount(){
        const id = this.props.match.params.id
        const result =  getDetailsData(id);
        result.then((res) =>{
            return res.json()
        }).then((resJson) =>{
            this.setState({
                data:resJson.data
            })
        })
    }

}

export default Details;