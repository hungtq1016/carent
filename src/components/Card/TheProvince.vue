<template>
    <label :for="province.codename" class="peer-checked:border-4 peer-checked:border-amber-600 block rounded-md box-border hover:border-4 hover:border-gray-400">
       <div class="min-h-[384px] relative">
        <img :src="`https://picsum.photos/400/500?rand=${province.code}`" :alt="province.name"
        class="object-contain max-h-96 w-full rounded-md">
        <div class="absolute bottom-2 inset-x-2">
            <div class="px-4 py-2 bg-black/50 rounded-md">
                <div class="text-xl font-semibold text-white ">{{ province.name }}</div>
                <div class="text-sm text-white">{{ Math.floor(Math.random()*1000+100) }}+ xe</div>
            </div>
        </div>
       </div>
    </label>
</template>

<script setup lang="ts">
    const props = defineProps(['province'])
</script>

