import MYResquest from "../request/index"

export function getCityAll(){
  return MYResquest.get({
    url:"/city/all"
  })
}