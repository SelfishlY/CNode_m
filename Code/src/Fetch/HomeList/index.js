import {get} from '../get';
import {post} from '../post';

export function getHomeList(page,tab,limit){
    var result = get('https://cnodejs.org/api/v1/topics?page='+page+'&tab='+tab+'&limit='+limit+'&mdrender=true' );
    return result;
}

export function getUserInfo(name){
    var result = get('https://cnodejs.org/api/v1/user/'+name);
    return result
}

export function getDetailsData(id, accesstoken) {
    var accesstoken = accesstoken || ''
    var result = get('https://cnodejs.org/api/v1/topic/' + id + '?accesstoken=' + accesstoken);
    return result
}

export function collection(paramsObj) {
    const result = post('https://cnodejs.org/api/v1/topic_collect/collect', paramsObj);
    return result
}

export function nocollection(paramsObj) {
    const result = post('https://cnodejs.org/api/v1/topic_collect/de_collect', paramsObj);
    return result
}

export function login(token) {
    const result = post('https://cnodejs.org/api/v1/accesstoken', token);
    return result
}
export function zan(paramsObj,id) {
    const result = post('https://cnodejs.org/api/v1/reply/' + id + '/ups', paramsObj);
    return result
}
export function posted(paramsObj) {
    const result = post('https://cnodejs.org/api/v1/topics', paramsObj);
    return result
}
export function reply(paramsObj, topic_id) {
    const result = post('https://cnodejs.org/api/v1/topic/' +topic_id+'/replies', paramsObj);
    return result
}