<template>
    <button @click="toggleLike" class="border-gray-600 border p-1 rounded-full relative group dark:border-slate-400"
        :class="{ 'border-rose-600 dark:!border-rose-600': isAuthen && isLike }">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6 stroke-gray-600 dark:fill-slate-400 dark:stroke-slate-400"
            :class="{ 'stroke-rose-600 fill-rose-600 dark:!fill-rose-600 dark:!stroke-rose-600': isAuthen && isLike }">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
        <div
            class="absolute -bottom-2 left-0 text-xs text-gray-600 hidden group-hover:inline-block bg-white shadow w-20 text-center translate-y-full -translate-x-1/2 rounded-md">
            {{isLike?'Hủy Thích':'Yêu Thích'}}
        </div>
    </button>
</template>

<script setup lang="ts">
import { URL } from '@/lib/fetch';
import useAuthen from '@/lib/hook/useAuthen';
import useUser from '@/lib/hook/useUser';
import type { IUser } from '@/lib/interface';
import { useDark, useFetch } from '@vueuse/core';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { toast } from 'vue3-toastify';
const props = defineProps(['user_like'])
const emit = defineEmits(['updateUser'])

const user_like = ref<Array<Partial<IUser>>>([])
onMounted(()=>user_like.value =props.user_like)
const post_id = useRoute().params.id;
const isAuthen = useAuthen()
const user = useUser()
const isDark = useDark()
const isLike = computed(() =>user_like.value.some(person => person.id == user.id))
const toggleLike = async () => {
    if (!isAuthen) {
        toast('Yêu cầu đăng nhập', {
            autoClose: 1000,
            type: 'error',
            theme: isDark.value ? 'dark' : 'light'
        });
    } else {
        let payload = {
            post_id: post_id,
            user_id: user.id,
            type:'car',
            like: !isLike.value
        }
        const { data, isFinished } = await useFetch(`${URL}/like`).post(payload).json()
        user_like.value = data.value.data
        emit('updateUser',user_like.value)
    }
}
</script>

<style>
</style>