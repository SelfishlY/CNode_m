import {
	get
} from '../get';

export function getDetailsData(id, accesstoken) {
	var accesstoken = accesstoken || ''
	var result = get('https://cnodejs.org/api/v1/topic/' + id + '?accesstoken=' + accesstoken);
	return result
}