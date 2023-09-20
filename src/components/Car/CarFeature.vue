<template>
    <div class="py-5">
        <h4 class="text-xl font-semibold dark:text-slate-200">Tiện Ích</h4>
        <div class="grid grid-cols-4 gap-3 mt-3">
            <div class="flex items-center gap-x-2"
            v-for="feature in features">
                <div class="bg-amber-100 p-2 rounded-full">
                    <img class="w-6"
                    :src="`http://localhost:8000/storage${feature.image.path}`" :alt="feature.name">
                </div>
                <div class="text-gray-600 dark:text-slate-100">{{ feature.name }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['features'])
</script>
