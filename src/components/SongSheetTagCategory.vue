<template>
<div class="all-category">
    <p class="all-category-title">
        <span class="all-category-title__name" :class="activeCategory == '全部歌单' ? 'all-category-title__name--active' : ''" @click="$emit('update:activeCategory', '全部歌单')">全部歌单</span>
    </p>
    <slot></slot>
</div>
</template>
<script setup>
defineProps({
  activeCategory: String
})
defineEmits(['update:activeCategory'])
</script>
<style scoped lang="scss">
.all-category {
    width: 700px;
    border: 1px solid #eee;
    box-shadow: 0 0 3px #ddd;
    position: absolute;
    top: 10px;
    left: 0;
    &-title {
        padding: 15px 0 15px 30px;
        border-bottom: 1px solid #eee;
        span {
            font-size: $font14;
        }
        &__name {
            cursor: pointer;
            &--active {
                background: #fde2e2;
                color: #e73b3b;
                padding: 5px 10px;
                border-radius: 20px;
            }
        }
        
    }
}
</style>
