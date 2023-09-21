<template>
    <section class="py-10 bg-gray-50 dark:bg-zinc-950 dark:text-gray-100">
        <div class="max-w-screen-xl lg:mx-auto md:mx-8 mx-4">
            <h3 class="text-4xl font-bold text-center dark:text-gray-200">Dành Cho Bạn</h3>
            <div class="font-normal text-lg text-gray-600 text-center mt-3 dark:text-gray-100">Hàng vạn lựa chọn phù hợp theo yêu cầu của bạn.
            </div>
            <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 py-5">
                <TheItem v-for="(car, index) in cars.data" :car="car" :key="index" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import TheItem from '@/components/Card/TheItem.vue';
import getCars from '@/lib/fetch/getCars';

const {data:cars} = await getCars()

</script>
