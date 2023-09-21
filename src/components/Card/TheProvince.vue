<template>
    <label :for="province.slug" class="peer-checked:border-4 peer-checked:border-amber-600 block rounded-md box-border border-4 border-gray-50 dark:border-zinc-900 hover:border-gray-400">
       <div class="min-h-[384px] relative">
        <img :src="imgSrc" :alt="province.slug"
        class="object-contain max-h-96 w-full rounded-md">
        <div class="absolute bottom-2 inset-x-2">
            <div class="px-4 py-2 bg-black/50 rounded-md">
                <div class="text-xl font-semibold text-white ">{{ province.name }}</div>
                <div class="text-sm text-white">{{ province.car_count }}+ xe</div>
            </div>
        </div>
       </div>
    </label>
</template>

<script setup lang="ts">
import { IMG_URL } from '@/lib/fetch';

    const props = defineProps(['province'])
    const imgSrc = props.province.image == null ?  `https://picsum.photos/400/400?random=${props.province.slug}` : IMG_URL+props.province.image.path    
</script>

