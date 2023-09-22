<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import TheHeader from './components/inc/TheHeader.vue';
import TheFooter from './components/inc/TheFooter.vue';
import { computed, onMounted, provide, ref } from 'vue';
import type { IUser } from './lib/interface';
import useUser from './lib/hook/useUser';
import useAuthen from './lib/hook/useAuthen';
const router = useRouter()
const isFindCars = computed(() => router.currentRoute.value.name === 'FindCars')
const user = ref<IUser>()
const isAuthen = ref(false)
const updateUser = (value?:IUser)=>{
  user.value = value
}
const updateAuthen = (value:boolean)=>{
  isAuthen.value = value
}
provide('user', {
  user,updateUser,isAuthen,updateAuthen
})
onMounted(()=>{updateUser(useUser()),updateAuthen(useAuthen())})
</script>

<template>
  <TheHeader/>
  <main>
    <RouterView :key="$route.fullPath"/>
  </main>
  <TheFooter v-if="!isFindCars"/>
</template>

