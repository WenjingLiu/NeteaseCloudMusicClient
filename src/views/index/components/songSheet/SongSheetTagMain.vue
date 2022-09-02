<template>
  <div class="song-sheet-category">
    <p
      class="song-sheet-category__select"
      @click="allCategoryShow = !allCategoryShow"
    >
      {{ songsheettag }} >
    </p>
    <div class="song-sheet-category__list" v-if="allCategoryShow">
      <song-sheet-tag-category
        v-model="songsheettag"
      >
        <song-sheet-tag-group
          v-for="group in list"
          :key="group.name"
          :label="group.name"
        >
          <div class="song-sheet-tag__list">
            <song-sheet-tag
              v-for="item in group.sub"
              :key="item.name"
              :tag="item"
              :label="item.name"
              :class="
                songsheettag == item.name ? 'song-sheet-tag--active' : ''
              "
            ></song-sheet-tag>
          </div>
        </song-sheet-tag-group>
      </song-sheet-tag-category>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import SongSheetTagCategory from "./SongSheetTagCategory.vue";
import SongSheetTagGroup from "./SongSheetTagGroup.vue";
import SongSheetTag from "./SongSheetTag.vue";

const allCategoryShow = ref(false);
defineProps(["songsheettag", "list" ]);
defineEmits(["update:songsheettag"]);

</script>
<style scoped lang="scss">
.song-sheet-category {
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
}
</style>
