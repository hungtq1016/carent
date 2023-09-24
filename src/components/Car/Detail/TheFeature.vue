<template>
    <div class="py-5">
        <h4 class="text-center text-lg lg:text-xl font-semibold dark:text-gray-200">Tiện Ích</h4>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
            <div class="flex items-center gap-x-2"
            v-for="feature in features">
                <div class="bg-amber-100 p-2 rounded-full">
                    <img class="w-5 md:w-6"
                    :src="IMG_URL+feature.image.path" :alt="feature.name">
                </div>
                <div class="text-sm md:text-base text-gray-600 dark:text-gray-100">{{ feature.name }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IMG_URL } from '@/lib/fetch';

const props = defineProps(['features'])
</script>
