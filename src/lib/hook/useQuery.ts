import type { IQuery } from "../interface";

const useQuery = (query:IQuery)=> {
    let str:string = '';
    let i:number = 0
    for (const data in query)
    {
        str+=`${i!=0?'&':''}${data}=${query[data]}`
        i++
    }
    return str;
  }

  export default useQuery