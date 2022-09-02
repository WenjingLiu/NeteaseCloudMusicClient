<template>
    <div class="boutique-song-sheet">
        <div class="boutique-song-sheet__title">
            <span>精品歌单</span>
            <p class="boutique-song-sheet__title--active">{{ songsheetActive }}</p>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRoute }  from 'vue-router'

const route = useRoute()
const songsheetActive = ref(route.params.activeCategory)

</script>
<style scoped lang="scss">
.boutique-song-sheet {
    &__title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
        &--active {
            font-size: $font13;
            padding: 8px 12px;
            border: 1px solid #ddd;
            border-radius: 20px;
        }
    }
}
</style>
