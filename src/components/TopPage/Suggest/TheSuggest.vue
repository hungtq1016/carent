<template>
    <section class="py-10 bg-gray-50">
        <div class="max-w-screen-xl mx-auto">
            <h3 class="text-4xl font-bold text-center">Dành Cho Bạn</h3>
            <div class="font-normal text-lg text-gray-600 text-center mt-3">Hàng vạn lựa chọn phù hợp theo yêu cầu của bạn.
            </div>
            <div class="grid grid-cols-4 gap-3 py-5">
                <TheItem v-for="(car, index) in cars" :item="car" :key="index" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import TheItem from '@/components/Card/TheItem.vue';

const cars = [
    {
        "id": "KI92SP",
        "name": "VINFAST VF E34 2023",
        "trip": 10,
        "totalReview": 10,
        "review": 5.0,
        "location": "Quận 8, Hồ Chí Minh",
        "price": 900000,
        "image": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf_e34_2023/p/g/2023/08/01/11/gXgMLoF6UoKPGTlc8ZNbsg.jpg",
        "seat": 5,
        "transmission": 1,
        "isDelivery": 1
    },
    {
        "id": "KGVHS4",
        "name": "KIA MORNING 2014",
        "trip": 3,
        "totalReview": 3,
        "review": 5.0,
        "location": "Quận 2, Hồ Chí Minh",
        "price": 380000,
        "image": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/kia_morning_2014/p/g/2023/04/31/12/HWvilsp8FVo3dyah6L4Gag.jpg",
        "seat": 2,
        "transmission": 1,
        "isDelivery": 0
    },
    {
        "id": "K48323",
        "name": "SUZUKI XL7 2022",
        "trip": 10,
        "totalReview": 10,
        "review": 5.0,
        "location": "Quận Bình Tân, Hồ Chí Minh",
        "price": 900000,
        "image": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/suzuki_xl7_2022/p/g/2022/10/08/13/2PgcEdOP_tX_Kr1r842VKQ.jpg",
        "seat": 7,
        "transmission": 1,
        "isDelivery": 1
    },
    {
        "id": "KH4Y4K",
        "name": "CHEVROLET SPARK 2009",
        "trip": 31,
        "totalReview": 31,
        "review": 5.0,
        "location": "Quận Tân Phú, Hồ Chí Minh",
        "price": 300000,
        "image": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/chevrolet_spark_2009/p/g/2023/00/13/09/9C8WSYRAfcHYUqxUJq8Ozg.jpg",
        "seat": 4,
        "transmission": 2,
        "isDelivery": 1
    },
    {
        "id": "K2YV2G",
        "name": "TOYOTA AVANZA 2023",
        "trip": 10,
        "totalReview": 10,
        "review": 5.0,
        "location": "Quận 8, Hồ Chí Minh",
        "price": 900000,
        "image": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/toyota_avanza_2023/p/g/2023/07/22/14/eiIpbe3HNKCk5BLimgvZsg.jpg",
        "seat": 7,
        "transmission": 1,
        "isDelivery": 1
    },
    {
        "id": "KGH8DW",
        "name": "VINFAST FADIL 2019",
        "trip": 28,
        "totalReview": 28,
        "review": 5.0,
        "location": "Quận 7, Hồ Chí Minh",
        "price": 600000,
        "image": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_fadil_2019/p/g/2022/07/12/10/YSWlPGipK1ymCjdUaoz-Bw.jpg",
        "seat": 5,
        "transmission": 1,
        "isDelivery": 0
    },
    {
        "id": "K5L9CB",
        "name": "HONDA CIVIC 2019",
        "trip": 10,
        "totalReview": 10,
        "review": 5.0,
        "location": "Quận Gò Vấp, Hồ Chí Minh",
        "price": 1000000,
        "image": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/honda_civic_2019/p/g/2023/07/26/09/zLMjzVsO-rFKz7Kg2cygxA.jpg",
        "seat": 4,
        "transmission": 1,
        "isDelivery": 1
    },
    {
        "id": "K4E7NQ",
        "name": "DAEWOO MATIZ 2009",
        "trip": 25,
        "totalReview": 25,
        "review": 5.0,
        "location": "Huyện Hóc Môn, Hồ Chí Minh",
        "price": 450000,
        "image": "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/daewoo_matiz_2009/p/g/2023/04/06/23/tfBdjOkLFCDk6tbV1Pu3sg.jpg",
        "seat": 5,
        "transmission": 1,
        "isDelivery": 1
    }
]
</script>
