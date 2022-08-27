<script setup>
import Navbar from '@/components/Navbar.vue'
const list = [{
    id: 1, title: '个性推荐', path: '/index/indexRecommend'
},{
    id: 2, title: '专属订制', path: '/index/indexcustomize'
},{
    id: 3, title: '歌单', path: '/index/indexSheet'
},{
    id: 4, title: '排行榜', path: '/index/indexRankList'
}]
</script>
<template>
    <div class="index scrollBar">
        <div class="index-navbar">
            <Navbar :list="list" sortTitle="title" />
        </div>
        <div class="index-main">
            <router-view></router-view>
        </div>
       
    </div>
</template>
<style scoped lang="scss">
.index {
    padding: 0 20px;
    width: calc(100% - 40px);
    height: 100%;
    overflow: auto;
    .index-navbar {
        padding: 20px 0 5px;
    }
}

</style>
