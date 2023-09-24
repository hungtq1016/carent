<template>
    <section class="pb-5">
        <div class="max-w-screen-xl xl:mx-auto lg:mx-8 md:mx-6 mx-4">
            <div class="grid lg:grid-cols-3 md:grid-cols-5 grid-cols-1 gap-x-3">
                <div class="lg:col-span-2 md:col-span-3 col-span-1 divide-y">
                    <div class="flex flex-col gap-y-3 md:gap-y-5 pb-5">
                        <div class="flex md:items-center gap-2 md:justify-between flex-col md:flex-row">
                            <div class="flex gap-2 items-center">
                                <div class="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-semibold capitalize dark:text-gray-200">{{ data.name }}</div>
                                <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" v-if="!isDark"
                                        strokeWidth={1.5} stroke="currentColor" class="md:w-8 md:h-8 w-5 h-5 stroke-green-500">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="md:w-8 md:h-8 w-5 h-5 fill-green-700 " v-else>
                                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div class="flex items-center gap-x-2">
                                <TheFavorite/>
                                <button class="border-yellow-600 border p-1 rounded-full relative group">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth={1.5} stroke="currentColor" class="md:w-6 md:h-6 w-4 h-4 stroke-yellow-600 dark:fill-yellow-600">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                                    </svg>
                                    <div
                                        class="absolute -bottom-2 left-0 text-xs text-gray-600 hidden group-hover:inline-block bg-white shadow w-20 text-center translate-y-full -translate-x-1/2 rounded-md">
                                        Báo cáo xe
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div class="flex gap-1 md:gap-x-3 items-center flex-wrap ">
                            <div class="flex items-center gap-x-1">
                                <div class="sr-only">Star AVG</div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                    stroke="currentColor" class="w-6 h-6 stroke-yellow-400 dark:fill-yellow-400">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                                <span class="text-gray-600 dark:text-gray-100">{{ Number(data.rating.avg).toFixed(1) }}</span>
                            </div>
                            <div class="flex items-center gap-x-1">
                                <div class="sr-only">Favorite</div>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                    stroke="currentColor" class="w-6 h-6 stroke-rose-600 dark:fill-rose-600">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>

                                <span class="text-gray-600 dark:text-gray-100">{{ favorite_count }}</span>
                            </div>
                            <div class="flex items-center gap-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                    stroke="currentColor" class="w-6 h-6 stroke-gray-600 dark:fill-white">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                </svg>
                                <span class="text-gray-600 dark:text-gray-100">{{ comment_count }}</span>
                            </div>
                            <div class="flex items-center gap-x-1">

                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    version="1.1" class="w-6 h-6" viewBox="0 0 256 256"
                                    enable-background="new 0 0 256 256" xml:space="preserve">
                                    <g>
                                        <g>
                                            <g>
                                                <path class="fill-amber-600 dark:fill-white"
                                                    d="M90.6,18.9c-1.5,1.1-2.4,3.5-2.4,6.5V28h-8.1c-9.5,0-10.7,0.4-11.6,3.7c-0.7,2.9-0.4,52.3,0.4,53.7c1.5,2.5,0.4,2.5,39.4,2.5c40,0,38.3,0.1,39.6-3c1-2.3,1-51.5,0-53.8c-1.2-2.9-1.9-3.1-11.1-3.1h-8.3l-0.2-3.6c-0.1-3.3-0.3-3.7-1.7-4.9l-1.5-1.4h-16.8C93.7,18.2,91.6,18.3,90.6,18.9z M118.2,53.1v25.1h-9.8h-9.8V53.1V28h9.8h9.8V53.1z M88.2,58v19.7h-4.9h-4.9V58V38.3h4.9h4.9V58z M138.3,58v19.7h-4.9h-4.9V58V38.3h4.9h4.9V58z" />
                                                <path class="fill-amber-600 dark:fill-white"
                                                    d="M97.1,99c-19.8,2.2-33.7,7.9-44.3,18C45,124.6,39.7,134.5,38,145l-0.6,3.4l-2.6,0.9c-6.2,2.3-12.1,7.6-16,14.3c-5.2,9.2-8.9,24.1-8.9,36.5c0,6.7,0.9,7.6,8.6,7.6c4.8,0,5,0,6.5-1.4c1.3-1.2,1.5-1.7,1.5-3.6c0-1.9-0.2-2.4-1.5-3.6c-1.1-1-2-1.4-3.4-1.4h-1.9l0.3-3c1.7-18.5,7.7-31.3,16.8-35.7l2.8-1.4h77.7c73.5,0,78,0,82.7,0.8c17.7,3.1,28,10.9,32.9,25c1.3,3.6,2.7,10.1,2.7,12.6v1.6h-2.5c-2.2,0-2.8,0.2-4,1.4c-2.5,2.3-1.8,6.4,1.2,8c0.6,0.3,3.4,0.5,6.6,0.5c4.7,0,5.8-0.1,7-0.9c2-1.2,2.2-2.3,1.9-8.8c-1-20.5-9.9-35.7-25.4-43.4c-7.4-3.7-14.4-5.4-24.6-6.4c-9.7-0.8-8.6-0.3-10.1-5c-0.7-2.2-2.5-6.5-4-9.3c-9.9-19.5-26.6-31.4-49.1-34.8C127.1,98.4,104,98.2,97.1,99z M132,109.3c20.9,3.1,36.6,15.7,43.5,34.7l1.2,3.4h-34.2h-34.2V128v-19.4h9.4C123.8,108.6,128.9,108.8,132,109.3z M98.5,128.2v19.2H73H47.6l0.4-2.2c2.4-12.8,11.1-23.6,24-29.6c6.6-3.1,19.2-6.4,25.1-6.5l1.5,0V128.2z" />
                                                <path class="fill-amber-600 dark:fill-white"
                                                    d="M58.4,179c-8.2,1.8-15.9,8.9-18.5,17c-4.4,14.1,6.1,29.4,21.6,31.2c11.1,1.3,23.6-8.7,25.8-20.6C89.5,194.8,80.5,182,68,179C64.4,178.2,62.2,178.2,58.4,179z M69.9,189.8c2.2,1.2,5.1,3.9,6.1,6c2,3.8,2,10.5,0,14.4c-1.3,2.5-4.8,5.4-7.6,6.4c-3.3,1.1-9.2,0.7-12.1-0.7c-4.7-2.4-7.1-6.1-7.4-11.8c-0.3-5.1,0.8-8.3,3.9-11.4c3.2-3.2,5.3-3.9,11-3.8C67,188.9,68.8,189.2,69.9,189.8z" />
                                                <path class="fill-amber-600 dark:fill-white"
                                                    d="M188.7,178.9c-5.7,1.1-12.5,5.7-15.9,11c-6.6,9.9-4.9,22.8,4,30.8c10.3,9.3,23.4,8.8,33.2-1.1c3.8-3.9,5.6-6.9,6.8-11.8c3-12-6-25.7-19.1-28.8C194.4,178.3,192.1,178.2,188.7,178.9z M199.9,190c4.8,2.5,7.4,6.9,7.4,12.9c0,4.8-1.2,7.9-4.3,10.7c-3,2.8-6,3.8-11,3.5c-6.4-0.4-10.4-3.1-12.5-8.8c-1.4-3.6-1.1-9.1,0.7-12.5c1.5-2.8,4.3-5.5,7.1-6.5C190.1,188.3,197.4,188.6,199.9,190z" />
                                                <path class="fill-amber-600 dark:fill-white"
                                                    d="M100.3,199.4c-1.3,1.2-1.5,1.7-1.5,3.6c0,1.9,0.2,2.4,1.5,3.6l1.5,1.4H128c19.3,0,26.5-0.1,27.4-0.6c3.3-1.5,3.3-7.2,0-8.7c-0.9-0.4-8.1-0.6-27.4-0.6h-26.2L100.3,199.4z" />
                                                <path class="fill-amber-600 dark:fill-white"
                                                    d="M15.5,228.9c-1.8,1.4-2.4,3.7-1.5,5.8c1.4,3.4-8.8,3.1,114.8,3.1H240l1.6-1.6c2.3-2.3,2.1-5.3-0.5-7.4c-0.9-0.8-7.5-0.8-112.7-0.8C17.1,228,16.7,228,15.5,228.9z" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <span class="text-gray-600 dark:text-gray-100">{{ data.total_trip }}</span>
                            </div>
                            <div class="flex items-center gap-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                    stroke="currentColor" class="w-6 h-6 stroke-gray-900 dark:stroke-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <RouterLink v-if="data.location.district"
                                    :to="`/find?district=${data.location.district.slug}&province=${data.location.province.slug}`"
                                    class="text-gray-900  text-sm md:text-lg font-semibold dark:text-gray-200">{{ data?.location.district.name }},
                                </RouterLink>
                                <RouterLink v-if="data.location.province"
                                    :to="`/find?province=${data.location.province.slug}`"
                                    class="text-gray-900 text-sm md:text-lg font-semibold dark:text-gray-200">{{ data?.location.province.name }}
                                </RouterLink>
                            </div>
                        </div>
                        <div class="flex gap-x-3">
                            <div class="bg-amber-100 md:px-3 md:py-2 p-1 px-2 rounded-md">
                                {{ data.transmission_type == 1 ? 'Số tự động' : 'Số sàn' }}
                            </div>
                            <div v-if="data.isDelivery" class="bg-green-100  md:px-3 md:py-2 p-1 px-2rounded-md">
                                Giao tận nơi
                            </div>
                            <div v-if="data.isInstant" class="bg-blue-100  md:px-3 md:py-2 p-1 px-2 rounded-md">
                                Xe giao ngay
                            </div>
                        </div>
                        <TheRating :rating="data.rating"/>
                    </div>
                    <TheSystem :data="data"/>
                    <TheFeature :features="data.features" />
                    <div class="py-5">
                        <div class="flex gap-x-2 items-center">
                            <h4 class="text-center text-lg lg:text-xl font-semibold dark:text-gray-200">Điều Khoản</h4>
                            <TheQuestion
                                answer="Người thuê có nhiệm vụ đúng với trách nhiệm dưới đây.<span class='text-red-600'>(Mọi thiệt hại người thuê phải chịu 100%)</span>" />
                        </div>
                        <div class="text-sm text-gray-600 dark:text-gray-100" v-html="data.notes.replace(/◦/g, '<br/>' + '◦')
                            .replace('Quy định khác:', text)"></div>
                    </div>
                </div>
                <ThePrice :data="data"/>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import TheQuestion from '@/components/Card/TheQuestion.vue';
import TheFeature from './TheFeature.vue';
import TheRating from './TheRating.vue';
import TheSystem from './TheSystem.vue';
import { useDark } from '@vueuse/core';
import ThePrice from './ThePrice.vue';
import TheFavorite from './TheFavorite.vue';
import {  inject } from 'vue';

const {comment_count} = inject<any>('messageRight')
    const {favorite_count} = inject<any>('car-favorite')

const isDark = useDark()
const props = defineProps(['data'])
const text = '<span class="text-base font-medium text-gray-900 dark:text-gray-200">Quy định khác:</span>'

</script>

<style>
.date-picker input {
    @apply !rounded-md
}</style>