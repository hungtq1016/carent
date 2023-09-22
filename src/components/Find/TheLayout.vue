<template>
    <section class="py-10 dark:bg-zinc-950">
        <div class="max-w-screen-xl lg:mx-auto md:mx-8 mx-4 min-h-screen">
            <div class="text-xl text-gray-900 font-semibold text-center dark:text-gray-100 " v-if="carsStore.cars.length == 0 &&!carsStore.isLoading">Không có xe theo
                yêu cầu của bạn</div>
            <template v-else>
                <div class="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-3" v-if="carsStore.cars.length >0">
                    <TheItem v-for="(car, index) in carsStore.cars" :car="car" :key="index" />
                </div>
                <CarThumbLoading v-if="carsStore.isLoading" :loop="8" />
            </template>
        </div>
    </section>
</template>

<script setup lang="ts">
import TheItem from '@/components/Card/TheItem.vue';
import { useCars } from '@/stores/cars';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import CarThumbLoading from '../Loading/CarThumbLoading.vue';


const carsStore = useCars()
const route = useRoute()

window.onscroll = function (ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        if (carsStore.page < carsStore.last_page) {
            carsStore.page ++;
            carsStore.debounce()            
        }
    }
};

onMounted(() => {
    carsStore.query = { ...carsStore.query, ...route.query }
})

</script>
