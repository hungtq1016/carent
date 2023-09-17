<template>
    <ImageCarouselLoading v-if="isFetch" />
    <CarImages v-else :images="car.images" />
    <CarDetailLoading v-if="isFetch" />
    <CarDetail v-else :data="car.info" />
    <TabsLoading v-if="isFetch" />
    <CarPanel v-else :tabs="car.tabs" :car_id="car.id" />
    <CarThumbLoading v-if="isFetch" />
    <CarRelate v-else :cars="car.relate" />
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
import CarRelate from './CarRelate.vue';
import CarDetailLoading from '../Loading/CarDetailLoading.vue';
import TabsLoading from '../Loading/TabsLoading.vue';
import CarThumbLoading from '../Loading/CarThumbLoading.vue';
import { useRent } from '@/stores/rent';

const car = ref()
const id = useRoute().params.id;
const isFetch = ref<boolean>(true)
const rentStore = useRent()
onMounted(async () => {
    const { data} = await useFetch(`${URL}/car/${id}`).get().json()
    car.value = data.value.data
    isFetch.value = false
    rentStore.rent.owner_id = car.value.id
    rentStore.rent.address = car.value.info.location
    console.log(data.value.data);
})

</script>
