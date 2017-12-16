import {post} from '../post';

// 判断用户输入的accesstoken是否正确
export function postAccessToken(paramsObj){
  const result = post('https://cnodejs.org/api/v1/accesstoken',paramsObj);
  return result
}