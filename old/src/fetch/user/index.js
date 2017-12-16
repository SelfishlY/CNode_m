import {get} from '../get';

export function getUserInfo(name){
    const result = get('https://cnodejs.org/api/v1/user/' + name)
    return result
}