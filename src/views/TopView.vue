<template>
    <main>
        <TheTop/>
        <TheCategory/>
        <TheSuggest/>
        <TheStep/>
        <Suspense>
            <TheLocation/>
            <template #fallback>
                <div>Loading...</div>
            </template>
        </Suspense>
    </main>
</template>

<script setup lang="ts">
import TheTop from '../components/TopPage/TheTop.vue'
import TheCategory from '../components/TopPage/Category/TheCategory.vue'
import TheSuggest from '../components/TopPage/Suggest/TheSuggest.vue'
import TheStep from '../components/TopPage/Step/TheStep.vue'
import TheLocation from '../components/TopPage/Location/TheLocation.vue';
</script>

