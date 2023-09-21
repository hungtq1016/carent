<template>
    <RouterLink :to="`/find?province=${province}&district=${district.slug}`" class="px-1">
        <div class="px-4 py-2 bg-black/50 rounded-md whitespace-nowrap dark:bg-gray-800">
                <div class="text-xl font-semibold text-white dark:text-gray-200">{{ district.name }}</div>
                <div class="text-sm text-white dark:text-slate-100">{{ district.car_count }}+ xe</div>
            </div>
    </RouterLink>
</template>

<script setup lang="ts">
    const props = defineProps(['district','province'])
</script>

