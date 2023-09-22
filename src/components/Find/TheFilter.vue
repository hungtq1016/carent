<template>
    <section class="py-2 sticky top-0 bg-white z-10 shadow dark:bg-zinc-900/90 ">
        <div class="max-w-screen-xl lg:mx-auto sm:mx-4 md:mx-8">
            <div class="flex items-center gap-x-2">
                <button @click="()=>carsStore.query = carsStore.absoluteQuery" class="p-1 border rounded-md border-gray-600 hover:border-amber-600 duration-300 group dark:border-slate-100 dark:hover:border-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-gray-600 group-hover:fill-amber-600 duration-300 dark:fill-slate-100 dark:group-hover:fill-gray-400" viewBox="0 0 512 512">
                            <path
                                d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z" />
                        </svg>
                </button>
                <div class="flex-auto">
                    <div class="flex gap-x-2 border-l-2 border-amber-600 pl-2">
                        <FilterItem v-for="(filter,index) in filters" :key="index" :filter="filter"/>
                        <div>
                            <VueDatePicker class="date-find"
                            :enable-time-picker="false" cancelText="Hủy" selectText="Gửi" fixed-start min-range="1" format="dd-MM-yyyy" :multi-calendars="{ solo: true }"
                        id="date" v-model="selectedDate" range :format-locale="vi" ></VueDatePicker>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import FilterItem from "./FilterItem.vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import { ref,onMounted } from 'vue';
import { vi } from 'date-fns/locale';
import { useCars } from "@/stores/cars";
const carsStore = useCars()

const selectedDate = ref();
onMounted(() => {
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
  selectedDate.value = [startDate, endDate];
})
const filters = [
    {
        name:'Chỗ Ngồi',
        icon:'<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-gray-600 group-hover:fill-amber-600 duration-300 dark:fill-slate-100 dark:group-hover:fill-gray-400"  viewBox="0 0 240.235 240.235" xml:space="preserve"><path d="M211.744,6.089C208.081,2.163,203.03,0,197.52,0h-15.143c-11.16,0-21.811,8.942-23.74,19.934l-0.955,5.436  c-0.96,5.47,0.332,10.651,3.639,14.589c3.307,3.938,8.186,6.106,13.74,6.106h19.561c2.714,0,5.339-0.542,7.778-1.504l-2.079,17.761  c-2.001-0.841-4.198-1.289-6.507-1.289h-22.318c-9.561,0-18.952,7.609-20.936,16.961l-19.732,93.027l-93.099-6.69  c-5.031-0.36-9.231,1.345-11.835,4.693c-2.439,3.136-3.152,7.343-2.009,11.847l10.824,42.618  c2.345,9.233,12.004,16.746,21.53,16.746h78.049h1.191h39.729c9.653,0,18.336-7.811,19.354-17.411l15.272-143.981  c0.087-0.823,0.097-1.634,0.069-2.437l5.227-44.648c0.738-1.923,1.207-3.967,1.354-6.087l0.346-4.97  C217.214,15.205,215.407,10.016,211.744,6.089z"/></svg>',
        value:'seat',
        isOpenModal:true,
        nameModal:'SeatModal',
        isFetch:false
    },
    {
        name:'Hãng Xe',
        icon:'<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-gray-600 group-hover:fill-amber-600 duration-300 dark:fill-slate-100 dark:group-hover:fill-gray-400" viewBox="0 0 512 512"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/></svg>',
        value:'brand',
        isOpenModal:true,
        nameModal:'BrandModal',
        isFetch:true
    },
    {
        name:'Xe Điện',
        icon:'<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-gray-600 group-hover:fill-amber-600 duration-300 dark:fill-slate-100 dark:group-hover:fill-gray-400" viewBox="0 0 448 512"><path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/></svg>',
        value:'electric-car',
        isOpenModal:false,
        isFetch:false
    },
    {
        name:'Bộ Lọc',
        icon:'<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-gray-600 group-hover:fill-amber-600 duration-300 dark:fill-slate-100 dark:group-hover:fill-gray-400" viewBox="0 0 512 512"><path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/></svg>',
        value:'filter',
        isOpenModal:false,
        isFetch:false
    },
    {
        name:'Địa Điểm',
        icon:'<svg xmlns="http://www.w3.org/2000/svg"class="w-5 h-5 fill-gray-600 group-hover:fill-amber-600 duration-300 dark:fill-slate-100 dark:group-hover:fill-gray-400" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>',
        value:'location',
        isOpenModal:false,
        isFetch:false
    }
]


</script>

<style >
.date-find .dp__input{
    @apply hover:!border-amber-600 !rounded-md !border-gray-600 !py-1 !pl-10 !pr-5 dark:bg-transparent dark:!border-slate-100 dark:hover:!border-gray-400 dark:!text-gray-100 dark:hover:!text-gray-400
}
.dp__input_wrap:hover input{
    @apply text-amber-600
}
.dp__input_wrap svg{
    @apply fill-gray-600 dark:!fill-slate-100
}
.dp__input_wrap:hover svg{
    @apply fill-amber-600 duration-300 dark:!fill-gray-400
}
.dp__range_end, .dp__range_start, .dp__active_date{
    @apply bg-amber-600 border-amber-600
}
.dp__range_between{
    @apply bg-amber-50 border-amber-50
}
.dp__overlay_cell_active{
    @apply bg-amber-600
}
.dp__action_select{
    @apply bg-amber-600 hover:bg-orange-600
}
.dp__action_cancel{
    @apply hover:border-amber-600
}
</style>