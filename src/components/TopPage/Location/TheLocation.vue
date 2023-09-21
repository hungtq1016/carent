<template>
    <section class="py-10 bg-gray-50 dark:bg-zinc-950 dark:text-gray-100">
        <div class="max-w-screen-xl mx-auto">
            <h3 class="text-4xl font-bold text-center dark:text-gray-200">Địa Điểm</h3>
            <div class="font-normal text-lg text-gray-600 text-center mt-3 dark:text-gray-100">Hệ thống phát triển toàn quốc.</div>
            <div class="py-5 relative">
                <Flicking :options=optionProvince :plugins=pluginsProvince>
                    <template v-for="(province, index) in provinceStore.provinces" :key="index">
                        <div class="px-1 group">
                            <input type="radio" name="province" class="peer hidden" :id="province.slug"
                                v-model="carStore.province" :value="province">
                            <TheProvince :province="province" />
                        </div>

                    </template>
                    <template #viewport>
                        <div class="flex absolute z-[2] top-1/2 -translate-y-1/2 inset-x-1 justify-between">
                            <button class="flicking-arrow-prev p-3 bg-amber-100 rounded-md border border-amber-100 hover:border-amber-600 duration-300  ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" class="w-6 h-6 stroke-amber-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button class="flicking-arrow-next p-3 bg-amber-100 rounded-md border border-amber-100 hover:border-amber-600 duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" class="w-6 h-6 stroke-amber-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>

                        </button>
                        </div>
                    </template>
                </Flicking>
            </div>
            <TheDistricts v-if="provinceStore.districts.length>1" :districts="provinceStore.districts" :province="carStore.province"/>
        </div>
    </section>
</template>

<script setup lang="ts">
import Flicking from "@egjs/vue3-flicking";
import { AutoPlay, Arrow } from "@egjs/flicking-plugins";
import TheDistricts from "./TheDistricts.vue";
import TheProvince from "@/components/Card/TheProvince.vue";
import { useProvinces } from "@/stores/provinces";
import { useCars } from "@/stores/cars";

const pluginsProvince = [new AutoPlay({ duration: 60000, direction: "NEXT", stopOnHover: true }), new Arrow()];
const optionProvince = { align: 'center', circular: true, panelsPerView: 4, defaultIndex: 49, noPanelStyleOverride: true }

const provinceStore = useProvinces()
const carStore = useCars()
</script>

<style scoped>
.scroll-bar {
    scrollbar-width: none;
    -ms-overflow-style: none;
    box-sizing: content-box; 
}
.scroll-bar::-webkit-scrollbar { width: 0 !important }

</style>@/lib/fetch/getCars@/stores/provinces