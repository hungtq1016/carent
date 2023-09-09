import { useFetch } from '@vueuse/core'

const getCars = async () =>{
    const url = 'http://localhost:8000/api/car';
    const { isFetching, error, data } = await useFetch(url).get().json()

    return {
        data,error,isFetching
    }

}

export default getCars;