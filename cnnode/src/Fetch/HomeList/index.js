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

export function getArticledetails(id){
    var result = get('https://cnodejs.org/api/v1/topic/'+id);
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