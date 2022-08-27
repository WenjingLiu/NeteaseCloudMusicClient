<template>
  <div class="song-sheet-tag">
      <span class="song-sheet-tag__name">{{ tag.name }}</span>
      <span v-if="tag.hot" class="song-sheet-tag__icon-hot">HOT</span>
  </div>
</template>
<script setup>
const props = defineProps({
  tag: Object,
});
// console.log(props)
</script>
<style scoped lang="scss">
.song-sheet-tag {
    width: calc(100% / 6);
    position: relative;
    margin-bottom: 20px;
    &__name {
        box-sizing: border-box; 
        padding: 3px 12px;
        font-size: $font13;
        border-radius: 20px;
        cursor: pointer; 
    }
    &--active {
        .song-sheet-tag__name {
            background: #fde2e2;
            color: #e73b3b;
        }
    }
    &__icon-hot {
        position: absolute;
        top: 0;
        font-size: 9px;
        color:#f00;
    }
}
</style>