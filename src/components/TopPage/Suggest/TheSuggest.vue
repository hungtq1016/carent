<template>
    <section class="py-10 bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
        <div class="max-w-screen-xl mx-auto">
            <h3 class="text-4xl font-bold text-center dark:text-slate-200">Dành Cho Bạn</h3>
            <div class="font-normal text-lg text-gray-600 text-center mt-3 dark:text-slate-100">Hàng vạn lựa chọn phù hợp theo yêu cầu của bạn.
            </div>
            <div class="grid grid-cols-4 gap-3 py-5">
                <TheItem v-for="(car, index) in cars.data" :car="car" :key="index" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import TheItem from '@/components/Card/TheItem.vue';
import getCars from '@/lib/fetch/getCars';

const {data:cars,error,isFetching} = await getCars()

</script>
