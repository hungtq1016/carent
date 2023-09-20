<template>
    <Flicking :options="{ circular: true, align: 'center' }" :plugins="plugins">
        <RouterLink :to="`/find?province=all`" class="px-1">
            <div class="px-4 py-2 bg-black/50 rounded-md whitespace-nowrap dark:bg-gray-600">
                <div class="text-xl font-semibold text-white dark:text-slate-200">Tất Cả</div>
                <div class="text-sm text-white invisible dark:text-slate-100">0</div>
            </div>
        </RouterLink>
        <TheDistrict :district="district" v-for="(district, index) in districts" :key="index" :province="province.slug"/>
        <template #viewport>
            <span class="flicking-arrow-prev"></span>
            <span class="flicking-arrow-next"></span>
        </template>
    </Flicking>
</template>

<script setup lang="ts">
import Flicking from "@egjs/vue3-flicking";
import { AutoPlay, Arrow } from "@egjs/flicking-plugins";
import TheDistrict from '@/components/Card/TheDistrict.vue';
const plugins = [new AutoPlay({ duration: 5000, direction: "NEXT", stopOnHover: true }), new Arrow()];
const props = defineProps(['districts','province'])
</script>
