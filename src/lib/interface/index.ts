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
    versions?:Array<IVersion>
}

export interface IVersion {
    id: string,
    name: string,
    slug:string,
    version_id?:string,
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
    children?:Array<IComment>
}
export interface ICar{
    id:string,
    name:string,
    slug:string,
    seats:number,
    electric:boolean,
    gear: number,
    brand:IBrand,
    model:IModel,
    version:IVersion,
    images: Array<IImage>,
    transmission: number,
    isDelivery: boolean
}