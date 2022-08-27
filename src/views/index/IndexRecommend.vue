<template>
  <div class="recommend">
    <swiper
      class="recommend-swiper"
      :modules="modules "
      :loop="true"
      :autoplay="{
        delay: 2000,
        stopOnLastSlide: true
      }"
      effect="coverflow"
      :slides-per-view="2"
      :centeredSlides="true"
      :initialSide="1"
      :coverflowEffect="{
        rotate: 0,
        stretch: 10,
        depth: 100,
        modifier: 2,
        slideShadows: false
      }"
      :navigation="{
        nextEl: '.next', //前进后退按钮
        prevEl: '.prev',
      }"
    >
      <div class="next"> > </div>
      <div class="prev"> prev </div>
      <swiper-slide><img src="http://juzeng.oss-cn-shanghai.aliyuncs.com/shouban/prod/v1/imgs/2934e37321904b7d8b9452c6a5d72c5a.jpg?x-oss-process=image/format,jpg" alt=""></swiper-slide>
      <swiper-slide><img src="http://juzeng.oss-cn-shanghai.aliyuncs.com/shouban/prod/v1/imgs/a5770e60abe8453b801536ff441d7179.jpg?x-oss-process=image/format,jpg" alt=""></swiper-slide>
      <swiper-slide><img src="http://juzeng.oss-cn-shanghai.aliyuncs.com/shouban/prod/v1/imgs/710b42f330aa46d0b11cc10cf23280f5.jpg?x-oss-process=image/format,jpg" alt=""></swiper-slide>
      
    </swiper>
    <title-item
      class="recommend-title"
      title="推荐歌单"
      :isRightArrow="true"
    ></title-item>
    <div class="song-sheet-list">
      <song-sheet-item
        v-for="item in songSheetList"
        :key="item.id"
        :item="item"
      ></song-sheet-item>
    </div>
  </div>
</template>
<script setup>
import { getEveryDaySongSheetApi } from '@/api/index'
import titleItem from "@/components/titleItem.vue";
import SongSheetItem from "@/components/SongSheetItem.vue";
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper'
import 'swiper/scss';
import 'swiper/scss/navigation';
// import "swiper/scss/hash-navigation"


const modules = [Navigation, Pagination,  EffectCoverflow, Autoplay]
const songSheetList = ref([])
getEveryDaySongSheetApi(10).then(res => {
    songSheetList.value = res.data.result
})
// console.log(songSheetList)
</script>
<style scoped lang="scss">
.recommend {
  width: 100%;
  &-swiper {
    width: 100%;
    height: 200px;
    position: relative;
    .swiper-slide {
      // background: rgb(216, 206, 206);
    }
    img {
      width: 100%;
      height: 180px;
      // object-fit: contain;
    }
    .next, .prev {
      position: absolute;
      top: 50%;
      width: 34px;
      height: 34px;
      margin-top: -17px;
      border-radius: 50%;
      color: #f00;
      background: rgba(83, 82, 82, 0.4);
      text-align: center;
      line-height: 34px;
      z-index: 1;
    }
    .next {
      right: 10px;
    }
    .prev {
      left: 10px;
    }
  }
  &-title {
    margin-bottom: 15px;
  }
  .song-sheet-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: 25px;
    grid-column-gap: 15px;
  }
}
</style>
