<script setup>
import Header from '@/layouts/Header.vue'
import Sidebar from '@/layouts/Sidebar.vue'
import Footer from '@/layouts/Footer.vue'
</script>
<template>
    <div class="app-wrapper">
        <Header />
        <div class="app-content">
            <Sidebar />
            <div class="app-main">
                <router-view></router-view>
            </div>
        </div>
        <Footer />
    </div>
</template>
<style scoped lang="scss">
.app-wrapper{
    width: 100%;
    height: 100%;
    .app-content {
        height: calc(100vh - 140px);
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        .app-main {
            width: calc(100% - 210px);
            height: 100%;
            overflow: hidden;
        }
    }
}
</style>