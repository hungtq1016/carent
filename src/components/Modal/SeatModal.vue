<template>
    <div class="grid grid-cols-2 gap-2">
        <button @click="findCarsBySeat(seat)" v-for="seat in seats"
        class="py-3 rounded-md dark:bg-zinc-600 dark:text-gray-100">
            {{ seat }}
        </button>
    </div>
</template>

<script setup lang="ts">
import {useBrands} from '@/stores/brands';
import { useCars } from '@/stores/cars';
import { useRouter } from 'vue-router';
const router = useRouter()
const carsStore = useCars()
const emit = defineEmits(['closeModal'])

const seats = [2,3,4,5,7,9]

const findCarsBySeat = (seat: number) => {
    router.push({
        name: 'FindCars',
    })
    carsStore.query.seat = seat,
    emit('closeModal')
}
</script>
