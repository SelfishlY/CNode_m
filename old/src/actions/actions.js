import * as ActionTypes from '../actiontypes/actiontypes';

export const updata = (data) =>({
    type: ActionTypes.HASACCESSTOKEN,
    data
})

export function add_list(data){
  return{
    type: ActionTypes.HAVEHOMELIST,
    data: data
  }
}
