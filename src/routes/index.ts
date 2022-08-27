import { createRouter, createWebHashHistory } from "vue-router"
const routes = [
    {
        path: '/index',
        meta: { title: '首页' },
        component: () => import('@/views/index/Index.vue'),
        redirect: '/index/indexRecommend',
        children: [
          {
            path: 'indexRecommend',
            meta: { title: '首页_个性推荐' },
            component: () => import('@/views/index/IndexRecommend.vue')
          },
          {
            path: 'indexcustomize',
            meta: { title: '首页_专属订制' },
            component: () => import('@/views/index/Indexcustomize.vue')
          },
          {
            path: 'indexSheet',
            meta: { title: '首页_歌单' },
            component: () => import('@/views/index/IndexSheet.vue')
          },
          {
            path: 'indexRankList',
            meta: { title: '首页_排行榜' },
            component: () => import('@/views/index/IndexRankList.vue')
          }
        ]
    }
  ]
  
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  export default router