import { ref, onMounted, watch } from 'vue'
import { defineStore } from 'pinia'
import { useProvinces } from './provinces'
import type { ICar, IDistrict, IProvince } from '@/lib/interface'
import { useRouter } from 'vue-router'
import { useFetch } from '@vueuse/core'

export const useCars = defineStore('cars', () => {

  const cars = ref<Array<ICar>>([])
  const temps = ref<Array<ICar>>([])

  const provinceStore = useProvinces()
  const needDriver = ref(false)

  const seat = ref<number | string>('all')
  const brand = ref<string>('all')
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
  const date = ref()
  const price = ref<Array<number>>([500000, 10000000])
  const router = useRouter()
  const province = ref<IProvince>(provinceStore.provinces[49])
  const district = ref<IDistrict>({codename:'all',code:-1,division_type:'',name:'Không',short_codename:-1,wards:[]})

  const selectedProvince = ref<string>(province.value?.codename)
  const selectedDistrict = ref<string>(district.value?.codename)

  onMounted(() => {
    date.value = [startDate, endDate];
    province.value = provinceStore.provinces[49]
    fetchCars()
  })

  const url = ref<string>('http://localhost:8000/api/car');

  watch(province, (newProvince) => {
    provinceStore.districts = newProvince.districts
  })

  watch([date, price, seat,province,district], () => {
    url.value = 'http://localhost:8000/api/car' +
      `?province=${selectedProvince.value}` +
      `&district=${selectedDistrict.value}` +
      `&seat=${seat.value}` +
      `&brand=${brand.value}` +
      '';
    console.log(url.value);
    
  })

  const fetchCars = async () => {

    const { isFetching, error, data } = await useFetch(url.value).get().json()
    temps.value = data.value.data
    cars.value.push(...temps.value)
  }




  const submit = () => {
    router.push({
      name: 'FindCars',
      query: {
        province: province.value?.codename,
        district: district.value?.codename,
        seat: seat.value,
        'starPrice': price?.value[0],
        'endPrice': price?.value[1],
        'starDate': date?.value[0].toLocaleDateString('vi-VN'),
        'endDate': date?.value[1].toLocaleDateString('vi-VN'),
      },
    })
  }
  return { cars, seat, province, district, date, brand, price, needDriver, submit,selectedProvince,selectedDistrict }
})
