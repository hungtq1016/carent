<template>
    <section class="py-5 dark:bg-zinc-950" :class="{'!py-2':loop==4}">
        <div class="max-w-screen-xl xl:mx-auto lg:mx-8 md:mx-6 mx-4 animate-pulse">
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
                <div class="rounded-md h-[490px] bg-gray-100 p-4 dark:bg-zinc-700" v-for="i in loop">
                    <div class="bg-gray-200 h-[300px] flex items-center justify-center dark:bg-zinc-800">
                        <svg class="w-10 h-10 fill-gray-400 dark:fill-zinc-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path
                            d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
const props = defineProps({
    loop:{
        type:Number,
        default:4
    }
})
</script>