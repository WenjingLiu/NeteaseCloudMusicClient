<template>
    <div class="boutique-song-sheet">
        <div class="boutique-song-sheet__title">
            <span>精品歌单</span>
            <song-sheet-tag-main v-model="songsheetActive" :list="tagList" direction="right"></song-sheet-tag-main>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRoute }  from 'vue-router'
import SongSheetTagMain from "./components/songSheet/SongSheetTagMain.vue";
import {
  getSongSheetBoutiqueTagApi,
  getSongSheetBoutiqueApi,
} from "@/api/index";
const route = useRoute()
const songsheetActive = ref(route.params.activeCategory)
const tagList = ref({})
getSongSheetBoutiqueTagApi().then((res) => {
    console.log(res);
    tagList.value = [{
        name: '',
        sub: res.data.tags
    }]
});

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
