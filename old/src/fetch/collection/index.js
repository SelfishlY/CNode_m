import {post} from '../post';

export function collection(paramsObj){
    const result = post('https://cnodejs.org/api/v1/topic_collect/collect', paramsObj);
    return result
}

export function nocollection(paramsObj){
    const result = post('https://cnodejs.org/api/v1/topic_collect/de_collect', paramsObj);
    return result
}