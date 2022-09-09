<template>
    <div class="pagination-list">
        <div class="pagination-item">></div>
        <div class="pagination-item">1</div>
        <div class="pagination-item">2</div>
        <div class="pagination-item">3</div>
        <div class="pagination-item">></div>
    </div>
</template>
<script setup>
defineProps({
    currentPage: String,
    pageSize: Number,
    
})
</script>
<style scoped lang="scss">
.pagination {
    &-list {
        display: flex;
        justify-items: center;
        align-items: center;
        max-width: 200px;
        margin: 0 auto;
    }
    &-item {
        border: 1px solid #ddd;
        border-radius: 5px;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
    }
    &-item + &-item {
        margin-left: 5px;
    }
}
</style>
