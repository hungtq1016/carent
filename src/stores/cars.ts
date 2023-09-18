import { ref, onMounted, watch } from 'vue'
import { defineStore } from 'pinia'
import { useProvinces } from './provinces'
import type { ICar, IDistrict, IProvince } from '@/lib/interface'
import { useRouter } from 'vue-router'
import { useFetch } from '@vueuse/core'
import { URL } from '@/lib/fetch'
import urlJoin from 'url-join';

export const useCars = defineStore('cars', () => {

  const cars = ref<Array<ICar>>([])

  const provinceStore = useProvinces()
  const needDriver = ref(false)

  const seat = ref<number | string>('all')
  const brand = ref<string>('all')
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
  const date = ref()
  const price = ref<Array<number>>([500000, 10000000])
  const router = useRouter()
  const province = ref<IProvince>(provinceStore.provinces[0])
  const district = ref<IDistrict>({id:'all',name:'Không',code:-1,slug:"all",type:"quan",wards:[]})
const url =ref('http://localhost:8000/api/car')
  const selectedProvince = ref<string>(province.value?.slug)
  const selectedDistrict = ref<string>(district.value?.slug)
  const query = {
    name:'sdsd'
  }
  onMounted(() => {
    date.value = [startDate, endDate];
    province.value = provinceStore.provinces[0]
    fetchCars()
  })

  
  watch([province,district], ([newProvince,newDistrict]) => {
    provinceStore.districts = newProvince.districts
    selectedProvince.value=newProvince.slug
    selectedDistrict.value = newDistrict.slug
  })

  watch([date, price, seat,province,district,brand], () => {
    url.value = `${URL}`+'/car' +
      `?province=${selectedProvince.value}` +
      `&district=${selectedDistrict.value}` +
      `&seat=${seat.value}` +
      `&brand=${brand.value}` +
      '';
    
  })

  const fetchCars = async () => {

    const { isFetching, error, data } = await useFetch(url.value).get().json()
    cars.value = [...cars.value,...data.value.data]
    
  }




  const submit = () => {
    router.push({
      name: 'FindCars',
      query: {
        province: province.value?.slug,
        district: district.value?.slug,
        seat: seat.value,
        'starPrice': price?.value[0],
        'endPrice': price?.value[1],
        'starDate': date?.value[0].toLocaleDateString('vi-VN'),
        'endDate': date?.value[1].toLocaleDateString('vi-VN'),
      },
    })
  }
  return { cars, seat, province, district, date, brand, price, needDriver, submit,selectedProvince,selectedDistrict,   fetchCars  }
})
