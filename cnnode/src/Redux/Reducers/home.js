import * as ActionType from '../ActionType/actionType';

var initState = {
    page: 1,
    tab: 'all',
    limit: 15,
    isLoadmore: false,    
    HomeData:[]
}

export default (state = initState, action) => {
    switch (action.type) {
        // 获取数据
        case ActionType.HAS_HOMEDATA:
            return Object.assign({},state, {
                HomeData: state.HomeData.concat(action.data)
            })
        // 加载更多
        case ActionType.MORE_PAGE:
        console.log(state)
            return Object.assign({},state, {
                page: state.page+=1 ,
            })
        // 修改loading组件状态
        case ActionType.SET_ISLOADMORE:
            return Object.assign({},state,{
                isLoadmore: !state.isLoadmore
            })
        case ActionType.SWITCH_TYPE:
            return Object.assign({},state,{
                HomeData: action.data,
                tab: action.tab
            })
        default:
            return state
    }  
}