<template>
  <li
    class="flex relative justify-between gap-x-6 p-2 md:p-5 bg-gray-50 dark:bg-zinc-700 hover:shadow dark:shadow-zinc-400 duration-300 rounded-md">
    <RouterLink :to="`/car/${favorite.slug}/id/${favorite.id}`" class="w-full">
      <div class="flex flex-col md:flex-row gap-x-4 gap-y-2">
        <img class="w-full h-32 md:w-32 flex-none rounded-md object-cover" :src="IMG_URL + favorite.image.path" alt="" />
        <div class="min-w-0 flex-auto">
          <p class="font-semibold leading-6 text-gray-900 dark:text-gray-100 capitalize text-lg">{{ favorite.name }}</p>
          <p class="mt-1 truncate leading-5 text-gray-500 dark:text-gray-200">{{ useFormatCurrency(favorite.price) }}</p>
        </div>
        <div class="flex flex-row md:flex-col gap-2">
          <div class="bg-amber-100 text-gray-900 dark:bg-amber-600 dark:text-gray-100 w-fit px-3 py-1 rounded-md">{{
            favorite.fuel_type == 1 ? 'Xăng' : favorite.fuel_type == 2 ? 'Dầu' : 'Điện' }}</div>
          <div class="bg-sky-100 text-gray-900 dark:bg-sky-600 dark:text-gray-100 w-fit px-3 py-1 rounded-md">{{
            favorite.transmission_type == 1 ? 'Số Tự Động' : 'Số Sàn' }}</div>
        </div>
      </div>
    </RouterLink>
    <button @click="toggleLike" class="absolute md:relative top-2 right-2 md:top-0 md:right-0 bg-gray-200 dark:bg-zinc-700 rounded-full p-1 md:bg-transparent md:p-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
        class="w-6 h-6 text-gray-900 dark:text-gray-100">
        <path fillRule="evenodd"
          d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
          clipRule="evenodd" />
      </svg>
    </button>
  </li>
</template>

<script setup lang="ts">
import { IMG_URL, URL } from '@/lib/fetch';
import useFormatCurrency from '@/lib/hook/useFormatCurrency';
import { useDark, useFetch } from '@vueuse/core';
import { toast } from 'vue3-toastify';

const props = defineProps(['favorite', 'user'])
const isDark = useDark()
const emit = defineEmits(['updateList'])
const toggleLike = async () => {
  let payload = {
    post_id: props.favorite.id,
    type: 'car',
    like: false
  }
  const { data, isFinished } = await useFetch(`${URL}/like/${props.user.id}`).delete(payload).json();
  toast(data.value.message, {
    autoClose: 1000,
    type: data.value.error ? 'error' : 'default',
    theme: isDark.value ? 'dark' : 'light'
  });
  if (!data.value.error) {
    emit('updateList',data.value.data)
  }

}
</script>

<style scoped></style>