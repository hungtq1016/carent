<template>
    <div class="min-h-screen">
        <Suspense>
        <TheHistory />
        <template #fallback>
            Loading...
        </template>
    </Suspense>
    </div>
</template>

<script setup lang="ts">
import TheHistory from '@/components/History/TheHistory.vue';
</script>

<style scoped>

</style>