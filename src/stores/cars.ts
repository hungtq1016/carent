import { ref, onMounted, watch } from 'vue'
import { defineStore } from 'pinia'
import { useProvinces } from './provinces'
import type { ICar, IDistrict, IProvince, IQuery } from '@/lib/interface'
import { useRouter } from 'vue-router'
import { useFetch } from '@vueuse/core'
import { URL } from '@/lib/fetch'
import useQuery from '@/lib/hook/useQuery'
import { useDebounceFn } from '@vueuse/core'

export const useCars = defineStore('cars', () => {
  const router = useRouter()

  const cars = ref<Array<ICar>>([])

  const provinceStore = useProvinces()
  const needDriver = ref(false)

  const date = ref()
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
  const province = ref<IProvince>(provinceStore.provinces[0])
  const district = ref<IDistrict>({ id: 'all', name: 'Không', code: -1, slug: "all", type: "quan", wards: [] })
  const last_page = ref(1)
  const page = ref(1)
  const url = ref(`${URL}/car?page=${page.value}`)
  const isLoading = ref(false)
  const absoluteQuery = ref<IQuery>({
    seat: 'all',
    brand: 'all',
    priceStart: 500000,
    priceEnd: 10000000,
    delivery: 0,
    province: 'all',
    district: 'all',
    fuel_type: 'all'
  })
  const query = ref<any>(absoluteQuery.value)
  onMounted(() => {
    date.value = [startDate, endDate];
    province.value = provinceStore.provinces[0]
  })


  watch([province, district], ([newProvince, newDistrict]) => {
    provinceStore.districts = newProvince.districts
    query.value.province = newProvince.slug
    query.value.district = newDistrict.slug
  })
  const debounce = useDebounceFn( () => {
    isLoading.value = true
     fetchCars()
  }, 1000, { maxWait: 5000 })

  watch(query, (newVal, oldVal) => {
    url.value = `${URL}/car?page=${page.value}&${useQuery(newVal)}`
    page.value = 1
    cars.value = []
    fetchCars()
  }, { deep: true })
 
  const fetchCars = async () => {
    isLoading.value = true
    url.value = `${URL}/car?page=${page.value}&${useQuery(query.value)}`
    
    const { data } = await useFetch(url.value).get().json()
    cars.value = [...cars.value,...data.value.data]    
    last_page.value = data.value.meta.last_page
    isLoading.value = false
  }

  const submit = () => {
    router.push({
      name: 'FindCars',
      query: query.value,
    })
  }
  return { cars, province, district, date, needDriver, submit, fetchCars, query, isLoading, last_page, page,debounce,absoluteQuery }
})
