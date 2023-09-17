<template>
    <div class="grid grid-cols-2 gap-2">
        <BrandModalItem v-for="brand in brandStore?.brands" :brand="brand" @closeModal="()=>{emit('closeModal')}"/>
    </div>
</template>

<script setup lang="ts">
import {useBrands} from '@/stores/brands';
import BrandModalItem from './BrandModalItem.vue';

const brandStore = useBrands()
const emit = defineEmits(['closeModal'])
</script>
