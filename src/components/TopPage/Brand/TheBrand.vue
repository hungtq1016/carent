<template>
    <section class="pt-40 pb-10 dark:bg-zinc-900 dark:text-gray-100">
        <div class="max-w-screen-xl lg:mx-auto md:mx-8 mx-4">
            <h3 class="text-4xl font-bold text-center dark:text-gray-200">Hãng Xe</h3>
            <div class="font-normal text-lg text-gray-600 text-center mt-3 dark:text-gray-100">Tìm hãng xe ưa thích của bạn.</div>
            <div class="py-10 min-h-[240px]">
                <Flicking :options="{ align: 'prev', circular: true ,panelsPerView: 6, adaptive: true }" :plugins="plugins" >
                    <BrandItem  v-for="(brand,index) in brandStore.brands" :key="brand.id" :brand="brand"/>
                </Flicking>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Flicking from "@egjs/vue3-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import { useBrands } from "@/stores/brands";
import  BrandItem from "./BrandItem.vue";
const plugins = [new AutoPlay({ duration: 5000, direction: "NEXT", stopOnHover: true})];

const brandStore = useBrands()

</script>

<style scoped>
.flicking-viewport{
    @apply !h-fit
}
</style>@/stores/brands