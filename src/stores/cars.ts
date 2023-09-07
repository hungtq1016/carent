import { ref, onMounted, watch } from 'vue'
import { defineStore } from 'pinia'
import { useProvinces } from './provinnces'
import type { IDistrict, IProvince } from '@/lib/interface'
import { useRouter } from 'vue-router'

export const useCars =  defineStore('cars',  () => {
  const provinceStore = useProvinces()

  const needDriver = ref(false)
  const cars = ref()
  const seat = ref<number|string>('all')
  const brand = ref<string>('all')
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
  const date = ref()
  const price = ref<Array<number>>([500000,10000000])
  const router = useRouter()

  onMounted(() => {
    date.value = [startDate, endDate];  
  })  
  const province = ref<IProvince>(provinceStore.provinces[49])
  const district = ref<IDistrict>()
  watch(province, (newX) => {
    provinceStore.districts = newX.districts
  })
  const submit = () => {
    router.push({
        name: 'FindCars',
        query: {
          province:province.value?.codename,
          district:district.value?.codename,
          seat:seat.value,
          'starPrice':price?.value[0],
          'endPrice':price?.value[1],
          'starDate':date?.value[0].toLocaleDateString('vi-VN'),
          'endDate':date?.value[1].toLocaleDateString('vi-VN'),
        },
      })
}
  return { cars,seat,province,district,date ,brand,price,needDriver ,submit}
})
