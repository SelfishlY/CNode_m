import * as ActionType from '../ActionType/actionType';

export default (state = {},action) =>{
    switch (action.type){
        case ActionType.LOGIN:
            return Object.assign({},state,{
                ...action.data
            })
        default:
            return state
    }
}