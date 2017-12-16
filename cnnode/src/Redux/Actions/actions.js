import * as ActionType from '../ActionType/actionType';
let nextTodoId = 0;


export const Set_State = (data) =>({
    type: ActionType.SET_STATE,
    data:data,
})

export const Has_Data = (data) =>({
    type:ActionType.HAS_HOMEDATA,
    data:data
})
