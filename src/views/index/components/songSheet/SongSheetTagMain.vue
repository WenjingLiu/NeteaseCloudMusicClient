<template>
  <div class="song-sheet-category">
    <p
      class="song-sheet-category__select"
      @click="allCategoryShow = !allCategoryShow"
    >
      {{ modelValue }} >
    </p>
    <div class="song-sheet-category__list" v-if="allCategoryShow" :class="{'song-sheet-category__list--left': direction == 'left','song-sheet-category__list--right': direction == 'right'}">
      <song-sheet-tag-category
        v-model="modelValue"
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
                modelValue == item.name ? 'song-sheet-tag--active' : ''
              "
            ></song-sheet-tag>
          </div>
        </song-sheet-tag-group>
      </song-sheet-tag-category>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import SongSheetTagCategory from "./SongSheetTagCategory.vue";
import SongSheetTagGroup from "./SongSheetTagGroup.vue";
import SongSheetTag from "./SongSheetTag.vue";

const allCategoryShow = ref(false);
const props = defineProps(["modelValue", "list", "direction" ]);
const emits = defineEmits(["update:songsheettag"]);
console.log(props.direction)
watch(
    () => props.modelValue,
    (newValue, oldValue) => {
        emits('update:modelValue', newValue)
    },
    {deep: true}
)
watch(
    () => props.list,
    (newValue, oldValue) => {
        props.list = newValue
        console.log(props.list)
    },
    {deep: true}
)

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
      top: 40px;
      z-index: 2;
      background: #fff;
      &--left {
          left: 0
      }
      &--right {
          right: 0
      }
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
