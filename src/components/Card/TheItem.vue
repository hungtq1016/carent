<template>
    <RouterLink :to="`/car/${car.info.slug}/id/${car.id}`"
        class="flex flex-col  p-4 rounded-md bg-white border gap-y-2 hover:shadow duration-300 dark:bg-zinc-800 dark:border-gray-700">
        <div class="relative">
            <div v-if="isLoading" class="h-60 flex items-center justify-center bg-gray-300 dark:bg-zinc-800 rounded-md mx-2 animate-pulse">
                <svg class="w-10 h-10 text-gray-200 dark:text-gray-100" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path
                        d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
            </div>
            <img v-else :src="IMG_URL + car.image.path" :alt="car.info.name" loading="lazy"
                class="object-cover rounded-md w-full h-[300px]">
            <div class="absolute top-1 left-1">
                <RouterLink :to="{ name: 'FindCars', query: { seat: props.car.seats } }"
                    class="py-1 px-2 text-xs bg-white/60 rounded-full hover:bg-white duration-300 dark:text-gray-700">
                    {{ car.seats }} chỗ
                </RouterLink>
            </div>
            <div class="absolute top-1 right-1 group " v-if="car.fuel_type == 3">
                <RouterLink :to="{ name: 'FindCars', query: { fuel_type: 3 } }"
                    class="p-px rounded-full border-yellow-600 border bg-yellow-100/80 block group-hover:bg-yellow-100 duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" class="w-6 h-6 stroke-yellow-600 group-hover:fill-yellow-600">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>

                </RouterLink>
            </div>
        </div>
        <div class="flex flex-col gap-y-2 justify-between flex-auto">
            <div class="flex flex-col gap-y-2">
                <div class="flex text-sm tags">
                    <div class="bg-amber-100 px-2 py-1 rounded-l dark:bg-amber-600" :class="{ 'rounded-r': !car.isDelivery }">
                        {{ car.transmission_type == 1 ? 'Số tự động' : 'Số sàn' }}
                    </div>
                    <div v-if="car.isDelivery" class="bg-green-100 px-2 py-1 rounded-r dark:bg-green-600">
                        Giao tận nơi
                    </div>
                </div>
                <div class="flex flex-col gap-y-1">
                    <div class="flex gap-x-2 items-center">
                        <div class="text-lg font-semibold capitalize dark:text-gray-200">{{ car.info.name }}</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                            stroke="currentColor" class="w-6 h-6 stroke-green-700" v-if="!isDark">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-green-700 " v-else>
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="flex items-center gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                            stroke="currentColor" class="w-3 h-3 stroke-gray-500 dark:stroke-slate-50">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <div class="text-gray-600 text-sm dark:text-gray-100">{{ car?.location }}</div>
                    </div>
                </div>
            </div>
            <div class="pt-2 border-t">
                <div class="flex justify-between items-center">
                    <div class="flex flex-col gap-y-1">
                        <div class="flex items-center gap-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" class="w-4 h-4 stroke-yellow-400 dark:fill-yellow-400">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            <span class="text-xs text-gray-600 dark:text-gray-100">{{ Number(car.review).toFixed(1) }}</span>
                        </div>
                        <div class="flex items-center gap-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" class="w-4 h-4 stroke-rose-600 dark:fill-rose-600">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                            <span class="text-sm text-gray-600 dark:text-gray-100">{{ car?.like_count }}</span>
                        </div>
                    </div>
                    <div class="flex flex-col gap-y-1">
                        <div class="flex items-center gap-x-1 flex-row-reverse">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" class="w-4 h-4 stroke-amber-600 dark:fill-amber-600">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>
                            <span class="text-xs text-gray-600 dark:text-gray-100">{{ car?.total_trip }}</span>
                        </div>
                        <div class="dark:text-gray-100 text-white">
                            {{ useFormatCurrency(car?.price) }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </RouterLink>
</template>

<script setup lang="ts">
import { IMG_URL } from '@/lib/fetch';
import useFormatCurrency from '@/lib/hook/useFormatCurrency';
import { useImage } from '@vueuse/core';
import { useDark } from '@vueuse/core';

const isDark = useDark()

const props = defineProps(['car'])

const { isLoading } = useImage({ src: IMG_URL + props.car.image.path })



</script>

