export interface IProvince {
    id:string,
    name: string,
    slug: string,
    code: number,
    type : string,
    districts: Array<IDistrict>
}

export interface IDistrict {
    id:string,
    name: string,
    slug: string,
    code: number,
    type : string,
    wards:Array<IWard>
}

export interface IWard {
    id:string,
    name: string,
    slug: string,
    code: number,
    type : string,
}

export interface IBrand {
    id: string,
    name: string,
    slug:string,
    image: IImage,
    models?:Array<IModel>
}
export interface IModel {
    id: string,
    name: string,
    slug:string,
    brand_id:string,
}

export interface IImage{
    id?:string,
    src:string,
    local_src:string
}
export interface IComment{
    id:string,
    content:string,
    user:{
        name:string,
        emai:string,
        id:string,
    },
    hasChild:boolean,
    parent_id:string|null,
    children:Array<IComment>,
    left:number,
    right:number
}
export interface IUser{
    id:string,
    name:string,
    email:string,
    address:string,
    phone:string
}

export interface ICar{
    id:string,
    name:string,
    slug:string,
    seats:number,
    fuel_consumption:number,
    fuel_type: number,
    brand:IBrand,
    model:IModel,
    image: IImage,
    transmission_type: number,
    isDelivery: boolean
}
export interface IQuery {
    [key:string]:string|number
}