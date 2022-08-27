<script setup>
// import { reactive, computed } from "vue";
const props = defineProps({
    img: String,
    text: String,
    textRow: Number
});
</script>
<template>
    <div class="img-text">
        <div class="img-text__img-box">
            <img :src="img" alt="">
        </div>
        <p class="">{{ text }}</p>
    </div>
</template>
<style scoped lang="scss">
.img-text {
    width: 100%;
    &__img-box {
        width: 100%;
        padding-bottom: 100%;
        position: relative;
        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 5px;
            display: block;
        }
    }
    
    p {
        width: 100%;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: v-bind(textRow);
        overflow: hidden;
        line-height: 1.6;
        font-size: $font14;
    }
}
</style>
