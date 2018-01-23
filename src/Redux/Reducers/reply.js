import * as ActionsType from '../ActionType/actionType';

export default (state ={},action) =>{
    switch(action.type){
        case ActionsType.POST_REPLY:
            return Object.assign({},...state,action.data)
        default:
            return state
    }
}