import request from '@/utils/require.js'
const host = '/api'
if (process.env.NODE_ENV === "production") {
  host = window.origin
}

// 发现音乐navbar
export function DiscoverMusicNavbarApi() {
  return request({
    url: `${host}/homepage/dragon/ball`,
    method: 'get'
})
}
// 推荐歌单
export function getEveryDaySongSheetApi(data) {
  return request({
      url: `${host}/personalized?limit=`+ data,
      method: 'get'
  })
}

// 歌单分类
export function getSongSheetCategoryApi() {
  return request({
      url: `${host}/playlist/catlist`,
      method: 'get'
  })
}

// 热门歌单分类 
export function getSongSheetHotCategoryApi() {
  return request({
      url: `${host}/playlist/hot`,
      method: 'get'
  })
}


// 精品歌单
export function getSongSheetBoutiqueApi(data) {
  return request({
      url: `${host}/top/playlist`,
      method: 'get',
      params: data
  })
}
