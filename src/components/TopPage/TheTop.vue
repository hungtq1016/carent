<template>
    <section class="pt-10 pb-64 lg:pb-40 bg-amber-50 relative dark:bg-zinc-950 dark:text-gray-100">
        <div class="max-w-screen-xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 justify-between">
                <TheApp/>
                <TheReview/>
            </div>
        </div>
        <TheSchedule/>
    </section>
</template>

<script setup lang="ts">
import TheApp from './TheApp.vue';
import TheReview from './TheReview.vue';
import TheSchedule from './TheSchedule.vue';
</script>
