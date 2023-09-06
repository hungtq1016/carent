<template>
    <div class="absolute inset-x-0 bottom-0 translate-y-1/2 z-[2]">
        <div class="max-w-screen-xl mx-auto bg-white shadow rounded-md px-10 py-5 space-y-5 ">
            <div class="grid w-full gap-6 md:grid-cols-2">
                    <div>
                        <input type="radio" id="by-self" v-model="rent" name="rent" value="bySelf" class="hidden peer"
                            required>
                        <label for="by-self"
                            class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-amber-500 peer-checked:border-amber-600 peer-checked:text-amber-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div class="block">
                                <div class="w-full text-lg font-semibold">Tự Lái</div>
                            </div>
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="need-driver" v-model="rent" name="rent" value="needDriver" class="hidden peer">
                        <label for="need-driver"
                            class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-amber-500 peer-checked:border-amber-600 peer-checked:text-amber-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div class="block">
                                <div class="w-full text-lg font-semibold">Thuê Tài Xế</div>
                            </div>
                        </label>
                    </div>
                </div>
            <div class="grid grid-cols-12 gap-x-2">
                <div class="col-span-4">
                    <label for="location" class="font-semibold text-lg">
                        Địa điểm
                    </label>
                    
                    <div class="grid grid-cols-2 gap-x-2">
                        <select id="location"  v-model="selectedProvince"
                        class="w-full border-b text-sm py-2 px-1 focus:ring-0 focus:outline-none hover:text-amber-600 hover:border-amber-600 duration-200">
                            <option v-for="province in provinces" :value="province">{{ province.name }}</option>
                    </select>
                    <select id="district" v-model="selectedDistrict"
                    class="w-full border-b text-sm py-2 px-1 focus:ring-0 focus:outline-none hover:text-amber-600 hover:border-amber-600 duration-200">
                        <option value="all">Không</option>    
                        <option v-for="district in selectedProvince.districts" :value="district.codename">{{ district.name }}</option>        
                    </select>
                    </div>
                </div>
                <div>
                    <label for="seat" class="font-semibold text-lg">
                        Chỗ Ngồi
                    </label>
                    <select id="seat" v-model="selectedSeat"
                    class="w-full border-b text-sm py-2 px-1 focus:ring-0 focus:outline-none hover:text-amber-600 hover:border-amber-600 duration-200">
                        <option v-for="seat in seats" :value="seat">{{ seat }}</option>
                    </select>
                </div>
                <div class="col-span-3">
                    <label for="price" class="font-semibold text-lg">
                        Giá
                    </label>
                    <div class="flex items-center gap-x-1">
                        <input type="number" id="start-price" placeholder="Từ" v-model="startPrice"
                        class="w-full border-b text-sm py-2 px-1 focus:ring-0 focus:outline-none hover:text-amber-600 hover:border-amber-600 duration-200 hover:placeholder:text-amber-600">
                        -
                        <input type="number" id="end-price" placeholder="Đến" v-model="endPrice"
                        class="w-full border-b text-sm py-2 px-1 focus:ring-0 focus:outline-none hover:text-amber-600 hover:border-amber-600 duration-200 hover:placeholder:text-amber-600">
                    </div>
                </div>
                <div class="col-span-3">
                    <label for="date" class="font-semibold text-lg">
                        Ngày Đi - Ngày Về
                    </label>
                    <VueDatePicker :enable-time-picker="false" cancelText="Hủy" selectText="Gửi" fixed-start min-range="1" format="dd-MM-yyyy"
                    id="date" v-model="selectedDate" range :format-locale="vi"></VueDatePicker>

                </div>
                <div class="flex items-center justify-end">
                    <button @click="submit"
                    class="bg-amber-100 text-amber-600 rounded-md px-6 py-4 hover:bg-amber-600 hover:text-white duration-300 hover:font-bold">Tìm</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.dp__input{
    @apply border-b border-t-0 border-x-0 rounded-none hover:text-amber-600 hover:border-amber-600 duration-200;
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
import getAllProvinces from '@/lib/fetch/getAllProvinces';
import { onMounted, ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import { vi } from 'date-fns/locale';
import { useRouter } from 'vue-router';

const rent = ref('bySelf')
const {data:provinces,error,isFetching} = await getAllProvinces()
const seats = [2,4,5,7,9,16]
const router = useRouter()

const selectedProvince =ref(provinces.value[49])
const selectedDistrict =ref('all')
const selectedSeat =ref('4')
const selectedDate = ref();
const startPrice = ref(500000);
const endPrice = ref(10000000);

onMounted(() => {
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
  selectedDate.value = [startDate, endDate];
})

const submit = () => {
    router.push({
        name: 'FindCars',
        query: {
          province:selectedProvince.value.codename,
          district:selectedDistrict.value,
          seat:selectedSeat.value,
          'starPrice':startPrice.value,
          'endPrice':endPrice.value,
          'starDate':selectedDate.value[0].toLocaleDateString('vi-VN'),
          'endDate':selectedDate.value[1].toLocaleDateString('vi-VN'),
        },
      })
}
</script>
