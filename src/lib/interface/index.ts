export interface IProvince {
    name: string,
    code: number,
    division_type : string,
    codename: string,
    phone_code: number,
    districts: Array<IDistrict>
}

export interface IDistrict {
    name: string,
    code: number,
    division_type : string,
    codename: string,
    short_codename: number,
    wards:Array<IWard>
}

export interface IWard {
    name: string,
    code: number,
    division_type : string,
    codename: string,
    short_codename: string,
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