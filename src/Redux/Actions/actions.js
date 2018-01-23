import * as ActionType from '../ActionType/actionType';
import {
    getHomeList,
    getUserInfo,
    getDetailsData,
    collection,
    nocollection,
    login,
    zan,
    posted,
    reply
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
export const GET_ARTICLE = (id,accesstoken) => {
    return async (dispatch) => {
        await getDetailsData(id,accesstoken).then((res) => {
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
export const POST_COLLECT = (id,accesstoken) =>{
    return async (dispatch) =>{
        await collection(id,accesstoken).then((res) =>{
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
export const POST_NOCOLLECT = (id,accesstoken) =>{
    return async (dispatch) =>{
        await nocollection(id,accesstoken).then((res) =>{
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

// 用户退出
export const USER_EXIT = (data) =>{
    localStorage.clear()
    window.location.reload() 
    return{
        type:ActionType.USER_EXIT,
        data
    }
}

// 点赞与取消点赞

export const DIAN_ZAN = (accesstoken,id) =>{
    return async (dispatch) =>{
        await zan(accesstoken,id).then((res) =>{
            return res.json()
        }).then((resJson) =>{
            dispatch({
                type:ActionType.DIAN_ZAN,
                data:resJson.action
            })
        })
    }
}

// 发表文章
export const POSTED = (paramsObj) =>{
    return async (dispatch) =>{
        await posted(paramsObj).then((res) =>{
            return res.json()
        }).then((resJson) =>{
            dispatch({
                type:ActionType.POSTED,
                data: resJson.topic_id
            })
        })
    }
}

// 文章评论
export const POST_REPLY = (paramsObj,id) =>{
    return async (dispatch) =>{
        await reply(paramsObj,id).then((res) =>{
            return res.json()
        }).then((resJson) =>{
            console.log(resJson)
            dispatch({
                type:ActionType.POST_REPLY,
                data: resJson
            })
        })
    }
}