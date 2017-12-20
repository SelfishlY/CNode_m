import * as ActionType from '../ActionType/actionType';
import {getHomeList} from '../../Fetch/HomeList/index';


// 加载更多(page+1)
export const MORE_PAGE = (data) =>({
    type: ActionType.MORE_PAGE,
    data:data,
})


// 首页获取文章数据
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
