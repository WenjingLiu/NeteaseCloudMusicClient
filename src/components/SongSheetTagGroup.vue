<template>
    <div class="song-sheet-tag-group">
        <p class="song-sheet-tag-group__name">{{group.name}}</p>
        <slot></slot>
    </div>
</template>
<script setup>
defineProps({
  group: Object
})

</script>
<style scoped lang="scss">
.song-sheet-tag-group{
    display: flex;
    align-items: flex-start;
    padding: 0 20px;
    margin-top: 20px;
    &__name {
        color:#ccc;
        font-size: $font13;
        width: 60px;
    }
}
</style>
