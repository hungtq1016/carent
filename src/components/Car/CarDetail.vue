<template>
    <div class="grid grid-cols-3 py-5 gap-x-3">
        <div class="col-span-2">
            <div class="flex flex-col gap-y-5">
                <div class="flex items-center justify-between">
                    <div class="flex gap-x-2 items-center">
                        <div class="text-4xl font-semibold capitalize">{{ info.info.name }}</div>
                        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" class="w-8 h-8 stroke-green-500">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                    <button class="border-gray-600 border p-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6 stroke-gray-600">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>

                    </button>
                </div>
                <div class="flex gap-x-3 items-center">
                    <div class="flex items-center gap-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                            stroke="currentColor" class="w-6 h-6 stroke-yellow-400">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        <span class="text-gray-600">{{ Number(info.review).toFixed(1) }}</span>
                    </div>
                    <div class="flex items-center gap-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                            stroke="currentColor" class="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        <span class="text-gray-600">{{ info.total_review }}</span>
                    </div>
                    <div class="flex items-center gap-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                            stroke="currentColor" class="w-6 h-6 stroke-amber-600">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>
                        <span class="text-gray-600">{{ info.total_trip }}</span>
                    </div>
                    <div class="flex items-center gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                            stroke="currentColor" class="w-6 h-6 stroke-gray-900">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <RouterLink v-if="info.district"
                            :to="`/find?district=${info.district.slug}&province=${info.province.slug}`"
                            class="text-gray-900 text-lg font-semibold">{{ info?.district.name }}, </RouterLink>
                        <RouterLink v-if="info.province" :to="`/find?province=${info.province.slug}`"
                            class="text-gray-900 text-lg font-semibold">{{ info?.province.name }}</RouterLink>
                    </div>
                </div>
                <div class="flex gap-x-3">
                    <div class="bg-amber-100 px-3 py-2 rounded-full">
                        {{ info.transmission_type == 1 ? 'Số tự động' : 'Số sàn' }}
                    </div>
                    <div v-if="info.isDelivery" class="bg-green-100 px-3 py-2 rounded-full">
                        Giao tận nơi
                    </div>
                </div>
                <div>
                    <template v-for="(rate,index) in info.rating">
                        <div class="flex items-center gap-x-1">
                            <div class="flex items-center gap-x-px w-8 justify-between">
                                <span>{{index+1}}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-5 h-5 fill-yellow-400">
                                    <path fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd" />
                                </svg>

                            </div>
                            <div class="w-80 h-2 rounded-full bg-gray-300">
                                <div :style="{ width: `${(rate / info.total_review) * 100}%` }"
                                    class="h-2 bg-yellow-400 rounded-l-full" :class="{'rounded-r-full':(rate / info.total_review) * 100 == 100}"></div>
                            </div>
                            <div class="flex gap-x-px w-14 justify-end text-sm text-gray-600">
                                <span>{{ rate }}</span> /
                                <span>{{ info.total_review }}</span>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['info'])
const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',

});
</script>
