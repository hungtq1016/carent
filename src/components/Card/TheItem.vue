<template>
    <RouterLink :to="`/car/${item.slug}`"
        class="flex flex-col  p-4 rounded-md bg-white border gap-y-2 hover:shadow duration-300">
        <div class="relative">
            <div>
                <div v-if="isLoading"
                    class="h-60 flex items-center justify-center bg-gray-300 rounded-md mx-2 animate-pulse">
                    <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path
                            d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                </div>
                <img v-if="error" class="aspect-3/2 object-contain mix-blend-color-burn"
                    src="https://ipsf.net/wp-content/uploads/2021/12/dummy-image-square.webp" alt="error">
                <img v-else :src="`http://localhost:8000/storage${item.images[0].local_src}`" :alt="item.name"
                    class="aspect-3/2 object-cover rounded-md min-h-[300px]">

            </div>
            <div class="absolute top-1 left-1">
                <RouterLink :to="`/find?seat=${item.seats}`"
                    class="py-1 px-2 text-xs bg-white/60 rounded-full hover:bg-white duration-300">
                    {{ item.seats }} chỗ
                </RouterLink>
            </div>
        </div>
        <div class="flex flex-col gap-y-2 justify-between flex-auto">
            <div class="flex flex-col gap-y-2">
                <div class="flex text-sm tags">
                    <div class="bg-amber-100 px-2 py-1 rounded-l" :class="{ 'rounded-r': !item.isDelivery }">
                        {{ item.transmission == 1 ? 'Số tự động' : 'Số sàn' }}
                    </div>
                    <div v-if="item.isDelivery" class="bg-green-100 px-2 py-1 rounded-r">
                        Giao tận nơi
                    </div>
                </div>
                <div class="flex flex-col gap-y-1">
                    <div class="flex gap-x-2 items-center">
                        <div class="text-lg font-semibold">{{ item.name }}</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                            stroke="currentColor" class="w-4 h-4 stroke-green-500">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </div>
                    <div class="flex items-center gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                            stroke="currentColor" class="w-3 h-3 stroke-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <div class="text-gray-600 text-sm">{{ item?.location }}</div>
                    </div>
                </div>
            </div>
            <div class="pt-2 border-t">
                <div class="flex justify-between items-center">
                    <div class="flex flex-col gap-y-1">
                        <div class="flex items-center gap-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" class="w-4 h-4 stroke-yellow-400">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            <span class="text-xs text-gray-600">{{ item.review ? item.review.toFixed(1) : 0 }}</span>
                        </div>
                        <div class="flex items-center gap-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" class="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            <span class="text-sm text-gray-600">{{ item?.totalReview }}</span>
                        </div>
                    </div>
                    <div class="flex flex-col gap-y-1">
                        <div class="flex items-center gap-x-1 flex-row-reverse">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" class="w-4 h-4 stroke-amber-600">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>
                            <span class="text-xs text-gray-600">{{ item?.trip }}</span>
                        </div>
                        <div class="">
                            {{ formatter.format(item?.price) }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </RouterLink>
</template>

<script setup lang="ts">
import { useImage } from '@vueuse/core';


const props = defineProps(['item'])

const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',

});

const { isLoading, error, isReady } = useImage({ src: `http://localhost:8000/storage${props.item.images[0].local_src}` })


</script>

