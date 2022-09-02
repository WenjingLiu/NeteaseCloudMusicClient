import { createRouter, createWebHashHistory } from "vue-router"
const routes = [
    {
        path: '/index',
        name: 'Index',
        meta: { title: '首页' },
        component: () => import('@/views/index/Index.vue'),
        redirect: '/index/indexRecommend',
        children: [
          {
            path: 'indexRecommend',
            name: 'IndexRecommend',
            meta: { title: '首页_个性推荐' },
            component: () => import('@/views/index/IndexRecommend.vue')
          },
          {
            path: 'indexcustomize',
            name: 'Indexcustomize',
            meta: { title: '首页_专属订制' },
            component: () => import('@/views/index/Indexcustomize.vue')
          },
          {
            path: 'indexSheet',
            name: 'IndexSheet',
            meta: { title: '首页_歌单' },
            component: () => import('@/views/index/IndexSheet.vue'),
          },
          {
            path: 'indexboutiqueSheet',
            name: 'IndexboutiqueSheet',
            meta: { title: '首页_精选歌单' },
            component: () => import('@/views/index/IndexboutiqueSheet.vue'),
          },
          {
            path: 'indexRankList',
            name: 'IndexRankList',
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