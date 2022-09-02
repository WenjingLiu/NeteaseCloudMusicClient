<script setup>
import { ref } from "vue";
const sideList = ref([
  {
    id: 1,
    title: "",
    isFold: false,
    isAdd: false,
    isItemShow: true,
    children: [
      { id: 11, name: "发现音乐", url: '/index'},
      { id: 12, name: "播客", url: '/index'},
      { id: 13, name: "视频", url: '/index' },
      { id: 14, name: "关注", url: '/index'},
    ],
  },
  {
    id: 2,
    title: "我的音乐",
    isFold: false,
    isAdd: false,
    isItemShow: true,
    children: [
      { id: 21, name: "本地与下载", url: '/index' },
      { id: 22, name: "最近播放", url: '/index' },
      { id: 23, name: "我的音乐云盘", url: '/index' },
      { id: 24, name: "关注", url: '/index' },
    ],
  },
  {
    id: 3,
    title: "创建的歌单",
    isFold: true,
    isAdd: true,
    isItemShow: true,
    children: [
      { id: 31, name: "我喜欢的音乐", url: '/index' },
      { id: 32, name: "婚礼", url: '/index' },
    ],
  },
]);
const isScrollBar = ref(false);
const activeId = ref(11)
function foldClick(item) {
    if(item.isFold) item.isItemShow = !item.isItemShow
}

function menuClick(str) {
  activeId.value = str.id
}
</script>
<template>
  <div
    class="sidebar"
    @mouseenter="isScrollBar = true"
    @mouseleave="isScrollBar = false"
    :class="isScrollBar ? 'scrollBar' : ''"
    :style="{ overflow: isScrollBar ? 'auto' : 'hidden' }"
  >
    <div class="sideList">
      <div class="sideItem" v-for="item in sideList" :key="`side${item.id}`">
        <div
          class="side-title"
          v-if="item.title"
          :style="{ cursor: item.isFold ? 'pointer' : '' }"
        >
          <div @click="foldClick(item)">
            <span class="font13">{{ item.title }}</span>
            <span v-if="item.isFold" class="font10">{{ item.isItemShow ? 'V' : '>' }}</span>
          </div>
          <span v-if="item.isAdd" class="add font18 color0">+</span>
        </div>
        <div class="side-children" v-if="item.isItemShow">
          <router-link
            v-for="str in item.children"
            :key="`side${str.id}`"
            :to="str.url"
            :style="{
              fontSize: item.id == 2 || item.id == 3 ? '14px' : '',
              color: item.id == 2 || item.id == 3 ? '#444' : '',
            }"
            :class="{'active': activeId == str.id}"
            @click="menuClick(str)"
            >{{ str.name }}</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.sidebar {
  width: 209px;
  height: 100%;  
  border-right: 1px solid #ddd;

  .sideList {
    padding: 12px 10px;
    .sideItem {
      .side-title {
        color: #aaa;
        padding: 10px;
        position: relative;
        .add {
            position: absolute;
            top: 8px;
            right: 0;
        }
      }
      .side-children a {
        display: block;
        padding: 10px 8px;
        color: #666;
        &:hover {
          background: #f3f3f3;
          border-radius: 3px;
        }
        &.active {
          font-size: 16px;
          color:#000;
          font-weight: bold;
          background: #f3f3f3;
          border-radius: 3px;
        }
      }
    }
  }
}
</style>