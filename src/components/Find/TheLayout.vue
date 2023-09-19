<template>
    <CarThumbLoading v-if="isLoading" :loop="8"/>
    <section class="py-10" v-else>
        <div class="max-w-screen-xl mx-auto">
            <div class="grid grid-cols-4 gap-3">
                <TheItem v-for="(car, index) in carsStore.cars" :car="car" :key="index" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import TheItem from '@/components/Card/TheItem.vue';
import { useCars } from '@/stores/cars';
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import CarThumbLoading from '../Loading/CarThumbLoading.vue';
const carsStore = useCars()
const route = useRoute()
const isLoading = ref(false)
const queryUrl = () =>{
    const query = route.query
    carsStore.seat = query.seat ? String(query.seat):'all'
    carsStore.brand = query.brand ? String(query.brand):'all'
    carsStore.selectedProvince = query.province ? String(query.province):'all'
    carsStore.selectedDistrict = query.district ? String(query.district):'all'

}

onMounted(()=>{
    isLoading.value =true
    queryUrl()
    carsStore.fetchCars()
    isLoading.value = false
})
watch(()=>[route.query],()=>{
    queryUrl()

})

</script>
