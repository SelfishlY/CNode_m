import * as ActionType from '../ActionType/actionType';
import {
    getHomeList,
    getUserInfo,
    getArticledetails,
    collection,
    nocollection,
    login
} from '../../Fetch/HomeList/index';


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


// 获取用户信息
export const GET_USERINFO = (name) =>{
    return async(dispatch) =>{
        await getUserInfo(name).then((res) =>{
            return res.json()
        }).then((resJson) =>{
            dispatch({
                type: ActionType.GET_USERINFO,
                data:resJson.data
            })
        })
    }
}

// 获取文章详情
export const GET_ARTICLE = (id) => {
    return async (dispatch) => {
        await getArticledetails(id).then((res) => {
            return res.json()
        }).then((resJson) => {
            dispatch({
                type: ActionType.GET_ARTICLE,
                data: resJson.data
            })
        })
    }
}


//收藏
export const POST_COLLECT = (token,id) =>{
    return async (dispatch) =>{
        await collection(token,id).then((res) =>{
            return res.json()
        }).then((resJson) =>{
            dispatch({
                type:ActionType.POST_COLLECT,
                data: resJson.data
            })
        })
    }
}

//取消收藏
export const POST_NOCOLLECT = (token,id) =>{
    return async (dispatch) =>{
        await nocollection(token,id).then((res) =>{
            return res.json()
        }).then((resJson) =>{
            dispatch({
                type:ActionType.POST_NOCOLLECT,
                data: resJson.data
            })
        })
    }
}


// 登录
export const LOGIN = (token) =>{
    return async(dispatch) =>{
        await login(token).then((res) =>{
            return res.json()
        }).then((resJson) =>{
            localStorage.loginname = resJson.loginname
            localStorage.cnodeId = resJson.id
            localStorage.avatar_url = resJson.avatar_url
            dispatch({
                type:ActionType.LOGIN,
                data:resJson
            })
        })
    }
}