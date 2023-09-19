<template>
    <TheFilter/>
    <TheLayout :key="$route.fullPath"/>
</template>

<script setup lang="ts">
import TheFilter from '@/components/Find/TheFilter.vue';
import TheLayout from '@/components/Find/TheLayout.vue';
</script>