<template>
  <section class="py-10 dark:bg-zinc-950 dark:text-gray-100">
    <div class="max-w-screen-xl mx-4 md:mx-8 lg:mx-auto">
      <div class="lg:flex lg:h-full lg:flex-col">
        <header class="flex items-center justify-between border-b border-gray-200 py-4 lg:flex-none">
          <h1 class="text-base font-semibold leading-6 text-gray-900">
            <div class="text-gray-900 dark:text-gray-100 capitalize">{{ format(new Date(`${selectedMonth}/01/${selectedYear}`),'MMMM yyyy',{locale:vi}) }}</div>
          </h1>
          <div class="flex flex-col md:flex-row items-center gap-3">
              <select class="bg-gray-100 border-y border-gray-300 px-3.5 py-2 rounded-md border-none text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative"
                id="month" v-model="selectedMonth" @change="()=>selectedDay=new Date(`${selectedMonth}/01/${selectedYear}`)">
                  <option value="null">Vui lòng chọn tháng</option>
                  <option v-for="month in 12" :value="month">Tháng {{ month }}</option>
                </select>
              <select class="bg-gray-100 border-y border-gray-300 px-3.5 py-2 rounded-md border-none text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative"
              id="year" v-model="selectedYear" @change="()=>selectedDay=new Date(`${selectedMonth}/01/${selectedYear}`)">
                <option value="-1">Vui lòng chọn năm</option>
                <option v-for="year in 40" :value="year+1990">Năm {{ year+1990 }}</option>
              </select>
          </div>
        </header>
        <div class="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
          <div
            class="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
            <div v-for="week in weeks"
             class="bg-white dark:bg-zinc-700 dark:text-gray-100 py-2" v-html="week">
            </div>
          </div>
          <div class="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
            <div class="w-full grid grid-cols-7 grid-rows-6 gap-px">
              <div v-for="(day, index) in getDaysForCalendarMonth" :key="index">
                <div class="bg-white py-2 md:py-5 text-center text-base hover:bg-gray-100 duration-300 dark:bg-zinc-700 dark:text-gray-200 dark:hover:bg-gray-700" 
                :class="{ 'shadow-inner bg-zinc-300 hover:bg-gray-300/90 dark:bg-zinc-800 dark:hover:bg-gray-800': !day.currentMonth,
                '!bg-sky-600 text-gray-100 hover:bg-sky-600':day.currentDay,
                '!text-amber-100 !bg-amber-600 mix-blend-multiply':daysRent?.findIndex((d:any)=>compareAsc(d,day.date)==0) != -1 ? true:false
                }">{{ format(day.date, 'd') }}</div>
          
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script setup lang="ts">
import { startOfMonth, startOfWeek, endOfMonth, endOfWeek, toDate, isBefore, addDays, format, getMonth, getDate, getYear,eachDayOfInterval, compareAsc, daysInWeek } from 'date-fns'
import { vi } from 'date-fns/locale';
import { computed, ref, watch } from 'vue';
const props = defineProps(['car'])
const selectedDay = ref(new Date()) 
const selectedMonth =ref(getMonth(new Date)+1)
const selectedYear =ref(getYear(new Date))
const daysRent =ref()
watch(()=>props.car,(newVal)=>{  
  daysRent.value = newVal.length ==0 ?[]: eachDayOfInterval({ start: new Date(newVal.start_day), end: new Date(newVal.end_day) })  
})
const weeks = [ 'C<span class="hidden md:inline">hủ</span> N<span class="hidden md:inline">hật</span>','Thứ 2','Thứ 3','Thứ 4','Thứ 5','Thứ 6','Thứ 7']
const getDaysForCalendarMonth = computed(() => {
  const firstDayOfMonth = startOfMonth(selectedDay.value);
  const firstDayOfCal = startOfWeek(firstDayOfMonth);
  const lastDayOfMonth = endOfMonth(firstDayOfMonth);
  const lastDayOfCal = endOfWeek(lastDayOfMonth);
  let currentDay = getDate(new Date())
  let currentMonth = getMonth(new Date())+1
  let currentYear = getYear(new Date())

  let temp = firstDayOfCal;
 
  let days = [{
    date: toDate(temp),
    currentMonth:getMonth(temp)+1 == selectedMonth.value ?? false,
    currentDay:(getDate(toDate(temp)) == currentDay && getMonth(temp)+1 == currentMonth && getYear(temp) == currentYear) ?? false,
  }];
  while (isBefore(temp, lastDayOfCal) && days.length < 42) {
    temp = addDays(temp, 1);    
    days.push({
      date: toDate(temp),
      currentMonth:getMonth(temp)+1 == selectedMonth.value ?? false,
      currentDay:(getDate(toDate(temp)) == currentDay && getMonth(temp)+1 == currentMonth && getYear(temp) == currentYear) ?? false,
    });
  }
  while (days.length < 42) {
    temp = addDays(temp, 1);
    days.push({
      date: toDate(temp),
      currentMonth:getMonth(temp)+1 == selectedMonth.value ?? false,
      currentDay:(getDate(toDate(temp)) == currentDay && getMonth(temp)+1 == currentMonth && getYear(temp) == currentYear) ?? false,

    });
  }
  
  return days;
})

</script>