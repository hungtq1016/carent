<template>
  <Suspense>
    <TheFaq/>
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import TheFaq from '@/components/FaQ/TheFaq.vue';
</script>
