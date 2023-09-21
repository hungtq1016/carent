import type { IUser } from '../interface';

const useUser = ():IUser => {
    let user:IUser
    user = JSON.parse(localStorage.getItem('user') || '{}')
    return user;
}

export default useUser