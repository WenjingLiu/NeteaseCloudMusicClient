<template>
  <div class="boutique-song-sheet" @click="boutiqueSongSheetClick">
    <div
      :style="{
        width: '100%',
        height: '100%',
        backgroundImage: `url(${boutiqueSongSheet.coverImgUrl}) `,
        backgroundSize: '100% 100%',
        filter: 'blur(40px)',
        backgroundSize: 'cover',
      }"
    ></div>
    <div class="boutique-song-sheet__content">
      <img
        v-show="boutiqueSongSheet.coverImgUrl"
        :src="boutiqueSongSheet.coverImgUrl"
        alt=""
      />
      <div class="boutique-song-sheet__des">
        <p class="boutique-song-sheet__name">精品歌单</p>
        <p class="boutique-song-sheet__description">
          {{ boutiqueSongSheet.name }}
        </p>
      </div>
    </div>
  </div>
  <div class="song-sheet-tag">
    <song-sheet-tag-main
      v-model="activeCategory"
      :list="categoryList"
      direction="left"
    ></song-sheet-tag-main>
    <div class="song-sheet-category__hot-navbar">
      <div
        v-for="(item, index) in hotSongSheetNavbar"
        :key="`hotItem${index}`"
        class="song-sheet-category__hot-navbar-item"
        :class="{
          'song-sheet-category__hot-navbar-item--active':
            activeCategory == item.name,
        }"
        @click="categorieClick(item.name)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
  <div class="song-sheet-div">
    <div class="song-sheet-div__list">
      <song-sheet-item
        v-for="item in playlist"
        :key="item.id"
        :id="item.id"
        :img="item.coverImgUrl"
        :name="item.name"
        :playCount="item.playCount"
      ></song-sheet-item>
    </div>
    <div class="pagination">
      <pagination :current-page="pagination.page"  :page-size="pagination.size" :total="pagination.total"></pagination>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  getSongSheetCategoryApi,
  getSongSheetHotCategoryApi,
  getSongSheetBoutiqueApi,
  getSongSheetListApi,
} from "@/api/index";
import SongSheetTagMain from "./components/songSheet/SongSheetTagMain.vue";
import SongSheetItem from "@/components/SongSheetItem.vue";
import Pagination from '@/components/Pagination.vue'
const router = useRouter();
const hotSongSheetNavbar = ref([]);
const activeCategory = ref("全部歌单");
const categoryList = ref([]);
const boutiqueSongSheet = ref({});
const pagination = ref({
  page: 1,
  size: 50,
  total: 0
});
const playlist = ref([]);
// 标签
getSongSheetCategoryApi().then((res) => {
  console.log(res);
  // allCategory.value = res.data;
  for (let key in res.data.categories) {
    categoryList.value.push({
      name: res.data.categories[key],
      sub: [],
    });
    res.data.sub.forEach((obj) => {
      if (obj.category == key) {
        categoryList.value[key].sub.push(obj);
      }
    });
  }
});
// 精品歌单第一个
getSongSheetBoutiqueApi({
  limit: 1,
}).then((res) => {
  console.log(res);
  boutiqueSongSheet.value = res.data.playlists[0];
});
getSongSheetHotCategoryApi().then((res) => {
  console.log(res);
  hotSongSheetNavbar.value = res.data.tags;
});
const categorieClick = (name) => {
  activeCategory.value = name;
};

function boutiqueSongSheetClick() {
  router.push({
    name: "IndexboutiqueSheet",
    params: { activeCategory: activeCategory.value },
  });
}

// 歌单
getSongSheetListApi({
  offset: pagination.value.page,
  limit: pagination.value.size,
  // order: 'new',
  cat: activeCategory.value,
}).then((res) => {
  console.log(res);
  playlist.value = res.data.playlists;
  pagination.value.total = res.data.total
});
</script>
<style scoped lang="scss">
.boutique-song-sheet {
  width: 100%;
  height: 200px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  &__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 25px 0 25px 25px;
    display: flex;
    align-items: center;
    img {
      width: 150px;
      height: 150px;
      border-radius: 5px;
    }
  }
  &__des {
    margin-left: 20px;
    //   color: #fff;
    &__name {
      font-size: $font14;
      color: #965a01;
      border: 1px solid #965a01;
      width: 80px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      border-radius: 50px;
      margin-bottom: 20px;
    }
  }
}
.song-sheet-tag {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
}
.song-sheet-category {
  position: relative;
  &__hot-navbar {
    display: flex;
    justify-content: flex-start;
    &-item {
      color: #666;
      font-size: $font13;
      margin-left: 15px;
      padding: 3px 5px;
      line-height: 1;
      border-radius: 20px;
      cursor: pointer;
      &--active {
        background: #fac1c1;
        color: #e73b3b;
      }
    }
  }
}

.song-sheet-div {
  &__list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 25px;
    grid-column-gap: 15px;
  }
}
.pagination {
  padding: 30px 0 40px;
}
</style>
