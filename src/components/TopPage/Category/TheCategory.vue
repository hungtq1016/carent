<template>
    <section class="pt-40 pb-10">
        <div class="max-w-screen-xl mx-auto">
            <h3 class="text-4xl font-bold text-center">Hãng Xe</h3>
            <div class="font-normal text-lg text-gray-600 text-center mt-3">Tìm hãng xe ưa thích của bạn.</div>
            <Flicking :options="{ align: 'prev', circular: true ,panelsPerView: 6}" :plugins="plugins">
                <img v-for="(brand,index) in brands"
                :src="brand.image" :alt="brand.name" :key="index">
            </Flicking>
        </div>
    </section>
</template>

<script setup lang="ts">
import Flicking from "@egjs/vue3-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";

const plugins = [new AutoPlay({ duration: 3000, direction: "NEXT", stopOnHover: false })];

const brands = [
    {
        id:1,
        image:'https://static-images.vnncdn.net/images/2023/6/21/mazda-logo.png',
        name:'Mazda'
    },
    {
        id:2,
        image:'https://logohistory.net/wp-content/uploads/2023/01/Honda-Logo.png',
        name:'Honda'
    },
    {
        id:1,
        image:'https://static-images.vnncdn.net/images/2023/6/21/mazda-logo.png',
        name:'Mazda'
    },
    {
        id:2,
        image:'https://logohistory.net/wp-content/uploads/2023/01/Honda-Logo.png',
        name:'Honda'
    },
    {
        id:1,
        image:'https://static-images.vnncdn.net/images/2023/6/21/mazda-logo.png',
        name:'Mazda'
    },
    {
        id:2,
        image:'https://logohistory.net/wp-content/uploads/2023/01/Honda-Logo.png',
        name:'Honda'
    },
    {
        id:1,
        image:'https://static-images.vnncdn.net/images/2023/6/21/mazda-logo.png',
        name:'Mazda'
    },
    {
        id:2,
        image:'https://logohistory.net/wp-content/uploads/2023/01/Honda-Logo.png',
        name:'Honda'
    },
]
</script>
