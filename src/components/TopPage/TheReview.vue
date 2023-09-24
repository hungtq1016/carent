<template>
   <div class="hidden lg:block">
    <Flicking :options="{ align: 'prev', circular: true ,autoResize: true}" :plugins="plugins">
        <ReviewItem v-for="car in cars" :key="car.id" :item="car"/>
    </Flicking>
   </div>
</template>

<script setup lang="ts">
import Flicking from "@egjs/vue3-flicking";
import ReviewItem from './ReviewItem.vue';
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
    },
    {
        id:3,
        bgColor:'rgb(245,164,98,.2)',
        name:'random',
        image:'https://purepng.com/public/uploads/large/purepng.com-ford-edge-orange-carcarvehicletransportford-961524663681g54st.png'
    }
]
</script>

<style scoped>
.flicking-viewport{
    @apply rounded-md
}
</style>