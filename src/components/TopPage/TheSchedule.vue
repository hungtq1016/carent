<template>
    <div class="absolute inset-x-0 bottom-0 translate-y-1/2 z-[2]">
        <div class="max-w-screen-xl xl:mx-auto bg-white dark:bg-zinc-800 shadow rounded-md p-4 lg:px-10 lg:py-5 space-y-5 dark:shadow-zinc-900">
            <div class="grid w-full gap-2 md:gap-6 grid-cols-1 md:grid-cols-2">
                    <div>
                        <input type="radio" id="by-self" v-model="carsStore.query.delivery" name="needDriver" :value="false" class="hidden peer"
                            required>
                        <label for="by-self"
                            class="inline-flex items-center justify-between w-full p-2 lg:p-5 text-gray-500 text-sm lg:text-base bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-amber-500 peer-checked:border-amber-600 peer-checked:text-amber-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-zinc-900 dark:hover:bg-zinc-950">
                            <div class="block">
                                <div class="w-full text-lg font-semibold">Tự Lái</div>
                            </div>
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="need-driver" v-model="carsStore.query.delivery" name="needDriver" :value="true" class="hidden peer">
                        <label for="need-driver"
                            class="inline-flex items-center justify-between w-full p-2 lg:p-5 text-gray-500 text-sm lg:text-base bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-amber-500 peer-checked:border-amber-600 peer-checked:text-amber-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-zinc-900 dark:hover:bg-zinc-950">
                            <div class="block">
                                <div class="w-full text-lg font-semibold">Thuê Tài Xế</div>
                            </div>
                        </label>
                    </div>
                </div>
            <div class="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-12 gap-2">
                <div class="col-span-1 md:col-span-2 xl:col-span-3">
                    <label for="location" class="font-semibold text-lg">
                        Địa điểm
                    </label>
                    <div class="grid grid-cols-2 gap-x-2">
                        <select id="location"  v-model="carsStore.province"
                        class="w-full border-b text-sm py-2 px-1 focus:ring-0 focus:outline-none text-gray-900 hover:text-amber-600 hover:border-amber-600 duration-200 dark:bg-zinc-900 dark:text-gray-100 dark:border-none">
                            <option v-for="province in provinceStore.provinces" :value="province">{{ province.name }}</option>
                    </select>
                    <select id="district" v-model="carsStore.district"
                    class="w-full border-b text-sm py-2 px-1 focus:ring-0 focus:outline-none text-gray-900 hover:text-amber-600 hover:border-amber-600 duration-200 dark:bg-zinc-900 dark:text-gray-100 dark:border-none">
                        <option v-for="district in provinceStore.districts" :value="district">{{ district.name }}</option>        
                    </select>
                    </div>
                </div>
                <div class="col-span-1 md:col-span-2 xl:col-span-2">
                    <label for="seat" class="font-semibold text-lg">
                        Chỗ Ngồi
                    </label>
                    <select id="seat" v-model="carsStore.query.seat"
                    class="w-full border-b text-sm py-2 px-1 focus:ring-0 focus:outline-none text-gray-900 hover:text-amber-600 hover:border-amber-600 duration-200 dark:bg-zinc-900 dark:text-gray-100 dark:border-none">
                        <option v-for="seat in seats" :value="seat == 0 ? 'all':seat">{{ seat == 0 ? 'Tất cả':seat }}</option>
                    </select>
                </div>
                <div class="col-span-1 md:col-span-2 xl:col-span-3">
                    <label for="price" class="font-semibold text-lg">
                        Giá
                    </label>
                    <div class="flex items-center gap-x-1">
                        <input type="number" id="start-price" placeholder="Từ" v-model="carsStore.query.priceStart"
                        class="w-full border-b text-sm py-2 px-1 focus:ring-0 focus:outline-none text-gray-900 hover:text-amber-600 hover:border-amber-600 duration-200 dark:bg-zinc-900 dark:text-gray-100 dark:border-none hover:placeholder:text-amber-600">
                        -
                        <input type="number" id="end-price" placeholder="Đến" v-model="carsStore.query.priceEnd"
                        class="w-full border-b text-sm py-2 px-1 focus:ring-0 focus:outline-none text-gray-900 hover:text-amber-600 hover:border-amber-600 duration-200 dark:bg-zinc-900 dark:text-gray-100 dark:border-none hover:placeholder:text-amber-600">
                    </div>
                </div>
                <div class="col-span-1 md:col-span-2 xl:col-span-3">
                    <label for="date" class="font-semibold text-lg">
                        Ngày Đi - Ngày Về
                    </label>
                    <VueDatePicker class="schedule" :enable-time-picker="false" cancelText="Hủy" selectText="Gửi" fixed-start min-range="1" format="dd-MM-yyyy"
                    id="date" v-model="carsStore.date" range :format-locale="vi"></VueDatePicker>

                </div>
                <div class="flex justify-end col-span-1 md:col-span-4 xl:col-span-1">
                    <button @click="carsStore.submit"
                    class="bg-amber-100 text-amber-600 rounded-md py-3 px-4 xl:px-6 xl:py-4 hover:bg-amber-600 duration-300 text-sm xl:text-base dark:bg-amber-600 dark:shadow-amber-600 dark:text-gray-100 dark:hover:bg-orange-600 dark:hover:shadow-md dark:hover:shadow-orange-600">Tìm</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.schedule .dp__input{
    @apply border-b border-t-0 border-x-0 rounded-none duration-200 dark:bg-zinc-900 dark:border-none dark:text-gray-50 hover:text-amber-600;
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

<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker';
import { vi } from 'date-fns/locale';
import { useCars } from '@/stores/cars';
import { useProvinces } from '@/stores/provinces';

const seats = [0,2,4,5,7,9,16]

const carsStore = useCars()
const provinceStore = useProvinces()

</script>
