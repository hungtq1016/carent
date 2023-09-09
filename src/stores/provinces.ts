import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'
import type { IProvince,IDistrict } from '@/lib/interface'
import { useFetch } from '@vueuse/core'
export const useProvinces = defineStore('provinces', () => {

  const provinces = ref<Array<IProvince>>([])
  const districts = ref<Array<IDistrict>>([{codename:'all',name:'Không',code:-1,division_type:"",short_codename:-1,wards:[]}])

  const fetchProvinces = async () => {
    const {data,error,isFetching} = await useFetch(`https://provinces.open-api.vn/api/?depth=2`).get().json()
    provinces.value = data.value    
  }

  onMounted(()=>{
    fetchProvinces()
  })
  return { provinces ,fetchProvinces,districts }
})
