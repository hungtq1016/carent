import { useFetch } from '@vueuse/core'
import { URL } from '.';

const getCars = async () =>{
    const url = URL+'/car';
    const { isFetching, error, data } = await useFetch(url).get().json()

    return {
        data,error,isFetching
    }

}

export default getCars;