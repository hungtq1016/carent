<template>
    <RouterLink :to="{name:'FindCars',query:query}" class="h-fit px-2">
        <div v-if="isLoading " class="h-60 flex items-center justify-center bg-gray-300 rounded-md mx-2 animate-pulse">
            <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                </svg>
        </div>
        <div v-else 
        class="h-fit bg-white p-2 rounded-md dark:hover:shadow dark:shadow-amber-600">
            <img class="aspect-3/2 object-contain mix-blend-color-multiply" loading="lazy"
        :src="IMG_URL+brand.image?.path" :alt="brand.name">
        </div>
    </RouterLink>
</template>

<script setup lang="ts">
import { IMG_URL } from '@/lib/fetch';
import { useImage } from '@vueuse/core';
import { useCars } from '@/stores/cars';

const props = defineProps(['brand'])
const carsStore = useCars()
const query = {...carsStore.absoluteQuery,...{brand:props.brand.slug}}
const { isLoading ,error,isReady } = useImage({ src:IMG_URL+props.brand.image?.path})
</script>
