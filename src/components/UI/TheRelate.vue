<template>
    <section class="py-5">
        <div class="max-w-screen-xl mx-4 md:mx-8 lg:mx-auto">
            <h2 class="text-3xl font-semibold pb-4 dark:text-gray-200">Xe tương tự</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                <TheItem v-for="(car, index) in cars" :car="car" :key="index" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import TheItem from '../Card/TheItem.vue';

    const props = defineProps(['cars'])
</script>
