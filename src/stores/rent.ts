import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { differenceInDays } from 'date-fns'

export const useRent = defineStore('rent', () => {
    const isDriver = ref(false)
    const isReceive = ref(false)
    const selected_day = ref()
    const absoluteAddress = ref()
    const rent = ref({
      guest_id:'',
      owner_id:'',
      total_per_day:0,
      address:'',
      phone:'',
      count_days:0,
      startDay:'',
      end_day:'',
      fees:0,
      total:0
    })

    watch(isReceive,(receive)=>{
      rent.value.total = receive ?  rent.value.total+60000:rent.value.total-60000
    })
  
    
    watch( selected_day, (newDay) => {
      rent.value.startDay = newDay[0]
      rent.value.end_day = newDay[1]
      rent.value.count_days = differenceInDays(newDay[1],newDay[0])   
      rent.value.total = rent.value.count_days* rent.value.total_per_day         
    })

  return { rent ,selected_day, isDriver ,isReceive,absoluteAddress}
})
