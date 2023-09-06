<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/inc/TheHeader.vue';
import TheFooter from './components/inc/TheFooter.vue';
</script>

<template>
  <TheHeader/>
  <main>
    <RouterView />
  </main>
  <TheFooter/>
</template>

