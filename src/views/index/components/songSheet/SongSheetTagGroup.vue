<template>
    <div class="song-sheet-tag-group">
        <p class="song-sheet-tag-group__name">{{ label }}</p>
        <slot></slot>
    </div>
</template>
<script setup>
defineProps({
  label: String
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
