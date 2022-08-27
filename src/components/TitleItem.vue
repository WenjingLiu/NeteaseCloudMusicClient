<script setup>
import { ref } from 'vue'
defineProps({
  title: String,
  isRightArrow: Boolean
})
</script>
<template>
    <div>
        <span class="name-sdsf font18">{{ title }}</span>
        <span :style="{display: isRightArrow ? 'inline-block' : 'none' }">></span>
    </div>
</template>
<style scoped lang="scss">
.name-sdsf {
    display: inline-block;
    font-weight: bold;
    margin-right: 10px;
}
</style>
