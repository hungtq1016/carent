<template>
    <Flicking :options="{ circular: true, align: 'center' }" :plugins="plugins">
        <TheDistrict :district="district" v-for="(district, index) in districts" :key="district.code" />
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
const props = defineProps(['districts'])
</script>
