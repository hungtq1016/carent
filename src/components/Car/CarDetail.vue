<template>
    <div class="grid grid-cols-3 py-5">
        <div class="cols-span-2">
            <div class="flex flex-col">
                <div class="text-4xl font-semibold capitalize">{{ info.name }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const  props=  defineProps(['info'])

</script>
