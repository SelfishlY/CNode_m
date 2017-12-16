import * as ActionTypes from '../actiontypes/actiontypes';

let initValue = {};

export default function HasAccesstoken(state=initValue,action){
  switch(action.type){
    case ActionTypes.HASACCESSTOKEN:
      return Object.assign({},action.data)
      // return [action.data,...state]
    default: 
      return state
  }
}
