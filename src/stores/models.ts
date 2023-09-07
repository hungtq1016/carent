import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type {  ICarModel } from '@/lib/interface'
import { useFetch } from '@vueuse/core'
export const useModels = defineStore('models', () => {

  const models = ref<Array<ICarModel>>([])
  const isFetch =ref(true)
  const fetchModel = async () => {
    const {data,error:err,isFetching} = await useFetch(`http://localhost:8000/api/model`).get().json()
    models.value = data.value.data     
    isFetch.value =false  
  }
  fetchModel()
  return { models ,fetchModel,isFetch }
})
