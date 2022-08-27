<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
  sortTitle: String, //列表每一项获取名字的字段
  list: Object
})

</script>

<template>
  <div class="navbar-list" >
      <router-link class="navbar-item" v-for="(item, index) in list" :key="`navbar${index}`" :to="item.path" tag="div" v-slot="{ isActive }">
        <span>{{ item[sortTitle] }}</span>
        <p class="navbar-line" :style="{ background: isActive ? '#f00': '#fff'}"></p>
      </router-link>
  </div>
</template>
<style scoped lang="scss">
  .navbar-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .navbar-item {
      margin-right: 20px;
      text-align: center;
      &.router-link-active {
        font-size: 18px;
        font-weight: bold;
      }
      .navbar-line {
        width: 90%;
        height: 3px;
        margin-left: 5%;
        margin-top: 8px;
        border-radius: 2px;
      }
    }
  }
</style>
