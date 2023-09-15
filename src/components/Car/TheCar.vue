<template>
    <section class="py-5">
        <div class="max-w-screen-xl mx-auto">
            <ImageCarouselLoading v-if="isFetch"/>
            <CarImages v-else :images="car.images"/>
            <div v-if="isFetch">Loading...</div>
            <CarDetail v-else :data="car.info"/>
        </div>
        <div v-if="isFetch">Loading...</div>
        <CarPanel v-else :tab="car.tab" :car_id="car.id"/>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useFetch } from '@vueuse/core';
import { URL } from '@/lib/fetch';
import { useRoute } from 'vue-router';

import CarImages from './CarImages.vue';
import CarDetail from './CarDetail.vue';
import ImageCarouselLoading from '@/components/Loading/ImageCarouselLoading.vue';
import CarPanel from './CarPanel.vue';

const car = ref()
const carSlug = useRoute().params.carSlug;
const id = useRoute().params.id;
const isFetch = ref<boolean>(true)
onMounted(async ()=>{
    const {data,error,isFetching} = await useFetch(`${URL}/car/${id}`).get().json()
    car.value = data.value.data
    isFetch.value = false
    console.log(data.value.data);

})

</script>
