export function get(url){
  var result = fetch(url,{
    headers: {
      'Accept': 'application/json, text/plain, */*'
    }
  });
  return result;
}