<template>
    <div class="py-5">
        <h4 class="text-xl font-semibold">Tiện Ích</h4>
        <div class="grid grid-cols-4 gap-3 mt-3">
            <div class="flex items-center gap-x-2"
            v-for="feature in features">
                <div class="bg-amber-100 p-2 rounded-full">
                    <img class="w-6"
                    :src="`http://localhost:8000/storage${feature.image.local_src}`" :alt="feature.name">
                </div>
                <div>{{ feature.name }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['features'])
</script>
