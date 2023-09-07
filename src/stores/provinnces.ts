import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { IProvince,IDistrict } from '@/lib/interface'
import { useFetch } from '@vueuse/core'
export const useProvinces = defineStore('provinces', () => {

  const provinces = ref<Array<IProvince>>([])
  const districts = ref<Array<IDistrict>>([])

  const fetchProvinces = async () => {
    const {data,error,isFetching} = await useFetch(`https://provinces.open-api.vn/api/?depth=2`).get().json()
    provinces.value = data.value    
    districts.value = provinces.value[49].districts
  }
  fetchProvinces()
  return { provinces ,fetchProvinces,districts }
})
