import {get} from '../get';

export function getDetailsData(id){
    var result = get('https://cnodejs.org/api/v1/topic/'+id);
    return result
}