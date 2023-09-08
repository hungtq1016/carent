import { ref } from 'vue'
import { defineStore } from 'pinia'
import type {  IBrand } from '@/lib/interface'
import { useFetch } from '@vueuse/core'
export const useBrands = defineStore('brands', () => {

  const brands = ref<Array<IBrand>>([])
  const fetchBrands = async () => {
    const {data,error:err,isFetching} = await useFetch(`http://localhost:8000/api/brand`).get().json()    
    brands.value = data.value.data     
  }
  fetchBrands()
  return { brands ,fetchBrands }
})
