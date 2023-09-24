<template>
    <button @click="toggleLike" class="border-gray-600 border p-1 rounded-full relative group dark:border-slate-400"
        :class="{ 'border-rose-600 dark:!border-rose-600': isAuthen && isFavorite }">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="md:w-6 md:h-6 w-4 h-4 stroke-gray-600 dark:fill-slate-400 dark:stroke-slate-400"
            :class="{ 'stroke-rose-600 fill-rose-600 dark:!fill-rose-600 dark:!stroke-rose-600': isAuthen && isFavorite }">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
        <div
            class="absolute -bottom-2 left-0 text-xs text-gray-600 hidden group-hover:inline-block bg-white shadow w-20 text-center translate-y-full -translate-x-1/2 rounded-md">
            {{isFavorite?'Hủy Thích':'Yêu Thích'}}
        </div>
    </button>
</template>

<script setup lang="ts">
import { URL } from '@/lib/fetch';
import { useDark, useFetch } from '@vueuse/core';
import { inject } from 'vue';
import { useRoute } from 'vue-router';
import { toast } from 'vue3-toastify';

const {updateFavorite,isFavorite} = inject<any>('car-favorite')
const {isAuthen,user} = inject<any>('user')

const post_id = useRoute().params.id;
const isDark = useDark()
const toggleLike = async () => {
    if (!isAuthen.value) {
        toast('Yêu cầu đăng nhập', {
            autoClose: 1000,
            type: 'error',
            theme: isDark.value ? 'dark' : 'light'
        });
        
    } else {
        
        let payload = {
            post_id: post_id,
            user_id: user.value.id,
            type:'car',
            like: !isFavorite.value
        }
        const { data } = await useFetch(`${URL}/like`).post(payload).json()
        updateFavorite(data.value.data)
    }
}
</script>

<style>
</style>