import { useFetch } from '@vueuse/core'

const getAllProvinces = async () =>{
    const url = 'https://provinces.open-api.vn/api/?depth=2';
    const { isFetching, error, data } = await useFetch(url).get().json()

    return {
        data,error,isFetching
    }

}

export default getAllProvinces;