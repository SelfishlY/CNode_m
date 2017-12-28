import * as ActionType from '../ActionType/actionType';

export default (state={id:false},action) =>{
    switch(action.type){
        case ActionType.POSTED:
            return Object.assign({},state,{
                id:action.data 
            })
        default:
            return state
    }
}