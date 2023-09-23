<template>
  <section class="py-5 min-h-screen dark:bg-zinc-900">
    <div class="max-w-screen-xl mx-4 md:mx-8 lg:mx-auto">
      <ul role="list" class="space-y-3">
      <FavoriteItem v-for="favorite in favorites" :favorite="favorite" :user="user"
      @update-list="(val)=>favorites = val" />
      <div v-if="favorites.length==0" class="flex w-full h-full items-center justify-center text-gray-900 dark:text-gray-100">
        Không có yêu thích nào
      </div>
    </ul>
    </div>
  </section>
    
  </template>
  
  <script setup lang="ts">
import { URL } from '@/lib/fetch';
import { useFetch } from '@vueuse/core';
import { inject, onMounted, ref } from 'vue';
import FavoriteItem from './FavoriteItem.vue';
const {user} = inject<any>('user')
const favorites = ref([])

  onMounted(()=>{
    fetchFavorite()
  })
  const fetchFavorite = async ()=>{
    const {data} = await useFetch(`${URL}/like?user_id=${user.value.id}&type=car`).get().json()
    favorites.value = data.value.data    
  }
  </script>