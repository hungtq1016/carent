<template>
    <section class="py-10">
        <div class="max-w-screen-lg mx-auto">
            <h3 class="text-4xl font-bold text-center">Địa Điểm</h3>
            <div class="font-normal text-lg text-gray-600 text-center mt-3">Hệ thống phát triển toàn quốc.</div>
            <Flicking :options="{ align: 'prev', circular: true ,panelsPerView: 6, adaptive: true }" :plugins="plugins" >
                <template  v-for="(province,index) in provinces" :key="index" >
                    <div>
                        <input type="radio" name="province" :id="province.codename" v-model="checkedProvince" :value="province">
                    <TheProvince :province="province"/>
                    </div>
                   
                </template>
                  
                </Flicking>
                <Flicking :options="{ align: 'prev', circular: true ,panelsPerView: 6, adaptive: true }" :plugins="plugins" >
                <template  v-for="(province,index) in checkedProvince.districts" :key="index" >
                    <div>
                        <input type="radio" name="province" :id="province.codename" v-model="checkedProvince" :value="province">
                    <TheProvince :province="province"/>
                    </div>
                   
                </template>
                  
                </Flicking>
        </div>
    </section>
</template>

<script setup lang="ts">
import Flicking from "@egjs/vue3-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import getAllProvinces from '@/lib/fetch/getAllProvinces';
import TheProvince from "@/components/Card/TheProvince.vue";
import { ref } from "vue";

const plugins = [new AutoPlay({ duration: 5000, direction: "NEXT", stopOnHover: true})];
const {data:provinces,error,isFetching} = await getAllProvinces();

const checkedProvince = ref(provinces.value[0])
</script>
