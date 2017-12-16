import * as ActionTypes from '../actiontypes/actiontypes';

let initValue = {};

export default (state =[], action) => {
    switch (action.type) {
        case ActionTypes.HAVEHOMELIST:
            return Object.assign(action.data,...state)
            // return [
            //     {
            //         data: action.data
            //     }
            //     ,...state
            // ]
        default:
            return state
    }
}
