<template>
    <section class="pt-40 pb-10">
        <div class="max-w-screen-xl mx-auto">
            <h3 class="text-4xl font-bold text-center">Hãng Xe</h3>
            <div class="font-normal text-lg text-gray-600 text-center mt-3">Tìm hãng xe ưa thích của bạn.</div>
            <div class="py-10 min-h-[240px]">
                <Flicking :options="{ align: 'prev', circular: true ,panelsPerView: 6, adaptive: true }" :plugins="plugins" >
                    <ModelItem  v-for="(model,index) in modelStore.models" :key="index" :model="model"/>
                </Flicking>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Flicking from "@egjs/vue3-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import { useModels } from "@/stores/models";
import  ModelItem from "./ModelItem.vue";
const plugins = [new AutoPlay({ duration: 5000, direction: "NEXT", stopOnHover: true})];

const modelStore = useModels()
const brands = [
    {
        id:1,
        image:'https://static-images.vnncdn.net/images/2023/6/21/mazda-logo.png',
        name:'Mazda',
        codename:'mazda'
    },
    {
        id:2,
        image:'https://logohistory.net/wp-content/uploads/2023/01/Honda-Logo.png',
        name:'Honda',
        codename:'honda'
    },
    {
        id:3,
        image:'https://png2.cleanpng.com/sh/c30dc314d423b193c08719cdae368507/L0KzQYm3VsE3N6V3iJH0aYP2gLBuTgN2gqZwgZ9sYYKwfLFuj71kbKMyiAdFdXvsPb32hB8uPZM3TKpvYnbocrS3hsYvPGg1TKQ7NUm0RYOCUcIzP2Y2UagANz7zfri=/kisspng-suzuki-car-logo-cdr-suzuki-logo-5b248fbfebc0f6.4704225915291227519657.png',
        name:'Suzuki',
        codename:'suzuki'
    },
    {
        id:4,
        image:'https://logowik.com/content/uploads/images/kia-motors-new-20211718.jpg',
        name:'Kia',
        codename:'kia'
    },
    {
        id:5,
        image:'https://logowik.com/content/uploads/images/peugeot-2021-new-black3853.jpg',
        name:'Peugeot',
        codename:'peugeot'
    },
    {
        id:6,
        image:'https://www.freepnglogos.com/uploads/mercedes-logo-png/mercedes-logo-mercedes-benz-logo-png-transparent-svg-vector-bie-13.png',
        name:'Mercedes Benz',
        codename:'mercedes-benz'
    },
    {
        id:7,
        image:'https://inkythuatso.com/uploads/thumbnails/800/2021/10/logo-vinfast-inkythuatso-21-11-22-46.jpg',
        name:'Vinfast',
        codename:'vinfast'
    },
    {
        id:8,
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/600px-BMW.svg.png',
        name:'BMW',
        codename:'bmw'
    },
    {
        id:9,
        image:'https://phucvietauto.com/wp-content/uploads/2023/03/ford-logo-png-1024x400.png',
        name:'Ford',
        codename:'ford'
    },
]
</script>

<style scoped>
.flicking-viewport{
    @apply !h-fit
}
</style>