<template>
    <button @click="findCarsByLocation" class="px-1">
        <div class="px-4 py-2 bg-black/50 rounded-md whitespace-nowrap dark:bg-gray-800">
                <div class="text-xl font-semibold text-white dark:text-gray-200">{{ district.name }}</div>
                <div class="text-sm text-white dark:text-slate-100">{{ district.car_count }}+ xe</div>
            </div>
    </button>
</template>

<script setup lang="ts">
import { useCars } from '@/stores/cars';
import { useRouter } from 'vue-router';

    const props = defineProps(['district','province'])
    const router = useRouter()
    const carsStore = useCars()
    const findCarsByLocation = () => {
        router.push({
            name: 'FindCars',
        })
        carsStore.query.province = props.province.slug
        carsStore.query.district = props.district.slug
}
</script>

