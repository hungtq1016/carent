<template>
    <div>
        <div class="flex items-center gap-x-1"  v-for="(rate, index) in rating.star">
        <div class="flex items-center gap-x-px w-8 justify-between">
            <span class="text-gray-900 dark:text-gray-100">{{ index + 1 }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 fill-yellow-400">
                <path fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd" />
            </svg>

        </div>
        <div class="w-80 h-2 rounded-full bg-gray-300 dark:bg-gray-100">
            <div :style="{ width: `${(rate / rating.total) * 100}%` }" class="h-2 bg-yellow-400 rounded-l-full"
                :class="{ 'rounded-r-full': (rate / rating.total) * 100 == 100 }"></div>
        </div>
        <div class="flex gap-x-px w-14 justify-end text-sm text-gray-600 dark:text-gray-100">
            <span>{{ rate }}</span> /
            <span>{{ rating.total }}</span>
        </div>
    </div>
    </div>
</template>

<script setup lang="ts">
const props =defineProps(['rating'])
</script>

