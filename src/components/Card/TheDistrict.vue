<template>
    <RouterLink :to="`/find?province=${province}&district=${district.codename}`" class="px-1">
        <div class="px-4 py-2 bg-black/50 rounded-md whitespace-nowrap">
                <div class="text-xl font-semibold text-white ">{{ district.name }}</div>
                <div class="text-sm text-white">{{ Math.floor(Math.random()*1000+100) }}+ xe</div>
            </div>
    </RouterLink>
</template>

<script setup lang="ts">
    const props = defineProps(['district','province'])
</script>

