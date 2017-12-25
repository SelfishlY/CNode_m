import * as ActionsType from '../ActionType/actionType';

let initState = {
    iscollee: false
}

export default (state=initState,action) =>{
    switch (action.type){
        // 获取文章详情
        case ActionsType.GET_ARTICLE:
            return Object.assign({},state,{
                DetaileData: action.data
            })
        // 收藏主题
        case ActionsType.POST_COLLECT:
            return Object.assign({},state,{
                iscollee: true
            })
        default:
            return state
    }
}