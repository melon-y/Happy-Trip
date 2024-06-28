import MYRequest from '../request/index'
export function getHomeHotSuggests(){
  return MYRequest.get({
    url:"/home/hotSuggests"
  })
}