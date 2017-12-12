import * as ActionTypes from '../actiontypes/actiontypes';

export function updata(data){
  return{
    type: ActionTypes.HASACCESSTOKEN,
    data
  }
}