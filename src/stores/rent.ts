import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useRent = defineStore('rent', () => {

    const rent = ref<{
        car_id:string,
        guest_id:string,
        owner_id:string,
        total_per_day:number,
        address:string,
        days:number,
        star_day:string,
        end_day:string,
        fees:string[]
    }>()


  return { rent }
})
