<template>
    <li
      class="flex justify-between items-center gap-x-6 p-5 bg-gray-50 dark:bg-zinc-700 hover:shadow dark:shadow-zinc-400 duration-300 rounded-md">
      <RouterLink :to="`/car/${item.slug}/id/${item.id}`">
        <div class="flex min-w-0 gap-x-4">
          <img class="h-32 w-32 flex-none rounded-md object-cover" :src="IMG_URL + item.image.path" alt="" />
          <div class="min-w-0 flex-auto">
            <p class="font-semibold leading-6 text-gray-900 dark:text-gray-100 capitalize text-lg">{{ item.name }}</p>
            <p class="mt-1 truncate leading-5 text-gray-500 dark:text-gray-200">{{ useFormatCurrency(item.total) }}</p>
          </div>
          <div class="flex flex-col gap-y-2">
            <div class="text-gray-900 font-semibold line-clamp-1 hover:line-clamp-2 dark:text-gray-100">{{item.address }}</div>
            <div class="flex gap-x-2 items-center text-gray-600 text-sm dark:text-gray-200"><span>{{ format(new Date(item.start_day), 'dd-MM-yyyy',{locale:vi})  }}</span><span>đến</span><span>{{ format(new Date(item.end_day), 'dd-MM-yyyy',{locale:vi}) }}</span></div>
          </div>
        </div>
      </RouterLink>
      <button v-if="item.isPending"
      class="px-3 py-1 bg-lime-100 text-lime-600 rounded-md h-fit dark:bg-lime-600 dark:text-gray-100">
        Đang thuê
      </button>
      <button v-else
      class="px-3 py-1 bg-sky-100 text-sky-600 rounded-md h-fit dark:bg-sky-600 dark:text-gray-100">
        Hoàn thành
      </button>
    </li>
  </template>
  
  <script setup lang="ts">
  import { IMG_URL } from '@/lib/fetch';
  import useFormatCurrency from '@/lib/hook/useFormatCurrency';
import format from 'date-fns/format';
import { vi } from 'date-fns/locale';
  
  const props = defineProps(['item'])

  </script>
  
  <style scoped></style>