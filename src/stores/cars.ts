import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCars = defineStore('cars', () => {
  const cars = ref()
    
  
  return { cars }
})
