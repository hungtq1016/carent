<template>
    <section class="pt-10 pb-40 bg-amber-50 relative dark:bg-slate-800 dark:text-slate-200">
        <div class="max-w-screen-xl mx-auto">
            <div class="grid grid-cols-2 justify-between">
                <TheApp/>
                <TheReview/>
            </div>
        </div>
        <Suspense>
            <TheSchedule/>
            <template #fallback>
                Loading...
            </template>
        </Suspense>
    </section>
</template>

<script setup lang="ts">
import TheApp from './TheApp.vue';
import TheReview from './TheReview.vue';
import TheSchedule from './TheSchedule.vue';
</script>
