import * as ActionType from '../ActionType/actionType';

var initState = {
    page: '1',
    tab: 'all',
    limit: '5',
    HomeData: []
}
let page =1;
export default (state=initState,action) =>{
    switch(action.type){
        case ActionType.HAS_HOMEDATA:
            return Object.assign(state,{HomeData:state.HomeData.concat(action.data)})
        case ActionType.SET_STATE:
            return Object.assign(state,{page:page++})
        default:
            return state
    }
}