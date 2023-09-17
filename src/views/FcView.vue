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
        "id": "KLSNEI",
        "name": "VINFAST VF8 PLUS 2022",
        "ownerId": "UQSE8R",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/04/19/22/-sH4V9MvQGWVXUac7uV_KQ.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.76641125228142,
            "lon": 106.70031243145999,
            "countryCode": "VN",
            "cityId": 79,
            "districtId": 777,
            "wardId": 27460,
            "street": "Envy Body"
        },
        "locationAddr": "Quận Bình Tân, Hồ Chí Minh",
        "locationAddrS": "Quận Bình Tân, Hồ Chí Minh",
        "d": 0.794166736532324,
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
                "id": "26AI4PJM",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_plus_2022/p/g/2023/04/22/11/sQYt4_FOP8MdoaAHvce_pw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_plus_2022/p/g/2023/04/22/11/FfLVBStucb0-kCCqDLDPeg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "GUXWG7UU",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_plus_2022/p/g/2023/04/14/10/4IFHPVp2-6lPWawNj0owDQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_plus_2022/p/g/2023/04/14/10/lY5CR13BZuQQCfDiU5hwhA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "H3WJDTNF",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_plus_2022/p/g/2023/04/14/10/xX4R0bN_j2wTiljP1QAA7Q.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_plus_2022/p/g/2023/04/14/10/YW32tW8_aoSHJNMVk9F6zg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "2WYU7VNS",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_plus_2022/p/g/2023/04/22/11/-mRUKRf_VKOnby3X_uUPPQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_plus_2022/p/g/2023/04/22/11/vkavtF5BcetHrbvhvAH5AQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "G5Z5AIQ4",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_plus_2022/p/g/2023/04/14/10/UhN9zTsakhvH324Ja_A2iA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_plus_2022/p/g/2023/04/14/10/0LtfC_RN20ojHu-moczatg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "H3WJDT8U",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_plus_2022/p/g/2023/04/22/11/HWaLsXnVwqMAGYB0U9aNKw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_plus_2022/p/g/2023/04/22/11/0ek5FFbRU29nJIkpWf7jFw.jpg",
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
        "price": 1387500,
        "priceOrigin": 1400000,
        "priceTotal": 24619216,
        "totalDays": 16,
        "totalDiscountPercent": 1,
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
            "deliveryPrice": 15000,
            "deliveryDiscountEnable": 0,
            "deliveryDiscountKm": 0,
            "deliveryDiscountPercent": 0,
            "deliveryDiscountMax": 0,
            "price": 25905601,
            "priceOrigin": 25905601,
            "finalPrice": 28672162,
            "totalDiscountPercent": 0,
            "deliveryFee": 0,
            "ownerHostFiveStar": 0
        },
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
        "id": "K4LM6R",
        "name": "VINFAST VF8 ECO 2023",
        "ownerId": "ULA1ST",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/07/10/15/J9LflYKHQJ3CQ1zsJOPUlw.jpg",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.799056181774986,
            "lon": 106.7187911793679,
            "countryCode": "VN",
            "cityId": 79,
            "districtId": 765,
            "wardId": 26920,
            "street": "152, Phường 25, Quận Bình Thạnh, Hồ Chí Minh"
        },
        "locationAddr": "Quận Bình Thạnh, Hồ Chí Minh",
        "locationAddrS": "Quận Bình Thạnh, Hồ Chí Minh",
        "d": 3.8036961749193376,
        "deliveryEnable": 0,
        "deliveryRadius": 10,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "KCNLCSVR",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/04/23/11/fH5EwaZYvmcesYy68Umonw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/04/23/11/e48dkK1gEyLqbHqvr7uNLg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "K66YYY7C",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/04/23/11/eu4ZHgd1cr2f2gJtElHBDA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/04/23/11/scaqBG4H8rdOVgR_lhYE4Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "JP44TT5Y",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/04/23/11/IdhQ1qzvBxse71ibsSxg3g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/04/23/11/hdq7lsa50FVDdAYTQ0fYjw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "5BGTW4C4",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/04/23/11/JzZALVdcF4KT7fytRFTnFg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/04/23/11/zuU5_O2oyoqQ2m3eTcoJaA.jpg",
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
        "totalTrips": 28,
        "totalReviews": 28,
        "discountEnable": 1,
        "discountWeekly": 0,
        "discountMonthly": 20,
        "price": 1218750,
        "priceOrigin": 1231250,
        "priceTotal": 23755200,
        "totalDays": 16,
        "totalDiscountPercent": 1,
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
        "id": "KLUXAF",
        "name": "VINFAST VF8 ECO 2022",
        "ownerId": "USL4D9",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/08/11/13/2fo3tC_3kbEwvHVmeTMiBQ.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.79070980731224,
            "lon": 106.69298862157548,
            "countryCode": "VN",
            "cityId": 79,
            "districtId": 778,
            "wardId": 27481,
            "street": "3 Nguyễn Hữu Cầu, Phường Phường Tân Định, Quận 1, Thành phố Hồ Chí Minh"
        },
        "locationAddr": "Quận 7, Hồ Chí Minh",
        "locationAddrS": "Quận 7, Hồ Chí Minh",
        "d": 2.311438767331332,
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
                "id": "MH5QEYAA",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2022/p/g/2023/05/04/09/Mz-kfddaEjPcp3Y0TeDrLg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2022/p/g/2023/05/04/09/BNe5otHZJMaRNpgYu8lsbw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "63DZJM8K",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2022/p/g/2023/05/04/09/QQDWSDLrgmhQgTnFHnlO5A.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2022/p/g/2023/05/04/09/UJUgN-YcCfwTTMtB-2m-ag.jpg",
                "carPhotoId": ""
            },
            {
                "id": "6L681MVR",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2022/p/g/2023/05/04/09/HM-ZPPLh5jh5wZMReA6qMw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2022/p/g/2023/05/04/09/7fGWVVPWxRZOZ35peiE43Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "CGPYN18S",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2022/p/g/2023/05/04/09/PrehGIvO2lIC__TCq1swKA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2022/p/g/2023/05/04/09/BtbVQq1BiyT3L-c-gMH18g.jpg",
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
        "totalTrips": 10,
        "totalReviews": 11,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 1218750,
        "priceOrigin": 1231250,
        "priceTotal": 23755200,
        "totalDays": 16,
        "totalDiscountPercent": 1,
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
        "id": "KLCZYG",
        "name": "VINFAST VF8 ECO 2023",
        "ownerId": "U8PD11",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2022/11/17/07/8fozoVs6Pjo2XGsV0d5YHw.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.792151631513184,
            "lon": 106.72100311551357,
            "cityId": 79,
            "districtId": 765,
            "wardId": 26956,
            "street": "180/34 Nguyễn Hữu Cảnh"
        },
        "locationAddr": "Quận Bình Thạnh, Hồ Chí Minh",
        "locationAddrS": "Quận Bình Thạnh, Hồ Chí Minh",
        "d": 3.344870740908668,
        "deliveryEnable": 1,
        "deliveryRadius": 12,
        "deliveryRadiusFree": 3,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "JP44TTG2",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/03/07/10/6i88cBnzn8G-9AbU9-wHrQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/03/07/10/5h33VN7Saz6ubE61EBNZTQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "KG2GGY3K",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/03/07/10/ksKEoHZbA6fRqdeyIlBf5Q.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/03/07/10/wfUoIHE404tUmhoJ8wWPhA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "K7HVQJ1T",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/03/07/10/ZN1VwdmLNm8KcKrOoyz6rA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/03/07/10/QtQGs4ZNWPE0q8swYVdrTw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "57UC4SQF",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/03/07/10/heF-2lkHouzinrB2fZTF9Q.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/03/07/10/I4t5UAPwaxEw9oj4-9tC6g.jpg",
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
        "totalTrips": 27,
        "totalReviews": 27,
        "discountEnable": 1,
        "discountWeekly": 5,
        "discountMonthly": 10,
        "price": 1228437,
        "priceOrigin": 1306250,
        "priceTotal": 23943696,
        "totalDays": 16,
        "totalDiscountPercent": 6,
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
        "id": "KGIIMA",
        "name": "VINFAST VF8 ECO 2023",
        "ownerId": "UP5KJW",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/05/02/16/3WzuY9aFLqsnI5BEWyy2Ew.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.802011014185778,
            "lon": 106.70094408140241,
            "cityId": 79,
            "districtId": 765,
            "wardId": 26935,
            "street": "27 Phan Bội Châu, Phường 14, Quận Bình Thạnh, Hồ Chí Minh"
        },
        "locationAddr": "Quận Bình Thạnh, Hồ Chí Minh",
        "locationAddrS": "Quận Bình Thạnh, Hồ Chí Minh",
        "d": 3.551324862353787,
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
                "id": "587ZU68U",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/04/24/13/8aWfyau14UiKwz0nOKgCzg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/04/24/13/d106ds5dEZAxUvJSO5o96Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "KA97EYME",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/04/24/13/8NnD5k-TVAuYaDDmI7KLnQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/04/24/13/yyG68OP1Ur6IVJwm43B6ZQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "LNTTKICG",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/04/24/13/sSW-HRaENU-UjFqKRVKCTg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/04/24/13/cXFT-8hSWZbcJkJUhh__6g.jpg",
                "carPhotoId": ""
            },
            {
                "id": "LWZJT9XP",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/04/24/13/mGL2BDnkCYr9-Oy4V7tVjg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/04/24/13/JvYIw6Nik9-Ekt5KsodHpQ.jpg",
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
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 1400000,
        "priceOrigin": 1412500,
        "priceTotal": 27281632,
        "totalDays": 16,
        "totalDiscountPercent": 1,
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
        "id": "K5BIXB",
        "name": "VINFAST VF E34 2023",
        "ownerId": "UL9QVY",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/02/11/10/8qvObircr0vP4uh76kfUzw.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.744277764223177,
            "lon": 106.70909208669084,
            "cityId": 79,
            "districtId": 778,
            "wardId": 27472,
            "street": "36 Đường Số 10, Tân Kiểng, Quận 7, Thành phố Hồ Chí Minh, Việt Nam"
        },
        "locationAddr": "Quận 7, Hồ Chí Minh",
        "locationAddrS": "Quận 7, Hồ Chí Minh",
        "d": 3.149558009496179,
        "deliveryEnable": 1,
        "deliveryRadius": 20,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 15000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "MLA57C4D",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2023/p/g/2023/02/14/21/mbHu2ZVHxIBgegpkrD6dTw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2023/p/g/2023/02/14/21/w-rUnvlQ-FzgzPQOkqlHbQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "A428EYI9",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2023/p/g/2023/01/25/13/xz7If_CDVgr8ak8IaqGJ4g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2023/p/g/2023/01/25/13/iDBZ9mJQw7TygNOuJwu6cg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "ASD2GLLF",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2023/p/g/2023/01/25/13/G0MI_w3POc0lNEU6pGZ4Fw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2023/p/g/2023/01/25/13/2oVl-YBJLnY_SrftovqCLQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "DCMX8KLA",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2023/p/g/2023/01/25/13/qjL6b4gnu7MIB7lt3Soq_w.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2023/p/g/2023/01/25/13/bB7eEz3tDoSwpNFEaaHrJA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "A3I96LJN",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2023/p/g/2023/01/25/13/GJtrXbn4FeT_xQi3hdq4pw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2023/p/g/2023/01/25/13/LKq8IIJ6cvqurZpRa_mwBQ.jpg",
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
        "discountWeekly": 10,
        "discountMonthly": 30,
        "price": 787500,
        "priceOrigin": 800000,
        "priceTotal": 15364800,
        "totalDays": 16,
        "totalDiscountPercent": 2,
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
        "id": "KIN26V",
        "name": "VINFAST VF E34 2022",
        "ownerId": "UR1EFA",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/07/11/08/ztpDPdwoZwr8FOmvpQHZfg.jpg",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.788499535028814,
            "lon": 106.67087933762483,
            "countryCode": "VN",
            "cityId": 79,
            "districtId": 770,
            "wardId": 27133,
            "street": "1115 Hoàng Sa"
        },
        "locationAddr": "Quận 3, Hồ Chí Minh",
        "locationAddrS": "Quận 3, Hồ Chí Minh",
        "d": 3.5680693175135785,
        "deliveryEnable": 1,
        "deliveryRadius": 20,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 10000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "BPUBC4ZD",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/05/14/15/dzrDApxuBOPn9NTboGsxfw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/05/14/15/UPc24_ISlCYWnU0aLVcdVA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "CI5VBU78",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/05/14/15/TkfZzs0rAvEr0JJiuy_9JQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/05/14/15/d_-R9Yt1EV9D5lYnltMp7w.jpg",
                "carPhotoId": ""
            },
            {
                "id": "19WNT1QL",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/05/14/15/_AF0Wsf9whOTuquwDP3SgQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/05/14/15/E8CG1yC2dpjEiUTwmoTtyg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "CEV1QGIV",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/05/14/15/Jxk7iPIGoTggHU0v_IhJow.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/05/14/15/q6lzTgSYKswzinp30WU6TA.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 4.8,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 1,
            "star5": 4
        },
        "totalTrips": 6,
        "totalReviews": 6,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 821875,
        "priceOrigin": 834375,
        "priceTotal": 16033616,
        "totalDays": 16,
        "totalDiscountPercent": 1,
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
        "id": "KFZT7D",
        "name": "VINFAST VF E34 2022",
        "ownerId": "U8PD11",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2022/11/17/07/8fozoVs6Pjo2XGsV0d5YHw.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.794783751832615,
            "lon": 106.72100311551357,
            "cityId": 79,
            "districtId": 765,
            "wardId": 26956,
            "street": "180/34 Nguyễn Hữu Cảnh"
        },
        "locationAddr": "Quận Bình Thạnh, Hồ Chí Minh",
        "locationAddrS": "Quận Bình Thạnh, Hồ Chí Minh",
        "d": 3.344870740908668,
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
                "id": "CEV1QGBK",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/06/22/18/6SZHA3xnQa9hxW8cY1YrqA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/06/22/18/-GjgindwIiT-71JCgR5qtA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "1V8LGVZC",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/06/22/18/aBjxNHGRPOGgY2Sw-qRQXg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/06/22/18/ctVMyh5638k0493fgUlSmA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "CVE37KQ2",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/06/22/18/8ZSxPHfACmr0uvyjGTP01g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/06/22/18/CxfvsYU5qDIq2-af20defA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "CMAQ31NT",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/06/22/18/U63Z0KUA20R7dvJLN_cbNQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/06/22/18/pes696Jf7HR9Z-ywaW9YBQ.jpg",
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
        "discountWeekly": 15,
        "discountMonthly": 30,
        "price": 962500,
        "priceOrigin": 962500,
        "priceTotal": 18726400,
        "totalDays": 16,
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
        "id": "K2BIR1",
        "name": "VINFAST VF E34 2022",
        "ownerId": "USNP9Q",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/00/28/09/riWGwyZXqIcwzGWy0Fhz9g.jpg",
        "seat": 4,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.800816051608214,
            "lon": 106.67822984760636,
            "cityId": 79,
            "districtId": 768,
            "wardId": 27049,
            "street": "150 Hoàng Văn Thụ"
        },
        "locationAddr": "Quận Phú Nhuận, Hồ Chí Minh",
        "locationAddrS": "Quận Phú Nhuận, Hồ Chí Minh",
        "d": 3.897583760926007,
        "deliveryEnable": 1,
        "deliveryRadius": 20,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "4SDRL4C7",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2022/07/04/12/rX3Ncc73P-IKlXF0KN_vMQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2022/07/04/12/6moA2EdZyXTwHj0njDk5Hg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "7CUIUXYA",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2022/07/04/12/vv7I3kjN-_mPEAQY1j2GZg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2022/07/04/12/wEsEajw9qh8-4spjDZwjGg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "N8VVZ9Z8",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2022/07/04/12/rCN_ZBCnpNZ6q_olVsVajQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2022/07/04/12/eouoKRZBF4X5W3OF3oPIjQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "7UYKLKPZ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2022/07/04/12/cSKi8rQqKkZSQOSXC9EeZw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2022/07/04/12/LjgjNhknCVFAidhsnzjpCQ.jpg",
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
        "totalTrips": 46,
        "totalReviews": 48,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 30,
        "price": 896875,
        "priceOrigin": 896875,
        "priceTotal": 17449616,
        "totalDays": 16,
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
        "id": "K4MFWE",
        "name": "VINFAST VF8 PLUS 2023",
        "ownerId": "U8PD11",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2022/11/17/07/8fozoVs6Pjo2XGsV0d5YHw.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.794693918374614,
            "lon": 106.72091166415505,
            "cityId": 79,
            "districtId": 765,
            "wardId": 26956,
            "street": "180/34 Nguyễn Hữu Cảnh"
        },
        "locationAddr": "Quận Bình Thạnh, Hồ Chí Minh",
        "locationAddrS": "Quận Bình Thạnh, Hồ Chí Minh",
        "d": 3.344870740908668,
        "deliveryEnable": 1,
        "deliveryRadius": 12,
        "deliveryRadiusFree": 3,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "HSPY2942",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_plus_2023/p/g/2023/05/15/08/zD2B036YbtO_F-RlNfz_dA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_plus_2023/p/g/2023/05/15/08/sUcRpRA0gzy4Tom_iM9JNQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "JBT1I9ZJ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_plus_2023/p/g/2023/05/15/08/jAX3jp5d3gDIN5vnZoVnEQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_plus_2023/p/g/2023/05/15/08/FUShiY-VdlgYIOhT9P4Nbg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "IRPLAIDT",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_plus_2023/p/g/2023/05/15/08/RjT4QOYmhoDbLQabOrcGkg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_plus_2023/p/g/2023/05/15/08/0pIhvLaCAqtPer8t6UWyHw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "IJKW57J2",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_plus_2023/p/g/2023/05/15/08/IJu7Os4weuXrvrhszCZUDw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_plus_2023/p/g/2023/05/15/08/lo5N7fi_YhufMdRwRpvq0w.jpg",
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
        "price": 1550000,
        "priceOrigin": 1562500,
        "priceTotal": 27500000,
        "totalDays": 16,
        "totalDiscountPercent": 1,
        "deliveryFee": 0,
        "insSupport": 0,
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
        "id": "KHZ7EW",
        "name": "VINFAST VF E34 2022",
        "ownerId": "ULNXS7",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/04/30/22/ALQQTpg82TJcyZ0M3ZPA_g.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.780458148391787,
            "lon": 106.67531482233504,
            "cityId": 79,
            "districtId": 771,
            "wardId": 27166,
            "street": "Cửa Hàng Kính Thuốc Ngọc Hương, 463 Đ. Cách Mạng Tháng 8"
        },
        "locationAddr": "Quận 10, Hồ Chí Minh",
        "locationAddrS": "Quận 10, Hồ Chí Minh",
        "d": 2.8223497298370024,
        "deliveryEnable": 1,
        "deliveryRadius": 9,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 30000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "3P15VZ8V",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/04/30/11/KTbKTcQyeJCFqyvl8zjcFQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/04/30/11/E0In2wGwN6w5kFoEjj8IZw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "G92AITQ6",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/04/30/11/Mc0CDj_01qza5QroFT4V-A.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/04/30/11/Mc0CDj_01qza5QroFT4V-A.jpg",
                "carPhotoId": ""
            },
            {
                "id": "3I8SZQ7A",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/04/30/11/Irg_zJm3lV_1xzhnXfZJ_A.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/04/30/11/SD_O7qKpoO2l3vEcYcmi4Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "3BM2PFSQ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/04/30/11/_npTqxJx5QF5Vlgzhg9Cvg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/04/30/11/Y8ophSpg59W9cR0fCRRdTA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "IZA2WAWA",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/03/10/11/sF9WzwoxSJ3UIIvEwabRWQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/03/10/11/igu1tF0njDc8pSI54P2hnA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "IHQZXUGH",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/03/10/11/Lf8SZn0AHkrgil1zCWJKVQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/03/10/11/Zfo12YY5mN9ZMgcgJtWtig.jpg",
                "carPhotoId": ""
            },
            {
                "id": "4Z6JNJ5R",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/03/10/11/gXuavzPr96hHEliRJLdDFw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/03/10/11/UfJmLCjETKY_ZjnLwHrQjg.jpg",
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
        "totalTrips": 16,
        "totalReviews": 15,
        "discountEnable": 0,
        "discountWeekly": 10,
        "discountMonthly": 0,
        "price": 865000,
        "priceOrigin": 877500,
        "priceTotal": 15356320,
        "totalDays": 16,
        "totalDiscountPercent": 1,
        "deliveryFee": 0,
        "insSupport": 0,
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
        "id": "KIP2LP",
        "name": "VINFAST VF8 ECO 2023",
        "ownerId": "UNNH9S",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-1.png",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.737540334954014,
            "lon": 106.67049275393055,
            "countryCode": "VN",
            "cityId": 79,
            "districtId": 776,
            "wardId": 27418,
            "street": "Central Premium"
        },
        "locationAddr": "Quận 8, Hồ Chí Minh",
        "locationAddrS": "Quận 8, Hồ Chí Minh",
        "d": 5.0744400929076665,
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
                "id": "JFIUSYTW",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/06/27/12/c3XrX5PbRr7KmkyRC6Nj8Q.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/06/27/12/yq4iOvIiSmQ0ShMDQz0Gmg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "JKSMPNMZ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/06/27/12/-Tea1TitcUHxWN1lYV8Txw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/06/27/12/AAISG76Jwh26qrFweQfPew.jpg",
                "carPhotoId": ""
            },
            {
                "id": "IRPLAJSY",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/06/27/12/p8m-UKV3XZcMeVHbJl7Vng.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/06/27/12/Sw8ThFLDE5P2_j6sE2aAHQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "1B962W15",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/06/05/16/gfxqkeFnDtgDKtIEY7M-NA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/06/05/16/1VYsLbmV1j8EkvNgjUgCWw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "IZA2WA6B",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/06/27/12/wcd8RakORRzYZq7A3AvSNQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2023/p/g/2023/06/27/12/2GF_b5nTECLwoPiWwMKLPg.jpg",
                "carPhotoId": ""
            }
        ],
        "photosVerified": 0,
        "rating": {
            "avg": 4.8,
            "star1": 0,
            "star2": 0,
            "star3": 0,
            "star4": 1,
            "star5": 4
        },
        "totalTrips": 17,
        "totalReviews": 16,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 1218750,
        "priceOrigin": 1231250,
        "priceTotal": 23755200,
        "totalDays": 16,
        "totalDiscountPercent": 1,
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
        "id": "KF7CNL",
        "name": "VINFAST VF E34 2022",
        "ownerId": "ULACDB",
        "ownerAvatar": "https://n1-cstg.mioto.vn/m/avatars/avatar-1.png",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.738922614709383,
            "lon": 106.66633719586089,
            "countryCode": "VN",
            "cityId": 79,
            "districtId": 776,
            "wardId": 27418,
            "street": "Quận 8"
        },
        "locationAddr": "Quận 8, Hồ Chí Minh",
        "locationAddrS": "Quận 8, Hồ Chí Minh",
        "d": 5.019992610421324,
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
                "id": "K5S1LE4D",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/01/11/13/5kpwKeoxDyWT86Bj4BCs4A.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/01/11/13/ymww152WCAABwGnOrYP2fg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "IL394JGR",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/01/11/12/YM69m_Og24yChKulpzv-WQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/01/11/12/dHEe_o6c9w-z7J4Jh0wmmA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "4Z6JN5CQ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/01/11/12/upp2gtHHFX3FwMpu6dA-Tg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/01/11/12/XLmoIztU6Fg4R_eQL0eUDg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "41TMMF7P",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/01/11/12/N3eo6BF0DaVQD6wwW48_Iw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/01/11/12/DCt2bTxwe3xMiKBh6b2xRA.jpg",
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
        "totalTrips": 63,
        "totalReviews": 68,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 717500,
        "priceOrigin": 730000,
        "priceTotal": 14002912,
        "totalDays": 16,
        "totalDiscountPercent": 2,
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
        "id": "K2R7NP",
        "name": "VINFAST VF8 ECO 2022",
        "ownerId": "U9WLAP",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/05/24/18/7Tl-dN92qEUN-14_d8B6wg.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.784538530989579,
            "lon": 106.65493205008816,
            "cityId": 79,
            "districtId": 766,
            "wardId": 26995,
            "street": "172 Lý Thường Kiệt"
        },
        "locationAddr": "Quận Tân Bình, Hồ Chí Minh",
        "locationAddrS": "Quận Tân Bình, Hồ Chí Minh",
        "d": 5.161656564918564,
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
                "id": "DCMX8LY2",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2022/p/g/2023/07/15/09/LKwbr4sw-K1KFtY1o1hc8g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2022/p/g/2023/07/15/09/hB6lBDLQG3EVZqBdPNa_gA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "D5RMBWAG",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2022/p/g/2023/07/15/09/ELCxz6YQVt3sMqeeOTgbGg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2022/p/g/2023/07/15/09/t7DXkAa5E6m7XaIBwz374A.jpg",
                "carPhotoId": ""
            },
            {
                "id": "CKFSSH4X",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2022/p/g/2023/07/15/09/D5ucitVHe0ZIM5EilLrWog.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2022/p/g/2023/07/15/09/lNrjrkAWi8Hr3Hle3aY6-Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "C9JIC85B",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2022/p/g/2023/07/15/09/-QMj-0malai3__yqJTeX0A.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2022/p/g/2023/07/15/09/0qqus7Moitp9ZeUnkd5L_g.jpg",
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
        "discountWeekly": 20,
        "discountMonthly": 30,
        "price": 1334375,
        "priceOrigin": 1346875,
        "priceTotal": 26004816,
        "totalDays": 16,
        "totalDiscountPercent": 1,
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
        "id": "K2DPAR",
        "name": "VINFAST VF8 ECO 2022",
        "ownerId": "U9WLAP",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/05/24/18/7Tl-dN92qEUN-14_d8B6wg.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.735433351383811,
            "lon": 106.66566779832496,
            "cityId": 79,
            "districtId": 776,
            "wardId": 27409,
            "street": "342 Tạ Quang Bửu"
        },
        "locationAddr": "Quận 8, Hồ Chí Minh",
        "locationAddrS": "Quận 8, Hồ Chí Minh",
        "d": 5.574311037171255,
        "deliveryEnable": 1,
        "deliveryRadius": 13,
        "deliveryRadiusFree": 5,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "ANMIVWT3",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2022/p/g/2023/05/26/13/vfyn9O7tBqGfMBAve8XcQg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2022/p/g/2023/05/26/13/jFwfFx-RzlzWTWs41FBa7g.jpg",
                "carPhotoId": ""
            },
            {
                "id": "KCNLCSXP",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2022/p/g/2023/05/11/08/wUk1sR6tj-lxB7apvshB4Q.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2022/p/g/2023/05/11/08/5wsdveAKZk22diROAluxYQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "K5S1LESZ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2022/p/g/2023/05/11/08/nFnaqS5CvbCtviVXOjhMmQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2022/p/g/2023/05/11/08/QbidojnJk7mF2mTRZqktmg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "A2NWASJV",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2022/p/g/2023/05/26/13/wkr7hUXHbU0nSxkx_iSP3w.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2022/p/g/2023/05/26/13/2_xuf03AjEUzvlaEWei1OQ.jpg",
                "carPhotoId": ""
            },
            {
                "id": "D8CEY3HI",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2022/p/g/2023/05/26/13/yjDzL2_9FLtG4jcI-W_9Ig.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2022/p/g/2023/05/26/13/CoHaHhr_ITCFqp0EnxatBw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "DGDRVQKK",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2022/p/g/2023/05/26/13/gr9RWoeKGD8p5HPPEK0O5w.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf8_eco_2022/p/g/2023/05/26/13/cALEnhqEmiUuGTq6tgAoHw.jpg",
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
        "discountWeekly": 15,
        "discountMonthly": 20,
        "price": 1334375,
        "priceOrigin": 1346875,
        "priceTotal": 26004816,
        "totalDays": 16,
        "totalDiscountPercent": 1,
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
        "id": "KKRHB7",
        "name": "VINFAST VF5 2023",
        "ownerId": "UQ3RE7",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/02/13/18/3wzsaLOgsta0lawY5ghL0Q.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.740063981326182,
            "lon": 106.72490624182103,
            "countryCode": "VN",
            "cityId": 79,
            "districtId": 778,
            "wardId": 27478,
            "street": "42 Đường số 10"
        },
        "locationAddr": "Quận 7, Hồ Chí Minh",
        "locationAddrS": "Quận 7, Hồ Chí Minh",
        "d": 4.369371072300294,
        "deliveryEnable": 1,
        "deliveryRadius": 50,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 30000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "AQ439RNQ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf5_2023/p/g/2023/06/04/17/k9oucAXzgqm11RddAIuPmw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf5_2023/p/g/2023/06/04/17/CnaAw-pXUNXVAWgJJSKauw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "B21Q4411",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf5_2023/p/g/2023/06/04/17/JI0erSbjNOqwf8imaFpnLQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf5_2023/p/g/2023/06/04/17/4XGBJ9xRoUc6Y6NasOLw-g.jpg",
                "carPhotoId": ""
            },
            {
                "id": "BL3FXD7Q",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf5_2023/p/g/2023/06/04/17/SE2IpM4Dur9I_qoGSHqTeQ.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf5_2023/p/g/2023/06/04/17/1COCxHS6455_j6XOtn0bRA.jpg",
                "carPhotoId": ""
            },
            {
                "id": "BYZ78CT1",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf5_2023/p/g/2023/06/04/17/pYgulM5kYhQgYudrSuXwNw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf5_2023/p/g/2023/06/04/17/PNWaY_l4i5wWGON4X3-tDw.jpg",
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
        "totalTrips": 16,
        "totalReviews": 14,
        "discountEnable": 0,
        "discountWeekly": 20,
        "discountMonthly": 30,
        "price": 738750,
        "priceOrigin": 751250,
        "priceTotal": 14416352,
        "totalDays": 16,
        "totalDiscountPercent": 2,
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
        "id": "KLUXAL",
        "name": "VINFAST VF E34 2023",
        "ownerId": "UMJ6N8",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/03/10/12/VUfoxyGna8hBFlXeYm1mTw.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.786590047568978,
            "lon": 106.73135092888982,
            "countryCode": "VN",
            "cityId": 79,
            "districtId": 769,
            "wardId": 27106,
            "street": "95 Đường D4"
        },
        "locationAddr": "Quận 2, Hồ Chí Minh",
        "locationAddrS": "Quận 2, Hồ Chí Minh",
        "d": 4.224561477918457,
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
                "id": "7EPGM4S7",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2023/p/g/2023/04/26/22/lQNNOW4yySe1mkeieFwLxg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2023/p/g/2023/04/26/22/U8IFAZvtsdX1WxNgLRmlLg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "77NS7VJZ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2023/p/g/2023/04/26/22/POeaooQWgFPqqPAMw97M_g.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2023/p/g/2023/04/26/22/8Cp1LY_OUMRBJDGwSpgbEg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "AAA1U6VE",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2023/p/g/2023/04/26/22/_dV6IqPuM6f_u32VS0eJDw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2023/p/g/2023/04/26/22/7dh_IMuTWj4CF4CuNYaU2Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "AJYN8RNN",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2023/p/g/2023/04/26/22/qYDfcrbI-viaRHpTZGT5mw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2023/p/g/2023/04/26/22/7ngmMoTtw69AyGxh18hYhQ.jpg",
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
        "totalReviews": 14,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 30,
        "price": 787500,
        "priceOrigin": 800000,
        "priceTotal": 15364800,
        "totalDays": 16,
        "totalDiscountPercent": 2,
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
        "id": "KG685L",
        "name": "VINFAST VF E34 2023",
        "ownerId": "UMESTP",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/02/21/10/R2DKuWeobkqOIKStILLU-A.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.742666081999388,
            "lon": 106.73083341291031,
            "countryCode": "VN",
            "cityId": 79,
            "districtId": 778,
            "wardId": 27466,
            "street": "Trần Trọng Cung"
        },
        "locationAddr": "Quận 7, Hồ Chí Minh",
        "locationAddrS": "Quận 7, Hồ Chí Minh",
        "d": 4.862023622895204,
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
                "id": "FJEZ85WZ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2023/p/g/2023/02/21/08/dydOqWXZUux-oBdqT7reig.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2023/p/g/2023/02/21/08/EEalU4Z7IzvH0eB3I6yg5Q.jpg",
                "carPhotoId": ""
            },
            {
                "id": "FPN8IKMH",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2023/p/g/2023/02/21/08/hMHpBSKUhPeLRr2Sv86giA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2023/p/g/2023/02/21/08/P2XWQuBslgE0yCGVTStcDg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "1PH97VTV",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2023/p/g/2023/02/21/08/cJmk4q-PqsnKoXg_0eME0w.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2023/p/g/2023/02/21/08/KADoC7Rj3oATFZ-hFpoacw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "CMAQ3BGQ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2023/p/g/2023/02/21/08/NSLs_UZvvt2QwAPb9K8NMg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2023/p/g/2023/02/21/08/q2l9zOvWbw4y8L-5gMasRg.jpg",
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
        "price": 877500,
        "priceOrigin": 890000,
        "priceTotal": 17115840,
        "totalDays": 16,
        "totalDiscountPercent": 1,
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
        "id": "KIV6P9",
        "name": "VINFAST VF E34 2022",
        "ownerId": "US1XLX",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2023/03/01/10/4OfsY0Y28LTb_aiAitN1Hw.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.795356885066216,
            "lon": 106.65979181847729,
            "cityId": 79,
            "districtId": 766,
            "wardId": 26968,
            "street": "36 Hoàng Việt, Phường 4, Tân Bình, Thành phố Hồ Chí Minh, Việt Nam"
        },
        "locationAddr": "Quận Tân Bình, Hồ Chí Minh",
        "locationAddrS": "Quận Tân Bình, Hồ Chí Minh",
        "d": 5.004343805966107,
        "deliveryEnable": 0,
        "deliveryRadius": 15,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 20000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "EL6DQGAI",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/03/01/09/IlyyeSZGHrwrxF3LBmUSXA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/03/01/09/FxbAn-hOep5ydCe9_rDKqg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "H48GU328",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/03/01/09/Q8OXdbUvXZDPTJy7ovJtXA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/03/01/09/mRQiKDCjSjo9QpTrQdlWxg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "GGJ7UEM1",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/03/01/09/OSCf2DcIDHzE9ONrSW-qVg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/03/01/09/crf1Xg1BX4-R1EndEmLUdg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "G69H8VBJ",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/03/01/09/bL04GMwDLf5SDRcLOTagaw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/03/01/09/q8FlvNQwa9zUXAVbTInFow.jpg",
                "carPhotoId": ""
            },
            {
                "id": "HCHNYNQI",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/03/01/09/awbRg4ILSQt4iKjKzcLYmw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/03/01/09/kV5U_o8BkMjJHT3xnXSBaw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "6NHNSZQI",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/03/24/14/YlKW3xfupmUAWZyQLKifOw.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/03/24/14/TmRYAEhrp8WgicoXUvaCsQ.jpg",
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
        "totalTrips": 36,
        "totalReviews": 36,
        "discountEnable": 0,
        "discountWeekly": 0,
        "discountMonthly": 0,
        "price": 949375,
        "priceOrigin": 949375,
        "priceTotal": 18471056,
        "totalDays": 16,
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
            "Thời gian nhận xe: 6:00 - 20:00"
        ],
        "nonMortgage": 1,
        "fav": 0
    },
    {
        "id": "KK1QDY",
        "name": "VINFAST VF E34 2022",
        "ownerId": "U73LY6",
        "ownerAvatar": "https://n1-astg.mioto.vn/g/2022/07/30/11/5QT8avXR_6ZkE7ZxTWjJiw.jpg",
        "seat": 5,
        "status": 2,
        "instant": 0,
        "optionsTransmission": 1,
        "location": {
            "lat": 10.779041114484981,
            "lon": 106.63136615650814,
            "countryCode": "VN",
            "cityId": 79,
            "districtId": 767,
            "wardId": 27028,
            "street": "Đường Lê Sao, Phường Phú Thạnh, Quận Tân Phú, Thành phố Hồ Chí Minh"
        },
        "locationAddr": "Quận Tân Phú, Hồ Chí Minh",
        "locationAddrS": "Quận Tân Phú, Hồ Chí Minh",
        "d": 7.520586833588513,
        "deliveryEnable": 1,
        "deliveryRadius": 7,
        "deliveryRadiusFree": 0,
        "deliveryPrice": 30000,
        "deliveryDiscountEnable": 0,
        "deliveryDiscountKm": 0,
        "deliveryDiscountPercent": 0,
        "deliveryDiscountMax": 0,
        "photos": [
            {
                "id": "BHQ5RXEY",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/06/26/10/_puKnVnS3zNBatc893YP0w.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/06/26/10/FKChyE6JEygY1vFieNVGZg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "B1GSPWA2",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/06/26/10/QLB8yptrSeXHhTmuRibKCg.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/06/26/10/oBzF5Kan5TFNklzAeK76gg.jpg",
                "carPhotoId": ""
            },
            {
                "id": "ATXBYYBA",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/06/26/10/sS94hptAeRfL2veaDOIOuA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/06/26/10/mVdC7s6UMt32Jq8WOgmNAw.jpg",
                "carPhotoId": ""
            },
            {
                "id": "ANMIVWUF",
                "thumbUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/06/26/10/kEi6p0bQdiwFp4Pm5xEJbA.jpg",
                "fullUrl": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2022/p/g/2023/06/26/10/6GqNz0qhveEfVwGVlBdZ3g.jpg",
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
        "discountWeekly": 20,
        "discountMonthly": 50,
        "price": 627500,
        "priceOrigin": 800000,
        "priceTotal": 12251840,
        "totalDays": 16,
        "totalDiscountPercent": 22,
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

