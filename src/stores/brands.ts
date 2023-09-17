import { onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import type { IBrand } from '@/lib/interface'
import { useFetch } from '@vueuse/core'
import { URL } from '@/lib/fetch'
export const useBrands = defineStore('brands', () => {

  const brands = ref<Array<IBrand>>([])
  const fetchBrands = async () => {
    const { data, error: err, isFetching } = await useFetch(`${URL}/brand`).get().json()
    brands.value = data.value.data
  }
  onMounted(() => fetchBrands())
  return { brands, fetchBrands }
})
