<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import TheHeader from './components/inc/TheHeader.vue';
import TheFooter from './components/inc/TheFooter.vue';
import { computed } from 'vue';
const router = useRouter()
const isFindCars = computed(() => router.currentRoute.value.name === 'FindCars')

</script>

<template>
  <TheHeader/>
  <main>
    <RouterView :key="$route.fullPath"/>
  </main>
  <TheFooter v-if="!isFindCars"/>
</template>

