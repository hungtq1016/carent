<template>
  <li
    class="flex justify-between  flex-col md:flex-row gap-y-2 items-center gap-x-6 p-2 md:p-5 bg-gray-50 dark:bg-zinc-700 hover:shadow dark:shadow-zinc-400 duration-300 rounded-md">
    <RouterLink :to="`/car/${item.slug}/id/${item.id}`" class="w-full">
      <div class="flex flex-col md:flex-row gap-y-2 gap-x-4">
        <img class="h-32 w-full md:w-32 flex-none rounded-md object-cover" :src="IMG_URL + item.image.path" alt="" />
        <div class="flex-auto flex flex-row md:flex-col gap-1 items-center md:items-center justify-between md:justify-start">
          <p class="font-semibold leading-6 text-gray-900 dark:text-gray-100 capitalize text-lg">{{ item.name }}</p>
          <p class="leading-5 text-gray-500 dark:text-gray-200">{{ useFormatCurrency(item.total) }}</p>
        </div>
        <div class="flex flex-row md:flex-col gap-2 justify-between md:justify-start items-center md:items-start">
          <div class="text-gray-900 font-semibold line-clamp-1 hover:line-clamp-2 dark:text-gray-100">{{ item.address }}
          </div>
          <div class="flex flex-col md:flex-row gap-2 items-center text-gray-600 text-sm dark:text-gray-200 whitespace-nowrap"><span>{{
            format(new Date(item.start_day), 'dd-MM-yyyy', { locale: vi }) }}</span><span>đến</span><span>{{ format(new
    Date(item.end_day), 'dd-MM-yyyy', { locale: vi }) }}</span></div>
        </div>
      </div>
    </RouterLink>
    <div class="flex w-full justify-start md:justify-end">
      <button v-if="item.status == 0"
        class="px-3 py-1 bg-lime-100 text-lime-600 rounded-md h-fit dark:bg-lime-600 dark:text-gray-100">
        Đang thuê
      </button>
      <button v-if="item.status == 1" class="px-3 py-1 bg-sky-100 text-sky-600 rounded-md h-fit dark:bg-sky-600 dark:text-gray-100">
        Hoàn thành
      </button>
      <button v-if="item.status == 2" class="px-3 py-1 bg-red-100 text-red-600 rounded-md h-fit dark:bg-red-600 dark:text-gray-100">
        Hủy Chuyến
      </button>
    </div>
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