<template>
   <div class="rounded-md">
    <Flicking :options="{ align: 'prev', circular: true }" :plugins="plugins">
        <template v-for="car in cars" :key="car.id">
            <div class=" flex items-center rounded-md flicking-panel" :style="{ backgroundColor: car.bgColor, }">
                <img :src="car.image" :alt="car.name"
                class="aspect-HD max-h-96">
            </div>
        </template>
    </Flicking>
   </div>
</template>

<script setup>
import Flicking from "@egjs/vue3-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";

const plugins = [new AutoPlay({ duration: 3000, direction: "NEXT", stopOnHover: false })];

const cars = [
    {
        id:1,
        bgColor:'rgb(255,0,0,.2)',
        name:'random',
        image:'https://purepng.com/public/uploads/large/purepng.com-red-toyota-ft1-sports-carcarvehicletransporttoyotasports-car-961524645072laitz.png'
    },
    {
        id:2,
        bgColor:'rgb(148,183,7,.2)',
        name:'random',
        image:'https://cdn.pixabay.com/photo/2020/11/25/16/09/car-5776306_1280.png'
    }
]
</script>
