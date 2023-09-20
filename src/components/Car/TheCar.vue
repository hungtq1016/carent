<template>
    <div class="bg-white dark:bg-gray-800">
        <ImageCarouselLoading v-if="isFetch" />
        <CarImages v-else :images="car.images" />
        <CarDetailLoading v-if="isFetch" />
        <CarDetail v-else :data="car.info" />
        <TabsLoading v-if="isFetch" />
        <CarPanel v-else :tabs="car.tabs" :car_id="car.id" />
        <CarThumbLoading v-if="isFetch" />
        <CarRelate v-else :cars="car.relate" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useFetch } from '@vueuse/core';
import { URL } from '@/lib/fetch';
import { useRoute } from 'vue-router';
import { useRent } from '@/stores/rent';

import CarImages from './CarImages.vue';
import CarDetail from './CarDetail.vue';
import CarPanel from './CarPanel.vue';
import CarRelate from './CarRelate.vue';
import CarDetailLoading from '@/components/Loading/CarDetailLoading.vue';
import TabsLoading from '@/components/Loading/TabsLoading.vue';
import CarThumbLoading from '@/components/Loading/CarThumbLoading.vue';
import ImageCarouselLoading from '@/components/Loading/ImageCarouselLoading.vue';


const car = ref()
const id = useRoute().params.id;
const isFetch = ref<boolean>(true)
const rentStore = useRent()
onMounted(async () => {
    const { data} = await useFetch(`${URL}/car/${id}`).get().json()
    car.value = data.value.data
    isFetch.value = false
    console.log(car.value);
    
    rentStore.rent.owner_id = car.value.id
    rentStore.rent.address = car.value.info.address
    rentStore.absoluteAddress = rentStore.rent.address
})

</script>
