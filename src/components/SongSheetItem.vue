<script setup>
import { reactive, computed } from "vue";
import ImgText from "@/components/ImgText.vue";
import { numberChangeWanApi } from'@/js/count.js'
const props = defineProps({
  item: Object,
});
</script>
<template>
  <div class="song-sheet-item">
    <img-text :img="item.picUrl" :text="item.name" :textRow="2"></img-text>
    <span class="song-sheet-item__number">{{ numberChangeWanApi(item.playCount)}}万</span>
    <p class="song-sheet-item__play-icon">></p>
    <img v-if="item.isWyyIcon" class="song-sheet-item__wyi-icon" src="https://img1.baidu.com/it/u=1013272199,2429096515&fm=253&fmt=auto&app=138&f=PNG?w=176&h=175" alt="">
  </div>
</template>
<style scoped lang="scss">
.song-sheet-item {
  border-radius: 2px;
  position: relative;
  &__number {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: $font12;
    color: $colorF;
  }
  &__play-icon {
    position: absolute;
    bottom: 55px;
    right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #fff;
    color: #f00;
    text-align: center;
    line-height: 30px;
    display: none;
  }
  &:hover {
    .song-sheet-item__play-icon {
      display: block;
    }
  }
  &__wyi-icon {
    width: 18px;
    height: 18px;
    position: absolute;
    top: 5px;
    left: 5px;
  }
}
</style>
