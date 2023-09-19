import { ref, watch ,onMounted} from 'vue'
import { defineStore } from 'pinia'
import { differenceInDays } from 'date-fns'

export const useRent = defineStore('rent', () => {
    const isDriver = ref(false)
    const isReceive = ref(false)
    const selected_day = ref()

    const absoluteAddress = ref('')
    const absoluteFee = ref(0)

    const deliveryFee = ref(0)
    const total = ref(0)
    const discount = ref(0)

    const rent = ref({
      guest_id:'',
      owner_id:'',
      total_per_day:0,
      address:'',
      phone:'',
      count_days:7,
      startDay:'',
      end_day:'',
      total_all_days:0
    })

    watch([isReceive],(receive)=>{
      deliveryFee.value = receive ? absoluteFee.value : 0
      rent.value.total_all_days = total.value+deliveryFee.value   
    })
  
    
    watch( selected_day, (newDay) => {
      rent.value.startDay = newDay[0]
      rent.value.end_day = newDay[1]
      rent.value.count_days = differenceInDays(newDay[1],newDay[0])   
      total.value = rent.value.count_days* rent.value.total_per_day         
      rent.value.total_all_days = isDriver.value ? total.value+deliveryFee.value:total.value       
    })

  return { rent ,selected_day, isDriver ,isReceive,absoluteAddress,deliveryFee,total,discount,absoluteFee}
})
