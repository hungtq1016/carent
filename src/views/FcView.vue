<template>
    <div class="flex items-center justify-center h-screen">
        <svg v-if="loading" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
            stroke="currentColor" class="w-40 h-40 text-black animate-spin">
            <path strokeLinecap="round" strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
            stroke="currentColor" class="w-40 h-40 text-green-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>

    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { v4 as uuid } from 'uuid';
const data = ref()
const loading = ref(false)
const loglocation = async () => {
    // await axios.get('https://provinces.open-api.vn/api/?depth=3').then(async(res) => {
    //     data.value = res.data
    //     await axios.post('http://localhost:8000/api/location',{provinces:data.value }).then(res => {
    //     console.log(res.data);

    // }

    // ).catch(err => console.log(err)
    // )
    // console.log(res.data);


}
const test = async () => {
    //KH1AIZ sai gon
    //K43GXE ha noi
    //KLQFIL da nang
    //KLWNLG lam dong
    //KJU8HV khanh hoa
    //KJMS4K can tho
    //KKAYTR Hai phong
    const cars =[
    {
        "id": "K3UB72",
        "name": "HYUNDAI STARGAZER 2023",
        "ownerId": "U9US42",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/05/30/16/LkXkS7iiS2XQGrb1Mf5cTQ.jpg",
        "seat": 7,
        "status": 2,
        "instant": 1,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.052848298129984,
            "lon": 105.75053624157552,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 918,
            "wardId": 31180,
            "street": "Võ Văn Kiệt"
        },
        "locationAddr": "Quận Bình Thuỷ, Cần Thơ",
        "locationAddrS": "Quận Bình Thuỷ, Cần Thơ",
        "d": 1.1,
        "distance": "1.1 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 5,
        "deliveryPrice": 15000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "G69H8UX9",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_stargazer_2023/p/g/2023/03/05/13/No8rY7uJCgOTHbFlwWCF7g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_stargazer_2023/p/g/2023/03/05/13/UC6mEVru7glLvmQNNag4wQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "GXR99JBF",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_stargazer_2023/p/g/2023/03/05/13/pCbZl_SdG162aefy33J-1g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_stargazer_2023/p/g/2023/03/05/13/voyHEbPg0hJLpEirtAcsgQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "H48GU31Q",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_stargazer_2023/p/g/2023/03/05/13/BFkCpbQLaw_0wVULGgGM-g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_stargazer_2023/p/g/2023/03/05/13/Ig7EkohAuAjJA2RlUlEcNA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "3D41CZ9F",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_stargazer_2023/p/g/2023/03/05/13/aB1yAwwFqehoViA029agkQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_stargazer_2023/p/g/2023/03/05/13/aQSw2XQgXsj5EzESyCeNhg.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 4
        },
        "totalTrips": 4,
        "totalReviews": 4,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 15,
        "price": 800000,
        "priceOrigin": 800000,
        "priceTotal": 996800,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 1,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KLQFIF",
        "name": "MAZDA 3 2018",
        "ownerId": "U9H7EF",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/04/20/19/FC1BmQh96TAKh32yhq8m8Q.jpg",
        "seat": 4,
        "status": 2,
        "instant": 1,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.03716199775598,
            "lon": 105.76013574271266,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 916,
            "wardId": 31149,
            "street": "Khu dân cư An Khánh, 167X1 - Hẻm 2 - KDC An Khánh"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 1.5,
        "distance": "1.5 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 4,
        "deliveryPrice": 10000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "7EPGM4SH",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2018/p/g/2023/04/20/19/jgMMwVE08BDgyQ5jRQupqA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2018/p/g/2023/04/20/19/m4-NW_oVgUvSrAZqOr-URA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "MMT4G69A",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2018/p/g/2023/04/08/09/QXSLCJiBtOLNjQvWBL5twA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2018/p/g/2023/04/08/09/H8IRfOwwR8FUkgFW8TUaVQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "75ZY5QX2",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2018/p/g/2023/04/08/09/Ppt71Rr_kUR2HGTJpTF5Jw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2018/p/g/2023/04/08/09/PWWtOlczj3f4bJzY6KG2Nw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "NFD6FRHR",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2018/p/g/2023/04/20/19/DtL8qoD-4ehvJQJSMKyJUA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2018/p/g/2023/04/20/19/M6o5BDBvd73hm-pOGO9kJw.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 4.333333333333333,
            "star1": 0,
            "star2": 0,
            "star3": 1,
            "star4": 0,
            "star5": 2
        },
        "totalTrips": 2,
        "totalReviews": 3,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 20,
        "price": 680000,
        "priceOrigin": 680000,
        "priceTotal": 847282,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KEN37K",
        "name": "CHEVROLET COLORADO LT 2015",
        "ownerId": "UM981X",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-9.png",
        "seat": 5,
        "status": 2,
        "instant": 1,
        "optionsTransmission": 2,
        "location": {
            "lat": 10.04327833458001,
            "lon": 105.73638076230621,
            "cityId": 92,
            "districtId": 918,
            "wardId": 31183,
            "street": "426 Tổ 7 Khu Vực Bình Phó A, Quận Bình Thủy, Việt Nam"
        },
        "locationAddr": "Quận Bình Thuỷ, Cần Thơ",
        "locationAddrS": "Quận Bình Thuỷ, Cần Thơ",
        "d": 1.4,
        "distance": "1.4 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 15000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "AJYN8S5F",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/chevrolet_colorado_lt_2015/p/g/2022/04/26/16/BW-5OcR_JETXyjfzTKLqNQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/chevrolet_colorado_lt_2015/p/g/2022/04/26/16/jzJB22Ejj5poN68HbJC-UA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "L6AWSWSB",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/chevrolet_colorado_lt_2015/p/g/2022/01/22/09/rU7Nk2pGL640-z_kxyJzFA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/chevrolet_colorado_lt_2015/p/g/2022/01/22/09/QQwmXDmveqOpiUutwcxb4w.jpg",
                "carPhotoId": ""
            },
            {
                "id": "LSJ7P6LH",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/chevrolet_colorado_lt_2015/p/g/2022/01/22/09/FFtIHC899vkkraP5aWtDJA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/chevrolet_colorado_lt_2015/p/g/2022/01/22/09/M63V-8MyhLhW8CrQr8zG1w.jpg",
                "carPhotoId": ""
            },
            {
                "id": "A19Z4I4V",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/chevrolet_colorado_lt_2015/p/g/2022/04/26/16/dTg-cod2Wt3SqO9b8B_HGA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/chevrolet_colorado_lt_2015/p/g/2022/04/26/16/JP47EO7A1UF9wwsQwieieA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 3,
            "star1": 0,
            "star2": 0,
            "star3": 1,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 3,
        "totalReviews": 4,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 690000,
        "priceOrigin": 690000,
        "priceTotal": 859740,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KEWVYG",
        "name": "MITSUBISHI XPANDER 2019",
        "ownerId": "USE3MH",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2022/08/21/09/BE7aqc8hZsyPbDtOquv0ag.jpg",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 10.036076564746782,
            "lon": 105.74760944585239,
            "cityId": 92,
            "districtId": 916,
            "wardId": 31149,
            "street": "25 Đường Số 6, Quận Ninh Kiều, Việt Nam"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 0.9,
        "distance": "0.9 km",
        "deliveryEnable": 1,
        "deliveryRadius": 5,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "1KSAFQBR",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2021/07/27/09/uue16A5TpGy-pG1QxFF3dQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2021/07/27/09/x1q48Dk1okxJ6x_EBjYT6A.jpg",
                "carPhotoId": ""
            },
            {
                "id": "CD1E2NK9",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2019/04/07/06/D9zIa-lQoZEdiBR2vx7oyg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2019/04/07/06/9W7VnAoZ9g-Lb6l8D1OY1g.jpg",
                "carPhotoId": ""
            },
            {
                "id": "A2NWA9RW",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2021/07/27/09/IMC6TuhWEQ7YNqV1syZeLg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2021/07/27/09/hTjwH7hOeczP7jjtMaT_OA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "ALSLJ2TA",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2021/07/27/09/HLs_kC0hoQzVr4kncQbnrA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2021/07/27/09/P7MBDDXycZY1jWmXnlvVbw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "5GQ6SYBI",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2020/00/08/21/C1rEbpZAJocHnFr022pUiA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2020/00/08/21/JrPzYQlWGfvDZl4SB1yOsA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "E1MPTA6Q",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2019/04/07/18/MKTKVvMSqtdmxRRz5KYTZQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2019/04/07/18/FwVoqiJYV7tKGej0akDH_w.jpg",
                "carPhotoId": ""
            },
            {
                "id": "LZ9HHLTT",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2020/11/17/10/6NRAauhYHiJest06aXP3tg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2020/11/17/10/Lrbz5NHIopVyBy3-STJUMw.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 1
        },
        "totalTrips": 21,
        "totalReviews": 21,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 30,
        "price": 750000,
        "priceOrigin": 750000,
        "priceTotal": 934500,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 1,
        "sd": 1,
        "wd": 1,
        "wdShort": {
            "instant": 0,
            "deliveryEnable": 1,
            "deliveryRadius": 10,
            "deliveryRadiusFree": 5,
            "deliveryPrice": 5000,
            "deliveryDiscountEnable": 0,
            "deliveryDiscountKm": 0,
            "deliveryDiscountPercent": 0,
            "deliveryDiscountMax": 0,
            "price": 1971201,
            "priceOrigin": 1971201,
            "finalPrice": 2179322,
            "totalDiscountPercent": 0,
            "deliveryFee": 0,
            "ownerHostFiveStar": 1
        },
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KHMPZQ",
        "name": "MITSUBISHI XPANDER 2022",
        "ownerId": "U5UDKF",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/03/23/08/BCNa8Ouw1ZJ1KglYXV5oAQ.jpg",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.055731952131818,
            "lon": 105.75093767355779,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 918,
            "wardId": 31180,
            "street": "Võ Văn Kiệt"
        },
        "locationAddr": "Quận Bình Thuỷ, Cần Thơ",
        "locationAddrS": "Quận Bình Thuỷ, Cần Thơ",
        "d": 1.1,
        "distance": "1.1 km",
        "deliveryEnable": 1,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 3,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "LSJ7P7CW",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/03/13/07/Uil-L02mLHoVRCYGRkZHEw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/03/13/07/yguAKGDyY4vMWerJiNc3NA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "ND47MGUG",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/03/03/21/OhQ4U40c3lugeAeq4Z0ldA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/03/03/21/RWSCNRap_EAA7fhJgRjPnQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "3I8SZQYV",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/01/20/15/dcV5Kmq-0crkuN694MgDfw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/01/20/15/rGP-1KubJyGeceCvSm3bpg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "H3WJDT3H",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/01/20/15/PEbVWS4qM0aKBOtWiO5DTQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/01/20/15/0r0vc035HxMPYg1lBIIdoA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "3BM2P3DG",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/01/20/15/9MBTTAiSshGaADcvbF4MHQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/01/20/15/xVdyJaUwBQNMqOoBFMxFKQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "MMT4G6KD",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/03/03/21/5bwb88cCX-TgYB8mxiRQUA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/03/03/21/vi193MEUJ9sQLtoGuWzhMA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "NK6EWRQP",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/03/03/21/ya-y-dftHLnLO1FVBCuf9A.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/03/03/21/dMXMEPeeSt8AekY2qlGl0Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "MYSUDR7N",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/03/03/21/bi3BkmCMomHtpIUNb1Q1fg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/03/03/21/2Ml9n4rYIMb8o74dkxFFYg.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 2
        },
        "totalTrips": 2,
        "totalReviews": 2,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 30,
        "price": 700000,
        "priceOrigin": 700000,
        "priceTotal": 872200,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KE53HS",
        "name": "TOYOTA VIOS E 2021",
        "ownerId": "U5UDKF",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/03/23/08/BCNa8Ouw1ZJ1KglYXV5oAQ.jpg",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.051820397830781,
            "lon": 105.75499883091402,
            "cityId": 92,
            "districtId": 918,
            "wardId": 31177,
            "street": "135 Đường Đồng Văn Cống, An Thới, Bình Thủy, Cần Thơ, Việt Nam"
        },
        "locationAddr": "Quận Bình Thuỷ, Cần Thơ",
        "locationAddrS": "Quận Bình Thuỷ, Cần Thơ",
        "d": 1.5,
        "distance": "1.5 km",
        "deliveryEnable": 1,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 3,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "A3I96MY6",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2021/p/g/2022/07/17/12/ocMvCWaFY85FSO_B0RVB9w.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2021/p/g/2022/07/17/12/ISIEeE0bIaF7KdUoiEpy1w.jpg",
                "carPhotoId": ""
            },
            {
                "id": "BFVMUBCC",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2021/p/g/2022/07/17/12/LNMnDQ-vsSegNbsQeWHoVw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2021/p/g/2022/07/17/12/Wr53pYjFcjoZjkt8n3kUOg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "AW8YKQAS",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2021/p/g/2022/07/17/12/blbuCkXsGRgKr_041NUruQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2021/p/g/2022/07/17/12/-u0vrpmePM8wrNPRSodZdw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "BPUBCIUE",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2021/p/g/2022/07/17/12/WOiD9Rvy-kqxk46yuUYkwQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2021/p/g/2022/07/17/12/qZTqCONFPGmk9iEhhbu4Pw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "DSWCPQ3Y",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2021/p/g/2023/03/12/10/MfzAjj2Lb4qGLqSYJHlqAg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2021/p/g/2023/03/12/10/2QqRA1-WyWK6gKqw1nmrpg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "D665MQUJ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2021/p/g/2023/03/12/10/yt-lf88PAZQ3JzInQ77ETQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2021/p/g/2023/03/12/10/RCa3kER0tcjEgU-lT7C6wA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 3.75,
            "star1": 0,
            "star2": 0,
            "star3": 2,
            "star4": 1,
            "star5": 1
        },
        "totalTrips": 3,
        "totalReviews": 5,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 0,
        "price": 600000,
        "priceOrigin": 600000,
        "priceTotal": 747600,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KK7YBB",
        "name": "KIA SOLUTO 2020",
        "ownerId": "U596Y5",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/07/20/13/b0SECzdsG0dNO86kiTVw0w.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 10.057386935328017,
            "lon": 105.76126644817737,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 918,
            "wardId": 31177,
            "street": "1 Phạm Hữu Lầu, An Thới, Bình Thủy, Cần Thơ, Việt Nam"
        },
        "locationAddr": "Quận Bình Thuỷ, Cần Thơ",
        "locationAddrS": "Quận Bình Thuỷ, Cần Thơ",
        "d": 1.9,
        "distance": "1.9 km",
        "deliveryEnable": 1,
        "deliveryRadius": 5,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "G92AITKL",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_soluto_2020/p/g/2023/07/21/10/oBxJxH2h2bLOayFFbE-iMQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_soluto_2020/p/g/2023/07/21/10/tQFKjGT5aPvA_mGt5w4N7Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "I1HH1FAN",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_soluto_2020/p/g/2023/07/20/13/_CRkg28hJN8iYdgCTEIQvQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_soluto_2020/p/g/2023/07/20/13/lxLIuRCnC03B-CSnPgbO6Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "NBMRBMA7",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_soluto_2020/p/g/2023/07/20/13/hjA0isaLxs0vyiJJwva42A.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_soluto_2020/p/g/2023/07/20/13/by82xSW2ye9VB_HWwdo6tg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "NK6EW8JT",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_soluto_2020/p/g/2023/07/20/13/O9ty8BOcp_kL15AVBOkxzA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_soluto_2020/p/g/2023/07/20/13/JFIEo3IUS5CH94Rxq_GafA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 640000,
        "priceOrigin": 640000,
        "priceTotal": 797440,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KJKJLU",
        "name": "TOYOTA INNOVA V 2009",
        "ownerId": "URA6BF",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-5.png",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.046844614335381,
            "lon": 105.75512295765553,
            "cityId": 92,
            "districtId": 918,
            "wardId": 31177,
            "street": "Đường Phạm Ngọc Hưng, Phường An Thới, Quận Bình Thuỷ, Thành phố Cần Thơ"
        },
        "locationAddr": "Quận Bình Thuỷ, Cần Thơ",
        "locationAddrS": "Quận Bình Thuỷ, Cần Thơ",
        "d": 1.2,
        "distance": "1.2 km",
        "deliveryEnable": 1,
        "deliveryRadius": 30,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 11000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "C9JICR6N",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_v_2009/p/g/2023/01/06/15/vr0Wnzi225hM9juhXjHwFQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_v_2009/p/g/2023/01/06/15/Apk_DYItfhTUvFTZ4lVWBw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "CI5VBUD9",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_v_2009/p/g/2023/01/06/15/DJTHT-BASrhaTgB_3xeVHg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_v_2009/p/g/2023/01/06/15/-tICTjqRBVO7BCmpdN0-Dw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "DGDRV8RC",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_v_2009/p/g/2023/01/06/15/2vAhqK8Xxx_UmQvTY-HoZg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_v_2009/p/g/2023/01/06/15/BUBSixjt3l8DMRzNoKN4Vw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "22U7LV7Y",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_v_2009/p/g/2023/01/06/15/idU-3gD4EfHoxGb0TU3fZQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_v_2009/p/g/2023/01/06/15/bW6Wlj_COkxHYrm9hprQBw.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 3,
            "star1": 0,
            "star2": 0,
            "star3": 2,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 2,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 15,
        "price": 552000,
        "priceOrigin": 552000,
        "priceTotal": 687792,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K6GVG4",
        "name": "MITSUBISHI XPANDER 2021",
        "ownerId": "U6V1WC",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2022/10/15/08/0pzjJYH1JTAvVnT3zSjisw.jpg",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 10.050083698129983,
            "lon": 105.73701624278256,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 918,
            "wardId": 31180,
            "street": "337 Đinh Công Chánh"
        },
        "locationAddr": "Quận Bình Thuỷ, Cần Thơ",
        "locationAddrS": "Quận Bình Thuỷ, Cần Thơ",
        "d": 1.5,
        "distance": "1.5 km",
        "deliveryEnable": 0,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 0,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "H48GU3MJ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/10/16/13/saHSahz2OEZWyYj3k33JTA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/10/16/13/tsSKDBnzGOmfFqkfJeBK-Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "IFWC3JP3",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/10/15/09/3TnVg7JMaVlB1BXZROu3fA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/10/15/09/uEsOgf9XudZ1iV0ZAYJyQw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "4TX7JEKP",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/10/15/09/XvV6z9ZPpCWdMzCF-vVIJw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/10/15/09/aQMXVW3bWvK5t3ziYLHIiw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "IRPLAITM",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/10/15/09/tGgHoZgRWcYgfIfv0rncKw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/10/15/09/BgihM3s1PulmoN_pRhXZWA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 799000,
        "priceOrigin": 799000,
        "priceTotal": 897277,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KK4AH1",
        "name": "MITSUBISHI XPANDER 2022",
        "ownerId": "UK2UQA",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/02/07/12/hKC-Hl9GrN6XmbSWmoryVw.jpg",
        "seat": 7,
        "status": 2,
        "instant": 1,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.042531248541389,
            "lon": 105.76379243115028,
            "cityId": 92,
            "districtId": 916,
            "wardId": 31120,
            "street": "TGDD - Nguyễn Văn Cừ (Cần Thơ), 403"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 2.1,
        "distance": "2.1 km",
        "deliveryEnable": 1,
        "deliveryRadius": 20,
        "deliveryRadiusFree": 10,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "61NEFIBW",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/01/24/09/6v-yh6Bg067lyx-14L3hDQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/01/24/09/E7sWF3F_CQ3RD6EI6-vLxA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "LUE6DIP4",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/01/24/09/Ee8pyaO4Thum4W-Xz_Qn8g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/01/24/09/Dl1sTldwJiftdz82JC5Ktg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "LQ78YDHX",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/01/24/09/HgaRGnxACFEO5giXHFP39g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/01/24/09/ypvIPB2n8ianjKaNqJAlgg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "KSWUHYV5",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/01/24/09/UtLSoOAcYTn2TBW6Bc35YQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/01/24/09/pjZoDTdZua_4l-q5qcG8mg.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 5
        },
        "totalTrips": 8,
        "totalReviews": 9,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 700000,
        "priceOrigin": 700000,
        "priceTotal": 872200,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 1,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KD9ZRK",
        "name": "KIA CERATO 2020",
        "ownerId": "UK2UQA",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/02/07/12/hKC-Hl9GrN6XmbSWmoryVw.jpg",
        "seat": 5,
        "status": 2,
        "instant": 1,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.042847698204785,
            "lon": 105.76672415239359,
            "cityId": 92,
            "districtId": 916,
            "wardId": 31120,
            "street": "Trường Cao đẳng Y tế Cần Thơ, 340 Đ. Nguyễn Văn Cừ, An Hoà, Ninh Kiều, Cần Thơ, Việt Nam"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 2.1,
        "distance": "2.1 km",
        "deliveryEnable": 1,
        "deliveryRadius": 20,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 30000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "59JW6YRT",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_cerato_2020/p/g/2023/06/24/18/ylMJb8uUnBaO_BeIVf1AdQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_cerato_2020/p/g/2023/06/24/18/-eGK1ZpmxBZXt_IfZC2s-w.jpg",
                "carPhotoId": ""
            },
            {
                "id": "KCNLC9GJ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_cerato_2020/p/g/2023/06/24/18/QlS1OAhGlWBOwFFEHtygpg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_cerato_2020/p/g/2023/06/24/18/80gFdNEv0aTRw1l5KerNng.jpg",
                "carPhotoId": ""
            },
            {
                "id": "K5S1L246",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_cerato_2020/p/g/2023/06/24/18/lLI47ER7KTSGih8EZ3qXdQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_cerato_2020/p/g/2023/06/24/18/EniLKdST-nQaSvOJPGJo_A.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 1
        },
        "totalTrips": 1,
        "totalReviews": 1,
        "discountEnable": 0,
        "discountWeekly": 20,
        "discountMonthly": 30,
        "price": 750000,
        "priceOrigin": 750000,
        "priceTotal": 934500,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 1,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KG5BAG",
        "name": "MITSUBISHI XPANDER 2023",
        "ownerId": "UK2UQA",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/02/07/12/hKC-Hl9GrN6XmbSWmoryVw.jpg",
        "seat": 7,
        "status": 2,
        "instant": 1,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.027069268486816,
            "lon": 105.75965233930096,
            "cityId": 92,
            "districtId": 916,
            "wardId": 31149,
            "street": "Khu dân cư cán bộ giáo viên Trường Đại học Cần Thơ, 345 Đ. Nguyễn Văn Linh"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 2.5,
        "distance": "2.5 km",
        "deliveryEnable": 1,
        "deliveryRadius": 20,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 30000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "JVRAR2IS",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2023/p/g/2023/06/22/11/lYAN_HjxvhBrCGlSUtPiLQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2023/p/g/2023/06/22/11/dnnTiulUjJZqIXnt2D-ATg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "5GQ6SZM1",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2023/p/g/2023/06/22/11/4v4UO_MXn60oWd_y2kpnVA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2023/p/g/2023/06/22/11/WXyqfyNjQaSyLi0sfg5syA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "JIYPYEET",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2023/p/g/2023/06/22/11/D0hFIOzMP0KRmJfdenVShw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2023/p/g/2023/06/22/11/h67kLA4KyOaRXHuXEGEE1A.jpg",
                "carPhotoId": ""
            },
            {
                "id": "KCNLC9G1",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2023/p/g/2023/06/22/11/3OMqqSZ59YOOyLmIqAie1g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2023/p/g/2023/06/22/11/uGCdkw4OvMLDjtcH1rybFg.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 1
        },
        "totalTrips": 1,
        "totalReviews": 1,
        "discountEnable": 0,
        "discountWeekly": 20,
        "discountMonthly": 30,
        "price": 800000,
        "priceOrigin": 800000,
        "priceTotal": 996800,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 1,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KFM5G7",
        "name": "MITSUBISHI XPANDER 2019",
        "ownerId": "U61MDL",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2022/06/03/22/xzHQAeh_rhpYDWyiCpxnUw.jpg",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.05617918469221,
            "lon": 105.76143238675175,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 918,
            "wardId": 31168,
            "street": "2 Phạm Hữu Lầu"
        },
        "locationAddr": "Quận Bình Thuỷ, Cần Thơ",
        "locationAddrS": "Quận Bình Thuỷ, Cần Thơ",
        "d": 1.9,
        "distance": "1.9 km",
        "deliveryEnable": 0,
        "deliveryRadius": 5,
        "deliveryRadiusFree": 3,
        "deliveryPrice": 10000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "77NS7TPF",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2020/05/11/10/HY_MQX1w5GC1DUBBUW-etg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2020/05/11/10/0dtM9Ba97ppkw9WD_YOxWg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "78IQHHBL",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2020/05/11/10/f4qqrFExMXf03hLDO71siw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2020/05/11/10/i-E1So_zOwFKRZ_xlOINZw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "MJFMCIY5",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2020/05/11/10/KWOgo_Q0WfScQQPc00vbpg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2020/05/11/10/myARG_eoEQ5UtdQG_X70qw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "MVYXQAHU",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2020/05/11/10/u6OFD_LQEoQ8tlQpgLDOmw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2020/05/11/10/u6OFD_LQEoQ8tlQpgLDOmw.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 2
        },
        "totalTrips": 9,
        "totalReviews": 9,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 850000,
        "priceOrigin": 850000,
        "priceTotal": 954550,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 0:30 - 9:00, 22:00 - 23:30"
        ],
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KHFAPE",
        "name": "KIA CERATO 2019",
        "ownerId": "U61MDL",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2022/06/03/22/xzHQAeh_rhpYDWyiCpxnUw.jpg",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.054202848616187,
            "lon": 105.76145063371673,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 918,
            "wardId": 31168,
            "street": "2 Phạm Hữu Lầu"
        },
        "locationAddr": "Quận Bình Thuỷ, Cần Thơ",
        "locationAddrS": "Quận Bình Thuỷ, Cần Thơ",
        "d": 1.9,
        "distance": "1.9 km",
        "deliveryEnable": 0,
        "deliveryRadius": 5,
        "deliveryRadiusFree": 3,
        "deliveryPrice": 10000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "C87K5EJT",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_cerato_2019/p/g/2020/08/17/11/9Jbbb0A9stWD_CrWjSJ6Lg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_cerato_2019/p/g/2020/08/17/11/1cpSszRh0vXUQRjNnSag_A.jpg",
                "carPhotoId": ""
            },
            {
                "id": "CI5VBT4K",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_cerato_2019/p/g/2020/08/17/11/cSUV_knmfLit4ZmXiYUQhA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_cerato_2019/p/g/2020/08/17/11/BKPNxIe6NwCWjKVSjmFCJQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "7IFBXVEV",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_cerato_2019/p/g/2020/05/15/13/JF0sBBFZBSNiHoPeEz4e-w.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_cerato_2019/p/g/2020/05/15/13/nd44PCd3HiQXr53bR9-duA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "ND47MFWI",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_cerato_2019/p/g/2020/05/15/13/GrG2IiCUhR2-CZo44GMV0Q.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_cerato_2019/p/g/2020/05/15/13/C-bcQnobELpvSHoul7u_pQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "7XS4Z3KI",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_cerato_2019/p/g/2020/05/15/13/OFyqC9bBIH4UB3H6kjhjUQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_cerato_2019/p/g/2020/05/15/13/llxVqSDbfECPrcvQgAcaiA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 1
        },
        "totalTrips": 2,
        "totalReviews": 2,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 900000,
        "priceOrigin": 900000,
        "priceTotal": 1010700,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 0:30 - 9:00, 22:00 - 23:30"
        ],
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K39JCE",
        "name": "MITSUBISHI XPANDER 2022",
        "ownerId": "UK6J4I",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-9.png",
        "seat": 7,
        "status": 2,
        "instant": 1,
        "optionsTransmission": 2,
        "location": {
            "lat": 10.030578081849788,
            "lon": 105.77935144556092,
            "cityId": 92,
            "districtId": 916,
            "wardId": 31141,
            "street": "Phường An Phú, Quận Ninh Kiều, Thành phố Cần Thơ, Việt Nam"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 3.8,
        "distance": "3.8 km",
        "deliveryEnable": 1,
        "deliveryRadius": 20,
        "deliveryRadiusFree": 10,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "KG2GGZAJ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2022/11/26/11/AbeH0LivEJ38ve2FePigJg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2022/11/26/11/pk435mCpUbQGCTtFeDhZRA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "JMMKDI67",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2022/11/26/11/WAA7BYNFWyOUge2HAv-4Wg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2022/11/26/11/KFwDEZsy0qnzW0r8Ed1qFg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "JDNYG2TB",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2022/11/26/11/swEHo_BEfWRQtjjb3qH53A.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2022/11/26/11/97UUeauo08tIhQfNdRArtw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "5BGTW48W",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2022/11/26/11/k84PoUqsWADIG-VDnWoPJQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2022/11/26/11/_loKSxQDmyPpARM87FMhdQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "FDUH7K8T",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2022/11/26/11/gojIfb6yBmpBcTWXIBMStw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2022/11/26/11/2rY_9aAZMM-5n7VlyikUZg.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 1
        },
        "totalTrips": 1,
        "totalReviews": 1,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 15,
        "price": 750000,
        "priceOrigin": 750000,
        "priceTotal": 934500,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KJQC2U",
        "name": "SUZUKI ERTIGA 2021",
        "ownerId": "UPGJMJ",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-0.png",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.017918148092583,
            "lon": 105.7495523518907,
            "cityId": 92,
            "districtId": 916,
            "wardId": 31150,
            "street": "Trần Vĩnh Kiết, An Bình, Ninh Kiều, Cần Thơ, Việt Nam"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 3,
        "distance": "3 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 10000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "JH2SKKJN",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_ertiga_2021/p/g/2022/03/21/17/cABOmUHo9L6LONmhtmbtPw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_ertiga_2021/p/g/2022/03/21/17/_bVvqJyvHQICe2-1GQGQaQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "DSWCPP5Z",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_ertiga_2021/p/g/2022/03/21/15/0Mo9LSaGlbewLI1v7FFTSA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_ertiga_2021/p/g/2022/03/21/15/xhXBFV0LVlPIssCEMBBQyg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "CXZD64U8",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_ertiga_2021/p/g/2022/03/21/15/DZy9NYzf3wWGcvYh-rZ4vg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_ertiga_2021/p/g/2022/03/21/15/IkyPbMgUi1wglXwmOMvjEA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "2A3THNV3",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_ertiga_2021/p/g/2022/03/21/15/_Q1qxcbn-hJiuyqa86TqiQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_ertiga_2021/p/g/2022/03/21/15/iPKOKIre0LzHaGrObce83Q.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 2
        },
        "totalTrips": 2,
        "totalReviews": 2,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 30,
        "price": 750000,
        "priceOrigin": 750000,
        "priceTotal": 934500,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KJMS4K",
        "name": "VINFAST VF E34 2022",
        "ownerId": "U6R3SF",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2022/09/25/14/QBx_VTtpunZl9yromCmcRw.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.044108698429186,
            "lon": 105.76819882427924,
            "cityId": 92,
            "districtId": 916,
            "wardId": 31120,
            "street": "288 Nguyễn Văn Cừ"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 2.2,
        "distance": "2.2 km",
        "deliveryEnable": 0,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 15000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "CI5VBU4X",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/vinfast_vf_e34_2022/p/g/2022/09/16/13/OpM2VPkYiSjmzgiRnple8A.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/vinfast_vf_e34_2022/p/g/2022/09/16/13/YV80rm-JmRLfESM2j1Bw6Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "FFPE63CW",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/vinfast_vf_e34_2022/p/g/2022/09/16/13/PqFXEdbnT-sXSVWF8SNQDA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/vinfast_vf_e34_2022/p/g/2022/09/16/13/xvjqw-c5eTBID12NhRK8Dg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "C9JICRGL",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/vinfast_vf_e34_2022/p/g/2022/09/16/13/ErCm_1KBszbfPmuIJQLFmw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/vinfast_vf_e34_2022/p/g/2022/09/16/13/HPDVX5CDQ-FWILVpA5S-uQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "ETQR3B3N",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/vinfast_vf_e34_2022/p/g/2022/09/16/13/eYdSDafLAbS4WXXP4d468A.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/vinfast_vf_e34_2022/p/g/2022/09/16/13/KQovR1VafmIXs860UIZ6cg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "D4XPIK9B",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/vinfast_vf_e34_2022/p/g/2022/09/16/13/HZntBNY8iRRht_ALaZ5OPw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/vinfast_vf_e34_2022/p/g/2022/09/16/13/cKLwXMAuvv8Qc-YhuLY80A.jpg",
                "carPhotoId": ""
            },
            {
                "id": "DSWCPQP7",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/vinfast_vf_e34_2022/p/g/2022/09/16/13/0PB9bE4g3Qchme1CXX3nrQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/vinfast_vf_e34_2022/p/g/2022/09/16/13/Hdn7VwAmtjDL8MCzEA4XYA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "22U7LVTB",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/vinfast_vf_e34_2022/p/g/2022/09/16/13/nJQdoczg4LyGPqjxfODZgw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/vinfast_vf_e34_2022/p/g/2022/09/16/13/R9tiDPjiNuPa9fhYt4f89g.jpg",
                "carPhotoId": ""
            },
            {
                "id": "1YLIZH3L",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/vinfast_vf_e34_2022/p/g/2022/09/16/13/Ircv2oXV-ZuHYhfwJgzKhA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/vinfast_vf_e34_2022/p/g/2022/09/16/13/2cdVVApVASFziBTwrYa9tQ.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 5
        },
        "totalTrips": 24,
        "totalReviews": 24,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 15,
        "price": 750000,
        "priceOrigin": 750000,
        "priceTotal": 934500,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 1,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K3DTX1",
        "name": "MITSUBISHI XPANDER 2023",
        "ownerId": "UQ87Z7",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-0.png",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.011367115382589,
            "lon": 105.75525648699086,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 916,
            "wardId": 31147,
            "street": "Cầu Đầu Sấu, Phường Hưng Lợi, Quận Ninh Kiều, Cần Thơ"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 3.8,
        "distance": "3.8 km",
        "deliveryEnable": 1,
        "deliveryRadius": 20,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 30000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "792MT1MI",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2023/p/g/2023/07/29/20/iK1sDPCiNnKuI49i1O5rJw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2023/p/g/2023/07/29/20/91eCPQClo0HqWCdTpaIymw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "7G5EBCI5",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2023/p/g/2023/07/29/20/MmV3fsNMvp2uimFzsmdvqg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2023/p/g/2023/07/29/20/HWEATMJfLsi7OBU2Z0Zghw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "44EFP322",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2023/p/g/2023/07/29/20/6r5oKe4CGmHeW-OslAYYjQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2023/p/g/2023/07/29/20/Ijpn0W3fYz1eE34u1GKhkw.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 1,
        "discountWeekly": 20,
        "discountMonthly": 30,
        "price": 800000,
        "priceOrigin": 800000,
        "priceTotal": 996800,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KGCZNC",
        "name": "HYUNDAI ELANTRA 2023",
        "ownerId": "UKFLXU",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-3.png",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.016283135552419,
            "lon": 105.76373837775363,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 916,
            "wardId": 31147,
            "street": "Đường Trần Hoàng Na, Phường Hưng Lợi, Quận Ninh Kiều, Thành phố Cần Thơ"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 3.8,
        "distance": "3.8 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "EHX4LBE1",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_elantra_2023/p/g/2023/07/10/10/i1fZY6LDEyjS8BDQnCVzqw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_elantra_2023/p/g/2023/07/10/10/JWe57zVsQeSFx2ivrBJKDQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "23PQQ8E8",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_elantra_2023/p/g/2023/07/10/10/xHzAQLcICK1Abb9gfOhGCQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_elantra_2023/p/g/2023/07/10/10/O_COQMbeAUvY-s2ALMREKg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "FKZWE3SM",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_elantra_2023/p/g/2023/07/10/10/_B6r7rxYkiKMtKO-_2NeIg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_elantra_2023/p/g/2023/07/10/10/p0BwEAfWCrqSiJe7-WOFYw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "FRI7BVLP",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_elantra_2023/p/g/2023/07/10/10/nHAGjEUlnQDWA0Aac7ZRmw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_elantra_2023/p/g/2023/07/10/10/G2an6ddx5YwHPkAr_NWv3w.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 900000,
        "priceOrigin": 900000,
        "priceTotal": 1121400,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "K43GUW",
        "name": "SUZUKI ERTIGA 2021",
        "ownerId": "U5UDKF",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/03/23/08/BCNa8Ouw1ZJ1KglYXV5oAQ.jpg",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.056138418673818,
            "lon": 105.7723841538634,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 918,
            "wardId": 31177,
            "street": "Đường Cách Mạng Tháng Tám, Phường An Thới, Quận Bình Thuỷ, Thành phố Cần Thơ"
        },
        "locationAddr": "Quận Bình Thuỷ, Cần Thơ",
        "locationAddrS": "Quận Bình Thuỷ, Cần Thơ",
        "d": 2.9,
        "distance": "2.9 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "NBMRBMB4",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_ertiga_2021/p/g/2023/07/18/04/G_14xnpQ4d0-l4XFgmONKA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_ertiga_2021/p/g/2023/07/18/04/eVRTK7I390gh4fhD93_PWA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "NIRHJXCK",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_ertiga_2021/p/g/2023/07/18/04/sZzrsLRco4snsd8jrK9xnQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_ertiga_2021/p/g/2023/07/18/04/GiqLsFW19OGO5dW5hBP74w.jpg",
                "carPhotoId": ""
            },
            {
                "id": "61NEFII2",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_ertiga_2021/p/g/2023/07/18/04/Q4fRsQb_AL_Xz16huhBl4A.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_ertiga_2021/p/g/2023/07/18/04/z0QOC9n5h75DrPcarwUgFw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "6QCL3S27",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_ertiga_2021/p/g/2023/07/18/04/3jqlAoCl_WBuIzt9wa5DeA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_ertiga_2021/p/g/2023/07/18/04/hT9oKhTi6fdawUKuauA42Q.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 700000,
        "priceOrigin": 700000,
        "priceTotal": 872200,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KIR6GQ",
        "name": "MITSUBISHI XPANDER 2022",
        "ownerId": "U5UDKF",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/03/23/08/BCNa8Ouw1ZJ1KglYXV5oAQ.jpg",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.061246947568979,
            "lon": 105.74942575720131,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 918,
            "wardId": 31177,
            "street": "Phường An Thới, Quận Bình Thuỷ, Thành phố Cần Thơ, Việt Nam"
        },
        "locationAddr": "Quận Bình Thuỷ, Cần Thơ",
        "locationAddrS": "Quận Bình Thuỷ, Cần Thơ",
        "d": 2.1,
        "distance": "2.1 km",
        "deliveryEnable": 0,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 0,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "LQ78Y2LX",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/07/18/22/VPRk5dv-gcDGzkAIJi1hGw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/07/18/22/f5A8Yuotatg1oIjF6DN-eQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "KSWUHZ2H",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/07/18/22/_aYNkqaqV8A0cj-_FtG25g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/07/18/22/qTJS4bV6uFs-_TKR3FL72Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "M1BY6YBH",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/07/18/22/g7rBdDqYh8lKIUJVNYc_qA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/07/18/22/LSmTGaYqt5nQtdH-syQ0jg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "6T83Q4HB",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/07/18/22/vuidtebESd_qHaXCuzPuVQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/07/18/22/QW17PBfWbzu0-ZKyOssnew.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 700000,
        "priceOrigin": 700000,
        "priceTotal": 872200,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K2CBEX",
        "name": "TOYOTA VIOS E 2021",
        "ownerId": "U9KN8A",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/06/04/20/MPCE4hgyFfDVBnV10FHdMw.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.049114901645613,
            "lon": 105.77117576831398,
            "cityId": 92,
            "districtId": 916,
            "wardId": 31120,
            "street": "Phước bách thảo, 211 Nguyễn Văn Cừ, An Hoà, Ninh Kiều, Cần Thơ"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 2.6,
        "distance": "2.6 km",
        "deliveryEnable": 1,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 30000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "H3WJD96K",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2021/p/g/2023/06/10/13/2oa_dhwt2mQqyrXmOB7Suw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2021/p/g/2023/06/10/13/nN7H0-9JjTxX40-A-dXWAQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "3BM2P3SI",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2021/p/g/2023/06/10/13/3E14Wc99yB06WB6MLz_6yA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2021/p/g/2023/06/10/13/XeRhhMD0LBf5Ba9LLpz_Dg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "3KLQL5DN",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2021/p/g/2023/06/10/13/hR09KWpHheJjmhBdg66HlA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2021/p/g/2023/06/10/13/NJUMImLIUixlwNvzXsdypQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "3VKDS7ZW",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2021/p/g/2023/06/10/13/SvuYAZKoIMrR3gZrT08k6g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2021/p/g/2023/06/10/13/nXLNL5Hvuk6w0hlHnOC9Ug.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 700000,
        "priceOrigin": 700000,
        "priceTotal": 872200,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KJFDWQ",
        "name": "MITSUBISHI TRITON 2021",
        "ownerId": "U9KN8A",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/06/04/20/MPCE4hgyFfDVBnV10FHdMw.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.049890084841813,
            "lon": 105.77247258557288,
            "cityId": 92,
            "districtId": 916,
            "wardId": 31120,
            "street": "Cửa Hàng Bách Phước Thảo, 211"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 2.7,
        "distance": "2.7 km",
        "deliveryEnable": 1,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 2,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "6T83QHXA",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_triton_2021/p/g/2023/02/19/14/8OQP0bWQ573MqJDgnb1gEw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_triton_2021/p/g/2023/02/19/14/FCZpGEVD4PZpVixq5cDJmA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "M1BY6Z54",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_triton_2021/p/g/2023/02/19/14/XdOAQZYbsIag-tUgCMfWPw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_triton_2021/p/g/2023/02/19/14/5ShGgIwGRqatbV3olI5E8Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "6QCL3S8E",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_triton_2021/p/g/2023/02/19/14/MvCZ1dUhsVpkeV6w8AtBgA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_triton_2021/p/g/2023/02/19/14/ftm9oahQjdRMW2_hqnSW3w.jpg",
                "carPhotoId": ""
            },
            {
                "id": "JYLXJN28",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_triton_2021/p/g/2023/02/19/14/nBYLtD6JZqA4gT-mG-9M6w.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_triton_2021/p/g/2023/02/19/14/MCEGT5N9ocMpkiphHfU_5Q.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 800000,
        "priceOrigin": 800000,
        "priceTotal": 996800,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KKVPUN",
        "name": "SUZUKI ERTIGA 2022",
        "ownerId": "U67WQ5",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/07/05/11/7zDpBh3-j6z0yn9CvbrW5w.jpg",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.020112267963212,
            "lon": 105.75220654762897,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 916,
            "wardId": 31150,
            "street": "Trần Vĩnh Kiết, Phường An Bình, Quận Ninh Kiều, Cần Thơ"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 3,
        "distance": "3 km",
        "deliveryEnable": 1,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 15000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "43JHX9HI",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_ertiga_2022/p/g/2023/05/04/20/qRNmXpEfCUPBaxJ_U2-Q8A.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_ertiga_2022/p/g/2023/05/04/20/fCEu20ml4aFiqvxJITOtQg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "HU5UV3QS",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_ertiga_2022/p/g/2023/05/04/20/64bSTOFis2MddCdG98BrHg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_ertiga_2022/p/g/2023/05/04/20/Ao38UKXBEiOAmT62h26SYw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "IT5I8ULJ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_ertiga_2022/p/g/2023/05/04/20/URqfk_4onBn3nlJhJpVbsQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_ertiga_2022/p/g/2023/05/04/20/gLsglkfidrVWFmlbs30g-A.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 10,
        "price": 616000,
        "priceOrigin": 616000,
        "priceTotal": 767536,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K4LM66",
        "name": "TOYOTA INNOVA E 2019",
        "ownerId": "U5RTD2",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-0.png",
        "seat": 8,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 10.01971433113918,
            "lon": 105.75245592371049,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 916,
            "wardId": 31149,
            "street": "104 Đường B30"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 2.8,
        "distance": "2.8 km",
        "deliveryEnable": 0,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 7,
        "deliveryPrice": 10000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "1KSAFRXM",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2019/p/g/2023/03/19/09/8_LMcmdCYFxEgFcnxZbmUA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2019/p/g/2023/03/19/09/dIWa-OlztizxXJCECxQDUw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "BR7X7CQT",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2019/p/g/2023/03/19/09/1d8J_KwRr7C9FlIskH3TTw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2019/p/g/2023/03/19/09/ILovlF4VtIbhYZvABG3npg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "BJK4FQUK",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2019/p/g/2023/03/19/09/8pD5vCGUcUE0uqeI6X0fvQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2019/p/g/2023/03/19/09/eRd4X5M6SH4Ps6YFqwISLg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "AAA1U6SY",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2019/p/g/2023/03/19/09/4KU44QgSW2tJ9M4L430_KA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2019/p/g/2023/03/19/09/zRKaSOcLMFJfRenrImNrpQ.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 760000,
        "priceOrigin": 760000,
        "priceTotal": 946960,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KJ3TKY",
        "name": "HONDA CITY 2019",
        "ownerId": "URCUKL",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/08/14/18/dwzEr_l8oz0y9iisc2sVpg.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.038417747942981,
            "lon": 105.78056768101871,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 916,
            "wardId": 31132,
            "street": "79 Đường Xô Viết Nghệ Tĩnh"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 3.9,
        "distance": "3.9 km",
        "deliveryEnable": 1,
        "deliveryRadius": 5,
        "deliveryRadiusFree": 2,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "NVK82Y7B",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2019/p/g/2019/10/24/18/VgHwLb868OoweqWy3A5jPg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2019/p/g/2019/10/24/18/SE-X_HRbfUHiwyujlGIm-w.jpg",
                "carPhotoId": ""
            },
            {
                "id": "7G5EB2SQ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2019/p/g/2019/10/24/18/XE5XwHcUZ5arKXij5vN7QQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2019/p/g/2019/10/24/18/11H6WkWBrmXCQVNgvz3yvQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "7IFBXVD9",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2019/p/g/2019/10/28/11/V7mBRTT6XVnVCslOxI4fng.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2019/p/g/2019/10/28/11/V7mBRTT6XVnVCslOxI4fng.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 2
        },
        "totalTrips": 4,
        "totalReviews": 4,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 800000,
        "priceOrigin": 800000,
        "priceTotal": 898400,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 1,
        "wdShort": {
            "instant": 0,
            "deliveryEnable": 1,
            "deliveryRadius": 40,
            "deliveryRadiusFree": 5,
            "deliveryPrice": 15000,
            "deliveryDiscountEnable": 0,
            "deliveryDiscountKm": 0,
            "deliveryDiscountPercent": 0,
            "deliveryDiscountMax": 0,
            "price": 2016001,
            "priceOrigin": 2016001,
            "finalPrice": 2228602,
            "totalDiscountPercent": 0,
            "deliveryFee": 0,
            "ownerHostFiveStar": 0
        },
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KETMBL",
        "name": "MAZDA 3 2023",
        "ownerId": "URW5PV",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-2.png",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.043494348092583,
            "lon": 105.77882275771454,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 916,
            "wardId": 31123,
            "street": "Hùng Vương"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 3.7,
        "distance": "3.7 km",
        "deliveryEnable": 1,
        "deliveryRadius": 5,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 15000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "MLA57C21",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2023/p/g/2023/04/12/20/x1is63O1GiPolOxZ1PhxVg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2023/p/g/2023/04/12/20/lDZHS2o9mKOy0lOJR_uhig.jpg",
                "carPhotoId": ""
            },
            {
                "id": "M1BY6ZPK",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2023/p/g/2023/04/12/20/yfpdvBJPgHG7qIfHWpp6vA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2023/p/g/2023/04/12/20/qZNsnMof2j-tqokgeshBUw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "6ZGBU6FA",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2023/p/g/2023/04/12/20/OaUx2sEPdKiWp4ig_2qXnw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2023/p/g/2023/04/12/20/2eXIvoRsYHdtemldKSj27Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "6NHNSZNJ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2023/p/g/2023/04/12/20/3WWGOKG1Ps-qE0CbqXa1xw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2023/p/g/2023/04/12/20/tpi8HZmgxHCirOa1kSUkWA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 1,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 850000,
        "priceOrigin": 850000,
        "priceTotal": 954550,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KJHLUB",
        "name": "TOYOTA FORTUNER 2019",
        "ownerId": "URCUKL",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/08/14/18/dwzEr_l8oz0y9iisc2sVpg.jpg",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 10.041391235402816,
            "lon": 105.78345056508296,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 916,
            "wardId": 31132,
            "street": "79 Đường Xô Viết Nghệ Tĩnh"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 3.9,
        "distance": "3.9 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 3,
        "deliveryPrice": 10000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "769VDBQG",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_fortuner_2019/p/g/2019/10/24/18/qUlveAzy1wFcDpYlOzwwTg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_fortuner_2019/p/g/2019/10/24/18/wv_5VqM9Q-8cGUAvxEXLwA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "N8VVZ91M",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_fortuner_2019/p/g/2019/10/28/11/YOey9g2cvquNuycGk1qaow.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_fortuner_2019/p/g/2019/10/28/11/Vscoq8y-wBYxoiIigJCaGQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "7CUIUZFZ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_fortuner_2019/p/g/2019/10/28/11/DHMsgJ0csVjAx-Gydac76Q.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_fortuner_2019/p/g/2019/10/28/11/08WZNOMNr2JL0xukvAv6uQ.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 1
        },
        "totalTrips": 1,
        "totalReviews": 1,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 1000000,
        "priceOrigin": 1000000,
        "priceTotal": 1123000,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 1,
        "wdShort": {
            "instant": 0,
            "deliveryEnable": 1,
            "deliveryRadius": 10,
            "deliveryRadiusFree": 5,
            "deliveryPrice": 10000,
            "deliveryDiscountEnable": 0,
            "deliveryDiscountKm": 0,
            "deliveryDiscountPercent": 0,
            "deliveryDiscountMax": 0,
            "price": 2287040,
            "priceOrigin": 2287040,
            "finalPrice": 2526744,
            "totalDiscountPercent": 0,
            "deliveryFee": 0,
            "ownerHostFiveStar": 0
        },
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KI523F",
        "name": "SUZUKI XL7 2022",
        "ownerId": "UP9D3G",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/02/15/15/pG-NytBOKmb-bbNrwe8J9A.jpg",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.019542331438384,
            "lon": 105.76338427475189,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 916,
            "wardId": 31147,
            "street": "6Trí"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 3.2,
        "distance": "3.2 km",
        "deliveryEnable": 1,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 1,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "C7TMX63C",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2023/02/15/15/e8Qwdw_ypxsoPCpcuZcD7g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2023/02/15/15/WJdPLC80z5AYM1yeiNbHRQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "D665MQ8W",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2023/02/15/15/BXA3T2b1_Gdt5YENi7E4GQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2023/02/15/15/YydIjimsDUhJX5yn2XU3gQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "DCMX8KMG",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2023/02/15/15/IP1f5rkqdDdjMRZgUdAssA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2023/02/15/15/1wB_eatikze80pKv9vakyA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "2A3THQ9M",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2023/02/15/15/q5k0PFd9HeT_6N4BEyUHUw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2023/02/15/15/_EpReAoAeAREDoSBxG-E_A.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 800000,
        "priceOrigin": 800000,
        "priceTotal": 898400,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KFP9B5",
        "name": "TOYOTA CAMRY 2021",
        "ownerId": "UN1RI2",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/00/25/19/uDXKQeKdkniv5NVOiekIqw.jpg",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.061683447868182,
            "lon": 105.72839324202994,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 918,
            "wardId": 31180,
            "street": "Bùi Hữu Nghĩa, Phường Long Hòa, Quận Bình Thuỷ, Thành phố Cần Thơ, Việt Nam"
        },
        "locationAddr": "Quận Bình Thuỷ, Cần Thơ",
        "locationAddrS": "Quận Bình Thuỷ, Cần Thơ",
        "d": 3,
        "distance": "3 km",
        "deliveryEnable": 1,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 15000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "5EVP1NBC",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_camry_2021/p/g/2023/01/16/14/532P86Rqf0H-gciNIn-yyQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_camry_2021/p/g/2023/01/16/14/8NiYUt52Fq1poq4IG0vpDg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "K7HVQJSU",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_camry_2021/p/g/2023/01/16/14/OTyefPCStTLqfC76QHmpbw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_camry_2021/p/g/2023/01/16/14/hXySbhBDV9wSqvs-SnMy7A.jpg",
                "carPhotoId": ""
            },
            {
                "id": "587ZUMFG",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_camry_2021/p/g/2023/01/16/14/-cAbJfHiMdHoV8zC_mQ7oA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_camry_2021/p/g/2023/01/16/14/4B73fyzwtxQ-8cCgYpflNw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "J9XDFIHR",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_camry_2021/p/g/2023/01/16/14/wuZ8Qiva6xjyp5m4wsBpPA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_camry_2021/p/g/2023/01/16/14/lx_WmFwqkDCaCsnYpuKt9A.jpg",
                "carPhotoId": ""
            },
            {
                "id": "KEII76JF",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_camry_2021/p/g/2023/01/16/14/Ygd0Ng76pwQhmrPzqgKZrw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_camry_2021/p/g/2023/01/16/14/U4ouNgk0c5YpDuvJpYHRdw.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 30,
        "price": 1190000,
        "priceOrigin": 1190000,
        "priceTotal": 1336370,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KFETTN",
        "name": "MITSUBISHI ATTRAGE 2022",
        "ownerId": "U892Z7",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/03/05/20/xyKoTCYlgbd93dJ1JHPE3A.jpg",
        "seat": 5,
        "status": 2,
        "instant": 1,
        "optionsTransmission": 2,
        "location": {
            "lat": 10.00258413091478,
            "lon": 105.7418471704675,
            "cityId": 92,
            "districtId": 916,
            "wardId": 31150,
            "street": "Cafe Tâm, Số 03 KDC 3A, An Bình, Ninh Kiều, Cần Thơ, Việt Nam"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 4.6,
        "distance": "4.6 km",
        "deliveryEnable": 0,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 0,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "G7NFEP2L",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_attrage_2022/p/g/2023/02/12/19/C0EI0HXagz5MXLUwdpMO3Q.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_attrage_2022/p/g/2023/02/12/19/8aZ5pHG-_A5w0OAEarJDpQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "GE7R4JZV",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_attrage_2022/p/g/2023/02/12/19/wphrC__J72zjRArciMEI_A.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_attrage_2022/p/g/2023/02/12/19/kSO7CHHqHCiKnuzUrMZw2Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "39Q31E3R",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_attrage_2022/p/g/2023/02/12/19/jOUGnB6RqrRZkeRmusMDug.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_attrage_2022/p/g/2023/02/12/19/HBn8vghTXFwENbA_1ab2gQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "3I8SZQEB",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_attrage_2022/p/g/2023/02/12/19/enuXdNwBRmVTcO_RgbGwig.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_attrage_2022/p/g/2023/02/12/19/6vVuUTvf62ktlnDX13QjXw.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 3
        },
        "totalTrips": 3,
        "totalReviews": 3,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 0,
        "price": 590000,
        "priceOrigin": 590000,
        "priceTotal": 735140,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 1,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K3E6FM",
        "name": "KIA CERATO 2020",
        "ownerId": "UK2UQA",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/02/07/12/hKC-Hl9GrN6XmbSWmoryVw.jpg",
        "seat": 5,
        "status": 2,
        "instant": 1,
        "optionsTransmission": 2,
        "location": {
            "lat": 10.051504384767012,
            "lon": 105.78798782570058,
            "cityId": 92,
            "districtId": 916,
            "wardId": 31117,
            "street": "Phòng Quản Lý Xuất Nhập Cảnh Cần Thơ, 9A Trần Phú"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 4.4,
        "distance": "4.4 km",
        "deliveryEnable": 1,
        "deliveryRadius": 20,
        "deliveryRadiusFree": 10,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "D7HHKKQ2",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_cerato_2020/p/g/2023/02/22/11/bkHpmNq85tiK_I73tMYQNg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_cerato_2020/p/g/2023/02/22/11/Le8VGRjoPugUdGKtt3ViNw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "22U7LV4R",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_cerato_2020/p/g/2023/02/22/11/z5zLOJZ9VChpUMpvqcxyKw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_cerato_2020/p/g/2023/02/22/11/eckQnkZ79D27M2-vsY5p1w.jpg",
                "carPhotoId": ""
            },
            {
                "id": "DCMX8K7C",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_cerato_2020/p/g/2023/02/22/11/NtsTEkpDDXwz84JkIP5A2A.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_cerato_2020/p/g/2023/02/22/11/wUf2EjdRfLKdpQj59PqqIA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "CI5VBU9R",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_cerato_2020/p/g/2023/02/22/11/NLZRCUf3gyCfVjopw5kYZw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_cerato_2020/p/g/2023/02/22/11/1sN_-uwheQIgemVMnFiXUA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 5
        },
        "totalTrips": 11,
        "totalReviews": 11,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 30,
        "price": 650000,
        "priceOrigin": 650000,
        "priceTotal": 809900,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 1,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KFUKRB",
        "name": "HONDA CITY 2019",
        "ownerId": "UK2UQA",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/02/07/12/hKC-Hl9GrN6XmbSWmoryVw.jpg",
        "seat": 5,
        "status": 2,
        "instant": 1,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.032533865195587,
            "lon": 105.78294532914336,
            "cityId": 92,
            "districtId": 916,
            "wardId": 31135,
            "street": "Đại Lộ Hòa Bình"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 4.3,
        "distance": "4.3 km",
        "deliveryEnable": 1,
        "deliveryRadius": 20,
        "deliveryRadiusFree": 10,
        "deliveryPrice": 30000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "INBQU2U1",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2019/p/g/2023/03/06/07/9yeWEl_w9CMREuvEdYQgHw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2019/p/g/2023/03/06/07/69LRtqJ2lJjlWvsmYjM6dw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "IT5I8U4J",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2019/p/g/2023/03/06/07/7j3wP3pBzxwXyDA7lVGo1g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2019/p/g/2023/03/06/07/2ImEAofnJpiG8y0UiDhtEQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "41TMMFJH",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2019/p/g/2023/03/06/07/dy6YkN41_d5EuKGGbXzNDg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2019/p/g/2023/03/06/07/ZnqLw4vF1H-aVtnaexL4aA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "44EFPEUP",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2019/p/g/2023/03/06/07/rcf1c6MbCb_TQuXcZye7wQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2019/p/g/2023/03/06/07/ihWVNLld-2t_jhK4o8K_sA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 5
        },
        "totalTrips": 6,
        "totalReviews": 6,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 30,
        "price": 650000,
        "priceOrigin": 650000,
        "priceTotal": 809900,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 1,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KGH8E7",
        "name": "TOYOTA VIOS G 2022",
        "ownerId": "UK2UQA",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/02/07/12/hKC-Hl9GrN6XmbSWmoryVw.jpg",
        "seat": 4,
        "status": 2,
        "instant": 1,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.079487614933784,
            "lon": 105.71376926124223,
            "cityId": 92,
            "districtId": 918,
            "wardId": 31169,
            "street": "ATM Vietinbank - Sân Bay Cần Thơ, Sân Bay Cần Thơ"
        },
        "locationAddr": "Quận Bình Thuỷ, Cần Thơ",
        "locationAddrS": "Quận Bình Thuỷ, Cần Thơ",
        "d": 5.5,
        "distance": "5.5 km",
        "deliveryEnable": 1,
        "deliveryRadius": 20,
        "deliveryRadiusFree": 10,
        "deliveryPrice": 30000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "LSJ7P7FG",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2022/p/g/2023/02/21/22/S6J9SzRDxx1k2tdp1CpttA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2022/p/g/2023/02/21/22/NNy9RZd_tSktQEP_RCIj4w.jpg",
                "carPhotoId": ""
            },
            {
                "id": "6QCL3S81",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2022/p/g/2023/02/21/22/BxQCkW1Jho9W164eIK50hw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2022/p/g/2023/02/21/22/ODYFTZnE0pYASHHXlG-g5w.jpg",
                "carPhotoId": ""
            },
            {
                "id": "63DZJM6K",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2022/p/g/2023/02/21/22/i6JAcXQINCopqh0YdVj15w.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2022/p/g/2023/02/21/22/Ew3-4CcIpxA3Ww6nLoGO_A.jpg",
                "carPhotoId": ""
            },
            {
                "id": "MDUVASSR",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2022/p/g/2023/02/21/22/1iO923jxXYkdtAcAKdqhpg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2022/p/g/2023/02/21/22/GFmUtC981gEEaIab2BN09Q.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 4
        },
        "totalTrips": 4,
        "totalReviews": 4,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 30,
        "price": 680000,
        "priceOrigin": 680000,
        "priceTotal": 847282,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 1,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KGII6H",
        "name": "MITSUBISHI XPANDER 2021",
        "ownerId": "UK2UQA",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/02/07/12/hKC-Hl9GrN6XmbSWmoryVw.jpg",
        "seat": 7,
        "status": 2,
        "instant": 1,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.081769384767012,
            "lon": 105.71376926124223,
            "cityId": 92,
            "districtId": 918,
            "wardId": 31169,
            "street": "ATM Vietinbank - Sân Bay Cần Thơ, Sân Bay Cần Thơ"
        },
        "locationAddr": "Quận Bình Thuỷ, Cần Thơ",
        "locationAddrS": "Quận Bình Thuỷ, Cần Thơ",
        "d": 5.5,
        "distance": "5.5 km",
        "deliveryEnable": 1,
        "deliveryRadius": 20,
        "deliveryRadiusFree": 10,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "MFPSREQX",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/11/16/23/aaVQwWP_UJ3Dz1JSnaIfWw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/11/16/23/2Co37f2SNrgmwP4ivMFtZA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "6L681MMI",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/11/16/23/uadkvFUvg7aTSCkz9k0pnA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/11/16/23/lIoVpOUD3F-H63Z8INWM0A.jpg",
                "carPhotoId": ""
            },
            {
                "id": "CI5VBUAV",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/11/16/23/1EAGe_wdEayBYrGxuOncbA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/11/16/23/FUuZ95V1SfAjVpRgmGHmzg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "C9JICRJL",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/11/16/23/8i0VNtFaHVyRtbmhOXA-Sw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/11/16/23/ekdZU8Wa1yEDneq9pIQVlg.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 5
        },
        "totalTrips": 13,
        "totalReviews": 13,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 30,
        "price": 700000,
        "priceOrigin": 700000,
        "priceTotal": 872200,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 1,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "K3BL1M",
        "name": "HONDA CITY 2019",
        "ownerId": "UK2UQA",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/02/07/12/hKC-Hl9GrN6XmbSWmoryVw.jpg",
        "seat": 4,
        "status": 2,
        "instant": 1,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.082182618673817,
            "lon": 105.71422547146679,
            "cityId": 92,
            "districtId": 918,
            "wardId": 31169,
            "street": "ATM Vietinbank - Sân Bay Cần Thơ, Sân Bay Cần Thơ"
        },
        "locationAddr": "Quận Bình Thuỷ, Cần Thơ",
        "locationAddrS": "Quận Bình Thuỷ, Cần Thơ",
        "d": 5.5,
        "distance": "5.5 km",
        "deliveryEnable": 1,
        "deliveryRadius": 20,
        "deliveryRadiusFree": 10,
        "deliveryPrice": 30000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "NGXJRLJ4",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2019/p/g/2023/03/11/10/mU7cimF3yd8cWWNXAMc5_g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2019/p/g/2023/03/11/10/G9KktwHhFmh5F5f8CURtzw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "NIRHJYIM",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2019/p/g/2023/03/11/10/EiW64vmHEW6nWRVnfyhe2w.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2019/p/g/2023/03/11/10/wsBFeYv0J36wYNz7Pwfrtg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "MLA57CGB",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2019/p/g/2023/03/11/10/MyoW4wtA_LWVVTqV1QDmDg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2019/p/g/2023/03/11/10/rvuUjtHuu5FTQp0XQRbRBg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "6WL24RZ9",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2019/p/g/2023/03/11/10/R9J-odDoltrpGj1csV5mXQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2019/p/g/2023/03/11/10/qfyrz7DQBUamQCtHZgIhFA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 5
        },
        "totalTrips": 5,
        "totalReviews": 5,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 700000,
        "priceOrigin": 700000,
        "priceTotal": 872200,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 1,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KHMPZH",
        "name": "MITSUBISHI XPANDER 2023",
        "ownerId": "UK2UQA",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/02/07/12/hKC-Hl9GrN6XmbSWmoryVw.jpg",
        "seat": 7,
        "status": 2,
        "instant": 1,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.076014947568979,
            "lon": 105.7264950578148,
            "cityId": 92,
            "districtId": 918,
            "wardId": 31169,
            "street": "Phường Trà An, Quận Bình Thuỷ, Thành phố Cần Thơ, Việt Nam"
        },
        "locationAddr": "Quận Bình Thuỷ, Cần Thơ",
        "locationAddrS": "Quận Bình Thuỷ, Cần Thơ",
        "d": 4.2,
        "distance": "4.2 km",
        "deliveryEnable": 1,
        "deliveryRadius": 20,
        "deliveryRadiusFree": 10,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "GXR99IYB",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2023/p/g/2023/02/16/14/XATDS-dtmQkL-lHlF57izw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2023/p/g/2023/02/16/14/ccSiKjlQRG5UckRdz0Zfpg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "G8ICWBJL",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2023/p/g/2023/02/16/14/w33FO3JS25JfDnSFg0l5UA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2023/p/g/2023/02/16/14/Rp5bN0KEhNfML6umSo36eA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "GIE667MW",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2023/p/g/2023/02/16/14/ggAczpE8LlQWMZ_stw9F0g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2023/p/g/2023/02/16/14/ZCGzVnKp7DjCAUTS-nB2Cg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "GCTU5PD4",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2023/p/g/2023/02/16/14/hkgdJ7he5dY43yTJB_FFww.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2023/p/g/2023/02/16/14/fASVXqmo3N6lKd8LViOrWA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 5
        },
        "totalTrips": 5,
        "totalReviews": 5,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 30,
        "price": 750000,
        "priceOrigin": 750000,
        "priceTotal": 934500,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 1,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "K2TY3S",
        "name": "MITSUBISHI XPANDER 2023",
        "ownerId": "UK2UQA",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/02/07/12/hKC-Hl9GrN6XmbSWmoryVw.jpg",
        "seat": 7,
        "status": 2,
        "instant": 1,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.024496801570814,
            "lon": 105.7823637103514,
            "cityId": 92,
            "districtId": 919,
            "wardId": 31189,
            "street": "Cầu Quang Trung"
        },
        "locationAddr": "Quận Cái Răng, Cần Thơ",
        "locationAddrS": "Quận Cái Răng, Cần Thơ",
        "d": 4.5,
        "distance": "4.5 km",
        "deliveryEnable": 1,
        "deliveryRadius": 20,
        "deliveryRadiusFree": 10,
        "deliveryPrice": 30000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "MH5QEYHE",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2023/p/g/2023/02/13/12/t-J2Eo_KINxGvJypXGSJaw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2023/p/g/2023/02/13/12/IBKBc_xzfLbqfSZDYDocFw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "KXLP624P",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2023/p/g/2023/02/13/12/NYCneuthV9hoH2JWwpI-4w.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2023/p/g/2023/02/13/12/-8tnaprXMSnwmvJHoVuObg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "L6AWSXSE",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2023/p/g/2023/02/13/12/milBFRZZKDU6uC57uoCbTA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2023/p/g/2023/02/13/12/bubDiDHxR9HCoajO27mfVA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "LSJ7P736",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2023/p/g/2023/02/13/12/LwXaFD7ri5bTg7PufCjOAQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2023/p/g/2023/02/13/12/mzYaVifYrPp7dpGgV8IR4w.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 3
        },
        "totalTrips": 3,
        "totalReviews": 3,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 750000,
        "priceOrigin": 750000,
        "priceTotal": 934500,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 1,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "K3XJ5B",
        "name": "HONDA CITY 2022",
        "ownerId": "U9US42",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/05/30/16/LkXkS7iiS2XQGrb1Mf5cTQ.jpg",
        "seat": 5,
        "status": 2,
        "instant": 1,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.035841002019618,
            "lon": 105.787334364609,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 916,
            "wardId": 31138,
            "street": "TTTM SCID - 1 Hoà Bình , P.Tân An , Quận Ninh Kiều, Cần Thơ"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 4.5,
        "distance": "4.5 km",
        "deliveryEnable": 1,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 5,
        "deliveryPrice": 15000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "E24MGUDI",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2022/p/g/2023/03/15/17/FdkNpyHy2CUaN_hzpBezGw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2022/p/g/2023/03/15/17/5GIM0ghjHfpuaQLEvqiplw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "EJR32LP8",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2022/p/g/2023/03/15/17/cn7ev-sNyOhIa-Km0AiTYA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2022/p/g/2023/03/15/17/ACT5TI-Ear9oCGord2oQBg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "EQ1XBUFA",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2022/p/g/2023/03/15/17/s-4y1RJTW2WNjVWpYYSM_g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2022/p/g/2023/03/15/17/BmamaDDDObKDFQy4TB1Ldg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "EWK7XLR4",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2022/p/g/2023/03/15/17/DMPbHKYAFCqRXLYK-7XoEA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2022/p/g/2023/03/15/17/_1OwLH3QptKlD62-PsglgQ.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 3
        },
        "totalTrips": 3,
        "totalReviews": 3,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 15,
        "price": 750000,
        "priceOrigin": 750000,
        "priceTotal": 934500,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 1,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "K24HQP",
        "name": "KIA CARENS 2023",
        "ownerId": "U9US42",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/05/30/16/LkXkS7iiS2XQGrb1Mf5cTQ.jpg",
        "seat": 7,
        "status": 2,
        "instant": 1,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.081680102019618,
            "lon": 105.71384499157108,
            "cityId": 92,
            "districtId": 918,
            "wardId": 31180,
            "street": "Bãi gửi xe qua đêm - Sân bay Cần Thơ"
        },
        "locationAddr": "Quận Bình Thuỷ, Cần Thơ",
        "locationAddrS": "Quận Bình Thuỷ, Cần Thơ",
        "d": 5.4,
        "distance": "5.4 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 5,
        "deliveryPrice": 15000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "KG2GGYG2",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_carens_2023/p/g/2023/03/12/16/OQQxQzv5nxvdSZzqq8x3yg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_carens_2023/p/g/2023/03/12/16/1EtXo4z3OYyu_vekrOmkYQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "JFIUSY3U",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_carens_2023/p/g/2023/03/12/16/MLV53zGvlT_SBLuozwu2vg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_carens_2023/p/g/2023/03/12/16/ek5Z8pS8L6StLvYks059aA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "JKSMP792",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_carens_2023/p/g/2023/03/12/16/vJ08SP-3l15oIsTx_RFoUA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_carens_2023/p/g/2023/03/12/16/mkzqRr2mTaDtq7I4eVGwxg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "5BGTW4JR",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_carens_2023/p/g/2023/03/12/16/mghtX51EflRt-XagbX2wlg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_carens_2023/p/g/2023/03/12/16/tZ1p1uYQXgA40-5DzG7hQg.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 5
        },
        "totalTrips": 6,
        "totalReviews": 6,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 20,
        "price": 830000,
        "priceOrigin": 830000,
        "priceTotal": 1034180,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 1,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KLZTPN",
        "name": "MITSUBISHI ATTRAGE 2023",
        "ownerId": "UMM5XE",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/06/19/01/Emq0jGLRLuPrxCjiszSyNA.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.023574434654812,
            "lon": 105.79309011950703,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 919,
            "wardId": 31189,
            "street": "Phường Hưng Phú, Quận Cái Răng, Thành phố Cần Thơ, Việt Nam"
        },
        "locationAddr": "Quận Cái Răng, Cần Thơ",
        "locationAddrS": "Quận Cái Răng, Cần Thơ",
        "d": 5.5,
        "distance": "5.5 km",
        "deliveryEnable": 1,
        "deliveryRadius": 20,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 25000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "1IYCMGHM",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_attrage_2023/p/g/2023/08/06/15/MGpqKcxJ-rLXdvwZarp3OA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_attrage_2023/p/g/2023/08/06/15/C0CUvEOw24pmDjjmfIG1yQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "AAA1UMDF",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_attrage_2023/p/g/2023/08/06/15/OptYuLoBg0AlInZiQottew.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_attrage_2023/p/g/2023/08/06/15/1-Ab_J6VrhlHrPBA13craQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "ATXBYY2C",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_attrage_2023/p/g/2023/08/06/15/N0jWjeIaeAfDlcyf-jqmAQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_attrage_2023/p/g/2023/08/06/15/VqpvmFiCYN8yurh0_oo4xA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "B1GSPWD1",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_attrage_2023/p/g/2023/08/06/15/Q1wcU-x22pKWx3rMnzEsVg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_attrage_2023/p/g/2023/08/06/15/76l4YHysdyfHXTPP0q6rTg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "NY3NQRHN",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_attrage_2023/p/g/2023/08/06/15/Wry_w2yh5rQx9_ODVMwpzQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_attrage_2023/p/g/2023/08/06/15/yu8P1206SgVQI7Sucg__oA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "7G5EBCI8",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_attrage_2023/p/g/2023/08/06/15/4ADceu_IHI-rBXBHHYO6gg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_attrage_2023/p/g/2023/08/06/15/q5ISpUYGRuKD0xWKKV79_Q.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 1
        },
        "totalTrips": 1,
        "totalReviews": 1,
        "discountEnable": 0,
        "discountWeekly": 20,
        "discountMonthly": 30,
        "price": 590000,
        "priceOrigin": 590000,
        "priceTotal": 735140,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "K4LM69",
        "name": "MITSUBISHI ATTRAGE 2020",
        "ownerId": "USFYH4",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/03/28/14/hHNokZQ5OMI79s-zQZWqfw.jpg",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 9.99950828095218,
            "lon": 105.77390876216379,
            "cityId": 92,
            "districtId": 919,
            "wardId": 31192,
            "street": "Chung Cư Hồng Loan, 2Q2F+F5Q"
        },
        "locationAddr": "Quận Cái Răng, Cần Thơ",
        "locationAddrS": "Quận Cái Răng, Cần Thơ",
        "d": 5.7,
        "distance": "5.7 km",
        "deliveryEnable": 1,
        "deliveryRadius": 5,
        "deliveryRadiusFree": 5,
        "deliveryPrice": 5000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "A2NWAREV",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_attrage_2020/p/g/2023/03/15/07/4y2xqSe2qQaRw_XVCx-nAg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_attrage_2020/p/g/2023/03/15/07/NrZ0DBnknjrOAOP1_rlTNA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "1IYCMHQ1",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_attrage_2020/p/g/2023/03/15/07/nCZnw2ybVJH8SVDx4ddulA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_attrage_2020/p/g/2023/03/15/07/CGvTs5czOeaDHqX-c7b68w.jpg",
                "carPhotoId": ""
            },
            {
                "id": "BYZ78CLK",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_attrage_2020/p/g/2023/03/15/07/zpgNWam3KPF-StQZKjyJWw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_attrage_2020/p/g/2023/03/15/07/yJz24zb8OmXLK4rfVUzv9g.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 3
        },
        "totalTrips": 3,
        "totalReviews": 3,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 550000,
        "priceOrigin": 550000,
        "priceTotal": 685300,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KKYZ6S",
        "name": "HYUNDAI ACCENT 2022",
        "ownerId": "UKIKN5",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-4.png",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.041352068112813,
            "lon": 105.78700278204383,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 916,
            "wardId": 31135,
            "street": "Bancalucky88, 38 Nguyễn Trãi, Tân An, Ninh Kiều, Cần Thơ, Việt Nam"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 4.3,
        "distance": "4.3 km",
        "deliveryEnable": 0,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 0,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "4NMXH2ZB",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_accent_2022/p/g/2023/08/13/15/IFCRR8vNORyC1hJhYKFg2Q.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_accent_2022/p/g/2023/08/13/15/0rxlAUf8RIEuBRuQDfxdOA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "4AAQB5WY",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_accent_2022/p/g/2023/08/13/15/jS3QgwBHk1_HaC73cNqfEw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_accent_2022/p/g/2023/08/13/15/ZsYnDOQcu4WZFu6zHttJQg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "H6G3LU55",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_accent_2022/p/g/2023/08/13/15/gH0_dZrclu2idjqu8uZwpA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_accent_2022/p/g/2023/08/13/15/KwJanehl3P1gfENQ5KpMvw.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 20,
        "discountMonthly": 30,
        "price": 590000,
        "priceOrigin": 590000,
        "priceTotal": 735140,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KKVPUB",
        "name": "TOYOTA VIOS E 2022",
        "ownerId": "UP4BWS",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/02/11/18/4fPirToBGd6EUsP7iGbYaw.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 10.029782431812388,
            "lon": 105.7813749577083,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 916,
            "wardId": 31135,
            "street": "Bệnh viện Đa khoa thành phố Cần Thơ, 04 Đường Châu Văn Liêm"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 4.3,
        "distance": "4.3 km",
        "deliveryEnable": 1,
        "deliveryRadius": 20,
        "deliveryRadiusFree": 5,
        "deliveryPrice": 10000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "CXZD63ZV",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2023/02/13/19/Q66nxGl488nnx9yrb-_8xQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2023/02/13/19/dPC0ycE0bme5m1rf_ErM9g.jpg",
                "carPhotoId": ""
            },
            {
                "id": "DU8AD5KQ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2023/02/13/19/9iC13euI_y6uWxaKSM-ewg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2023/02/13/19/Jl-Y14sETGpvxTjtvelC1w.jpg",
                "carPhotoId": ""
            },
            {
                "id": "2CBRA1YZ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2023/02/13/19/GnTsflDYkgy1zgdG7y8I5Q.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2023/02/13/19/HOAfPLRx6ST8zV1-8eq1xw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "1RC8CQD5",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2023/02/13/19/PujlPWJHWOJ_X1eXX9K21w.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2023/02/13/19/q2xbLkuewlpewwt0LO4ZYg.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 1,
        "discountWeekly": 0,
        "discountMonthly": 10,
        "price": 700000,
        "priceOrigin": 700000,
        "priceTotal": 872200,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KFZT7F",
        "name": "TOYOTA VIOS G 2019",
        "ownerId": "UK2UQS",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/06/03/10/BatLTvhZnZqTZwXFtcXoFw.jpg",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.092542301645613,
            "lon": 105.72733095129371,
            "cityId": 92,
            "districtId": 918,
            "wardId": 31169,
            "street": "179b Lê Hồng Phong, Phường Trà An, Bình Thủy, Cần Thơ 920000, Việt Nam"
        },
        "locationAddr": "Quận Bình Thuỷ, Cần Thơ",
        "locationAddrS": "Quận Bình Thuỷ, Cần Thơ",
        "d": 5.7,
        "distance": "5.7 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "BL3FXD7S",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2019/p/g/2023/05/30/12/F5w3GgTy8-JjiumS-MGTpg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2019/p/g/2023/05/30/12/0R7soPdwY4cE2huIiau08w.jpg",
                "carPhotoId": ""
            },
            {
                "id": "C87K532U",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2019/p/g/2023/05/30/12/baUdUE4lg5weqX1fx6Ym6Q.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2019/p/g/2023/05/30/12/8YDR_0Doxa_H-Mzu0GvqnA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "CGPYN19K",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2019/p/g/2023/05/30/12/INtl0gDugyOeIsJBHEwNGg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2019/p/g/2023/05/30/12/OU_4zcOlg2feXlMFvdD9sw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "1V8LGVX5",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2019/p/g/2023/05/30/12/MdRfnz2tmgQUbMPBj963_g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2019/p/g/2023/05/30/12/_oQ0EVHngsvJ2L2Uln8lWQ.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 15,
        "discountMonthly": 20,
        "price": 700000,
        "priceOrigin": 700000,
        "priceTotal": 872200,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KLQF4X",
        "name": "TOYOTA VELOZ CROSS 2023",
        "ownerId": "USYVBB",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/08/04/08/6aK03Xu5vP4TONyKE84pww.jpg",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.035245135103617,
            "lon": 105.78913415543946,
            "cityId": 92,
            "districtId": 916,
            "wardId": 31135,
            "street": "Đường Ngô Quyền, Phường Tân An, Quận Ninh Kiều, Thành phố Cần Thơ"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 4.7,
        "distance": "4.7 km",
        "deliveryEnable": 1,
        "deliveryRadius": 50,
        "deliveryRadiusFree": 10,
        "deliveryPrice": 5000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "G8ICWAXE",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_veloz_cross_2023/p/g/2023/06/18/10/tjWr0lfqTUjjpYFByQp1Xg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_veloz_cross_2023/p/g/2023/06/18/10/1YodK7KsuIlG3cX0OYph_A.jpg",
                "carPhotoId": ""
            },
            {
                "id": "G5Z5A52X",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_veloz_cross_2023/p/g/2023/06/18/10/odxIvS-3aaAcQgQvphWStw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_veloz_cross_2023/p/g/2023/06/18/10/2ODTjEUklojvYMZHpr0NEQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "HECLQACR",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_veloz_cross_2023/p/g/2023/06/18/10/pVSiYgl8BrwAb8nfECd2og.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_veloz_cross_2023/p/g/2023/06/18/10/us1TZ-ZsG7-p2wAuOZ-QFw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "GXR99JIK",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_veloz_cross_2023/p/g/2023/06/18/10/w6-YHN8rmtj6o1XGl_HgIQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_veloz_cross_2023/p/g/2023/06/18/10/d4CaTwnCrcHnJLeIcqyB5A.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 800000,
        "priceOrigin": 800000,
        "priceTotal": 996800,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KL7MAH",
        "name": "HONDA CITY 2021",
        "ownerId": "USMAN1",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-0.png",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.003617314858985,
            "lon": 105.74719901208564,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 919,
            "wardId": 31186,
            "street": "Đường Võ Tánh, Phường Lê Bình, Quận Cái Răng, Thành phố Cần Thơ"
        },
        "locationAddr": "Quận Cái Răng, Cần Thơ",
        "locationAddrS": "Quận Cái Răng, Cần Thơ",
        "d": 4.5,
        "distance": "4.5 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "CGPYN1LH",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2021/p/g/2023/03/03/16/-31SLtfDKX90LcoeiAB-7Q.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2021/p/g/2023/03/03/16/-31SLtfDKX90LcoeiAB-7Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "5MBEQ4JX",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2021/p/g/2023/03/02/14/Ku9GzT7zRkjzwvIHE9RazQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2021/p/g/2023/03/02/14/plA_OH3THwQwUhIYj0pXKg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "K4Y29RMT",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2021/p/g/2023/03/02/14/OJtCondmDQtAFJPY0dZ0Bw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2021/p/g/2023/03/02/14/dz2lnThy85udISQWH3UKiA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "5XZ8REKI",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2021/p/g/2023/03/02/14/uBgguYHZQWuVSeSZSOnbmA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_city_2021/p/g/2023/03/02/14/_37W9OYAigiSntzKyQRwHw.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 850000,
        "priceOrigin": 850000,
        "priceTotal": 1059100,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K2V7RX",
        "name": "TOYOTA VIOS E 2020",
        "ownerId": "UM727Y",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/02/26/17/lXV4eUiDCYN9SPAqNt8aMA.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 9.994679564971186,
            "lon": 105.73878264981043,
            "cityId": 92,
            "districtId": 926,
            "wardId": 31312,
            "street": "Lộ vòng cung"
        },
        "locationAddr": "Huyện Phong Điền, Cần Thơ",
        "locationAddrS": "Huyện Phong Điền, Cần Thơ",
        "d": 5.6,
        "distance": "5.6 km",
        "deliveryEnable": 0,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 0,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "H5LE4AL2",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2020/p/g/2023/02/27/20/UV3nIlveZXZ78Uh47XG4WQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2020/p/g/2023/02/27/20/_MjfeT6E3OHY6ovvLua_ig.jpg",
                "carPhotoId": ""
            },
            {
                "id": "GUXWG795",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2020/p/g/2023/02/27/20/BgKBM_TrHR0X5Qf8rRYqFg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2020/p/g/2023/02/27/20/fdr68wm9mEeWJF5DEidfJQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "HU5UV3KZ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2020/p/g/2023/02/27/20/ysP1T64hCmbW-5DG1nApPg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2020/p/g/2023/02/27/20/wzO-A-HOjf6QKaur0_6Ung.jpg",
                "carPhotoId": ""
            },
            {
                "id": "4SDRLJX9",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2020/p/g/2023/02/27/20/aYT0ZM-lMiolEYzApBG6lw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2020/p/g/2023/02/27/20/2Cq_BYoslMIcPcNAgVCZOA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 600000,
        "priceOrigin": 600000,
        "priceTotal": 747600,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K2GPG9",
        "name": "HYUNDAI ACCENT 2022",
        "ownerId": "UQCQL3",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-0.png",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.092799884767013,
            "lon": 105.7274109059247,
            "cityId": 92,
            "districtId": 918,
            "wardId": 31169,
            "street": "Nguyễn Duy Tân"
        },
        "locationAddr": "Quận Bình Thuỷ, Cần Thơ",
        "locationAddrS": "Quận Bình Thuỷ, Cần Thơ",
        "d": 5.7,
        "distance": "5.7 km",
        "deliveryEnable": 1,
        "deliveryRadius": 6,
        "deliveryRadiusFree": 2,
        "deliveryPrice": 13000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "MP7F9HDN",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_accent_2022/p/g/2022/11/10/12/ZpGQv-Ho8UJritvL07xCQA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_accent_2022/p/g/2022/11/10/12/_L5FB-bV1I6H98uOMjdY6Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "NBMRB65Y",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_accent_2022/p/g/2022/11/10/12/aVO5XCnex308Fg7vwxI3Rg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_accent_2022/p/g/2022/11/10/12/dUFYpnBEdQ7vMZK-vp8QiQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "7CUIUW9G",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_accent_2022/p/g/2022/11/10/12/3aERmBBA4I8ZjlkK2vxmgg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_accent_2022/p/g/2022/11/10/12/5tfsQ8NIAEnzI1yB0WQ_1Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "NVK82XKY",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_accent_2022/p/g/2022/11/10/12/JcFX14gLoD6J-epcIn5zgw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_accent_2022/p/g/2022/11/10/12/wluxLc2vrKfQPetXi30ZEw.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 700000,
        "priceOrigin": 700000,
        "priceTotal": 872200,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K3C2JZ",
        "name": "TOYOTA VIOS E 2022",
        "ownerId": "U7M6MR",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/00/26/14/PY0XM-ptvZjTjuOyX_EVQg.jpg",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 9.998083264821584,
            "lon": 105.74298926487391,
            "cityId": 92,
            "districtId": 916,
            "wardId": 31150,
            "street": "KDC KV 7"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 5.2,
        "distance": "5.2 km",
        "deliveryEnable": 1,
        "deliveryRadius": 6,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "ANMIVXJX",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2023/03/05/09/OYAjvGVJP-7KywqSZFiZ2Q.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2023/03/05/09/1VioaFQuwPi4ZWGBvc8lIw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "AAA1U6RE",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2023/03/05/09/QtG01Lyh2FHIHGKXYgSX6w.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2023/03/05/09/NbBBQ7ZOSMKQW7G7LCkUAg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "2A3THQVP",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2023/03/05/09/nNeRbWjD_KWRSXmuZ4mZVg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2023/03/05/09/QqYkzlSc9FB7EczhAtSCkw.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 1
        },
        "totalTrips": 1,
        "totalReviews": 1,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 650000,
        "priceOrigin": 650000,
        "priceTotal": 729950,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K6GVDA",
        "name": "TOYOTA VIOS G 2022",
        "ownerId": "ULUHMR",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-1.png",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 9.998015618150212,
            "lon": 105.75136438458229,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 919,
            "wardId": 31186,
            "street": "310 Phạm Hùng, Phường Lê Bình, Quận Cái Răng, Thành phố Cần Thơ"
        },
        "locationAddr": "Quận Cái Răng, Cần Thơ",
        "locationAddrS": "Quận Cái Răng, Cần Thơ",
        "d": 5.4,
        "distance": "5.4 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "BR7X71R4",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2022/p/g/2023/08/11/23/6N6z5zSlL1erA2BaQVkuJg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2022/p/g/2023/08/11/23/T6NTjHQYAlXdKvQZlAWclA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "1KSAFR5D",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2022/p/g/2023/08/11/23/Fpss-iYTm0m2U1fSrsu2YA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2022/p/g/2023/08/11/23/kpQqR-rIOhAd8Q6bnu6Kyw.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 650000,
        "priceOrigin": 650000,
        "priceTotal": 729950,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K345A8",
        "name": "HONDA BRV-G 2023",
        "ownerId": "URCVKF",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2022/08/02/23/QjEKGK8vowFG8a90A6WhEw.jpg",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.04690083098958,
            "lon": 105.78624929025591,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 916,
            "wardId": 31117,
            "street": "Phường Cái Khế, Quận Ninh Kiều, Thành phố Cần Thơ, Việt Nam"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 4.6,
        "distance": "4.6 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "3I8SZPUR",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_brv-g_2023/p/g/2023/07/23/13/QHvt7x2PjGwzyyZX4FqXZw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_brv-g_2023/p/g/2023/07/23/13/abiVEX2atigf62ybSrr9Ew.jpg",
                "carPhotoId": ""
            },
            {
                "id": "3D41DBCK",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_brv-g_2023/p/g/2023/07/23/13/mxqwfILtIhpQDSwW3ft8Kg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_brv-g_2023/p/g/2023/07/23/13/KG8_4ZtE6_Yvd6PZnbfiXg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "1H2FB6AH",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_brv-g_2023/p/g/2023/07/23/13/IUQGjA8N_g1KXwvAaggu_A.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_brv-g_2023/p/g/2023/07/23/13/vuF8nWAyT-CGYH6o6z80YA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "1B962WGB",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_brv-g_2023/p/g/2023/07/23/13/OxXY1bizbojg7zw_--RKSA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/honda_brv-g_2023/p/g/2023/07/23/13/8dsqV6iin6P_VkEuk6Es3A.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 800000,
        "priceOrigin": 800000,
        "priceTotal": 898400,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KJJSAR",
        "name": "TOYOTA FORTUNER G 2016",
        "ownerId": "U8TV3I",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2021/09/07/16/EuNI-Ls9t5-CvNDh4YFR-A.jpg",
        "seat": 8,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 10.030211248616189,
            "lon": 105.78502504369513,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 916,
            "wardId": 31135,
            "street": "151 Đường Châu Văn Liêm"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 4.4,
        "distance": "4.4 km",
        "deliveryEnable": 1,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 0,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "FT2LMQD3",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_fortuner_g_2016/p/g/2023/02/09/13/M7Y5OElfNAgAAU4i-vUW-g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_fortuner_g_2016/p/g/2023/02/09/13/dDT0aeZRylleCYf-sQrgPg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "EWK7XLQK",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_fortuner_g_2016/p/g/2023/02/09/13/kBIvn00YB8NVBT-aYC1JDA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_fortuner_g_2016/p/g/2023/02/09/13/_xkdcrZ2W67cm0lA5OkVPw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "JH2SKI64",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_fortuner_g_2016/p/g/2023/02/09/13/IptkbkQVsEi84TD6uVQhyw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_fortuner_g_2016/p/g/2023/02/09/13/sBsqOiPe3KGbEqKv8-Aimw.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 900000,
        "priceOrigin": 900000,
        "priceTotal": 1010700,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K5J5KF",
        "name": "TOYOTA INNOVA G 2011",
        "ownerId": "UMA1PK",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-1.png",
        "seat": 8,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 10.012578235402817,
            "lon": 105.76706365821157,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 919,
            "wardId": 31192,
            "street": "52 Trần Hoàng Na"
        },
        "locationAddr": "Quận Cái Răng, Cần Thơ",
        "locationAddrS": "Quận Cái Răng, Cần Thơ",
        "d": 4.4,
        "distance": "4.4 km",
        "deliveryEnable": 1,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 5,
        "deliveryPrice": 15000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "A2NWARE3",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_g_2011/p/g/2023/02/23/19/eP0y19G-Gkf3EiT1aKg3YQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_g_2011/p/g/2023/02/23/19/ESBRIcqwKnGrSgxpLaTMAw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "BPUBC48A",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_g_2011/p/g/2023/02/23/19/pgfz-QFWrKmODGYaPknULA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_g_2011/p/g/2023/02/23/19/ARpKMzIZ-NGfKCLXs5iPKA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "1B962V9K",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_g_2011/p/g/2023/02/23/19/DrbKcA-yArntIY5Q4NBQFw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_g_2011/p/g/2023/02/23/19/5We6m3vXzVqDLqpxyo2mrA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "BNBDJV8T",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_g_2011/p/g/2023/02/23/19/LC4nxpsEcfmkfBloWvO3XQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_g_2011/p/g/2023/02/23/19/zagY20JxVI2gs6Cp33qlRQ.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 670000,
        "priceOrigin": 670000,
        "priceTotal": 752411,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KLWNLW",
        "name": "TOYOTA FORTUNER 2019",
        "ownerId": "UMB9E1",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2022/11/29/21/rj05kZK6_xq_lG0Qq4HzNw.jpg",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 10.031817581326182,
            "lon": 105.78769151271858,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 916,
            "wardId": 31135,
            "street": "11 Ngô Văn Sở"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 4.5,
        "distance": "4.5 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "GIE66PEV",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_fortuner_2019/p/g/2022/11/29/21/xUQPCOnbRvCHXALHUlNCCg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_fortuner_2019/p/g/2022/11/29/21/pJG_DCg7e5VadjiIooM1eg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "G7NFE76A",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_fortuner_2019/p/g/2022/11/29/21/ecn63WcyLv_mNFgYpEHWvw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_fortuner_2019/p/g/2022/11/29/21/atuOhPpg1dsw_d1VOYhhmQ.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 930000,
        "priceOrigin": 930000,
        "priceTotal": 1044390,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KGIIM6",
        "name": "MITSUBISHI XPANDER 2019",
        "ownerId": "UK2UQA",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/02/07/12/hKC-Hl9GrN6XmbSWmoryVw.jpg",
        "seat": 7,
        "status": 2,
        "instant": 1,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.00436869872839,
            "lon": 105.7982170260902,
            "cityId": 92,
            "districtId": 919,
            "wardId": 31201,
            "street": "Bệnh viện Hoàn Mỹ Cửu Long, Lô 20 Võ Nguyên Giáp"
        },
        "locationAddr": "Quận Cái Răng, Cần Thơ",
        "locationAddrS": "Quận Cái Răng, Cần Thơ",
        "d": 7.3,
        "distance": "7.3 km",
        "deliveryEnable": 1,
        "deliveryRadius": 20,
        "deliveryRadiusFree": 10,
        "deliveryPrice": 30000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "6RWI2M3F",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2023/01/16/08/iRigDLHPPZt8lO2sTFVMLw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2023/01/16/08/Yw-ZaVvn3h3iQQZBvZ3ilA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "6HXVWHYD",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2023/01/16/08/bfnDjWj6Q9-7O79ZBClbfQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2023/01/16/08/WKHvYFzWkV6DUoNwgFYjcQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "6NHNSZW6",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2023/01/16/08/6B-0Pn75US1-2bVOD7fgbA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2023/01/16/08/pYJGNHXF2tOs2dkujCHyCA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "L6AWSWXR",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2023/01/16/08/6YjaO7LONs_gSLr4De7wHQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2023/01/16/08/OUe2d-1g28gtMgn8A8am5A.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 4
        },
        "totalTrips": 4,
        "totalReviews": 4,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 700000,
        "priceOrigin": 700000,
        "priceTotal": 872200,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 1,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KGCZLU",
        "name": "TOYOTA VIOS G 2019",
        "ownerId": "UQFAI3",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/02/23/13/2md77nNGamvNVoT9k-5nbg.jpg",
        "seat": 5,
        "status": 2,
        "instant": 1,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.002878815382589,
            "lon": 105.80441194896616,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 919,
            "wardId": 31201,
            "street": "Đường Số 45"
        },
        "locationAddr": "Quận Cái Răng, Cần Thơ",
        "locationAddrS": "Quận Cái Răng, Cần Thơ",
        "d": 8,
        "distance": "8 km",
        "deliveryEnable": 1,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 15000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "JP44TTY5",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2019/p/g/2023/01/21/17/v_l7g2rH1s9MBFamP7iu2g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2019/p/g/2023/01/21/17/ikTdp6Nb3OfxKzvajTYsvQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "5BGTW47T",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2019/p/g/2023/01/21/17/e7UORaZQO1FqU9TUwZEOkg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2019/p/g/2023/01/21/17/AoHTeDUoBOW2FJqvSXJHJA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "E24MGUN7",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2019/p/g/2022/10/18/12/mHGM1usCF71LRCHLWleW9Q.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2019/p/g/2022/10/18/12/ysJ9LpvarY8lkSpM54WuiA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "2SJ1FHLX",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2019/p/g/2022/10/18/12/zbuS25WIu4wk1Xu8Ba5MSw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2019/p/g/2022/10/18/12/huvJUfCHYFcrbUbV7NnLMg.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 1
        },
        "totalTrips": 1,
        "totalReviews": 1,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 730000,
        "priceOrigin": 730000,
        "priceTotal": 909580,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KJ758I",
        "name": "MITSUBISHI XPANDER 2020",
        "ownerId": "UQFAI3",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/02/23/13/2md77nNGamvNVoT9k-5nbg.jpg",
        "seat": 7,
        "status": 2,
        "instant": 1,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.005142618524216,
            "lon": 105.80707558324502,
            "cityId": 92,
            "districtId": 919,
            "wardId": 31201,
            "street": "Đường Số 45"
        },
        "locationAddr": "Quận Cái Răng, Cần Thơ",
        "locationAddrS": "Quận Cái Răng, Cần Thơ",
        "d": 8,
        "distance": "8 km",
        "deliveryEnable": 1,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 15000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "IT5I8TVG",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2020/p/g/2022/10/17/14/Blx-iDMuDhtDm1BBMTcolA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2020/p/g/2022/10/17/14/HF3uMftU0cUi3B17WMpCXg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "JDNYG2LX",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2020/p/g/2022/10/17/14/OWC4bU3T0UD0axl9qoTE3A.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2020/p/g/2022/10/17/14/1MZWp71nHpW8F1-LDfN83w.jpg",
                "carPhotoId": ""
            },
            {
                "id": "3MGMJFC3",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2020/p/g/2022/10/17/12/hMcZLwRfFIRivLlLa4b5VQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2020/p/g/2022/10/17/12/vvYB7V1a3p6a-rXwSpEDaw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "3GWVHFQ8",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2020/p/g/2022/10/17/12/n5enJ2XTf57ngYwHMXlb0Q.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2020/p/g/2022/10/17/12/UtLo71Zqy9lsK1r9EsisbA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 2
        },
        "totalTrips": 2,
        "totalReviews": 2,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 830000,
        "priceOrigin": 830000,
        "priceTotal": 1034180,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KE3WLS",
        "name": "MITSUBISHI XPANDER 2022",
        "ownerId": "UQFAI3",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/02/23/13/2md77nNGamvNVoT9k-5nbg.jpg",
        "seat": 7,
        "status": 2,
        "instant": 1,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.002205064447582,
            "lon": 105.80477683037424,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 919,
            "wardId": 31201,
            "street": "Đường Số 45"
        },
        "locationAddr": "Quận Cái Răng, Cần Thơ",
        "locationAddrS": "Quận Cái Răng, Cần Thơ",
        "d": 8,
        "distance": "8 km",
        "deliveryEnable": 1,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 15000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "2U2YR1QE",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/00/31/10/ZlJLeg1H5zajAOKC8Gew-w.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/00/31/10/iEhihRRd_QZLfZJp90J7Dg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "K4Y29RSP",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/00/31/10/2adIlY4nYOZPTZDC__DWjQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/00/31/10/ExsI65fHplVFnX_u_EA1qQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "FT2LMQLL",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/00/28/21/eFLIoH87FWY7UTPCyR3tHg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/00/28/21/nGHt-_iaW08465jjA3mTrg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "3BM2P32C",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/00/28/21/g6WrRV7yeKEJE4ffCESbHg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2022/p/g/2023/00/28/21/0HYyZcibvi6TCP54z_XX-Q.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 1
        },
        "totalTrips": 1,
        "totalReviews": 1,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 850000,
        "priceOrigin": 850000,
        "priceTotal": 1059100,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KLH7CN",
        "name": "MITSUBISHI XPANDER 2021",
        "ownerId": "U6QNY4",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2022/11/20/12/iEBPVxuaoc5FA_KIdgp9mQ.jpg",
        "seat": 7,
        "status": 2,
        "instant": 1,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.012648702169217,
            "lon": 105.80610878028745,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 919,
            "wardId": 31189,
            "street": "Quận Cái Răng"
        },
        "locationAddr": "Quận Cái Răng, Cần Thơ",
        "locationAddrS": "Quận Cái Răng, Cần Thơ",
        "d": 7.4,
        "distance": "7.4 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "HSPY29WM",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/11/22/15/PFYQxQSZsiOPNP4mZ1-5Ng.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/11/22/15/EibsspbNhR_DvyVIbRspnQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "4AAQBKUX",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/11/22/15/M9CT4mp8qfpbI849QG1w6A.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/11/22/15/d_-tfib9eaLTRLmVWiNyxQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "K66YYYHI",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/11/22/15/TidZmHsH2KomyYMsUbX2oA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/11/22/15/-aK4N43-PLP04yUWFstxfQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "5K3H2MZT",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/11/22/15/vlkG_4ilHTzpU943z8oBTg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/11/22/15/LDIekJEEI62fxkj1D_l_zQ.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 950000,
        "priceOrigin": 950000,
        "priceTotal": 1066850,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 1,
        "wdShort": {
            "instant": 0,
            "deliveryEnable": 1,
            "deliveryRadius": 10,
            "deliveryRadiusFree": 10,
            "deliveryPrice": 10000,
            "deliveryDiscountEnable": 0,
            "deliveryDiscountKm": 0,
            "deliveryDiscountPercent": 0,
            "deliveryDiscountMax": 0,
            "price": 2344160,
            "priceOrigin": 2344160,
            "finalPrice": 2589576,
            "totalDiscountPercent": 0,
            "deliveryFee": 0,
            "ownerHostFiveStar": 0
        },
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K58IJH",
        "name": "TOYOTA VIOS E 2022",
        "ownerId": "UQFAI3",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/02/23/13/2md77nNGamvNVoT9k-5nbg.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.002459381400984,
            "lon": 105.8075954512254,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 919,
            "wardId": 31201,
            "street": "Bùi Quang Trinh"
        },
        "locationAddr": "Quận Cái Răng, Cần Thơ",
        "locationAddrS": "Quận Cái Răng, Cần Thơ",
        "d": 8,
        "distance": "8 km",
        "deliveryEnable": 1,
        "deliveryRadius": 25,
        "deliveryRadiusFree": 1,
        "deliveryPrice": 19000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "3P15VZS2",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2023/02/20/09/-Rm-8mPXz_DiJ_S3D4VClQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2023/02/20/09/aBojsClQnP2xWUjBC_lgMw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "NVK82W9T",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2023/02/19/05/DPPUkCpXQBbplds1N5CPtg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2023/02/19/05/5NCeqBTLLfk6eOZvlkE0Sg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "3BM2PF4W",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2023/02/20/09/vDfUzUxIYeBJOKrOUzegqg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2023/02/20/09/frJPo5xLtVivyrdddGaWeA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "7XS4ZHM5",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2023/02/19/05/1rE7wvi-MQXlgDJybLg7IQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2023/02/19/05/8Pen57UmS8U8wC2GLUrpcQ.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 1
        },
        "totalTrips": 1,
        "totalReviews": 1,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 750000,
        "priceOrigin": 750000,
        "priceTotal": 934500,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KIFKM5",
        "name": "SUZUKI XL7 2022",
        "ownerId": "U9KN2G",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/06/14/13/zjd8Zm4Tll9XIWmwH14jsQ.jpg",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.013173185440218,
            "lon": 105.79318464783337,
            "cityId": 92,
            "districtId": 919,
            "wardId": 31192,
            "street": "Hồng CỬU LONG, Đường số 9"
        },
        "locationAddr": "Quận Cái Răng, Cần Thơ",
        "locationAddrS": "Quận Cái Răng, Cần Thơ",
        "d": 6.3,
        "distance": "6.3 km",
        "deliveryEnable": 0,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 0,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "5EVP1NG3",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2022/08/01/13/5RUew6D8Of0sRcOvQeXwhQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2022/08/01/13/rTHW-yJitI8qeIOMKto3Bw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "J9XDFICP",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2022/08/01/13/31CU-wSNnUOUmwKZ6OftNg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2022/08/01/13/wQKux3JhNJs6CQ8Hp2VUGw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "JIYPY237",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2022/08/01/13/54aSfYWpINTSc1bAgTc10Q.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2022/08/01/13/jqqNrjaOJs9Nh2ktT-j7Pg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "K7HVQJNT",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2022/08/01/13/nyvyZk4VJs47_ZY66J-K2Q.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2022/08/01/13/Gc03x5BphhZdjQIA1TuDtA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "62I1RCY5",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2022/08/01/14/3-BF8JDXIloPu_TiDcQGmQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2022/08/01/14/eqXw6XJ_fPU0v_IU9MYOXw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "NK6EWRIW",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2022/08/01/14/i30FpJYQW50iVQqLzM31Bg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2022/08/01/14/XVnKZbuSow3DCV8SWbWeNg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "NBMRB6FG",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2022/08/01/14/vpAwRvO_MQCbj4JuOQw-Hg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2022/08/01/14/WfgNeUC9guvPHWrYZFi--Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "MP7F9HI3",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2022/08/01/14/WHTCXdGpwRKKnpZPKrpMkQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2022/08/01/14/GE1q2x4X-6Bq5KB6rBc79g.jpg",
                "carPhotoId": ""
            },
            {
                "id": "7UYKLM8K",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2022/08/01/14/0hV-Lcrw06qLK-My_8jyoA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2022/08/01/14/VekGDwT1JKMVv4av49XxSQ.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 2
        },
        "totalTrips": 2,
        "totalReviews": 2,
        "discountEnable": 0,
        "discountWeekly": 5,
        "discountMonthly": 10,
        "price": 880000,
        "priceOrigin": 880000,
        "priceTotal": 1096480,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K45WB3",
        "name": "TOYOTA INNOVA E 2020",
        "ownerId": "UQFAI3",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/02/23/13/2md77nNGamvNVoT9k-5nbg.jpg",
        "seat": 8,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 10.005010651608213,
            "lon": 105.80721232569066,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 919,
            "wardId": 31201,
            "street": "Bùi Quang Trinh"
        },
        "locationAddr": "Quận Cái Răng, Cần Thơ",
        "locationAddrS": "Quận Cái Răng, Cần Thơ",
        "d": 8,
        "distance": "8 km",
        "deliveryEnable": 1,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "F1B5C8FC",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2020/p/g/2023/01/27/11/94f5kEYPe7w3oB9LgpWkiw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2020/p/g/2023/01/27/11/tQw0Uwma8xJyf5YBsFW9Ag.jpg",
                "carPhotoId": ""
            },
            {
                "id": "ERVTS3I6",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2020/p/g/2023/01/27/11/GAEOIiI87ARNaSq9wre0ow.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2020/p/g/2023/01/27/11/8yE5CA_CUK_yejeZZ5_BFA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "IL394JMX",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2020/p/g/2023/01/25/17/Avb7b599K9G1f54wAYwzWA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2020/p/g/2023/01/25/17/JOi78-lBGzt3YDaSavLWIg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "HSPY297U",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2020/p/g/2023/01/25/17/vHW-QA-CJRCoj2RT76bFFQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2020/p/g/2023/01/25/17/u6dIy-zOq-gqzBf4HPpGbQ.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 910000,
        "priceOrigin": 910000,
        "priceTotal": 1133860,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KEWVW4",
        "name": "MITSUBISHI XPANDER 2021",
        "ownerId": "ULMGMN",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2022/03/13/16/PWuWGjlx3MrKtxC6MhRIFA.jpg",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.009658265120787,
            "lon": 105.79163536543405,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 919,
            "wardId": 31192,
            "street": "n27 Đường số 30, KHU DÂN CƯ ĐÔ THỊ MỚI HƯNG PHÚ, Hưng Thạnh, quận Cái Răng, Cần Thơ, Việt Nam"
        },
        "locationAddr": "Quận Cái Răng, Cần Thơ",
        "locationAddrS": "Quận Cái Răng, Cần Thơ",
        "d": 6.4,
        "distance": "6.4 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 15000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "INBQUD9P",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/03/12/17/TK2REuaMl4TV7L_FyJaMkg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/03/12/17/_FX9-KS6Hv1LGt2mi5Vxdg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "JP44TU5M",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/03/12/17/Q75QzHxOeWwv4OjSKqMZOA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/03/12/17/N4zQcSGQHjgluP0PH-VMAg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "5D1RNRY7",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/03/12/17/axAAOV7netuuWGHxDbIosw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/03/12/17/GCPHcfaKy2CG29Jb4UpQlA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "JVRARC9G",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/03/12/17/y2Znwkf1aGVRpzYQuRO0cA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2022/03/12/17/Iv0wxTRymIx4I9xy6KlfDw.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 800000,
        "priceOrigin": 800000,
        "priceTotal": 996800,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K4LM67",
        "name": "KIA CARNIVAL 2022",
        "ownerId": "UQFAI3",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/02/23/13/2md77nNGamvNVoT9k-5nbg.jpg",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.002477348092583,
            "lon": 105.8050047928477,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 919,
            "wardId": 31201,
            "street": "Bùi Quang Trinh"
        },
        "locationAddr": "Quận Cái Răng, Cần Thơ",
        "locationAddrS": "Quận Cái Răng, Cần Thơ",
        "d": 8,
        "distance": "8 km",
        "deliveryEnable": 1,
        "deliveryRadius": 20,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 19000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "1PH97V9T",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_carnival_2022/p/g/2023/02/15/15/H3zBjRiV0RNvXbCl5mZSpQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_carnival_2022/p/g/2023/02/15/15/IYWWAMwFlNtzdhFJoX0rcA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "ETQR3AQ2",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_carnival_2022/p/g/2023/02/15/13/mcg2xE4N6oO-r_Ktm-ba4A.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_carnival_2022/p/g/2023/02/15/13/hcB9FjGVNhnUP1otkLnQmg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "FM99V83H",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_carnival_2022/p/g/2023/02/15/13/2d-h6CvDexEr4KrlA45A9g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_carnival_2022/p/g/2023/02/15/13/3k6ImKMMoZGo2NJcJ8uNwg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "1DNJVGXX",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_carnival_2022/p/g/2023/02/15/15/RU08XvXUebc3NMImNooMOg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_carnival_2022/p/g/2023/02/15/15/IBY7ZI9H2Z4ns4hToTk1OQ.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 2250000,
        "priceOrigin": 2250000,
        "priceTotal": 2526750,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KL7MB2",
        "name": "MITSUBISHI XPANDER 2021",
        "ownerId": "USD7ZT",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-1.png",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.060617265419989,
            "lon": 105.80365706654962,
            "countryCode": "VN",
            "cityId": 86,
            "districtId": 861,
            "wardId": 29771,
            "street": "Đường Nguyễn Văn Thảnh"
        },
        "locationAddr": "Thị xã Bình Minh, Vĩnh Long",
        "locationAddrS": "Thị xã Bình Minh, Vĩnh Long",
        "d": 6.3,
        "distance": "6.3 km",
        "deliveryEnable": 0,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 0,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "7UYKLM8I",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/mitsubishi_xpander_2021/p/g/2022/07/31/09/iiDBX_uAaNHisaZTR53pxg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/mitsubishi_xpander_2021/p/g/2022/07/31/09/hH4ElgAUolm3C-dlI1Vcbg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "MTEAY696",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/mitsubishi_xpander_2021/p/g/2022/07/31/09/rQ38ZV4LBIXRMPNZy_pDtQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/mitsubishi_xpander_2021/p/g/2022/07/31/09/TBFPTEWc9cb0m030hAPQ1Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "769VDCVA",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/mitsubishi_xpander_2021/p/g/2022/07/31/09/-kuLr01XRN1tgQkLyXIXtA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/mitsubishi_xpander_2021/p/g/2022/07/31/09/XQm8cYcwK6pQY47iusIkpw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "NY3NQ8NV",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/mitsubishi_xpander_2021/p/g/2022/07/31/09/oGqj9RsOSDwxEm01iBXkGQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/mitsubishi_xpander_2021/p/g/2022/07/31/09/y4v5Lt2w3uiyBimMxyCiAA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 850000,
        "priceOrigin": 850000,
        "priceTotal": 954550,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KGYQ6C",
        "name": "TOYOTA INNOVA E 2019",
        "ownerId": "U61MDL",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2022/06/03/22/xzHQAeh_rhpYDWyiCpxnUw.jpg",
        "seat": 8,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 10.054211831961988,
            "lon": 105.76145063371673,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 918,
            "wardId": 31168,
            "street": "2 Phạm Hữu Lầu"
        },
        "locationAddr": "Quận Bình Thuỷ, Cần Thơ",
        "locationAddrS": "Quận Bình Thuỷ, Cần Thơ",
        "d": 1.9,
        "distance": "1.9 km",
        "deliveryEnable": 0,
        "deliveryRadius": 5,
        "deliveryRadiusFree": 3,
        "deliveryPrice": 10000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "AAA1UNQ2",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2019/p/g/2020/05/15/14/nH3qtkXXWz5i5FUqjWSDUw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2019/p/g/2020/05/15/14/I8vO3WrWu4UHLS0QxlmD9Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "ANMIVYWQ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2019/p/g/2020/05/15/14/XmTUhkGZv9kyEyEtzaZ5nA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2019/p/g/2020/05/15/14/PTl83RGqR9p857nqpW6xTA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "DSWCP7PP",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2019/p/g/2020/05/15/14/bb1DlXnStAVgSzJABHRPmg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2019/p/g/2020/05/15/14/xW53REd-CQZBWL-MPLVd5w.jpg",
                "carPhotoId": ""
            },
            {
                "id": "DA9BA1XQ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2019/p/g/2020/05/15/14/IEbKbto-AUvDJKpGZSp_Xw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2019/p/g/2020/05/15/14/2pSt7xi7MXMWw1RpwJt5eA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 900000,
        "priceOrigin": 900000,
        "priceTotal": 1010700,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 0:30 - 9:00, 22:00 - 23:30"
        ],
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KFH2P3",
        "name": "TOYOTA INNOVA J 2016",
        "ownerId": "UPRJ8H",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/06/23/12/8zqsQ0yPtGqB4LDuCnmqcA.jpg",
        "seat": 8,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 10.049300318075412,
            "lon": 105.767870869811,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 916,
            "wardId": 31120,
            "street": "46 Đ. Võ Trường Toản, An Hoà, Ninh Kiều, Cần Thơ, Việt Nam"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 2.2,
        "distance": "2.2 km",
        "deliveryEnable": 1,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "4AAQB5RP",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_j_2016/p/g/2023/06/23/12/07tvLLFFaMaKW3MFciu4fA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_j_2016/p/g/2023/06/23/12/tG4vUitQs2gXkSU3k7bV4Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "N8VVZRQK",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_j_2016/p/g/2023/06/23/12/tvrexOddqiVbZWfRtJcIZw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_j_2016/p/g/2023/06/23/12/wWt0MFJgudeGRZEYZafwqA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "77NS7XAI",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_j_2016/p/g/2023/06/23/12/JtygOtSI-_ut4HXtIcxCkA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_j_2016/p/g/2023/06/23/12/VOb4D1wmQRa9_mPkEp8yrw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "7CUIUWBU",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_j_2016/p/g/2023/06/23/12/qgcUtTwWYQgaowXPVHBKSA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_j_2016/p/g/2023/06/23/12/-S9T7_7AtrMFxbz5DjNPIQ.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 20,
        "discountMonthly": 30,
        "price": 710000,
        "priceOrigin": 710000,
        "priceTotal": 884660,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 5:00 - 17:30"
        ],
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KJTASQ",
        "name": "TOYOTA VELOZ CROSS 2022",
        "ownerId": "UNVHSM",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-3.png",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.095009418000611,
            "lon": 105.67304249676423,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 917,
            "wardId": 31162,
            "street": "9a QL91B, Phước Thới, Ô Môn, Cần Thơ, Việt Nam"
        },
        "locationAddr": "Quận Ô Môn, Cần Thơ",
        "locationAddrS": "Quận Ô Môn, Cần Thơ",
        "d": 9.9,
        "distance": "9.9 km",
        "deliveryEnable": 1,
        "deliveryRadius": 15,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 25000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "MH5QEXRE",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_veloz_cross_2022/p/g/2023/08/05/08/99oxBK2drpKzw_qOETUqfg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_veloz_cross_2022/p/g/2023/08/05/08/AAMQOnn8Cs32oX8j0KyDaQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "IL394JWT",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_veloz_cross_2022/p/g/2023/08/02/12/SRDVXUOEfsoEy5OrEdpwTg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_veloz_cross_2022/p/g/2023/08/02/12/tGtI2Ktw55Xp1lBApTOJaA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "I1HH1FB9",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_veloz_cross_2022/p/g/2023/08/02/12/pFdb8LbhXoD-UG--CSDOfg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_veloz_cross_2022/p/g/2023/08/02/12/3A1UaAqn5aMjvT2ZNtvrGg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "4Q4TZPEV",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_veloz_cross_2022/p/g/2023/08/02/12/yXHAmBBLwT2NUH0nZiX8MA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_veloz_cross_2022/p/g/2023/08/02/12/pnejTyPTg6efjLudKvx05w.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 20,
        "discountMonthly": 30,
        "price": 800000,
        "priceOrigin": 800000,
        "priceTotal": 996800,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KJHLSB",
        "name": "HYUNDAI ACCENT 2022",
        "ownerId": "UKTJ3Q",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/03/14/11/m4Ce8OJo5iKVvvG-vxSEdg.jpg",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.057176898055184,
            "lon": 105.76563788136794,
            "cityId": 92,
            "districtId": 918,
            "wardId": 31177,
            "street": "583 Trần Quang Diệu"
        },
        "locationAddr": "Quận Bình Thuỷ, Cần Thơ",
        "locationAddrS": "Quận Bình Thuỷ, Cần Thơ",
        "d": 2.5,
        "distance": "2.5 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 15000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "B1GSPX5N",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_accent_2022/p/g/2023/03/14/11/W9yhQjIWTeO7L9b5HSSDxA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_accent_2022/p/g/2023/03/14/11/GMvD4MV-_IyxzZk17Y12GA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 600000,
        "priceOrigin": 600000,
        "priceTotal": 673800,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian trả xe: 21:00 - 24:00"
        ],
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KEYM4Q",
        "name": "MAZDA 3 2020",
        "ownerId": "U9H7EF",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/04/20/19/FC1BmQh96TAKh32yhq8m8Q.jpg",
        "seat": 5,
        "status": 2,
        "instant": 1,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.015731581400985,
            "lon": 105.74013670818235,
            "cityId": 92,
            "districtId": 916,
            "wardId": 31150,
            "street": "Bệnh viện Nhi đồng Cần Thơ, 345 Nguyễn Văn Cừ nối dài, An Bình, Ninh Kiều, Cần Thơ, Việt Nam"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 3.3,
        "distance": "3.3 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 3,
        "deliveryPrice": 10000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "LC158JTR",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2020/p/g/2023/04/20/19/3-eu9Fb4BGoJIQ8WdnjylA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2020/p/g/2023/04/20/19/etf0bzpw-_I3EMVBZM_m4g.jpg",
                "carPhotoId": ""
            },
            {
                "id": "1KSAFRYN",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2020/p/g/2023/04/13/22/Idw_Rf27QSIL4I0q3KlMww.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2020/p/g/2023/04/13/22/s0ZnHskT2CEabzeH1Tblkg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "CVE37KWE",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2020/p/g/2023/04/07/10/x5bspmOxIm-jQf60jcv7ig.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2020/p/g/2023/04/07/10/SVbXMD1oOsznjYZCcrMa2g.jpg",
                "carPhotoId": ""
            },
            {
                "id": "CBGGL1SH",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2020/p/g/2023/04/07/10/qFa3C6gVTTKxDA3kY__NRg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2020/p/g/2023/04/07/10/x0134JzJAdle2puTSkhWAw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "7IFBXWZD",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2020/p/g/2023/04/20/19/FHHnc_0N30aOCjNijlYNyQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2020/p/g/2023/04/20/19/GxtyDPPvAW_rDB7dTDsZwQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "792MTC86",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2020/p/g/2023/04/20/19/i-48t0MyGc_Hg084eYMvVA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2020/p/g/2023/04/20/19/Y3dchV4h9-_ajOU_ReG8kA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 3
        },
        "totalTrips": 3,
        "totalReviews": 3,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 20,
        "price": 750000,
        "priceOrigin": 750000,
        "priceTotal": 934500,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 6:00 - 17:00"
        ],
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K59RF7",
        "name": "TOYOTA VELOZ CROSS 2022",
        "ownerId": "UQJRH6",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/04/03/12/B8W7ZZZeZnmweGfrHsVcyg.jpg",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.047154517925811,
            "lon": 105.78455944621241,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 916,
            "wardId": 31117,
            "street": "Khách Sạn Holiday, 21B2 Lý Hồng Thanh, Cái Khế, Ninh Kiều, Cần Thơ, Việt Nam"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 4.1,
        "distance": "4.1 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 15000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "BTJUGMI1",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_veloz_cross_2022/p/g/2023/04/12/09/ga5zn0rqSXH789oVc1wU_A.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_veloz_cross_2022/p/g/2023/04/12/09/1j3fuQ2P9vnYIwZkV7zE2Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "BR7X7CQJ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_veloz_cross_2022/p/g/2023/04/03/13/UTHH5-45LKtvfVlr6JVgHw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_veloz_cross_2022/p/g/2023/04/03/13/x1l3WL2Z_2-_j-lKYYAZFQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "AJYN8R6K",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_veloz_cross_2022/p/g/2023/04/12/09/GJv1uaPRMClPTtKeDoy9IA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_veloz_cross_2022/p/g/2023/04/12/09/k6V2EH223GVrVLlw7c0mZA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 4
        },
        "totalTrips": 4,
        "totalReviews": 4,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 700000,
        "priceOrigin": 700000,
        "priceTotal": 872200,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 5:30 - 9:00"
        ],
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KJ61UD",
        "name": "KIA SOLUTO 2021",
        "ownerId": "UQLZCK",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-2.png",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.114692952431021,
            "lon": 105.62360929608232,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 917,
            "wardId": 31153,
            "street": "78 Đường 3 Tháng 2, Châu Văn Liêm, Ô Môn, Cần Thơ, Việt Nam"
        },
        "locationAddr": "Quận Ô Môn, Cần Thơ",
        "locationAddrS": "Quận Ô Môn, Cần Thơ",
        "d": 15.7,
        "distance": "15.7 km",
        "deliveryEnable": 1,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 15000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "GUXWGP32",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_soluto_2021/p/g/2023/07/19/11/5_tIEd1d1CLT_j88uFSLQA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_soluto_2021/p/g/2023/07/19/11/kWcFRkSpxDgPdcaLjl-3Sw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "245N2KL3",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_soluto_2021/p/g/2023/07/25/10/hWP8sekA5ux6kccKRP5G5g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_soluto_2021/p/g/2023/07/25/10/S-wwa88z3I0V_Y0wB1d2xw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "2NTGB1F4",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_soluto_2021/p/g/2023/07/25/10/Qoo-YUqdRpr7JIXFex9Ikg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_soluto_2021/p/g/2023/07/25/10/k6v19EUgf9xw9K6svddeDA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "HCHNY7WH",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_soluto_2021/p/g/2023/07/25/10/lfFVQx6g_2-Tfe5MgyYrfw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_soluto_2021/p/g/2023/07/25/10/xcbD52_slgrmxnwEDT4ebw.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 1
        },
        "totalTrips": 1,
        "totalReviews": 1,
        "discountEnable": 0,
        "discountWeekly": 5,
        "discountMonthly": 10,
        "price": 650000,
        "priceOrigin": 650000,
        "priceTotal": 809900,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KK2ZZY",
        "name": "TOYOTA RUSH 2022",
        "ownerId": "UKD2TC",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/02/02/21/2lKXkkEl76F5SLCU2h7Zhg.jpg",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 9.915483548391787,
            "lon": 105.73431681747527,
            "countryCode": "VN",
            "cityId": 93,
            "districtId": 932,
            "wardId": 31362,
            "street": "807 Quốc Lộ 1A"
        },
        "locationAddr": "Huyện Châu Thành A, Hậu Giang",
        "locationAddrS": "Huyện Châu Thành A, Hậu Giang",
        "d": 14.4,
        "distance": "14.4 km",
        "deliveryEnable": 0,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 0,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "E3D5ZHCA",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/toyota_rush_2022/p/g/2023/01/24/12/-REEO12gUeXiIWeW5lWAzA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/toyota_rush_2022/p/g/2023/01/24/12/UvaeNZeWy6poj_vC9b9duQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "E24MGUCN",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/toyota_rush_2022/p/g/2023/01/24/12/dVeDUtwKVaEs8auhBAw4vQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/toyota_rush_2022/p/g/2023/01/24/12/paIwdx_oT6Y5tsyO4yCjtw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "2SJ1FHAU",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/toyota_rush_2022/p/g/2023/01/24/12/Qy47oAlbfgUEQ0L9JFwuUQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/toyota_rush_2022/p/g/2023/01/24/12/DVimfFcuUPzuCvWMshoq7g.jpg",
                "carPhotoId": ""
            },
            {
                "id": "2Q726VTV",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/toyota_rush_2022/p/g/2023/01/24/12/Y6xoaUZTZDn8zFVfR3O7ZA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/toyota_rush_2022/p/g/2023/01/24/12/w4sbO4IX6ijlGZIaVOnybQ.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 900000,
        "priceOrigin": 900000,
        "priceTotal": 1010700,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KJYBC6",
        "name": "TOYOTA FORTUNER G 2022",
        "ownerId": "U9YDH9",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/03/08/13/5ObknOVEHzCGGFdH73WH7w.jpg",
        "seat": 8,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.036956864671984,
            "lon": 105.87419385581694,
            "cityId": 86,
            "districtId": 861,
            "wardId": 29809,
            "street": "Trường tiểu học Phan Văn Năm"
        },
        "locationAddr": "Thị xã Bình Minh, Vĩnh Long",
        "locationAddrS": "Thị xã Bình Minh, Vĩnh Long",
        "d": 14.2,
        "distance": "14.2 km",
        "deliveryEnable": 1,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "JH2SKJ21",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/toyota_fortuner_g_2022/p/g/2022/11/06/15/vN4y5nKU_Y_S1WFskW3obQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/toyota_fortuner_g_2022/p/g/2022/11/06/15/vN4y5nKU_Y_S1WFskW3obQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "JFIUSX7X",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/toyota_fortuner_g_2022/p/g/2022/11/06/15/Oef2P78GOI0FsqNXBemV-w.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/toyota_fortuner_g_2022/p/g/2022/11/06/15/Oef2P78GOI0FsqNXBemV-w.jpg",
                "carPhotoId": ""
            },
            {
                "id": "FH5CAACV",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/toyota_fortuner_g_2022/p/g/2022/11/06/14/CaMYCCpOIDvq1tC7DTit4A.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/toyota_fortuner_g_2022/p/g/2022/11/06/14/CaMYCCpOIDvq1tC7DTit4A.jpg",
                "carPhotoId": ""
            },
            {
                "id": "GCTU5PIG",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/toyota_fortuner_g_2022/p/g/2022/11/06/14/SztC3oYO8OMdFkxbBYB1-w.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/toyota_fortuner_g_2022/p/g/2022/11/06/14/SztC3oYO8OMdFkxbBYB1-w.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 30,
        "price": 1200000,
        "priceOrigin": 1200000,
        "priceTotal": 1347600,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KL8VRC",
        "name": "KIA SONET PREMIUM 2022",
        "ownerId": "UMZJEW",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-0.png",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.03389399775598,
            "lon": 105.78073524189675,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 916,
            "wardId": 31129,
            "street": "Phúc Store, 19/7 Đ. Trương Định, Tân An, Ninh Kiều, Cần Thơ, Việt Nam"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 4.1,
        "distance": "4.1 km",
        "deliveryEnable": 0,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 0,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "3D41DB2D",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_sonet_premium_2022/p/g/2023/07/07/22/NMZQWvsN_ke-Gvm_pIJlEg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_sonet_premium_2022/p/g/2023/07/07/22/t_UE8KuZqmzjYAbTMni7qw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "GBAXXU62",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_sonet_premium_2022/p/g/2023/07/07/22/1zbyWv5BH4w_MRwumZiwEQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_sonet_premium_2022/p/g/2023/07/07/22/xDgkgP1cYP71dDkTTGjWXQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "4Z6JN58Q",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_sonet_premium_2022/p/g/2023/07/07/22/txPMqN124ur6c-knrLIvgw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_sonet_premium_2022/p/g/2023/07/07/22/HSS_iYskKihGx4-HlQ0TyA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "IJKW571V",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_sonet_premium_2022/p/g/2023/07/07/22/Qd-_dJXHZzR9sMD-P5zWhA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_sonet_premium_2022/p/g/2023/07/07/22/uNC3GgSJCfQt_RaKt4a2NA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 20,
        "discountMonthly": 30,
        "price": 700000,
        "priceOrigin": 700000,
        "priceTotal": 872200,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 6:00 - 17:30"
        ],
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KJ61VH",
        "name": "SUZUKI ERTIGA 2021",
        "ownerId": "U61MDL",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2022/06/03/22/xzHQAeh_rhpYDWyiCpxnUw.jpg",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 10.060804185215815,
            "lon": 105.78352536397118,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 916,
            "wardId": 31117,
            "street": "27 Nguyễn Văn Cừ"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 4.2,
        "distance": "4.2 km",
        "deliveryEnable": 1,
        "deliveryRadius": 5,
        "deliveryRadiusFree": 5,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "CGPYN1CJ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_ertiga_2021/p/g/2022/10/17/17/O-zQQSpROdQULg-O0EqrPg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_ertiga_2021/p/g/2022/10/17/17/bSGn6ustB9JOTdbKDuByog.jpg",
                "carPhotoId": ""
            },
            {
                "id": "1V8LGV3I",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_ertiga_2021/p/g/2022/10/17/17/PX7XqBJtv9kldq678fj0LQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_ertiga_2021/p/g/2022/10/17/17/3jC_hmFHniYyU1JceYfPrw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "1KSAFSG8",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_ertiga_2021/p/g/2022/10/17/17/vHI5S2xr42KXoBf3HoWWfg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_ertiga_2021/p/g/2022/10/17/17/FNTT1dbrwe9RAJ3Yr31vqA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "1B962V4Y",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_ertiga_2021/p/g/2022/10/17/17/FQleGBfOBdpS5CS3Cz15oA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_ertiga_2021/p/g/2022/10/17/17/OwGonz7ZwlJxMJxE-aHSrg.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 900000,
        "priceOrigin": 900000,
        "priceTotal": 1010700,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 0:30 - 9:00, 22:00 - 23:30"
        ],
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KJ3T5C",
        "name": "HYUNDAI ACCENT 2022",
        "ownerId": "U61MDL",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2022/06/03/22/xzHQAeh_rhpYDWyiCpxnUw.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.058118164821584,
            "lon": 105.7834341279466,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 916,
            "wardId": 31117,
            "street": "27 Nguyễn Văn Cừ"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 4.2,
        "distance": "4.2 km",
        "deliveryEnable": 1,
        "deliveryRadius": 5,
        "deliveryRadiusFree": 4,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "BPUBC4GG",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_accent_2022/p/g/2022/10/17/18/BzETe6yOQbPmV61bjQhCHg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_accent_2022/p/g/2022/10/17/18/3mJjz1YSsQEgKWoUYyjtkA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "BFVMUD53",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_accent_2022/p/g/2022/10/17/18/7sTyMg_U1wfXOxNuBiuDLQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_accent_2022/p/g/2022/10/17/18/f_PBL_sUrrYPtYMWKpl1Ow.jpg",
                "carPhotoId": ""
            },
            {
                "id": "ATXBYX3P",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_accent_2022/p/g/2022/10/17/18/OYFWVzi-8Gzzq2NBXlpb4Q.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_accent_2022/p/g/2022/10/17/18/sCjErojCrw_qWvK5M0bprg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "AJYN8RJU",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_accent_2022/p/g/2022/10/17/18/hST1e11-3K7Xs_Mcq9VCFg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_accent_2022/p/g/2022/10/17/18/wa03f-ORtn2-45OJwAh_gQ.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 800000,
        "priceOrigin": 800000,
        "priceTotal": 898400,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 0:30 - 9:00, 22:00 - 23:30"
        ],
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KE7XXH",
        "name": "VINFAST VF E34 2023",
        "ownerId": "UPTPLC",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/07/05/15/bLiHFNee0VSI8cgjGeLn8w.jpg",
        "seat": 5,
        "status": 2,
        "instant": 1,
        "optionsTransmission": 1,
        "location": {
            "lat": 9.928829881849786,
            "lon": 105.6382801151254,
            "countryCode": "VN",
            "cityId": 93,
            "districtId": 932,
            "wardId": 31342,
            "street": "Công An Huyện Châu Thành A, Đường Không Tên, Thị trấn Một Ngàn, Huyện Châu Thành A, Hậu Giang"
        },
        "locationAddr": "Huyện Châu Thành A, Hậu Giang",
        "locationAddrS": "Huyện Châu Thành A, Hậu Giang",
        "d": 17.6,
        "distance": "17.6 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 15000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "CKFSSGB9",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/vinfast_vf_e34_2023/p/g/2023/03/06/15/bLkZjwoOsh-E2LzIxhSJ0g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/vinfast_vf_e34_2023/p/g/2023/03/06/15/tiicwgtVOz708IHJaxJfwQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "1RC8CQ3C",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/vinfast_vf_e34_2023/p/g/2023/03/06/15/m9nbbI6ZW-ADXkuHWXW5Qg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/vinfast_vf_e34_2023/p/g/2023/03/06/15/oxysuqPlkqt1dd9nlkks9A.jpg",
                "carPhotoId": ""
            },
            {
                "id": "CBGGLC18",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/vinfast_vf_e34_2023/p/g/2023/03/06/15/9-ereP1cMCFGkes7Qj_lxg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/vinfast_vf_e34_2023/p/g/2023/03/06/15/9kS_aZS9EWzhWO9YBOFvfg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "6L681NBR",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/vinfast_vf_e34_2023/p/g/2023/03/06/15/-PSFziAaQy7DcvXT8pjO_Q.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/vinfast_vf_e34_2023/p/g/2023/03/06/15/cVM_8JHbWFmzAxJp40yIKw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "61NEF4WC",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/vinfast_vf_e34_2023/p/g/2023/03/06/15/LOOnx9Mi-80VjRZJReaSKg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/vinfast_vf_e34_2023/p/g/2023/03/06/15/gCcl9x5I2qnALYCUEx9dwA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "6ZGBU64W",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/vinfast_vf_e34_2023/p/g/2023/03/06/15/8AbK750O3ICrQqx0_j2KCg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/vinfast_vf_e34_2023/p/g/2023/03/06/15/usP59hsCooRk5F5yL1d_Tw.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 2
        },
        "totalTrips": 2,
        "totalReviews": 2,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 700000,
        "priceOrigin": 700000,
        "priceTotal": 872200,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "K35STL",
        "name": "KIA K3 2022",
        "ownerId": "U61MDL",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2022/06/03/22/xzHQAeh_rhpYDWyiCpxnUw.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.058540382074188,
            "lon": 105.7834341279466,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 916,
            "wardId": 31117,
            "street": "27 Nguyễn Văn Cừ"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 4.2,
        "distance": "4.2 km",
        "deliveryEnable": 0,
        "deliveryRadius": 0,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 0,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "K4Y29SBE",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_k3_2022/p/g/2022/10/18/17/mYdHhJUhtr_zuVHL9ex_Qg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_k3_2022/p/g/2022/10/18/17/KXgczRkqhLDt7704Gmwn9g.jpg",
                "carPhotoId": ""
            },
            {
                "id": "K7HVQJM6",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_k3_2022/p/g/2022/10/18/17/P07biZ4CVuzT3bWJMEFvpw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_k3_2022/p/g/2022/10/18/17/bJTZjdZqUrlbohlRwkHK6g.jpg",
                "carPhotoId": ""
            },
            {
                "id": "JFIUSXTU",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_k3_2022/p/g/2022/10/18/17/p844v13r_9rVIVWx4wzqBg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_k3_2022/p/g/2022/10/18/17/SlVCKFqmLkKZ55kjwmRICA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "JKSMP742",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_k3_2022/p/g/2022/10/18/17/QRTO1i33bkFFM5H5YWB2fg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_k3_2022/p/g/2022/10/18/17/mOCpeF2Nilj9RqH-9GQ9NA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 1
        },
        "totalTrips": 1,
        "totalReviews": 1,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 1000000,
        "priceOrigin": 1000000,
        "priceTotal": 1123000,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 0:30 - 9:00, 22:00 - 23:30"
        ],
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K34JZH",
        "name": "TOYOTA VIOS E 2022",
        "ownerId": "U61MDL",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2022/06/03/22/xzHQAeh_rhpYDWyiCpxnUw.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.06037298461741,
            "lon": 105.78345237515151,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 916,
            "wardId": 31117,
            "street": "27 Nguyễn Văn Cừ"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 4.2,
        "distance": "4.2 km",
        "deliveryEnable": 0,
        "deliveryRadius": 0,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 0,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "4Q4TZQCC",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2022/10/18/17/Rn9WXAfkY394qFH0wOaQSQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2022/10/18/17/AGpdQOhMeun__7FtJDisig.jpg",
                "carPhotoId": ""
            },
            {
                "id": "GGJ7UEA5",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2022/10/18/17/hKs8SyAW0FHnmH7E8d6dbg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2022/10/18/17/4gk5WJ_Rf4RgwiqjxP_tsg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "G69H8U6S",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2022/10/18/17/K1J4UeK7oTJHncHJUqzFzA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2022/10/18/17/Qo-9SS2s78GSA0N0t97QSA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "H5LE4AVQ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2022/10/18/17/QM17bi41Y8qTcjU2sqLXtw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2022/10/18/17/UtSYvVNDqujU875JLfC97A.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 2
        },
        "totalTrips": 2,
        "totalReviews": 2,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 800000,
        "priceOrigin": 800000,
        "priceTotal": 898400,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 0:30 - 9:00, 22:00 - 23:30"
        ],
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KFZTNG",
        "name": "MITSUBISHI TRITON 2021",
        "ownerId": "U61MDL",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2022/06/03/22/xzHQAeh_rhpYDWyiCpxnUw.jpg",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.058549365419989,
            "lon": 105.78078828323373,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 916,
            "wardId": 31117,
            "street": "27 Nguyễn Văn Cừ"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 4.2,
        "distance": "4.2 km",
        "deliveryEnable": 0,
        "deliveryRadius": 0,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 0,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "1H2FB6VP",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_triton_2021/p/g/2022/10/18/20/AYOXXvx5YQyX_NEkW6nHIA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_triton_2021/p/g/2022/10/18/20/laHAiFax1gkwNJektNmf4g.jpg",
                "carPhotoId": ""
            },
            {
                "id": "ANMIVXTQ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_triton_2021/p/g/2022/10/18/20/mr8QkLMZTNOlH4JAtY1Hkg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_triton_2021/p/g/2022/10/18/20/Wj9EB_t2WNAB0jOxg2shEA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "ATXBYX3Z",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_triton_2021/p/g/2022/10/18/20/lobX1h2ERA8TGvgA1neLUQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_triton_2021/p/g/2022/10/18/20/SGjLmDg6bCq0VtjYD-6gdA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "B1GSPXAE",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_triton_2021/p/g/2022/10/18/20/JazwD2N5peuV6rYTm7fLXw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_triton_2021/p/g/2022/10/18/20/ds1k0djmWznFrHgK52oC8w.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 1
        },
        "totalTrips": 1,
        "totalReviews": 1,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 950000,
        "priceOrigin": 950000,
        "priceTotal": 1066850,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 0:30 - 9:00, 22:00 - 23:30"
        ],
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K4LM6C",
        "name": "BAIC BEIJING U5 PLUS LUXURY 2022",
        "ownerId": "U84GU5",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2022/09/30/21/wzLeXXDJSj2VLs5GHgPsCQ.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.17284133465481,
            "lon": 105.59114843202887,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 917,
            "wardId": 31156,
            "street": "Siêu thị Bách hóa XANH Khu vực Thới Mỹ, Khu vực Thới Mỹ"
        },
        "locationAddr": "Quận Ô Môn, Cần Thơ",
        "locationAddrS": "Quận Ô Môn, Cần Thơ",
        "d": 22.3,
        "distance": "22.3 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 10000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "A19Z4G61",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/baic_beijing_u5_plus_luxury_2022/p/g/2022/09/31/11/r9uS4tww3RPCQKApiwfzHA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/baic_beijing_u5_plus_luxury_2022/p/g/2022/09/31/11/PgmBEQgv9tkHNdUM7RsKPA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "AZLV2DP4",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/baic_beijing_u5_plus_luxury_2022/p/g/2022/09/31/11/BMm50wobg7cTIsxvEcIiJQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/baic_beijing_u5_plus_luxury_2022/p/g/2022/09/31/11/9i4D0omjL9KWGAFU03iJUw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "AW8YK8M1",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/baic_beijing_u5_plus_luxury_2022/p/g/2022/09/31/11/ESbqG1bvpYkw0I870zLArg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/baic_beijing_u5_plus_luxury_2022/p/g/2022/09/31/11/JVQ9dd_ipPihHAh6NAsOxg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "G8ICWBZZ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/baic_beijing_u5_plus_luxury_2022/p/g/2022/09/31/11/JbtdIfFLhTxd1FR6x6kf5w.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/baic_beijing_u5_plus_luxury_2022/p/g/2022/09/31/11/urcSgyhF3fi5a8ncMGrD_w.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 30,
        "price": 800000,
        "priceOrigin": 800000,
        "priceTotal": 898400,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K2IZGA",
        "name": "MITSUBISHI XPANDER 2021",
        "ownerId": "U74W63",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-1.png",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.019977481924588,
            "lon": 105.78022583410402,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 916,
            "wardId": 31147,
            "street": "NHÀ NGHỈ VEN ĐÔ 2, 12-13U1 KDC Miền Nam"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 4.7,
        "distance": "4.7 km",
        "deliveryEnable": 1,
        "deliveryRadius": 15,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 25000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "77NS7WXS",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2023/08/12/14/xqWG9dVQSDYD1V8Xr8Qexg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2023/08/12/14/U8yoUADlTDXO6MogLbzILg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "KSWUHZCH",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2023/08/12/14/QmL5v7IqRkswfFdi-SpQyw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2023/08/12/14/7i-gp06JfhjhNsKOJm_rqA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "L2V4EDL6",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2023/08/12/14/LNwem_l5dx16FCpz5k9QGQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2023/08/12/14/5CLEQ202iCySM5RzGHzUJA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "LNTTKJDH",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2023/08/12/14/H8wi-lQ--xaMGGn3rPFdvw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2021/p/g/2023/08/12/14/01-bBSQKR2Eu7A1lm0w6DQ.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 800000,
        "priceOrigin": 800000,
        "priceTotal": 898400,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 0:00 - 17:00"
        ],
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "K2QXF5",
        "name": "HYUNDAI CRETA 2022",
        "ownerId": "U74W63",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-1.png",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.019959515232987,
            "lon": 105.78028056921416,
            "cityId": 92,
            "districtId": 916,
            "wardId": 31147,
            "street": " 12-13U1 KDC Miền Nam, Phường Hưng Lợi, Quận Ninh Kiều, Cần Thơ"
        },
        "locationAddr": "Quận Ninh Kiều, Cần Thơ",
        "locationAddrS": "Quận Ninh Kiều, Cần Thơ",
        "d": 4.7,
        "distance": "4.7 km",
        "deliveryEnable": 1,
        "deliveryRadius": 15,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 25000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "3FCYT557",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_creta_2022/p/g/2023/08/12/16/tcJfLrDjX9exsFSM_WT6Aw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_creta_2022/p/g/2023/08/12/16/PQbbXWrwgKoILtJWkbb8ug.jpg",
                "carPhotoId": ""
            },
            {
                "id": "3P15WAHG",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_creta_2022/p/g/2023/08/12/16/pECgRFxDiDMgAlvdsYP1eQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_creta_2022/p/g/2023/08/12/16/COp-5iC6XFzxWaD3DpA-mQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "GBAXXUK7",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_creta_2022/p/g/2023/08/12/16/kSnRYXyjvsGZNoLtLWtBVA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_creta_2022/p/g/2023/08/12/16/PwD-KnPULKXXNR6xJa2CTw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "G5Z5A54G",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_creta_2022/p/g/2023/08/12/16/1irt455lZn8TL-8oBgmUkg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/hyundai_creta_2022/p/g/2023/08/12/16/4RnExwRNxXfCbLp74JZ4hw.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 800000,
        "priceOrigin": 800000,
        "priceTotal": 996800,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 0:00 - 17:00"
        ],
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "K63ETN",
        "name": "MAZDA 6 2019",
        "ownerId": "U8VM2F",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-4.png",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 9.999592234654811,
            "lon": 105.75447955469195,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 919,
            "wardId": 31186,
            "street": "Đường Lê Bình / Đường Trần Hưng Đạo"
        },
        "locationAddr": "Quận Cái Răng, Cần Thơ",
        "locationAddrS": "Quận Cái Răng, Cần Thơ",
        "d": 5.3,
        "distance": "5.3 km",
        "deliveryEnable": 0,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 10000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "L53AGDME",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_6_2019/p/g/2021/10/12/08/U7xniqn8PvHdGMIoYu4pnQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_6_2019/p/g/2021/10/12/08/4s-mnPUZqMsEf46P6cMWzg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "NVK82ZLU",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_6_2019/p/g/2021/10/12/08/62JVkQZdhfFu2lTsOB4f5A.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_6_2019/p/g/2021/10/12/08/wGLQ8TiXZFQQxIxPf0fBYQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "LZ9HHLK8",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_6_2019/p/g/2021/10/12/08/5kwo_AGWHpEcz5P1CBAUHQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_6_2019/p/g/2021/10/12/08/W6zzOk_NPkqUAEkqrzrfZA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "75ZY5Q4P",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_6_2019/p/g/2021/10/12/08/N-2tmiptTGB4XMvRD4wFWg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_6_2019/p/g/2021/10/12/08/lkKaTJKatqeb5I3fnEkSDQ.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 2
        },
        "totalTrips": 3,
        "totalReviews": 3,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 1000000,
        "priceOrigin": 1000000,
        "priceTotal": 1123000,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 6:00 - 17:00"
        ],
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K3BL15",
        "name": "HYUNDAI ACCENT 2022",
        "ownerId": "U7PV9G",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-3.png",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.29161731897302,
            "lon": 105.75319872714239,
            "countryCode": "VN",
            "cityId": 87,
            "districtId": 867,
            "wardId": 29905,
            "street": "Nguyễn Sinh Sắc, Phường 1, Thành phố Sa Đéc, Đồng Tháp"
        },
        "locationAddr": " Sa Đéc, Đồng Tháp",
        "locationAddrS": " Sa Đéc, Đồng Tháp",
        "d": 27.3,
        "distance": "27.3 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "HCHNYN31",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/hyundai_accent_2022/p/g/2023/04/05/21/XKI63gZ4hRvTrzBz1e95oQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/hyundai_accent_2022/p/g/2023/04/05/21/PaQE_4fN-s7L5gSouL7seA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "3GWVHFS1",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/hyundai_accent_2022/p/g/2023/04/05/21/RpYYbLYjV_59x8ZxCsc7qw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/hyundai_accent_2022/p/g/2023/04/05/21/YfFPzSbOjHTl5Y6wtKQ7pw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "3MGMJFPK",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/hyundai_accent_2022/p/g/2023/04/05/21/PrP5j6DYDaiw0dItZVwPrQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/hyundai_accent_2022/p/g/2023/04/05/21/bCVhzKrE2j6BPaYQCegZkg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "FVYIKBAN",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/hyundai_accent_2022/p/g/2023/04/08/16/xTrAFYrUyXLfiSUueItfxA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/hyundai_accent_2022/p/g/2023/04/08/16/83khNsMpyDhxUNkr206HwA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "HCHNYN33",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/hyundai_accent_2022/p/g/2023/04/08/16/g29cmzqf__bXkYvKO5V22A.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/hyundai_accent_2022/p/g/2023/04/08/16/ue28rHhamOrnGxYzhlCwBA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "H3WJDTMM",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/hyundai_accent_2022/p/g/2023/04/08/16/BgflMcS1iW50k2jDJfKRoA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/hyundai_accent_2022/p/g/2023/04/08/16/la_YYsTDep5c-xL6vUynkw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "GE7R45FZ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/hyundai_accent_2022/p/g/2023/04/08/16/QvvswBZGmi0iM-wvrE0h-Q.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/hyundai_accent_2022/p/g/2023/04/08/16/-0-SGogi-HgySvdUPfiEKw.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 30,
        "price": 750000,
        "priceOrigin": 750000,
        "priceTotal": 934500,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KHXXSW",
        "name": "VINFAST LUX A 2.0 2022",
        "ownerId": "U8VM2F",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-4.png",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 9.996011714185778,
            "lon": 105.75935644773816,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 919,
            "wardId": 31186,
            "street": "Trần Chiên"
        },
        "locationAddr": "Quận Cái Răng, Cần Thơ",
        "locationAddrS": "Quận Cái Răng, Cần Thơ",
        "d": 5.5,
        "distance": "5.5 km",
        "deliveryEnable": 0,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 0,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "H71DZNQJ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/vinfast_lux_a_2.0_2022/p/g/2022/09/08/15/Ijc21sdZPejQckdIACHKjg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/vinfast_lux_a_2.0_2022/p/g/2022/09/08/15/vc-AKrw0e5aBssQRLr-p_Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "HSPY2T1W",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/vinfast_lux_a_2.0_2022/p/g/2022/09/06/09/tr_9cuFjbFi-Mc-59kgpcw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/vinfast_lux_a_2.0_2022/p/g/2022/09/06/09/O9bHlvPVHb2FkABM3oJX_Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "IT5I8TZC",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/vinfast_lux_a_2.0_2022/p/g/2022/09/06/09/ax4vx7U2kuGwF-6Vu-KgxQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/vinfast_lux_a_2.0_2022/p/g/2022/09/06/09/O48w3oaebo1FnkfofUonyA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "4AAQBKNY",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/vinfast_lux_a_2.0_2022/p/g/2022/09/08/15/QUkcnlTte22OABSsw-bDaQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/vinfast_lux_a_2.0_2022/p/g/2022/09/08/15/7l59jQhw12m0fTA_9B7CUQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "IRPLAIW4",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/vinfast_lux_a_2.0_2022/p/g/2022/09/08/15/XolbfFxhMqd8RZemg4Au3w.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/vinfast_lux_a_2.0_2022/p/g/2022/09/08/15/3g6HAuFhv5wChNbQVCwWMg.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 1
        },
        "totalTrips": 1,
        "totalReviews": 1,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 1100000,
        "priceOrigin": 1100000,
        "priceTotal": 1235300,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 6:00 - 17:00"
        ],
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K4U2TY",
        "name": "VINFAST LUX A 2.0 2022",
        "ownerId": "U8VM2F",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-4.png",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 9.996640548391786,
            "lon": 105.75853547974238,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 919,
            "wardId": 31198,
            "street": "Trần Chiên"
        },
        "locationAddr": "Quận Cái Răng, Cần Thơ",
        "locationAddrS": "Quận Cái Răng, Cần Thơ",
        "d": 5.5,
        "distance": "5.5 km",
        "deliveryEnable": 0,
        "deliveryRadius": 0,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 0,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "BNBDJVNZ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/vinfast_lux_a_2.0_2022/p/g/2023/01/25/21/Tiox0xT3uiIaY12GY1lKiw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/vinfast_lux_a_2.0_2022/p/g/2023/01/25/21/RD288u-sF_R1BsRy5jPtNQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "BYZ78C45",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/vinfast_lux_a_2.0_2022/p/g/2023/01/25/21/FHhR0SqNwWy7iktEAr-wgg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/vinfast_lux_a_2.0_2022/p/g/2023/01/25/21/laBoNUGEKvZAg8AoZziu7g.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 1100000,
        "priceOrigin": 1100000,
        "priceTotal": 1235300,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 6:00 - 17:00"
        ],
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KFUK9B",
        "name": "TOYOTA VIOS E 2019",
        "ownerId": "U8VM2F",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-4.png",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 9.99580646429798,
            "lon": 105.76268030117224,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 919,
            "wardId": 31198,
            "street": "CÔNG TY DU LỊCH TỐC HÀNH"
        },
        "locationAddr": "Quận Cái Răng, Cần Thơ",
        "locationAddrS": "Quận Cái Răng, Cần Thơ",
        "d": 5.6,
        "distance": "5.6 km",
        "deliveryEnable": 0,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 5,
        "deliveryPrice": 10000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "G5Z5A5VL",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2019/p/g/2019/08/16/11/SpneiDBMGvN9XosL2_hyKw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2019/p/g/2019/08/16/11/2rl7PcmWuUqCWs-niFmfhQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "H5LEHY9H",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2019/p/g/2019/08/16/11/YkYWMfLbMJzy3h3Wf6E27g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2019/p/g/2019/08/16/11/eY3xst95I7jvmkOPZMXo_w.jpg",
                "carPhotoId": ""
            },
            {
                "id": "HCHNY6XR",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2019/p/g/2019/08/16/11/TxGO-WaSekO3YUNmmLfhWQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2019/p/g/2019/08/16/11/X85L7K-gJL-pphx867NbGA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 2
        },
        "totalTrips": 9,
        "totalReviews": 9,
        "discountEnable": 0,
        "discountWeekly": 5,
        "discountMonthly": 10,
        "price": 650000,
        "priceOrigin": 650000,
        "priceTotal": 729950,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 6:00 - 17:00"
        ],
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KFZT72",
        "name": "HONDA CITY 2021",
        "ownerId": "UN18FI",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/06/15/19/_39kYSf3KfQhJxV4raBIDw.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.283475431513184,
            "lon": 105.67564003648755,
            "countryCode": "VN",
            "cityId": 87,
            "districtId": 876,
            "wardId": 30223,
            "street": "126 QL80, Hòa Long, Lai Vung, Đồng Tháp, Việt Nam"
        },
        "locationAddr": "Huyện Lai Vung, Đồng Tháp",
        "locationAddrS": "Huyện Lai Vung, Đồng Tháp",
        "d": 27.9,
        "distance": "27.9 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "G5Z5A5ED",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/honda_city_2021/p/g/2023/06/15/19/fzMGSMV5LUrx9CyXQuY51g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/honda_city_2021/p/g/2023/06/15/19/Z2_nhH7sy1pkrzaBIAy__g.jpg",
                "carPhotoId": ""
            },
            {
                "id": "GE7R455X",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/honda_city_2021/p/g/2023/06/15/19/v4oC1VNc5QxCGtdDGFMnKQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/honda_city_2021/p/g/2023/06/15/19/MybsYyOjOaBgUZKsQspMHQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "3Y3B3J31",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/honda_city_2021/p/g/2023/06/15/19/PVOsFWgDEjHhCiRdcRezwQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/honda_city_2021/p/g/2023/06/15/19/UsG63JYO_ZT0Pmn1IGwojw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "38V4NK3V",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/honda_city_2021/p/g/2023/06/15/19/omofewD3Mhih26sVMZ0a5g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/honda_city_2021/p/g/2023/06/15/19/xR58sasDwZCDTgcs-yPmmA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 20,
        "discountMonthly": 30,
        "price": 750000,
        "priceOrigin": 750000,
        "priceTotal": 934500,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 1,
        "wdShort": {
            "instant": 0,
            "deliveryEnable": 1,
            "deliveryRadius": 10,
            "deliveryRadiusFree": 0,
            "deliveryPrice": 10000,
            "deliveryDiscountEnable": 0,
            "deliveryDiscountKm": 0,
            "deliveryDiscountPercent": 0,
            "deliveryDiscountMax": 0,
            "price": 2027201,
            "priceOrigin": 2027201,
            "finalPrice": 2240922,
            "totalDiscountPercent": 0,
            "deliveryFee": 0,
            "ownerHostFiveStar": 0
        },
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KF9THA",
        "name": "TOYOTA FORTUNER 2017",
        "ownerId": "U8VM2F",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-4.png",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 9.995797480952179,
            "lon": 105.76050929882778,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 919,
            "wardId": 31198,
            "street": "CÔNG TY DU LỊCH TỐC HÀNH"
        },
        "locationAddr": "Quận Cái Răng, Cần Thơ",
        "locationAddrS": "Quận Cái Răng, Cần Thơ",
        "d": 5.6,
        "distance": "5.6 km",
        "deliveryEnable": 0,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 5,
        "deliveryPrice": 10000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "3I8SZRPP",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_fortuner_2017/p/g/2019/08/16/11/yF7_x1eMd_PlLVXXGpH_8Q.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_fortuner_2017/p/g/2019/08/16/11/jfbNsZC4gKiyOS3N8WtNzw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "3Y3B3I2M",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_fortuner_2017/p/g/2019/08/16/11/_4QBrJqOBivxIl7CbfZnOQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_fortuner_2017/p/g/2019/08/16/11/aXNkM7_T37rHxd6LZ0rdfQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "3MGMJ25Z",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_fortuner_2017/p/g/2019/08/16/11/7kywsv78GOrOpuaaHUGmoA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_fortuner_2017/p/g/2019/08/16/11/LWhE9B_-b5yy7Mcwz7ndBQ.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 1
        },
        "totalTrips": 1,
        "totalReviews": 1,
        "discountEnable": 0,
        "discountWeekly": 5,
        "discountMonthly": 10,
        "price": 950000,
        "priceOrigin": 950000,
        "priceTotal": 1066850,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 6:00 - 17:00"
        ],
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KFLSTU",
        "name": "MAZDA 3 2018",
        "ownerId": "U8VM2F",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-4.png",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 9.99581544764378,
            "lon": 105.76266205745506,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 919,
            "wardId": 31198,
            "street": "CÔNG TY DU LỊCH TỐC HÀNH"
        },
        "locationAddr": "Quận Cái Răng, Cần Thơ",
        "locationAddrS": "Quận Cái Răng, Cần Thơ",
        "d": 5.6,
        "distance": "5.6 km",
        "deliveryEnable": 0,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 5,
        "deliveryPrice": 10000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "2U2YRD3Q",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2018/p/g/2019/08/16/11/DLzOW7zcDTEjAbRCJgg7OQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2018/p/g/2019/08/16/11/5zC2SiBVOO0lh0fJw_OnFw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "2NTGBDYJ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2018/p/g/2019/08/16/11/imtfvyLVTKruQj656nkRwA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2018/p/g/2019/08/16/11/bNlA9Z-rhc0Pcx9Ja_X8uw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "EHX4KZW7",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2018/p/g/2019/08/16/11/XtwLsgKekqjK2XPjkJSroQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mazda_3_2018/p/g/2019/08/16/11/EfyXCfML0YltF_0JPz8hDw.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 3
        },
        "totalTrips": 4,
        "totalReviews": 4,
        "discountEnable": 0,
        "discountWeekly": 5,
        "discountMonthly": 10,
        "price": 750000,
        "priceOrigin": 750000,
        "priceTotal": 842250,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 6:00 - 17:00"
        ],
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KFP9CX",
        "name": "TOYOTA FORTUNER 2017",
        "ownerId": "U8VM2F",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-4.png",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 9.99580646429798,
            "lon": 105.76050929882778,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 919,
            "wardId": 31198,
            "street": "CÔNG TY DU LỊCH TỐC HÀNH"
        },
        "locationAddr": "Quận Cái Răng, Cần Thơ",
        "locationAddrS": "Quận Cái Răng, Cần Thơ",
        "d": 5.6,
        "distance": "5.6 km",
        "deliveryEnable": 0,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 5,
        "deliveryPrice": 10000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "2ZSSCN1A",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_fortuner_2017/p/g/2019/08/16/11/c4ch6UvZW4YE7xcZ3xCd2Q.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_fortuner_2017/p/g/2019/08/16/11/T8K04JvU9yZPiL6Km5HVyQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "D4XPI6GW",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_fortuner_2017/p/g/2019/08/16/11/8P9Z9l2NUyddDWP3cpQWbA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_fortuner_2017/p/g/2019/08/16/11/hWMZ9G2JZYQaOAEUVKuaWw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "DA9BA1KH",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_fortuner_2017/p/g/2019/08/16/11/mq0JpNfH8NQBY0xH0MWqXA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_fortuner_2017/p/g/2019/08/16/11/29sITrdA24Tn7nj2zo0m9Q.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 5,
        "discountMonthly": 10,
        "price": 950000,
        "priceOrigin": 950000,
        "priceTotal": 1066850,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 6:00 - 17:00"
        ],
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K6C2KQ",
        "name": "TOYOTA AVANZA 2022",
        "ownerId": "UQKH23",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/08/11/21/FN2QgHhcfrnmrIeYWNSTzA.jpg",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 9.802137081849787,
            "lon": 105.64320372179917,
            "countryCode": "VN",
            "cityId": 93,
            "districtId": 934,
            "wardId": 31399,
            "street": "Đường Quốc Lộ 61, Thị trấn Kinh Cùng, Huyện Phụng Hiệp, Tỉnh Hậu Giang"
        },
        "locationAddr": "Huyện Phụng Hiệp, Hậu Giang",
        "locationAddrS": "Huyện Phụng Hiệp, Hậu Giang",
        "d": 29.2,
        "distance": "29.2 km",
        "deliveryEnable": 0,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 0,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "E24MGVKN",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/toyota_avanza_2022/p/g/2023/08/11/20/6b9_hJa_68mDowN9sgVQbQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/toyota_avanza_2022/p/g/2023/08/11/20/ORXgfHrJGw3lQKqk8vwKTA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "E3D5Z395",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/toyota_avanza_2022/p/g/2023/08/11/20/vk_8iRDGiGyMDvW_oa6vuw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/toyota_avanza_2022/p/g/2023/08/11/20/zRrPKmEASvlEiLGAyni0XQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "EQ1XBUQC",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/toyota_avanza_2022/p/g/2023/08/11/20/4wLaMO62JCr_ZEChR7VCvA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/toyota_avanza_2022/p/g/2023/08/11/20/U76vxAr25Pb0rIOUNJ2HGg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "FJEZ8L4W",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/toyota_avanza_2022/p/g/2023/08/11/20/djwkiMm4UXVsykuYsSJW9g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/toyota_avanza_2022/p/g/2023/08/11/20/0pQOPZd2TwtAVamT7XaYcg.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 800000,
        "priceOrigin": 800000,
        "priceTotal": 996800,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KIDFGS",
        "name": "SUZUKI CIAZ 2017",
        "ownerId": "UKH9V8",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/06/05/15/dbq2OLVIWVKpY_MCB14LPw.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 9.879265335328018,
            "lon": 105.94877295958665,
            "countryCode": "VN",
            "cityId": 94,
            "districtId": 950,
            "wardId": 31804,
            "street": "Đường Quốc Lộ Nam Sông Hậu, Thị trấn An Lạc Thôn, Huyện Kế Sách, Tỉnh Sóc Trăng"
        },
        "locationAddr": "Thị xã Vĩnh Châu, Sóc Trăng",
        "locationAddrS": "Thị xã Vĩnh Châu, Sóc Trăng",
        "d": 28.8,
        "distance": "28.8 km",
        "deliveryEnable": 1,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 30000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "DCMX8LUG",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_soctrang/suzuki_ciaz_2017/p/g/2023/06/05/15/SQajahRgLX7Fn88XZ4Jjdw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_soctrang/suzuki_ciaz_2017/p/g/2023/06/05/15/aAQbnShVvByET9jhwh5Ecw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "D665MQFQ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_soctrang/suzuki_ciaz_2017/p/g/2023/06/05/15/zpknK9kp4zRLiV7CqjcAPg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_soctrang/suzuki_ciaz_2017/p/g/2023/06/05/15/9-B4vnFtJUSnxUULnXpp8A.jpg",
                "carPhotoId": ""
            },
            {
                "id": "C87K53F3",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_soctrang/suzuki_ciaz_2017/p/g/2023/06/05/15/Xg9hYffOUP57zZNzuXnxYw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_soctrang/suzuki_ciaz_2017/p/g/2023/06/05/15/ULi7CsNjTkvEB0gh3As9zw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "CGPYN1TV",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_soctrang/suzuki_ciaz_2017/p/g/2023/06/05/15/qNsIDQ8TTXVjhIK5NjKczg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_soctrang/suzuki_ciaz_2017/p/g/2023/06/05/15/_Ldw1t1IcGxoj59HuiI24w.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 700000,
        "priceOrigin": 700000,
        "priceTotal": 872200,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KF7CPW",
        "name": "TOYOTA INNOVA 2015",
        "ownerId": "U8VM2F",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-4.png",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 9.99922911904782,
            "lon": 105.76268030117224,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 919,
            "wardId": 31198,
            "street": "CÔNG TY DU LỊCH TỐC HÀNH"
        },
        "locationAddr": "Quận Cái Răng, Cần Thơ",
        "locationAddrS": "Quận Cái Răng, Cần Thơ",
        "d": 5.6,
        "distance": "5.6 km",
        "deliveryEnable": 0,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 5,
        "deliveryPrice": 10000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "2A3TH7ID",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_2015/p/g/2019/08/16/11/D-Y6c4I1Zqv4_2KmcOGn2g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_2015/p/g/2019/08/16/11/gzheBSTkDBKGoHIGoBAwCg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "D8CEY26M",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_2015/p/g/2019/08/16/11/nT69vysRrGUsV4dT9fuzzw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_2015/p/g/2019/08/16/11/LD4oAQMrsO2daz3z15oiwA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 3
        },
        "totalTrips": 3,
        "totalReviews": 3,
        "discountEnable": 0,
        "discountWeekly": 5,
        "discountMonthly": 10,
        "price": 750000,
        "priceOrigin": 750000,
        "priceTotal": 842250,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 6:00 - 17:00"
        ],
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KEN3Q8",
        "name": "TOYOTA VIOS G 2019",
        "ownerId": "U8VM2F",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-4.png",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 9.995824430989579,
            "lon": 105.76258908258635,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 919,
            "wardId": 31198,
            "street": "CÔNG TY DU LỊCH TỐC HÀNH"
        },
        "locationAddr": "Quận Cái Răng, Cần Thơ",
        "locationAddrS": "Quận Cái Răng, Cần Thơ",
        "d": 5.6,
        "distance": "5.6 km",
        "deliveryEnable": 0,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 10000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "CBGGLDC5",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2019/p/g/2019/08/16/12/a5geL50jBLR4NKJ4yKmWcw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2019/p/g/2019/08/16/12/O_RZQO8FnqFOT1sRGQW3Aw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "1PH97XIV",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2019/p/g/2019/08/16/12/aMyCSl-B8V-Tw5Df3Jx_Aw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2019/p/g/2019/08/16/12/36CUce1tX0E2FFprn_8D2w.jpg",
                "carPhotoId": ""
            },
            {
                "id": "C7TMXKG8",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2019/p/g/2019/08/16/12/-cKiYFEgIgOrkRnTol0heQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2019/p/g/2019/08/16/12/SeiUl7RYajHO9cPG7QmBzg.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 5
        },
        "totalTrips": 8,
        "totalReviews": 8,
        "discountEnable": 0,
        "discountWeekly": 5,
        "discountMonthly": 10,
        "price": 700000,
        "priceOrigin": 700000,
        "priceTotal": 786100,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 6:00 - 17:00"
        ],
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KE7YAR",
        "name": "TOYOTA COROLLA ALTIS G 2019",
        "ownerId": "U8VM2F",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-4.png",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 9.995797480952179,
            "lon": 105.76260732630352,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 919,
            "wardId": 31198,
            "street": "CÔNG TY DU LỊCH TỐC HÀNH"
        },
        "locationAddr": "Quận Cái Răng, Cần Thơ",
        "locationAddrS": "Quận Cái Răng, Cần Thơ",
        "d": 5.6,
        "distance": "5.6 km",
        "deliveryEnable": 0,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 5,
        "deliveryPrice": 10000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "ATXBYV7K",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_corolla_altis_g_2019/p/g/2019/08/16/12/K67E01chi2N8GowNBZTzUQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_corolla_altis_g_2019/p/g/2019/08/16/12/P4eCePW0b4reM7Q0iyH_Jg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "N9Q9L6QL",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_corolla_altis_g_2019/p/g/2019/08/16/12/3h5cKWgF4k3IuXMIXP6ygA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_corolla_altis_g_2019/p/g/2019/08/16/12/ADIKzHwHG1i0fhVqvjn6Rg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "78IQHG84",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_corolla_altis_g_2019/p/g/2019/08/16/12/7JCE9Abw7wxAq6s_n4VQcQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_corolla_altis_g_2019/p/g/2019/08/16/12/5eN7gzccTGe-x-44YpcYtg.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 5,
        "discountMonthly": 10,
        "price": 800000,
        "priceOrigin": 800000,
        "priceTotal": 898400,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 6:00 - 17:00"
        ],
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KE3WLH",
        "name": "TOYOTA VIOS E 2022",
        "ownerId": "UNT7ZM",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-1.png",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 10.238980881326182,
            "lon": 105.53472420508496,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 923,
            "wardId": 31217,
            "street": "Tỉnh Lộ 921"
        },
        "locationAddr": "Quận Thốt Nốt, Cần Thơ",
        "locationAddrS": "Quận Thốt Nốt, Cần Thơ",
        "d": 31.9,
        "distance": "31.9 km",
        "deliveryEnable": 1,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 4,
        "deliveryPrice": 15000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "5VETA9H1",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2023/03/12/11/rdFF2AXDvzJYMPzpSnabLg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2023/03/12/11/C7_v6U8w5EQJ0e5YgdvSZg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "5K3H2NDK",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2023/03/12/11/jVDx7-ZgNk0UAagZVdB6zw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2022/p/g/2023/03/12/11/eU9fCYrqzJX5lM4Z083bUA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 4
        },
        "totalTrips": 4,
        "totalReviews": 4,
        "discountEnable": 1,
        "discountWeekly": 0,
        "discountMonthly": 30,
        "price": 600000,
        "priceOrigin": 600000,
        "priceTotal": 747600,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 1,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "K2EGMD",
        "name": "TOYOTA VIOS E 2019",
        "ownerId": "ULCJZ4",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-7.png",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 10.238423181700185,
            "lon": 105.95845146956597,
            "countryCode": "VN",
            "cityId": 86,
            "districtId": 855,
            "wardId": 29560,
            "street": "Thành phố Vĩnh Long"
        },
        "locationAddr": " Vĩnh Long, Vĩnh Long",
        "locationAddrS": " Vĩnh Long, Vĩnh Long",
        "d": 31.6,
        "distance": "31.6 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 15000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "NVK82YSI",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/toyota_vios_e_2019/p/g/2020/04/08/22/5M29XU13vq37EJI-l45Q1g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/toyota_vios_e_2019/p/g/2020/04/08/22/CCJAD6lIvrZeE7cmsokw0Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "NBMRBL1A",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/toyota_vios_e_2019/p/g/2020/04/08/22/YUp3vFvzPa-FOBE_Fetubw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/toyota_vios_e_2019/p/g/2020/04/08/22/lrmWSDLaflxkM5Y4eHQKiQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "NK6EWQ9J",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/toyota_vios_e_2019/p/g/2020/04/08/22/YpUlFROfl3AtpVbbTCMhfQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/toyota_vios_e_2019/p/g/2020/04/08/22/lIYSkF-f4KGBEgb3De1Hxg.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 2
        },
        "totalTrips": 2,
        "totalReviews": 2,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 15,
        "price": 700000,
        "priceOrigin": 700000,
        "priceTotal": 872200,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 1,
        "wdShort": {
            "instant": 0,
            "deliveryEnable": 1,
            "deliveryRadius": 15,
            "deliveryRadiusFree": 5,
            "deliveryPrice": 10000,
            "deliveryDiscountEnable": 0,
            "deliveryDiscountKm": 0,
            "deliveryDiscountPercent": 0,
            "deliveryDiscountMax": 0,
            "price": 1769601,
            "priceOrigin": 1769601,
            "finalPrice": 1957562,
            "totalDiscountPercent": 0,
            "deliveryFee": 0,
            "ownerHostFiveStar": 0
        },
        "vaccinated": 2,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KEYM5K",
        "name": "TOYOTA VIOS G 2018",
        "ownerId": "U8VM2F",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-4.png",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 9.99920216901042,
            "lon": 105.76266205745506,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 919,
            "wardId": 31198,
            "street": "CÔNG TY DU LỊCH TỐC HÀNH"
        },
        "locationAddr": "Quận Cái Răng, Cần Thơ",
        "locationAddrS": "Quận Cái Răng, Cần Thơ",
        "d": 5.6,
        "distance": "5.6 km",
        "deliveryEnable": 0,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 5,
        "deliveryPrice": 10000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "IFWC3K33",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2018/p/g/2019/08/16/13/XFHWpwTADNBegNQSEjgWwg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2018/p/g/2019/08/16/13/7ZMLMs5ApT0L6QtVKnbK2g.jpg",
                "carPhotoId": ""
            },
            {
                "id": "4TX7J368",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2018/p/g/2019/08/16/13/Th-mMkNmxTdaW1vbOb1uQg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2018/p/g/2019/08/16/13/-OLuE9rYqu0VFMJbQA61KQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "JBT1ISR9",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2018/p/g/2019/08/16/13/rA_QeMx0f1a0NuMKjZrJFA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_g_2018/p/g/2019/08/16/13/ddKU42B1owvOlAbZtWoZMA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 1
        },
        "totalTrips": 1,
        "totalReviews": 1,
        "discountEnable": 0,
        "discountWeekly": 5,
        "discountMonthly": 10,
        "price": 700000,
        "priceOrigin": 700000,
        "priceTotal": 786100,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 6:00 - 17:00"
        ],
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KEWVY5",
        "name": "TOYOTA INNOVA 2015",
        "ownerId": "U8VM2F",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-4.png",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 9.99581544764378,
            "lon": 105.76266205745506,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 919,
            "wardId": 31198,
            "street": "CÔNG TY DU LỊCH TỐC HÀNH"
        },
        "locationAddr": "Quận Cái Răng, Cần Thơ",
        "locationAddrS": "Quận Cái Răng, Cần Thơ",
        "d": 5.6,
        "distance": "5.6 km",
        "deliveryEnable": 0,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 5,
        "deliveryPrice": 10000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "G69H8WJ9",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_2015/p/g/2019/08/16/14/GMEhStgMhtlPpmQNOkIKFA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_2015/p/g/2019/08/16/14/DOa48v5DuK4s_Ps1LC7fiA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "4Q4TZ7Q4",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_2015/p/g/2019/08/16/14/svyPdlm5qtuQ9FKeqGvnuw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_2015/p/g/2019/08/16/14/R7sDdggnTZpwSBnM9tdE9A.jpg",
                "carPhotoId": ""
            },
            {
                "id": "GE7R4KNE",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_2015/p/g/2019/08/16/14/BfnNZR1gaBAqV2UhwcjcQA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_2015/p/g/2019/08/16/14/6nJ2c6du6-GMyaFKEcPsyQ.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 1
        },
        "totalTrips": 1,
        "totalReviews": 1,
        "discountEnable": 0,
        "discountWeekly": 5,
        "discountMonthly": 10,
        "price": 800000,
        "priceOrigin": 800000,
        "priceTotal": 898400,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 6:00 - 17:00"
        ],
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K2NNGG",
        "name": "TOYOTA VIOS E 2018",
        "ownerId": "U8VM2F",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-4.png",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 9.996108598055184,
            "lon": 105.76100571742377,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 919,
            "wardId": 31198,
            "street": "CÔNG TY DU LỊCH TỐC HÀNH"
        },
        "locationAddr": "Quận Cái Răng, Cần Thơ",
        "locationAddrS": "Quận Cái Răng, Cần Thơ",
        "d": 5.6,
        "distance": "5.6 km",
        "deliveryEnable": 0,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 5,
        "deliveryPrice": 10000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "7BBLIE7Z",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2018/p/g/2019/08/12/18/RpxRC-6C-VKUIDnKbHsR4w.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2018/p/g/2019/08/12/18/a9znZcukkwXasMBqoi8VNw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "77NS7U2D",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2018/p/g/2019/08/12/18/fY_GahweVSNbaloLEFOHcQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2018/p/g/2019/08/12/18/PVyQFnPWYGMZ9r1T9ukVwg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "7UYKL6C6",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2018/p/g/2019/08/12/18/ZNS4L3jRZ9ezNqAbL3D9sQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_vios_e_2018/p/g/2019/08/12/18/0yHnDeaH6zsJ8Tgn4lkjLQ.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 4,
            "star1": 0,
            "star2": 0,
            "star3": 1,
            "star4": 0,
            "star5": 1
        },
        "totalTrips": 7,
        "totalReviews": 7,
        "discountEnable": 0,
        "discountWeekly": 5,
        "discountMonthly": 10,
        "price": 670000,
        "priceOrigin": 670000,
        "priceTotal": 752411,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 6:00 - 17:00"
        ],
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K5UIQJ",
        "name": "KIA SONET DELUXE 2021",
        "ownerId": "U9HNJ3",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2022/09/01/12/aSebgY1fnTp8UFHODQJkeg.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 10.231218431961988,
            "lon": 105.98302952068194,
            "cityId": 86,
            "districtId": 855,
            "wardId": 29557,
            "street": "67/26, Phó Cơ Điều, Thành Phố Vĩnh Long, Tỉnh Vĩnh Long, Việt Nam"
        },
        "locationAddr": " Vĩnh Long, Vĩnh Long",
        "locationAddrS": " Vĩnh Long, Vĩnh Long",
        "d": 33.3,
        "distance": "33.3 km",
        "deliveryEnable": 1,
        "deliveryRadius": 15,
        "deliveryRadiusFree": 5,
        "deliveryPrice": 10000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "CVE37JN5",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/kia_sonet_deluxe_2021/p/g/2022/02/24/21/ZvrUtVCV3p03ytEe5Sj-uA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/kia_sonet_deluxe_2021/p/g/2022/02/24/21/2ChLZYAnjJGfqDoZaJQ-jA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "DCMX8M4K",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/kia_sonet_deluxe_2021/p/g/2022/02/24/21/NVZI-7dyMDtBvwmvWXzz_A.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/kia_sonet_deluxe_2021/p/g/2022/02/24/21/pjKyuZmBUImtM0TWMVt1Iw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "D4XPI6EM",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/kia_sonet_deluxe_2021/p/g/2022/02/24/21/0onwIsRjdcevsOCUn9Z8QQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/kia_sonet_deluxe_2021/p/g/2022/02/24/21/XpV-vBAJ7EJ_poN1VPXjJA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "D7HHK5VP",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/kia_sonet_deluxe_2021/p/g/2022/02/24/21/22QbQBwMTZJq-6CSLgegjQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/kia_sonet_deluxe_2021/p/g/2022/02/24/21/kzozJyn9NzMziTcGLTA17A.jpg",
                "carPhotoId": ""
            },
            {
                "id": "A3I96NED",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/kia_sonet_deluxe_2021/p/g/2022/02/24/21/DwJH5XVSePoMIGWM96nk4w.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/kia_sonet_deluxe_2021/p/g/2022/02/24/21/1eJyFQfw59YjjdQVXZ6NZQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "ASD2GKRH",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/kia_sonet_deluxe_2021/p/g/2022/02/24/21/BUPTG5PJWNosBjW2p8LNeA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/kia_sonet_deluxe_2021/p/g/2022/02/24/21/yBHO1iA98lcVNXRAzwpWDA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "26AI48Y3",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/kia_sonet_deluxe_2021/p/g/2022/03/11/09/aiJdT6fAA_o4rS8aV-YnKQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/kia_sonet_deluxe_2021/p/g/2022/03/11/09/pjqQ-qgVSS8OFogMlz4vvg.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 1
        },
        "totalTrips": 1,
        "totalReviews": 1,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 30,
        "price": 700000,
        "priceOrigin": 700000,
        "priceTotal": 872200,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K35ST4",
        "name": "TOYOTA VIOS E 2019",
        "ownerId": "U8V6I3",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2022/07/25/14/HUlqiX1vTxkreWFYFZcqfA.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 10.245264364896384,
            "lon": 105.97541911926028,
            "countryCode": "VN",
            "cityId": 86,
            "districtId": 855,
            "wardId": 29554,
            "street": "Đài Phát thanh & Truyền hình Vĩnh Long, 50 Phạm Thái Bường"
        },
        "locationAddr": " Vĩnh Long, Vĩnh Long",
        "locationAddrS": " Vĩnh Long, Vĩnh Long",
        "d": 33.7,
        "distance": "33.7 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 15000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "H6G3LTHT",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/toyota_vios_e_2019/p/g/2022/07/25/15/REQdCh59CKvao0KzjPrYiw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/toyota_vios_e_2019/p/g/2022/07/25/15/zRgaeVJuLOUrrMBDbNhWbQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "HXFSIAL5",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/toyota_vios_e_2019/p/g/2022/07/25/15/rqrr22z2cl8VL31Ou2oBew.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/toyota_vios_e_2019/p/g/2022/07/25/15/23mNPubrhgHLy1PhVfNeog.jpg",
                "carPhotoId": ""
            },
            {
                "id": "44EFPF4F",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/toyota_vios_e_2019/p/g/2022/07/25/15/VauWlryPQRwndb1xTWRAGw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/toyota_vios_e_2019/p/g/2022/07/25/15/RsIauX1DI6nknDI5yC-yUQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "K4Y29SB9",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/toyota_vios_e_2019/p/g/2022/07/25/15/GUBAx4twKhWA_AQKHBLNNw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/toyota_vios_e_2019/p/g/2022/07/25/15/RJUc9lZk7BW8cjpqFsgSTA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 30,
        "price": 600000,
        "priceOrigin": 600000,
        "priceTotal": 747600,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K3UB6Z",
        "name": "TOYOTA INNOVA G 2020",
        "ownerId": "U7JLKZ",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-5.png",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.323024834879213,
            "lon": 105.87308863454318,
            "countryCode": "VN",
            "cityId": 82,
            "districtId": 819,
            "wardId": 28429,
            "street": "Trạm biến áp 110kV Mỹ Thuận, "
        },
        "locationAddr": "Huyện Cái Bè, Tiền Giang",
        "locationAddrS": "Huyện Cái Bè, Tiền Giang",
        "d": 33.7,
        "distance": "33.7 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "F1B5CRSW",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_tiengiang/toyota_innova_g_2020/p/g/2021/01/26/17/KLvfUsUrr8NnsYIavXIing.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_tiengiang/toyota_innova_g_2020/p/g/2021/01/26/17/9vq8Ry5tx5HMfyJBOQyx2Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "245N2LZ2",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_tiengiang/toyota_innova_g_2020/p/g/2021/01/26/17/PHs9qng-UIY2tJBY6dcI8g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_tiengiang/toyota_innova_g_2020/p/g/2021/01/26/17/B6go4NPJBoZR5A5TIut5aQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "E24MGTKC",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_tiengiang/toyota_innova_g_2020/p/g/2021/01/26/17/-hrYCnn2JhqIBuiV3WPoaA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_tiengiang/toyota_innova_g_2020/p/g/2021/01/26/17/ixih2EWiquAbHeH8_GRRUQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "E3D5ZFFA",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_tiengiang/toyota_innova_g_2020/p/g/2021/01/26/17/M5xYTVcYHKm7xuQTL7-TOA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_tiengiang/toyota_innova_g_2020/p/g/2021/01/26/17/399Gfcne0_gHRD5fV996Sw.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 30,
        "price": 800000,
        "priceOrigin": 800000,
        "priceTotal": 898400,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KEWVW5",
        "name": "SUZUKI XL7 2021",
        "ownerId": "ULX8D4",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/05/01/14/pvIiTPGrD5s154v583iD6A.jpg",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.246084718524216,
            "lon": 105.98545327314609,
            "cityId": 86,
            "districtId": 855,
            "wardId": 29554,
            "street": "Trung Tâm Giám Định Y Khoa Tỉnh Vĩnh Long, 303 Trần Phú, Phường 4, Thành phố Vĩnh Long, Vĩnh Long"
        },
        "locationAddr": " Vĩnh Long, Vĩnh Long",
        "locationAddrS": " Vĩnh Long, Vĩnh Long",
        "d": 34.2,
        "distance": "34.2 km",
        "deliveryEnable": 1,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 15000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "JBT1IRFX",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/suzuki_xl7_2021/p/g/2022/06/07/11/KJGnOJgkb29uwjZZkAeWgQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/suzuki_xl7_2021/p/g/2022/06/07/11/XDKzHpvNbx95a248YDnMyg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "IL394ISL",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/suzuki_xl7_2021/p/g/2022/06/07/11/_RyzaFG5zwHo1q3KfUZdpA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/suzuki_xl7_2021/p/g/2022/06/07/11/OzK4gDO2o-OzXmifhpOCnQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "HXFSIBK2",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/suzuki_xl7_2021/p/g/2022/06/07/11/vhv6_FgCEDQLRqJxOTs_JQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/suzuki_xl7_2021/p/g/2022/06/07/11/hQv5Qqrj_t5QAZIbNPLaKQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "4Q4TZN25",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/suzuki_xl7_2021/p/g/2022/06/07/11/Jdxz3_oAwKckFvWbPzsXRw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/suzuki_xl7_2021/p/g/2022/06/07/11/MrYLb7NYQAHjaog8JWcnBQ.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 5,
        "discountMonthly": 15,
        "price": 800000,
        "priceOrigin": 800000,
        "priceTotal": 996800,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 1,
        "wdShort": {
            "instant": 0,
            "deliveryEnable": 1,
            "deliveryRadius": 15,
            "deliveryRadiusFree": 5,
            "deliveryPrice": 10000,
            "deliveryDiscountEnable": 0,
            "deliveryDiscountKm": 0,
            "deliveryDiscountPercent": 0,
            "deliveryDiscountMax": 0,
            "price": 2027201,
            "priceOrigin": 2027201,
            "finalPrice": 2240922,
            "totalDiscountPercent": 0,
            "deliveryFee": 0,
            "ownerHostFiveStar": 0
        },
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KHU7AA",
        "name": "TOYOTA VIOS G 2020",
        "ownerId": "UR616T",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/07/11/12/oCA-_NYP_oF0zkzRCOh6Rg.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 10.248176848616188,
            "lon": 105.97816317417735,
            "countryCode": "VN",
            "cityId": 86,
            "districtId": 855,
            "wardId": 29554,
            "street": "30 Trần Phú, Phường 4, Vĩnh Long, Việt Nam"
        },
        "locationAddr": " Vĩnh Long, Vĩnh Long",
        "locationAddrS": " Vĩnh Long, Vĩnh Long",
        "d": 34.2,
        "distance": "34.2 km",
        "deliveryEnable": 1,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "GBAXXU5Z",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/toyota_vios_g_2020/p/g/2023/07/23/16/WaPACpy84-mxHVP0QDN2rA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/toyota_vios_g_2020/p/g/2023/07/23/16/g9PQOIUKvSfDK06Of5WV0g.jpg",
                "carPhotoId": ""
            },
            {
                "id": "38V4NK53",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/toyota_vios_g_2020/p/g/2023/07/11/09/56L2XPiM3GjmX_Bm8BGzYw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/toyota_vios_g_2020/p/g/2023/07/11/09/56L2XPiM3GjmX_Bm8BGzYw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "H48GUF8S",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/toyota_vios_g_2020/p/g/2023/07/10/21/ujwqEIjO8LC-10SC_Yjp4w.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/toyota_vios_g_2020/p/g/2023/07/10/21/UbrVhCORUZ9gUFHgkvit5w.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 20,
        "discountMonthly": 30,
        "price": 680000,
        "priceOrigin": 680000,
        "priceTotal": 847282,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KGF4J3",
        "name": "KIA SORENTO 2017",
        "ownerId": "U8BG4N",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/06/25/20/24HPLWQ5_1TNxeRE61sNew.jpg",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.35080804779338,
            "lon": 105.6715339208722,
            "countryCode": "VN",
            "cityId": 87,
            "districtId": 875,
            "wardId": 30184,
            "street": "Đường huyện 69, ĐH69, Xã Long Hưng A, Huyện Lấp Vò, Đồng Tháp"
        },
        "locationAddr": "Huyện Lấp Vò, Đồng Tháp",
        "locationAddrS": "Huyện Lấp Vò, Đồng Tháp",
        "d": 35.2,
        "distance": "35.2 km",
        "deliveryEnable": 1,
        "deliveryRadius": 15,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "AZLV2CQR",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/kia_sorento_2017/p/g/2023/07/03/13/5rRhJ-plerhVHSE_x57j9g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/kia_sorento_2017/p/g/2023/07/03/13/XwHXXpy9S7IQnWUX2ypt7w.jpg",
                "carPhotoId": ""
            },
            {
                "id": "BJK4F8MJ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/kia_sorento_2017/p/g/2023/07/03/13/mFYZkcE2B3_TCZTp_GPnqw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/kia_sorento_2017/p/g/2023/07/03/13/0jpg23ZsRa3ZKLeplIe_TQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "BTJUG68R",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/kia_sorento_2017/p/g/2023/07/03/13/VVJmiW-OLcoG2CMR2z6GRA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/kia_sorento_2017/p/g/2023/07/03/13/HJifGo518FADaJKst-C7Og.jpg",
                "carPhotoId": ""
            },
            {
                "id": "1FIHICNJ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/kia_sorento_2017/p/g/2023/07/03/13/YuQieEV5Gzmh2On2FjY_CA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/kia_sorento_2017/p/g/2023/07/03/13/34BAFL5wgllp_Czx9B4m5Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "MJFMC4LA",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/kia_sorento_2017/p/g/2023/07/03/13/LPqviCUlSVy5hALDwgh_kQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/kia_sorento_2017/p/g/2023/07/03/13/DsCy5FL_-eQGHlm_6vUE1A.jpg",
                "carPhotoId": ""
            },
            {
                "id": "MTEAYLVF",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/kia_sorento_2017/p/g/2023/07/03/13/RT2mmVV1n37HagY0-kjJGw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/kia_sorento_2017/p/g/2023/07/03/13/jVUYMdiZ3RbiBMgUfvxNDA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "NFD6FS6A",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/kia_sorento_2017/p/g/2023/07/03/13/WRHsXrBIEijnBUB7JZXwdw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/kia_sorento_2017/p/g/2023/07/03/13/hQ1AyoVCn7ctN90LQgAYZg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "NPCA1WWF",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/kia_sorento_2017/p/g/2023/07/03/13/nKFDptHHcKBtnb9agIzsIQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/kia_sorento_2017/p/g/2023/07/03/13/pVo2xAVzjlKXnDPNweU6Qg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "7BBLICSM",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/kia_sorento_2017/p/g/2023/07/03/13/UTb8qM-0Ple6vJzIvooUnw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/kia_sorento_2017/p/g/2023/07/03/13/lAUazVt3zdeO4v6Ob-OQWQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "75ZY58PF",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/kia_sorento_2017/p/g/2023/07/03/13/L2lqu8hlzj2E2Fnct_Trew.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/kia_sorento_2017/p/g/2023/07/03/13/tQ_1x2bzBwlyuapxmwLM3w.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 20,
        "discountMonthly": 30,
        "price": 900000,
        "priceOrigin": 900000,
        "priceTotal": 1121400,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KFK2Y5",
        "name": "HYUNDAI ACCENT 2022",
        "ownerId": "ULX8D4",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/05/01/14/pvIiTPGrD5s154v583iD6A.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.246192518673817,
            "lon": 105.98592797529928,
            "cityId": 86,
            "districtId": 855,
            "wardId": 29554,
            "street": "Trung Tâm Giám Định Y Khoa Tỉnh Vĩnh Long, 303 Trần Phú, Phường 4, Thành phố Vĩnh Long, Vĩnh Long"
        },
        "locationAddr": " Vĩnh Long, Vĩnh Long",
        "locationAddrS": " Vĩnh Long, Vĩnh Long",
        "d": 34.2,
        "distance": "34.2 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 15000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "LUE6DG7F",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/hyundai_accent_2022/p/g/2022/06/23/22/CGc4_aerFIN8gNhpU_5QsA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/hyundai_accent_2022/p/g/2022/06/23/22/8ZAvUzDOeGQ94fVsZuNNoQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "L3QFVPEL",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/hyundai_accent_2022/p/g/2022/06/23/22/N67IF0Vk-VFjdLqrryWFkQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/hyundai_accent_2022/p/g/2022/06/23/22/dwWaBkzL_gVZ7fTgc4h1jQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "6ZGBULGN",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/hyundai_accent_2022/p/g/2022/06/23/22/NAPM6ar73DGVdMvT9jZ5aA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/hyundai_accent_2022/p/g/2022/06/23/22/2XnVT1wIpx-3NDpi5jszVA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "M1BY6WX7",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/hyundai_accent_2022/p/g/2022/06/23/22/EvyPMk3u_4VWLFd5aoxQ5Q.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/hyundai_accent_2022/p/g/2022/06/23/22/MPQ3iS20QuxiPFu0nCPv3g.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 1
        },
        "totalTrips": 1,
        "totalReviews": 1,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 750000,
        "priceOrigin": 750000,
        "priceTotal": 842250,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 1,
        "wdShort": {
            "instant": 0,
            "deliveryEnable": 1,
            "deliveryRadius": 15,
            "deliveryRadiusFree": 5,
            "deliveryPrice": 10000,
            "deliveryDiscountEnable": 0,
            "deliveryDiscountKm": 0,
            "deliveryDiscountPercent": 0,
            "deliveryDiscountMax": 0,
            "price": 2027201,
            "priceOrigin": 2027201,
            "finalPrice": 2240922,
            "totalDiscountPercent": 0,
            "deliveryFee": 0,
            "ownerHostFiveStar": 0
        },
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KLQFIM",
        "name": "TOYOTA AVANZA 2022",
        "ownerId": "U9CWMV",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-4.png",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.24568551530779,
            "lon": 105.99991621247901,
            "countryCode": "VN",
            "cityId": 86,
            "districtId": 857,
            "wardId": 29590,
            "street": "Khu Nhà Ở Hoàng Hảo, Unnamed Road"
        },
        "locationAddr": "Huyện Long Hồ, Vĩnh Long",
        "locationAddrS": "Huyện Long Hồ, Vĩnh Long",
        "d": 35.6,
        "distance": "35.6 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "2U2YR1HN",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/toyota_avanza_2022/p/g/2023/02/07/23/KRiQ6wU0opNoUj4pC-0dxw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/toyota_avanza_2022/p/g/2023/02/07/23/qhnBZN-hlsySWkzYnWlJEA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 800000,
        "priceOrigin": 800000,
        "priceTotal": 898400,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KKYZ85",
        "name": "SUZUKI XL7 2022",
        "ownerId": "UPPD5W",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2022/09/31/14/iYjXxum5IQcbTGdB-TY2zw.jpg",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 9.986340085066216,
            "lon": 105.74314864803927,
            "cityId": 92,
            "districtId": 919,
            "wardId": 31195,
            "street": "Cầu Ba Láng"
        },
        "locationAddr": "Quận Cái Răng, Cần Thơ",
        "locationAddrS": "Quận Cái Răng, Cần Thơ",
        "d": 6.8,
        "distance": "6.8 km",
        "deliveryEnable": 1,
        "deliveryRadius": 50,
        "deliveryRadiusFree": 5,
        "deliveryPrice": 10000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "1IYCMHDX",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2022/09/29/13/tCNMAGq7BQLQr7JZS58jsA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2022/09/29/13/YCUoNQdLeP3mF2GR9pGFyA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "ALSLJ25U",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2022/09/29/13/T5jVDa2rCSwc3qZkSAKObw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2022/09/29/13/MLOuvzh3BK-VQmJDUugq7A.jpg",
                "carPhotoId": ""
            },
            {
                "id": "A3I96LX4",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2022/09/29/13/mBIwb0pHtQ2OcJKlMSiTaw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2022/09/29/13/GnMHNJ-9L3oxU1s_DYFHVg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "AZLV2DPI",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2022/09/29/13/50b5wbwvekR08gjkMPfAcA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/suzuki_xl7_2022/p/g/2022/09/29/13/YGd2Crd7soquyDWctIoe_Q.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 3
        },
        "totalTrips": 3,
        "totalReviews": 3,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 30,
        "price": 700000,
        "priceOrigin": 700000,
        "priceTotal": 872200,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 1,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 0:00 - 17:00"
        ],
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K2EG7Q",
        "name": "SUZUKI CIAZ 2023",
        "ownerId": "US6XIN",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-1.png",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 9.961791194969155,
            "lon": 105.92864449439882,
            "countryCode": "VN",
            "cityId": 86,
            "districtId": 862,
            "wardId": 29821,
            "street": "Ấp Khu 6, Thị trấn Trà Ôn, Huyện Trà Ôn, Tỉnh Vĩnh Long"
        },
        "locationAddr": "Huyện Trà Ôn, Vĩnh Long",
        "locationAddrS": "Huyện Trà Ôn, Vĩnh Long",
        "d": 21.8,
        "distance": "21.8 km",
        "deliveryEnable": 0,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 0,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "DE4UEG4H",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/suzuki_ciaz_2023/p/g/2023/08/12/11/mliYTqf-b2yTyqfezhaBSQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/suzuki_ciaz_2023/p/g/2023/08/12/11/kXJS6gEnaiC-rRDSPyXubg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "D5RMBW1J",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/suzuki_ciaz_2023/p/g/2023/08/12/11/NWSJxlG7k8pAuulgs3ezYg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/suzuki_ciaz_2023/p/g/2023/08/12/11/pil_AGd_FMrev6qgK-xgUw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "D8CEY36U",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/suzuki_ciaz_2023/p/g/2023/08/12/11/bDcVst5QkmBti7MIuUel2w.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/suzuki_ciaz_2023/p/g/2023/08/12/11/xB3jTRgd4xuRwuYYxub_9Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "DXKWTV3X",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/suzuki_ciaz_2023/p/g/2023/08/12/11/qw8GvM6eOgIcEfUGE9BXYw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/suzuki_ciaz_2023/p/g/2023/08/12/11/Ar9xpOExvYK5ZvFvCmvrLw.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 20,
        "price": 850000,
        "priceOrigin": 850000,
        "priceTotal": 954550,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 6:00 - 17:30"
        ],
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "K6B6DC",
        "name": "HYUNDAI STARGAZER 2023",
        "ownerId": "UNVHDM",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-4.png",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.290334801944816,
            "lon": 105.77243004645112,
            "countryCode": "VN",
            "cityId": 87,
            "districtId": 867,
            "wardId": 29911,
            "street": "Đại Lý Bia 36"
        },
        "locationAddr": " Sa Đéc, Đồng Tháp",
        "locationAddrS": " Sa Đéc, Đồng Tháp",
        "d": 27.3,
        "distance": "27.3 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "BHQ5RWV7",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/hyundai_stargazer_2023/p/g/2023/03/12/20/HpHhyia4Ame-CglAUKMykQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/hyundai_stargazer_2023/p/g/2023/03/12/20/XWsuIYRJPda03fwIO7N3Jw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "BR7X7DBB",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/hyundai_stargazer_2023/p/g/2023/03/12/20/R60hZIZhnIMDMqiRtYhtwQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/hyundai_stargazer_2023/p/g/2023/03/12/20/ygULbCG3IL8raYEQq7tzSw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "1KSAFRUR",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/hyundai_stargazer_2023/p/g/2023/03/12/20/9FrNykaCfJlfUIDoQov-IQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/hyundai_stargazer_2023/p/g/2023/03/12/20/q8Q8octDHPJOwZYGsC7u7A.jpg",
                "carPhotoId": ""
            },
            {
                "id": "A3I96LMG",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/hyundai_stargazer_2023/p/g/2023/03/12/20/-gRnI9JhU7XYutKP_X6bfw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/hyundai_stargazer_2023/p/g/2023/03/12/20/46BoRuw4z2tP_Hzd6lTE0g.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 1
        },
        "totalTrips": 1,
        "totalReviews": 1,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 30,
        "price": 800000,
        "priceOrigin": 800000,
        "priceTotal": 996800,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 5:00 - 17:30"
        ],
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K3GSLR",
        "name": "MITSUBISHI XPANDER 2019",
        "ownerId": "U975KW",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-1.png",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.302737248316985,
            "lon": 105.5037395484466,
            "cityId": 92,
            "districtId": 923,
            "wardId": 31210,
            "street": "Phường Thới Thuận"
        },
        "locationAddr": "Quận Thốt Nốt, Cần Thơ",
        "locationAddrS": "Quận Thốt Nốt, Cần Thơ",
        "d": 39.2,
        "distance": "39.2 km",
        "deliveryEnable": 1,
        "deliveryRadius": 15,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 10000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "HSPY2VGF",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2021/07/27/23/ZlFvoaKNGnmkQb1CSreQsA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2021/07/27/23/ZITfK8eC_6K4XQqmxj0-_g.jpg",
                "carPhotoId": ""
            },
            {
                "id": "43JHXSTJ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2021/07/27/23/NtzEtieSMQrmOMW06JLvBA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2021/07/27/23/xXQ2_IotXRyHaUcOemGIow.jpg",
                "carPhotoId": ""
            },
            {
                "id": "HU5UVGLE",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2021/07/27/23/_-eqEeSxM9XL6wYWMn2Kag.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/mitsubishi_xpander_2019/p/g/2021/07/27/23/-7PX_FR7TRm62XKnMXORsQ.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 3
        },
        "totalTrips": 4,
        "totalReviews": 4,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 30,
        "price": 630000,
        "priceOrigin": 630000,
        "priceTotal": 707490,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KIFK6B",
        "name": "TOYOTA INNOVA E 2019",
        "ownerId": "U975KW",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-1.png",
        "seat": 8,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 10.298770664671983,
            "lon": 105.50599205949538,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 923,
            "wardId": 31210,
            "street": "Cho Thuê Xe Du Lịch Tín Nguyệt, 511, KV Thới Thạnh 2, Phường Thới Thuận, Quận Thốt Nốt, Thành Phố Cần Thơ, Thuận An, Thốt Nốt, Cần Thơ, Việt Nam"
        },
        "locationAddr": "Quận Thốt Nốt, Cần Thơ",
        "locationAddrS": "Quận Thốt Nốt, Cần Thơ",
        "d": 38.6,
        "distance": "38.6 km",
        "deliveryEnable": 1,
        "deliveryRadius": 15,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 15000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "JRD3HNCD",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2019/p/g/2023/07/11/16/uTdTWgEmapFI5SBuXsj8hg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2019/p/g/2023/07/11/16/o9pNx4vgAyapbfuWNAzSWw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "JH2SKJ8S",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2019/p/g/2023/07/11/16/-u6dmyd3jrv13U9cpFz9cQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2019/p/g/2023/07/11/16/wK7fxW_GMW9Dnx_Vn8kE0w.jpg",
                "carPhotoId": ""
            },
            {
                "id": "JVRAR2FE",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2019/p/g/2023/07/11/16/iGnueCSi5AQot_2fu1vMeA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2019/p/g/2023/07/11/16/Fi13eoxbs9ZF7PnPItJw0w.jpg",
                "carPhotoId": ""
            },
            {
                "id": "59JW6YNF",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2019/p/g/2023/07/11/16/3UFMgbrKXzUK9h-t9M9BXg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_innova_e_2019/p/g/2023/07/11/16/rPEPNuwSiasWN5qU-tByFA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 20,
        "discountMonthly": 30,
        "price": 650000,
        "priceOrigin": 650000,
        "priceTotal": 729950,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KDW46Y",
        "name": "KIA SEDONA 2021",
        "ownerId": "UM8HRD",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-7.png",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.190908851608214,
            "lon": 106.01870157051194,
            "cityId": 86,
            "districtId": 857,
            "wardId": 29599,
            "street": "Quốc Lộ 53, Xã Long Phước, Huyện Long Hồ, Vĩnh Long"
        },
        "locationAddr": "Huyện Long Hồ, Vĩnh Long",
        "locationAddrS": "Huyện Long Hồ, Vĩnh Long",
        "d": 33.7,
        "distance": "33.7 km",
        "deliveryEnable": 1,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 15000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "769VD1Q6",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/kia_sedona_2021/p/g/2022/06/23/11/AkbZxIesjMUjihtInygbuQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/kia_sedona_2021/p/g/2022/06/23/11/TQS_aOJ-iFO7FLYShNSTsw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "792MTB1M",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/kia_sedona_2021/p/g/2022/06/23/11/HUyhP9bWMtU80OHk2bRZSQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/kia_sedona_2021/p/g/2022/06/23/11/M1mGcKEEofNTi-fFBM2ynA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "N8VVZT18",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/kia_sedona_2021/p/g/2022/06/23/11/uxDSLiRRTtujzTleYBsxcg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/kia_sedona_2021/p/g/2022/06/23/11/QpOVu-KcH72jRc74nmrs3Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "LQ78YC1D",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/kia_sedona_2021/p/g/2022/06/23/11/yWCud1ORGmGzR1UpUUvgSg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/kia_sedona_2021/p/g/2022/06/23/11/daRD-CmsVhwzhXtIfrlZjA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 1400000,
        "priceOrigin": 1400000,
        "priceTotal": 1572200,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 5:00 - 17:00"
        ],
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K3XJK6",
        "name": "KIA MORNING 2022",
        "ownerId": "U8NLNV",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-0.png",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 10.255714669010422,
            "lon": 105.97143756041851,
            "countryCode": "VN",
            "cityId": 86,
            "districtId": 855,
            "wardId": 29548,
            "street": "77 Lê Văn Tám, Phường 1, Vĩnh Long, Việt Nam"
        },
        "locationAddr": " Vĩnh Long, Vĩnh Long",
        "locationAddrS": " Vĩnh Long, Vĩnh Long",
        "d": 33.7,
        "distance": "33.7 km",
        "deliveryEnable": 1,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "4275KASG",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/kia_morning_2022/p/g/2023/07/23/15/b5FaYlrMyNeY7or4jYpJSQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/kia_morning_2022/p/g/2023/07/23/15/-onC70g4CKpK_DiOt0HXmw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "HQVB8BNF",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/kia_morning_2022/p/g/2023/07/23/15/-koPemlmt7PMkHREVpPV9w.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/kia_morning_2022/p/g/2023/07/23/15/_nbXiZxSs-Mamdyv7S_DmA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "4Z6JN5S8",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/kia_morning_2022/p/g/2023/07/23/15/2K80i7q5UJsHu0tazkuziQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/kia_morning_2022/p/g/2023/07/23/15/RnJ9GWPahk5hIcrfpdRieA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "IJKW5721",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/kia_morning_2022/p/g/2023/07/23/15/SWFvd0ALeZc-FEa8p1zXTA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/kia_morning_2022/p/g/2023/07/23/15/GvCOLq3WjReBc5gJ-vw03g.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 500000,
        "priceOrigin": 500000,
        "priceTotal": 623000,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 5:00 - 17:30"
        ],
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KK4AGJ",
        "name": "MAZDA 3 2018",
        "ownerId": "UN182Y",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/06/11/19/qXYeyrSF9Ihdh59BGHbO0Q.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.238956435328017,
            "lon": 105.99011127324916,
            "cityId": 86,
            "districtId": 855,
            "wardId": 29554,
            "street": "34, 48 Trần Phú, Phường 4, Vĩnh Long, Việt Nam"
        },
        "locationAddr": " Vĩnh Long, Vĩnh Long",
        "locationAddrS": " Vĩnh Long, Vĩnh Long",
        "d": 34.1,
        "distance": "34.1 km",
        "deliveryEnable": 0,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 0,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "D665MQ3E",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/mazda_3_2018/p/g/2023/06/11/19/7ZpvgVqQEf81dWb4mW0IVw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/mazda_3_2018/p/g/2023/06/11/19/E09Nh6YyZpYM5KZqfHsMYA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "DCMX8LUT",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/mazda_3_2018/p/g/2023/06/11/19/zM2KGJiqO3QKUSnJuQ12xg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/mazda_3_2018/p/g/2023/06/11/19/-ea9udTjZMBUEHiVDF39Qw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "ASD2GLV5",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/mazda_3_2018/p/g/2023/06/11/19/Ub8bII_7LDkSvhKlbZd1rA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/mazda_3_2018/p/g/2023/06/11/19/wlIw8VtfUUpdzP83gFhLrA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "A428EXA6",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/mazda_3_2018/p/g/2023/06/11/19/RyJU9uXS_mva3DLjF1H0Fw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_vinhlong/mazda_3_2018/p/g/2023/06/11/19/Jww_17WeWNNzUGZOIbt9fA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 20,
        "discountMonthly": 30,
        "price": 800000,
        "priceOrigin": 800000,
        "priceTotal": 996800,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 5:00 - 17:30"
        ],
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "K26WSJ",
        "name": "KIA RONDO 2022",
        "ownerId": "U7AH9H",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-2.png",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.236388368412014,
            "lon": 105.42897332188575,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 924,
            "wardId": 31232,
            "street": "Huyện Vĩnh Thạnh, Thị trấn Vĩnh Thạnh, Huyện Vĩnh Thạnh, Cần Thơ"
        },
        "locationAddr": "Huyện Vĩnh Thạnh, Cần Thơ",
        "locationAddrS": "Huyện Vĩnh Thạnh, Cần Thơ",
        "d": 40.9,
        "distance": "40.9 km",
        "deliveryEnable": 1,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 15000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "KEII7LYF",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_rondo_2022/p/g/2022/07/14/20/UxR8GCIb8l526ZGwdeeHAQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_rondo_2022/p/g/2022/07/14/20/kIvtqFVT91DTaunx3v9_DA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "57UC4UML",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_rondo_2022/p/g/2022/07/14/20/s2REYmdh6Lda5P6WWKGTpQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/kia_rondo_2022/p/g/2022/07/14/20/2gkIHap8JYc9hrsfX05wUA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 2
        },
        "totalTrips": 2,
        "totalReviews": 2,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 790000,
        "priceOrigin": 790000,
        "priceTotal": 984340,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KKNGSJ",
        "name": "MAZDA 3 2021",
        "ownerId": "ULX7L4",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/05/20/06/GtlEyAy6z3TB7nXZDqG5_Q.jpg",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 9.772266739586913,
            "lon": 105.99750779215596,
            "countryCode": "VN",
            "cityId": 94,
            "districtId": 943,
            "wardId": 31528,
            "street": "Ấp An Ninh 1, Thị trấn Kế Sách, Huyện Kế Sách, Tỉnh Sóc Trăng"
        },
        "locationAddr": "Huyện Kế Sách, Sóc Trăng",
        "locationAddrS": "Huyện Kế Sách, Sóc Trăng",
        "d": 41,
        "distance": "41 km",
        "deliveryEnable": 1,
        "deliveryRadius": 5,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "CBGGL1WG",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_soctrang/mazda_3_2021/p/g/2023/05/20/06/VNkyt9T7aMgYbi95Sc_g6A.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_soctrang/mazda_3_2021/p/g/2023/05/20/06/dCftXjf2rpzwDXpTRjAUoQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "19WNT18U",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_soctrang/mazda_3_2021/p/g/2023/05/20/06/6HWtHY2vr4PqtpGaaZa5Nw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_soctrang/mazda_3_2021/p/g/2023/05/20/06/N_jbRqeG-NV5P0mVEIDAFQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "1M6WRLYF",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_soctrang/mazda_3_2021/p/g/2023/05/20/06/yBi9PdbRjy7B4eemU3S4Pg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_soctrang/mazda_3_2021/p/g/2023/05/20/06/VgVKLa0RkxsUI6PQw3KX-g.jpg",
                "carPhotoId": ""
            },
            {
                "id": "BPUBC4X9",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_soctrang/mazda_3_2021/p/g/2023/05/20/06/QJDGpfVzVXz4cpyT-KLRhA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_soctrang/mazda_3_2021/p/g/2023/05/20/06/Ucd6CsXvup5EzMTYhdxRFw.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 20,
        "discountMonthly": 30,
        "price": 800000,
        "priceOrigin": 800000,
        "priceTotal": 996800,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KH1AJI",
        "name": "HONDA CITY 2020",
        "ownerId": "USEGY7",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-0.png",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.378620647942983,
            "lon": 105.88492131406176,
            "countryCode": "VN",
            "cityId": 82,
            "districtId": 819,
            "wardId": 28396,
            "street": "Ấp Lợi Tường, Xã Mỹ Lợi A, Huyện Cái Bè, Tiền Giang"
        },
        "locationAddr": "Huyện Cái Bè, Tiền Giang",
        "locationAddrS": "Huyện Cái Bè, Tiền Giang",
        "d": 40.2,
        "distance": "40.2 km",
        "deliveryEnable": 0,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 0,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "LSJ7P754",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_tiengiang/honda_city_2020/p/g/2023/04/24/02/zYc_kFmmStKdCeMqjuseZA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_tiengiang/honda_city_2020/p/g/2023/04/24/02/pJT6D9-h9yzCnDTGAHw-QA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "7G5EBCPE",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_tiengiang/honda_city_2020/p/g/2023/04/24/02/M35Fk_I2Upb7IO_oya0GIA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_tiengiang/honda_city_2020/p/g/2023/04/24/02/e18UkVI6EoyI7C0mmrU-Tw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "NVK82WWP",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_tiengiang/honda_city_2020/p/g/2023/04/24/02/8SeNnrweIK2GH7HqMocUvQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_tiengiang/honda_city_2020/p/g/2023/04/24/02/DX93RWKpm4T-KXbgxOBMaQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "792MTC8U",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_tiengiang/honda_city_2020/p/g/2023/04/24/02/awxSPssPUmUmvJHn7nk_RQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_tiengiang/honda_city_2020/p/g/2023/04/24/02/NIanucXq1zRphuVN73l7Sw.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 670000,
        "priceOrigin": 670000,
        "priceTotal": 834822,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 1,
        "wdShort": {
            "instant": 0,
            "deliveryEnable": 1,
            "deliveryRadius": 10,
            "deliveryRadiusFree": 5,
            "deliveryPrice": 10000,
            "deliveryDiscountEnable": 0,
            "deliveryDiscountKm": 0,
            "deliveryDiscountPercent": 0,
            "deliveryDiscountMax": 0,
            "price": 1915201,
            "priceOrigin": 1915201,
            "finalPrice": 2117722,
            "totalDiscountPercent": 0,
            "deliveryFee": 0,
            "ownerHostFiveStar": 0
        },
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K5J53X",
        "name": "MAZDA 2 2023",
        "ownerId": "UNKW9W",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-3.png",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 9.76613046437278,
            "lon": 105.46575944154412,
            "countryCode": "VN",
            "cityId": 93,
            "districtId": 930,
            "wardId": 31321,
            "street": "Quán nhậu loan thảo 2, 143 Phan Đình Phùng"
        },
        "locationAddr": " Vị Thanh, Hậu Giang",
        "locationAddrS": " Vị Thanh, Hậu Giang",
        "d": 43.8,
        "distance": "43.8 km",
        "deliveryEnable": 0,
        "deliveryRadius": 20,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 25000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "EZ365FKJ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/mazda_2_2023/p/g/2023/08/15/22/P-Yha5-sPyfZA5YsIeO9iw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/mazda_2_2023/p/g/2023/08/15/22/kB2H4LWX5k48oqqS46SX2Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "44EFP3D3",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/mazda_2_2023/p/g/2023/08/09/21/r4AFcukHuZ0WtU6VPDTATQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/mazda_2_2023/p/g/2023/08/09/21/w3gAcZaBqNEOZ3xuKXrf-Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "IJKW57DJ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/mazda_2_2023/p/g/2023/08/09/21/LxDlOCz2aYG6btnww5VT6Q.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/mazda_2_2023/p/g/2023/08/09/21/CeMdX4NxheMVSIngiK_-WA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "H71DZ75K",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/mazda_2_2023/p/g/2023/08/09/21/uVPEiTRUgfvrVQsKYXDw4A.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/mazda_2_2023/p/g/2023/08/09/21/xZVB6695QqqEsYtXiEDaGg.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 20,
        "price": 650000,
        "priceOrigin": 650000,
        "priceTotal": 809900,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KHCQX8",
        "name": "TOYOTA RUSH 2020",
        "ownerId": "UMXRJV",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-4.png",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.229742731662785,
            "lon": 105.3944945722835,
            "countryCode": "VN",
            "cityId": 92,
            "districtId": 924,
            "wardId": 31252,
            "street": "215 QL80, Thị trấn Vĩnh Thạnh, Vĩnh Thạnh, Cần Thơ, Việt Nam"
        },
        "locationAddr": "Huyện Vĩnh Thạnh, Cần Thơ",
        "locationAddrS": "Huyện Vĩnh Thạnh, Cần Thơ",
        "d": 43.6,
        "distance": "43.6 km",
        "deliveryEnable": 1,
        "deliveryRadius": 30,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 25000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "AJYN8863",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_rush_2020/p/g/2023/08/07/11/aEoKswrvpqG2QRJjuedRjg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_rush_2020/p/g/2023/08/07/11/ZrdFjt4AhjYFOkFeOqxiKw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "AAA1UMCV",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_rush_2020/p/g/2023/08/07/11/gw7C09G21ASYfNRTO__D_A.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_rush_2020/p/g/2023/08/07/11/iGQWyxEjwjcMutgPk9lsOw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "1H2FBLZV",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_rush_2020/p/g/2023/08/07/11/tJNJC9-_fAc9tXOdNMzTTw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_cantho/toyota_rush_2020/p/g/2023/08/07/11/tJNJC9-_fAc9tXOdNMzTTw.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 15,
        "price": 820000,
        "priceOrigin": 820000,
        "priceTotal": 1021720,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "K54RW7",
        "name": "MAZDA CX5 2022",
        "ownerId": "UNKW9W",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-3.png",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 9.769463285664619,
            "lon": 105.46577767252202,
            "countryCode": "VN",
            "cityId": 93,
            "districtId": 930,
            "wardId": 31321,
            "street": "Quán nhậu loan thảo 2, 143 Phan Đình Phùng, Phường 3, Vị Thanh, Hậu Giang, Việt Nam"
        },
        "locationAddr": " Vị Thanh, Hậu Giang",
        "locationAddrS": " Vị Thanh, Hậu Giang",
        "d": 43.8,
        "distance": "43.8 km",
        "deliveryEnable": 0,
        "deliveryRadius": 20,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 25000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "K7HVQIQY",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/mazda_cx5_2022/p/g/2023/08/09/21/ODKJzyYMo3JzY_TeeKxtHQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/mazda_cx5_2022/p/g/2023/08/09/21/5LcsQA8scYVsD3RUIZYgNw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "K4Y29SX8",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/mazda_cx5_2022/p/g/2023/08/09/21/sUxXBGqX_Sl45g_gZFp1lg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/mazda_cx5_2022/p/g/2023/08/09/21/m8u1nghKcdaO8Eq8VZaaiw.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 20,
        "price": 1000000,
        "priceOrigin": 1000000,
        "priceTotal": 1246000,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KLAQD7",
        "name": "MITSUBISHI XPANDER 2022",
        "ownerId": "UQ9XFX",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-1.png",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 9.759988381700186,
            "lon": 105.4707386114706,
            "countryCode": "VN",
            "cityId": 93,
            "districtId": 930,
            "wardId": 31324,
            "street": "Thành phố Vị Thanh, Phường IV, Thành phố Vị Thanh, Hậu Giang"
        },
        "locationAddr": " Vị Thanh, Hậu Giang",
        "locationAddrS": " Vị Thanh, Hậu Giang",
        "d": 43.9,
        "distance": "43.9 km",
        "deliveryEnable": 0,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 0,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "IWFGENJR",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/mitsubishi_xpander_2022/p/g/2023/06/03/13/3rhxvO3_l7LTldVrSlgTEA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haugiang/mitsubishi_xpander_2022/p/g/2023/06/03/13/Z8RZNafudpLtGyH3fC42aw.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 800000,
        "priceOrigin": 800000,
        "priceTotal": 996800,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KDYAWT",
        "name": "MITSUBISHI XPANDER 2023",
        "ownerId": "URWJ72",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/02/14/10/ijDdC-pXIRVjkT6zpo32Jw.jpg",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.344047798204786,
            "lon": 105.46567463810005,
            "countryCode": "VN",
            "cityId": 89,
            "districtId": 883,
            "wardId": 30301,
            "street": "42 Trần Văn Ơn, P. Mỹ Thới, Thành phố Long Xuyên, An Giang, Việt Nam"
        },
        "locationAddr": " Long Xuyên, An Giang",
        "locationAddrS": " Long Xuyên, An Giang",
        "d": 45.5,
        "distance": "45.5 km",
        "deliveryEnable": 1,
        "deliveryRadius": 5,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "4JZDDA7K",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_angiang/mitsubishi_xpander_2023/p/g/2023/06/17/21/wS3j07veLL4rPCbywGQWvQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_angiang/mitsubishi_xpander_2023/p/g/2023/06/17/21/6bhP2Joa4MKGgAzpIazbiA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "H6G3LU3U",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_angiang/mitsubishi_xpander_2023/p/g/2023/06/17/21/JdbzYXaxl2hMLHhxmqSg8Q.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_angiang/mitsubishi_xpander_2023/p/g/2023/06/17/21/FwWLCdwYp6R0HClAMeF8zQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "HXFS4ZQB",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_angiang/mitsubishi_xpander_2023/p/g/2023/06/17/21/WoRHbUvJ8HrXkI4VUKt7DQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_angiang/mitsubishi_xpander_2023/p/g/2023/06/17/21/R2oLeIi5NCAjWhLDvSJasw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "KG2GGZQW",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_angiang/mitsubishi_xpander_2023/p/g/2023/06/17/21/ns7-q3LnyZvjEUbgrdSk6g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_angiang/mitsubishi_xpander_2023/p/g/2023/06/17/21/5_0hmnwQ3JAqQyPEWvnhSw.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 15,
        "discountMonthly": 20,
        "price": 850000,
        "priceOrigin": 850000,
        "priceTotal": 1059100,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "K5M5SQ",
        "name": "TOYOTA VIOS E 2023",
        "ownerId": "UKD2BF",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-1.png",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 9.874963885215815,
            "lon": 105.36720837897066,
            "countryCode": "VN",
            "cityId": 91,
            "districtId": 906,
            "wardId": 30928,
            "street": "Tạp hoá Nhã Hân, Ngọc Tân, Giồng Riềng Giồng Riềng, Kiên Giang, Việt Nam"
        },
        "locationAddr": "Huyện Giồng Riềng, Kiên Giang",
        "locationAddrS": "Huyện Giồng Riềng, Kiên Giang",
        "d": 45.9,
        "distance": "45.9 km",
        "deliveryEnable": 0,
        "deliveryRadius": 0,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 0,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "5D1RNT7J",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_kiengiang/toyota_vios_e_2023/p/g/2023/05/20/16/qM3HowBpzcwQyoN4R79kMg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_kiengiang/toyota_vios_e_2023/p/g/2023/05/20/16/WRyc3Oe2Yfcde7jRmr-2zg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "IJKW574I",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_kiengiang/toyota_vios_e_2023/p/g/2023/05/20/16/60MhXftQpcpQ1dB4QEqCKA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_kiengiang/toyota_vios_e_2023/p/g/2023/05/20/16/Er5EmTJJNGyet98_8dbiAA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "4Z6JNJPB",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_kiengiang/toyota_vios_e_2023/p/g/2023/05/20/16/5uow4xVTbPI0IRkN_AuSsA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_kiengiang/toyota_vios_e_2023/p/g/2023/05/20/16/slE6WMxWa_BLud0GMlF9bg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "4WRLVYYU",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_kiengiang/toyota_vios_e_2023/p/g/2023/05/20/16/AoFxuEeFuQ2oNsYHL3ikPQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_kiengiang/toyota_vios_e_2023/p/g/2023/05/20/16/CpQuhRKlRcK-5BEIZDKtPQ.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 1,
        "discountWeekly": 0,
        "discountMonthly": 20,
        "price": 600000,
        "priceOrigin": 600000,
        "priceTotal": 673800,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "K3DTW8",
        "name": "VINFAST FADIL 2022",
        "ownerId": "UNBBT6",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/04/24/15/_dwATbGUY_ImE4c48uA-aw.jpg",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.463637335776822,
            "lon": 105.64041159553558,
            "cityId": 87,
            "districtId": 866,
            "wardId": 29866,
            "street": "Cửa Hàng Chuyên Dựng Hậu Kỳ Phim Đám Cưới, Quảng Cáo, Video Clip Ca Nhạc Sang, 164"
        },
        "locationAddr": " Cao Lãnh, Đồng Tháp",
        "locationAddrS": " Cao Lãnh, Đồng Tháp",
        "d": 47.9,
        "distance": "47.9 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 15000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "BTJUGMKJ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/vinfast_fadil_2022/p/g/2023/04/24/15/tYcq34kPmaM1OTg_YwTvZg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/vinfast_fadil_2022/p/g/2023/04/24/15/82JOVtiZDfxVHdgW9OTVaA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "C87K5GJ1",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/vinfast_fadil_2022/p/g/2023/04/24/15/AzXmdYoK8ujxl8l9lYcG2Q.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/vinfast_fadil_2022/p/g/2023/04/24/15/QHAnuqDTM3xT7BsBt_LadA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "1PH97W16",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/vinfast_fadil_2022/p/g/2023/04/24/15/YhIonvRl5S1xLmotLer_Jg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/vinfast_fadil_2022/p/g/2023/04/24/15/xlEfGAFYzUIYqL6ljQvWjw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "CEV1QG4A",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/vinfast_fadil_2022/p/g/2023/04/24/15/r6_SFVsrnJ4x9YPVGnQ0uw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/vinfast_fadil_2022/p/g/2023/04/24/15/9tz2J6e5QIPzCGJB7A1rgA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 5
        },
        "totalTrips": 7,
        "totalReviews": 7,
        "discountEnable": 0,
        "discountWeekly": 20,
        "discountMonthly": 30,
        "price": 580000,
        "priceOrigin": 580000,
        "priceTotal": 722680,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 1,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KHKH3I",
        "name": "TOYOTA INNOVA E 2019",
        "ownerId": "U9ANAL",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/08/07/14/eHaNjFuLxFTJliFiSyW4nQ.jpg",
        "seat": 8,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 10.444091748316986,
            "lon": 105.63290338466467,
            "countryCode": "VN",
            "cityId": 87,
            "districtId": 866,
            "wardId": 29872,
            "street": "45 Lê Văn Đáng, Phường 4, TP. Cao Lãnh, Đồng Tháp, Việt Nam"
        },
        "locationAddr": " Cao Lãnh, Đồng Tháp",
        "locationAddrS": " Cao Lãnh, Đồng Tháp",
        "d": 46.2,
        "distance": "46.2 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 25000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "FH5CAB3J",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/toyota_innova_e_2019/p/g/2023/08/07/14/1liJ6HobGH1C_GxEoAw5fQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/toyota_innova_e_2019/p/g/2023/08/07/14/S63CsrU87Snwdygz9_oMaQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "F1B5CQTR",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/toyota_innova_e_2019/p/g/2023/08/07/14/RDpX36m1_meQEypelCK-Hw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/toyota_innova_e_2019/p/g/2023/08/07/14/6NO2IStsJYaecMFEaS01OQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "ETQR311K",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/toyota_innova_e_2019/p/g/2023/08/07/14/qeqDASI-X6sST6fOnLDICg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/toyota_innova_e_2019/p/g/2023/08/07/14/IHgGNIwZUQUz4rOWYHgAwA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 760000,
        "priceOrigin": 760000,
        "priceTotal": 946960,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KJWIQ8",
        "name": "HONDA CITY 2020",
        "ownerId": "ULACW6",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-1.png",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.47450166541999,
            "lon": 105.7279311338127,
            "countryCode": "VN",
            "cityId": 87,
            "districtId": 873,
            "wardId": 30100,
            "street": "Mỹ Thọ"
        },
        "locationAddr": "Huyện Cao Lãnh, Đồng Tháp",
        "locationAddrS": "Huyện Cao Lãnh, Đồng Tháp",
        "d": 47.9,
        "distance": "47.9 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 4,
        "deliveryPrice": 10000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "AJYN897M",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/honda_city_2020/p/g/2020/02/06/21/KkYodJduFQRIYfsVGWE_XA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/honda_city_2020/p/g/2020/02/06/21/irNiQ2yzz9OayQyAdd3pDQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "A2NWASZF",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/honda_city_2020/p/g/2020/02/06/21/TdRQiRuqo8NMRt7jZf-1mw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/honda_city_2020/p/g/2020/02/06/21/bxJeONAHRMTvWpsMKf6mqw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "7CUIUXVV",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/honda_city_2020/p/g/2020/08/18/15/nnM5yGik8JRvnp2K0GxtuA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/honda_city_2020/p/g/2020/08/18/15/wx0FbGL62Oxr032GXIT5fg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "BYZ78BR4",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/honda_city_2020/p/g/2020/02/06/21/oc1PFxA2HKpCWNgTLIjDPw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/honda_city_2020/p/g/2020/02/06/21/tRghT-VPAFsyCox0t9hGmA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 1
        },
        "totalTrips": 1,
        "totalReviews": 1,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 20,
        "price": 750000,
        "priceOrigin": 750000,
        "priceTotal": 934500,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KHS3C9",
        "name": "TOYOTA VIOS E 2022",
        "ownerId": "UQZPCG",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-0.png",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.374789848167385,
            "lon": 105.44373047552006,
            "countryCode": "VN",
            "cityId": 89,
            "districtId": 883,
            "wardId": 30280,
            "street": "Thành phố Long Xuyên, Tỉnh An Giang, Việt Nam"
        },
        "locationAddr": " Long Xuyên, An Giang",
        "locationAddrS": " Long Xuyên, An Giang",
        "d": 49.7,
        "distance": "49.7 km",
        "deliveryEnable": 1,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "ATXBYXHC",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_angiang/toyota_vios_e_2022/p/g/2022/11/18/09/CkWui7a3Ta5gCZHrnlVPSA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_angiang/toyota_vios_e_2022/p/g/2022/11/18/09/TmWhrLfmvZJfY5BR_gVX2w.jpg",
                "carPhotoId": ""
            },
            {
                "id": "ANMIVX55",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_angiang/toyota_vios_e_2022/p/g/2022/11/18/09/NexxIK6i7bbeg1e9BWb3Kg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_angiang/toyota_vios_e_2022/p/g/2022/11/18/09/vDUCCN71WeOb2WR52fqFdQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "AAA1U6GN",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_angiang/toyota_vios_e_2022/p/g/2022/11/18/09/BjMs2eQF1MqLJ-NIre1urA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_angiang/toyota_vios_e_2022/p/g/2022/11/18/09/2bAxyHJUi5rxbjrdpcRwFw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "1IYCMGT9",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_angiang/toyota_vios_e_2022/p/g/2022/11/18/09/7-HHbdbQiCgcf659rmrONQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_angiang/toyota_vios_e_2022/p/g/2022/11/18/09/3zsxQ_lH_u5RzyPVM2TEpQ.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 3.8,
            "star1": 0,
            "star2": 0,
            "star3": 3,
            "star4": 0,
            "star5": 2
        },
        "totalTrips": 3,
        "totalReviews": 6,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 700000,
        "priceOrigin": 700000,
        "priceTotal": 872200,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KKVP98",
        "name": "TOYOTA INNOVA E 2015",
        "ownerId": "UQIB3T",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-5.png",
        "seat": 8,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 10.381244101496014,
            "lon": 105.44404821436576,
            "cityId": 89,
            "districtId": 883,
            "wardId": 30283,
            "street": "236/3 Trần Nguyên Hãn"
        },
        "locationAddr": " Long Xuyên, An Giang",
        "locationAddrS": " Long Xuyên, An Giang",
        "d": 50,
        "distance": "50 km",
        "deliveryEnable": 1,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 10000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "MJFMCJLZ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_angiang/toyota_innova_e_2015/p/g/2021/02/06/11/LH4RkpLiHu8ZH3bCnuWWOA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_angiang/toyota_innova_e_2015/p/g/2021/02/06/11/XJmk-sJ_LdVtuDDcYtiZig.jpg",
                "carPhotoId": ""
            },
            {
                "id": "75ZY5PQD",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_angiang/toyota_innova_e_2015/p/g/2021/02/06/11/XVFZTdK4GIOhBc3cLRvDwg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_angiang/toyota_innova_e_2015/p/g/2021/02/06/11/XVFZTdK4GIOhBc3cLRvDwg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "MRJDK9NC",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_angiang/toyota_innova_e_2015/p/g/2021/02/06/11/RU1vmCJ5J71e0b-LIeqMgA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_angiang/toyota_innova_e_2015/p/g/2021/02/06/11/ChvpvPWoL3ntxausdD68cg.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 1
        },
        "totalTrips": 1,
        "totalReviews": 1,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 30,
        "price": 550000,
        "priceOrigin": 550000,
        "priceTotal": 617650,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "K5W1BD",
        "name": "HYUNDAI ACCENT 2022",
        "ownerId": "U8TU3N",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-4.png",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 2,
        "location": {
            "lat": 10.467166448391787,
            "lon": 105.6262574086078,
            "countryCode": "VN",
            "cityId": 87,
            "districtId": 866,
            "wardId": 29866,
            "street": "30 Nguyễn Văn Tre"
        },
        "locationAddr": " Cao Lãnh, Đồng Tháp",
        "locationAddrS": " Cao Lãnh, Đồng Tháp",
        "d": 48.9,
        "distance": "48.9 km",
        "deliveryEnable": 1,
        "deliveryRadius": 30,
        "deliveryRadiusFree": 5,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "DA9BAA73",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/hyundai_accent_2022/p/g/2022/11/03/19/2iGCLMPtKtlgBHqrO5LsPQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/hyundai_accent_2022/p/g/2022/11/03/19/x3YaSkZWux184YYr8w5-YQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "DXKWTW2N",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/hyundai_accent_2022/p/g/2022/11/03/19/hoImwMtDVeNg-kpIM58DQA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/hyundai_accent_2022/p/g/2022/11/03/19/v5X_1x8KDCvHZn2QLwBG3A.jpg",
                "carPhotoId": ""
            },
            {
                "id": "DU8AD5P3",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/hyundai_accent_2022/p/g/2022/11/03/19/8c2EOQ_MxZocScUU8JxkFQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/hyundai_accent_2022/p/g/2022/11/03/19/ZcS7CTAqjh00ps-v_rguYQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "CD1E2698",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/hyundai_accent_2022/p/g/2022/11/03/19/vIU3unL_1i12PsdwfHiFfA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/hyundai_accent_2022/p/g/2022/11/03/19/aVzARwMJCgcq9xvs7wbGOQ.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 30,
        "price": 680000,
        "priceOrigin": 680000,
        "priceTotal": 763641,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 0,
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KJI228",
        "name": "HONDA CITY 2023",
        "ownerId": "UQXXRT",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-1.png",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.454540465195587,
            "lon": 105.65830054973391,
            "countryCode": "VN",
            "cityId": 87,
            "districtId": 866,
            "wardId": 29888,
            "street": "39 Lưu Văn Lang, An Bình, Cao Lãnh, Đồng Tháp, Việt Nam"
        },
        "locationAddr": " Cao Lãnh, Đồng Tháp",
        "locationAddrS": " Cao Lãnh, Đồng Tháp",
        "d": 46.7,
        "distance": "46.7 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "E3D5Z3ZL",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/honda_city_2023/p/g/2023/08/17/11/AW3so_0bbPLS2AW7RCJDag.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/honda_city_2023/p/g/2023/08/17/11/PiGpKq3CHHFNZmNLZEqBQA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "G5Z5A5AJ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/honda_city_2023/p/g/2023/08/17/11/j_evbNoCIBikHeoRroOoAg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/honda_city_2023/p/g/2023/08/17/11/j_evbNoCIBikHeoRroOoAg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "G92AIT16",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/honda_city_2023/p/g/2023/08/17/11/0VwC91NgjFtXZdgirClH-A.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/honda_city_2023/p/g/2023/08/17/11/mMSkO8huGf3NI4v-FGfOeg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "GUXWGPHW",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/honda_city_2023/p/g/2023/08/17/11/U_P07ZFMOroeWjRqaC8MPQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/honda_city_2023/p/g/2023/08/17/11/WNj1YsqsvRuvcVG2e8zn2A.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 750000,
        "priceOrigin": 750000,
        "priceTotal": 842250,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 5:00 - 17:00"
        ],
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KJYBDT",
        "name": "VINFAST FADIL 2019",
        "ownerId": "UN53JP",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-0.png",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.459181068860818,
            "lon": 105.62806880484557,
            "cityId": 87,
            "districtId": 866,
            "wardId": 29892,
            "street": "Nguyễn Thị Lựu"
        },
        "locationAddr": " Cao Lãnh, Đồng Tháp",
        "locationAddrS": " Cao Lãnh, Đồng Tháp",
        "d": 47.7,
        "distance": "47.7 km",
        "deliveryEnable": 1,
        "deliveryRadius": 50,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "AQ439Q5Y",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/vinfast_fadil_2019/p/g/2020/01/03/13/-2wfdYuUcMjtry-8GG44FQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/vinfast_fadil_2019/p/g/2020/01/03/13/RHFzKbQbvNAJk8a0fPveWw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "B1GSPV7J",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/vinfast_fadil_2019/p/g/2020/01/03/13/lZIXyg_dbd2sgojYM39kBQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/vinfast_fadil_2019/p/g/2020/01/03/13/oUBScAl4si3fNA2DnYhC9w.jpg",
                "carPhotoId": ""
            },
            {
                "id": "A428EZFE",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/vinfast_fadil_2019/p/g/2021/05/29/16/xrpszqJ07LlQ52ZMDiK1Sg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/vinfast_fadil_2019/p/g/2021/05/29/16/6CcqI911cEFvOcDxhtuMVg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "D7HHK57I",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/vinfast_fadil_2019/p/g/2021/05/29/16/KGAreqe1BBa5FllL5qSjfQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/vinfast_fadil_2019/p/g/2021/05/29/16/-yEn0xqx33UMo8y1Vq3mqg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "A2NWASXI",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/vinfast_fadil_2019/p/g/2020/01/03/13/BGaHuP9GEoMldaE2PVZ5SA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/vinfast_fadil_2019/p/g/2020/01/03/13/uftA3yLh210na9pdyRbmvg.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 5,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 2
        },
        "totalTrips": 7,
        "totalReviews": 7,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 20,
        "price": 680000,
        "priceOrigin": 680000,
        "priceTotal": 847282,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 1,
        "insBy": [
            1
        ],
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 7:00 - 15:00"
        ],
        "nonMortgage": 0,
        "fav": 0
    },
    {
        "id": "KJ758C",
        "name": "TOYOTA VELOZ CROSS 2022",
        "ownerId": "U9CVWY",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/00/03/10/smQtan6EnFxPxtzLupwz8g.jpg",
        "seat": 7,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.477963402019618,
            "lon": 105.62250065001604,
            "countryCode": "VN",
            "cityId": 87,
            "districtId": 866,
            "wardId": 29884,
            "street": "298 Mai Văn Khải"
        },
        "locationAddr": " Cao Lãnh, Đồng Tháp",
        "locationAddrS": " Cao Lãnh, Đồng Tháp",
        "d": 50,
        "distance": "50 km",
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "1PH97V7Y",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/toyota_veloz_cross_2022/p/g/2023/00/03/13/wUlTb8DTOm_tljkQiXK0Hg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/toyota_veloz_cross_2022/p/g/2023/00/03/13/yyxRyu1enhxotsf4pBHwxg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "IWFGE7DF",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/toyota_veloz_cross_2022/p/g/2023/00/01/06/CSb3114PmBQ9bcDE5LJj9Q.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/toyota_veloz_cross_2022/p/g/2023/00/01/06/-BMs-0JHoA6qPuagi7KatQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "4TX7JE9W",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/toyota_veloz_cross_2022/p/g/2023/00/01/06/FfTrG-i6DHOXk8gvPBo-9g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/toyota_veloz_cross_2022/p/g/2023/00/01/06/2A0989L0lMm4BCJeSS4xZA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "IJKW57X8",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/toyota_veloz_cross_2022/p/g/2023/00/01/06/w8RcbFRBucLw7TAzg0QsMA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_dongthap/toyota_veloz_cross_2022/p/g/2023/00/01/06/KINripJ6_0w-I9IgrQ4YYQ.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 0,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 0,
            "star5": 0
        },
        "totalTrips": 0,
        "totalReviews": 0,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 800000,
        "priceOrigin": 800000,
        "priceTotal": 898400,
        "totalDays": 1,
        "totalDiscountPercent": 0,
        "deliveryFee": 0,
        "insSupport": 0,
        "pp": 1,
        "cccd": 1,
        "ownerHostFiveStar": 0,
        "sd": 1,
        "wd": 0,
        "vaccinated": 0,
        "unavailsMinTime": 0,
        "unavailsDeliveryTime": 1,
        "notAvailErrors": [
            "Thời gian nhận xe: 7:00 - 17:00"
        ],
        "nonMortgage": 0,
        "fav": 0
    }
]
    loading.value = true
    await axios.get('https://m-car.mioto.vn/car/detail?carId=KFZT7D').then(res => {
        data.value = res.data.data.cars
    }
    ).catch(err => console.log(err)
    )
    const ind = ref(0);

    try {
        
        (async () => {

            cars.map(async (item: any) => {

                const images: string[] = []
                let car: any
                await axios.get(`https://m-car.mioto.vn/car/detail?carId=${item.id}`).then(res => {
                    car = res.data.data.car

                }).catch(err => console.log(err))

                car.photos.forEach((element: any) => {
                    images.push(element.fullUrl)
                });

                let payload = {
                    car_name: car.name,
                    seats: car.seat,
                    fuel_type: car.optionsFuel,
                    isDelivery: car.deliveryEnable,
                    transmission_type: car.optionsTransmission,
                    features: car.features,
                    images: images,
                    desc: car.desc,
                    price: car.price,
                    location: car.locationAddr,
                    isInstant: car.instant,
                    isMortgages: !car.nonMortgage,
                    address: car.location.street,
                    fuel_consumption: car.optionsFuelConsumption,
                }
                const result = await axios.post('http://localhost:8000/api/fake-car', payload)
                    .then((res) => {
                        ind.value+=1;
                    })
                    .catch(err => console.log(err))
                console.log(ind.value)

            })
        })();
        if (ind.value==10) {
        loading.value = false

    }
    } catch (error) {
            console.log(error);
            
    }
   
    
}
test()

</script>

