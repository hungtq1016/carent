import Cookies from 'universal-cookie';

const cookies = new Cookies(null, { path: '/' });

const useAuthen = ():boolean => {
    let isAuthen:boolean
    isAuthen = cookies.get('token') ? true : false
    return isAuthen;
}

export default useAuthen