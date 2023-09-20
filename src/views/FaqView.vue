<template>
  <div>
    <Suspense>
      <Test/>
      <template #fallback>
        Loading...
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import Test from './Test.vue';
</script>

<style scoped>

</style>