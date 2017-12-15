import {get} from '../get';

export function getHomeList(page,tab,limit,mdrender){
    var result = get('https://cnodejs.org/api/v1/topics?page='+page+'&tab='+tab+'&limit='+limit+'&mdrender=true' );
    return result;
}