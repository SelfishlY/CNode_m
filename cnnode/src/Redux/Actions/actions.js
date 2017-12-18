import * as ActionType from '../ActionType/actionType';
import {getHomeList} from '../../Fetch/HomeList/index';


export const Set_State = (data) =>({
    type: ActionType.SET_STATE,
    data:data,
})


export const Has_Data = (page,tab,limit) =>{
    return async (dispatch) =>{
        await getHomeList(page, tab, limit).then((res) => {
            return res.json()
        }).then((resJson) => {
            dispatch({
                type: ActionType.HAS_HOMEDATA,
                data: resJson.data
            })
        })
    }

}
