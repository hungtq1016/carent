<template>
    <div class="flex gap-x-3 items-center">
        <div>
            <div v-if="isLoading"
                class="h-32 w-32 rounded-full flex items-center justify-center bg-gray-300">
                <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path
                        d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
            </div>
            <img v-else class="rounded-full" :src="`https://randomuser.me/api/portraits/men/${rand}.jpg`" :alt="user.name">

        </div>
        <div class="flex flex-col gap-y-1">
            <div class="font-bold text-xl dark:text-slate-50">{{ user.name }}</div>
            <a class="text-gray-700 dark:text-slate-200" :href="`mailto:${user.email}`">{{ user.email }}</a>
            <div class="flex items-center dark:text-slate-100">
                <span>{{ user?.star?.toFixed(1) }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    class="w-5 h-5 fill-yellow-400">
                    <path fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd" />
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useImage } from '@vueuse/core';

const props = defineProps(['user'])
const rand = Math.floor(Math.random() * 100);
const { isLoading, error, isReady } = useImage({ src: `https://randomuser.me/api/portraits/men/${rand}.jpg` })

</script>
