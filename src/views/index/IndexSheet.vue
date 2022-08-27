<template>
  <div class="boutique-song-sheet">
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
      <img :src="boutiqueSongSheet.coverImgUrl" alt="" />
      <div class="boutique-song-sheet__des">
        <p class="boutique-song-sheet__name">精品歌单</p>
        <p class="boutique-song-sheet__description">{{ boutiqueSongSheet.name }}</p>
      </div>
    </div>
  </div>
  <div class="song-sheet">
    <div class="song-sheet-category">
      <p
        class="song-sheet-category__select"
        @click="allCategoryShow = !allCategoryShow"
      >
        {{ activeCategory }} >
      </p>
      <div class="song-sheet-category__list" v-if="allCategoryShow">
        <song-sheet-tag-category v-model:activeCategory="activeCategory">
          <song-sheet-tag-group
            v-for="group in categoryList"
            :key="group.name"
            :group="group"
          >
            <div class="song-sheet-tag__list">
              <song-sheet-tag
                v-for="item in group.sub"
                :key="item.name"
                :tag="item"
                :class="
                  activeCategory == item.name ? 'song-sheet-tag--active' : ''
                "
                @click="categorieClick(item.name)"
              ></song-sheet-tag>
            </div>
          </song-sheet-tag-group>
        </song-sheet-tag-category>
      </div>
    </div>

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
</template>
<script setup>
import { ref } from "vue";
import {
  getSongSheetCategoryApi,
  getSongSheetHotCategoryApi,
  getSongSheetBoutiqueApi,
} from "@/api/index";
import SongSheetTagCategory from "@/components/SongSheetTagCategory.vue";
import SongSheetTagGroup from "@/components/SongSheetTagGroup.vue";
import SongSheetTag from "@/components/SongSheetTag.vue";
const hotSongSheetNavbar = ref([]);
const activeCategory = ref("全部歌单");
const categoryList = ref([]);
const allCategoryShow = ref(false);
const boutiqueSongSheet = ref({});

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
        &__description {
            
        }
  }
}
.song-sheet {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  &-category {
    position: relative;
    &__select {
      padding: 5px 15px;
      border: 1px solid #ddd;
      font-size: $font15;
      border-radius: 30px;
      cursor: pointer;
      &:hover {
        background: #f2f2f2;
      }
    }
    &__list {
      position: absolute;
      left: 0;
      bottom: 0;
    }
    .song-sheet-tag {
      &__list {
        width: calc(100% - 70px);
        display: flex;
        flex-wrap: wrap;
      }
    }
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
}
</style>
