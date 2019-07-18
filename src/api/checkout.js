import request from '@/utils/request'

// 查看收银台是否在线
// export function checkOnline() {
//   return request({
//     url: '/isOnline',
//     method: 'get'
//   })
// } 

// 登录到收银台
// export function online(payload) {
//   return request({
//     url: '/login',
//     method: 'post',
//     data: payload
//   })
// }

export function online() {
    return request({
      url: '/product/details.php?lid=1',
      method: 'get',
    })
  }