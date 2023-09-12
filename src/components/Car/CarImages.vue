<template>
    <div class="grid grid-cols-3 gap-x-3">
        <div class="col-span-2">
            <Flicking ref="flicking0" class="!h-[600px]"
            :options="{ circular:true,panelsPerView:1 ,adaptive: true }" :plugins="plugins">
                <ImageThumb v-for="(image,index) in images" :image="image" :key="index"/>
            </Flicking>
        </div>
        <div class="col-span-1">

            <Flicking ref="flicking1" class="!h-[600px] w-full slider"
            :options="{circular:true, moveType: 'freeScroll', horizontal: false,panelsPerView:3 }">
                <ImageSlide v-for="(image,index) in images" :image="image" :key="index"/>
            </Flicking>
        </div>
    </div>
</template>

<script setup lang="ts">

import { Sync, AutoPlay } from "@egjs/flicking-plugins";
import Flicking from "@egjs/vue3-flicking";
import { onMounted, ref } from 'vue';
import ImageThumb from './ImageThumb.vue';
import ImageSlide from "./ImageSlide.vue";

const flicking0 = ref();
const flicking1 = ref();
const plugins = ref();

const props = defineProps(['images'])

onMounted(() => {
    plugins.value = [new Sync({
        type: 'index',
        synchronizedFlickingOptions: [
            {
                flicking: flicking0.value,

                isSlidable: true
            },
            {
                flicking: flicking1.value,
                isClickable: true,
                activeClass: 'grayscale',
                isSlidable: true

            }
        ]
    }),new AutoPlay({ duration: 5000, direction: "NEXT", stopOnHover: true})];
});
</script>
<style>
.slider .flicking-camera{
    @apply !space-y-3
}
.flicking-viewport {
  transition: height 500ms;
}
</style>