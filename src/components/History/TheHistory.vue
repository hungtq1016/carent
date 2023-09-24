<template>
    <section class="py-10 max-h-screen overflow-y-auto dark:bg-zinc-900">
        <div class="max-w-screen-xl mx-4 md:mx-8 lg:mx-auto">
            <div class="space-y-2">
                <HistoryItem v-for="item in history" :item="item"/>
            </div>
        </div>
    </section>
    <TheCalendar :car="findCar"/>
</template>

<script setup lang="ts">
import { URL } from '@/lib/fetch';
import { useFetch } from '@vueuse/core';
import { inject,ref} from 'vue';
import HistoryItem from './HistoryItem.vue';
import TheCalendar from './TheCalendar.vue';
const {user} = inject<any>('user')
const history = ref([])
const findCar =ref([])
const fetchHistory = async ()=>{
    const {data} = await useFetch(URL+`/rent?user_id=${user.value.id}`).get().json()
    history.value = data.value.data    
    findCar.value = history.value.find((item:any)=>item.status==0) ?? []
}
fetchHistory()

</script>

<style scoped>

</style>