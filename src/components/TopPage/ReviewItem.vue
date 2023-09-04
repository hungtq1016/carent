<template>
    <div class="flex items-center flicking-panel" :style="{ backgroundColor: item.bgColor, }">
        <img :src="item.image" :alt="item.name"
        class="aspect-HD max-h-96">
    </div>
</template>

<script setup lang="ts">


const props = defineProps(['item'])

</script>
