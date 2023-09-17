import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { differenceInDays, parseISO } from 'date-fns'

export const useRent = defineStore('rent', () => {

    const selected_day = ref()
    const rent = ref({
      guest_id:'',
      owner_id:'',
      total_per_day:0,
      address:{
        district:{name:''},
        province:{name:''},
      },
      phone:'',
      count_days:0,
      startDay:'',
      end_day:'',
      fees:0
    })

    // watch(()=>[,]);
    watch( selected_day, (newDay) => {
      rent.value.startDay = newDay[0]
      rent.value.end_day = newDay[1]
      rent.value.count_days = differenceInDays(newDay[1],newDay[0])      
      console.log(rent.value);
      
    })

  return { rent ,selected_day}
})
