import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'
import type { IProvince,IDistrict } from '@/lib/interface'
import { useFetch } from '@vueuse/core'
import { URL } from '@/lib/fetch'
export const useProvinces = defineStore('provinces', () => {

  const provinces = ref<Array<IProvince>>([])
  const districts = ref<Array<IDistrict>>([{id:'all',name:'Không',code:-1,slug:"all",type:"quan",wards:[]}])

  const fetchProvinces = async () => {
    const {data,error,isFetching} = await useFetch(`${URL}/location?scope=thanh-pho-trung-uong`).get().json()
    provinces.value = data.value.data    
    
  }

  onMounted(()=>{
    fetchProvinces()
  })
  return { provinces ,fetchProvinces,districts }
})
