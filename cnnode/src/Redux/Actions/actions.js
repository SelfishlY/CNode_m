import * as ActionType from '../ActionType/actionType';
import {getHomeList} from '../../Fetch/HomeList/index';


// 加载更多(page+1)
export const MORE_PAGE = (data) =>({
    type: ActionType.MORE_PAGE,
    data
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

// 修改loadmore组件的状态
export const SET_ISLOADMORE = (data) =>{
    return {
        type: ActionType.SET_ISLOADMORE,
        data
    }
}

// 切换文章类型
export const SWITCH_TYPE = (page, tab, limit) =>{
    return async (dispatch) => {
        await getHomeList(page, tab, limit).then((res) => {
            return res.json()
        }).then((resJson) => {
            dispatch({
                type: ActionType.SWITCH_TYPE,
                data: resJson.data,
                tab: tab
            })
        })
    }
} 
