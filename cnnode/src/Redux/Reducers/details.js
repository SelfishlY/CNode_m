import * as ActionsType from '../ActionType/actionType';

export default (state={},action) =>{
    switch (action.type){
        // 获取文章详情
        case ActionsType.GET_ARTICLE:
            return Object.assign({},state,{
                DetaileData: action.data,
                iscollect: action.data.is_collect
            })
        // 收藏主题
        case ActionsType.POST_COLLECT:
            return Object.assign({},state,{
                iscollect: true
            })
        // 取消收藏
        case ActionsType.POST_NOCOLLECT:
            return Object.assign({},state,{
                iscollect:false
            })
        default:
            return state
    }
}