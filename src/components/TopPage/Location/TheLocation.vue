<template>
    <section class="py-10">
        <div class="max-w-screen-lg mx-auto">
            <h3 class="text-4xl font-bold text-center">Địa Điểm</h3>
            <div class="font-normal text-lg text-gray-600 text-center mt-3">Hệ thống phát triển toàn quốc.</div>
            <Flicking :options="{ align: 'prev', circular: true ,panelsPerView: 6, adaptive: true }" :plugins="plugins" >
                    <!-- <RouterLink :to="`/brand/${brand.name}`" v-for="(brand,index) in brands" :key="index">
                        <img  class="aspect-3/2 object-contain mix-blend-color-burn"
                        :src="brand.image" :alt="brand.name" >
                    </RouterLink> -->
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </Flicking>
        </div>
    </section>
</template>

<script setup lang="ts">
import Flicking from "@egjs/vue3-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
const plugins = [new AutoPlay({ duration: 5000, direction: "NEXT", stopOnHover: true})];
const url = 'https://provinces.open-api.vn/api/?depth=2'
</script>
