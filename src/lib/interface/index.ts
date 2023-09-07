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