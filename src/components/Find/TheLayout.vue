<template>
    <!-- <CarThumbLoading v-if="isLoading" :loop="8"/> -->
    <section class="py-10">
        <div class="max-w-screen-xl mx-auto">
            <div class="text-xl text-gray-900 font-semibold text-center" v-if="carsStore.cars.length == 0">Không có xe theo yêu cầu của bạn</div>
            <div class="grid grid-cols-4 gap-3" v-else>
                <TheItem v-for="(car, index) in carsStore.cars" :car="car" :key="index" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import TheItem from '@/components/Card/TheItem.vue';
import { useCars } from '@/stores/cars';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';


const carsStore = useCars()
const route = useRoute()


onMounted(()=>{
    carsStore.query = route.query 
    carsStore.fetchCars()       
})

</script>
