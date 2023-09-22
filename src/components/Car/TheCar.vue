<template>
    <div class="bg-white dark:bg-zinc-950">
        <ImageCarouselLoading v-if="isFetch" />
        <TheImage v-else :images="car.images" />
        <CarDetailLoading v-if="isFetch" />
        <TheDetail v-else :data="car.info" />
        <TabsLoading v-if="isFetch" />
        <TheTabs v-else :tabs="car.tabs" :car_id="car.id" />
        <CarThumbLoading v-if="isFetch" />
        <TheRelate v-else :cars="car.relate" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref,provide, computed } from 'vue';
import { useFetch } from '@vueuse/core';
import { URL } from '@/lib/fetch';
import { useRoute } from 'vue-router';
import { useRent } from '@/stores/rent';

import TheImage from './Image/TheImage.vue';
import TheRelate from '@/components/UI/TheRelate.vue';
import CarDetailLoading from '@/components/Loading/CarDetailLoading.vue';
import TabsLoading from '@/components/Loading/TabsLoading.vue';
import CarThumbLoading from '@/components/Loading/CarThumbLoading.vue';
import ImageCarouselLoading from '@/components/Loading/ImageCarouselLoading.vue';
import TheDetail from './Detail/TheDetail.vue';
import TheTabs from './Tabs/TheTabs.vue';

const right = ref(1)
const comment_count = computed(()=>(right.value-2)/2)
const updateRight = (val:number) =>right.value=val

provide('messageRight', {
    right,updateRight,comment_count
})
const car = ref()
const id = useRoute().params.id;
const isFetch = ref<boolean>(true)
const rentStore = useRent()
onMounted(async () => {
    const { data} = await useFetch(`${URL}/car/${id}`).get().json()
    
    car.value = data.value.data
    isFetch.value = false   
    console.log(car.value);
    updateRight(car.value.info.right_comment)
    rentStore.rent.owner_id = car.value.id
    rentStore.rent.address = car.value.info.address
    rentStore.absoluteAddress = rentStore.rent.address
})

</script>
