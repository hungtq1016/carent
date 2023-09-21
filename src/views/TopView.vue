<template>
    <TheTop/>
     <Suspense>
        <TheBrand />
        <template #fallback>
            <BrandLoading/>
        </template>
    </Suspense>
    <Suspense>
        <TheSuggest />
        <template #fallback>
            <CarThumbLoading :loop="8"/>
        </template>
    </Suspense>
    <TheStep />
    <Suspense>
        <TheLocation />
        <template #fallback>
            <BrandLoading/>
        </template>
    </Suspense>
    <TheRegister />
    <TheBlog />
</template>

<script setup lang="ts">
import TheTop from '../components/TopPage/TheTop.vue'
import TheBrand from '../components/TopPage/Brand/TheBrand.vue'
import TheSuggest from '../components/TopPage/Suggest/TheSuggest.vue'
import TheStep from '../components/TopPage/Step/TheStep.vue'
import TheLocation from '../components/TopPage/Location/TheLocation.vue';
import TheRegister from '../components/TopPage/Register/TheRegister.vue';
import TheBlog from '../components/TopPage/Blog/TheBlog.vue';
import BrandLoading from '@/components/Loading/BrandLoading.vue';
import CarThumbLoading from '@/components/Loading/CarThumbLoading.vue';
</script>

