<template>
    <RouterLink to="#">
        <div class="flex flex-col md:flex-row md:items-center py-3 border-b gap-2 dark:border-gray-600">
            <div class="text-sm font-bold">
                <div class="w-32 text-center py-2 bg-amber-100 text-amber-600 rounded-md dark:bg-amber-600/40 dark:text-amber-100"
                v-if="blog.status == 1">
                    Bài Viết
                </div>
                <div class="w-32 text-center py-2 bg-lime-100 text-lime-600 rounded-md dark:bg-lime-600/40 dark:text-lime-100"
                v-if="blog.status == 2">
                    Kiến Thức
                </div>
                <div class="w-32 text-center py-2 bg-sky-100 text-sky-600 rounded-md dark:bg-sky-600/40 dark:text-sky-100"
                v-if="blog.status == 3">
                    Kinh Nghiệm
                </div>
            </div>
            <div class="font-medium text-sm dark:text-gray-100 whitespace-nowrap">
                {{ format(new Date(blog.created_at),'dd-MM-yyyy',{locale:vi}) }}
            </div>
            <div class="font-bold dark:text-gray-200 line-clamp-1">
                {{ blog.title }}
            </div>
        </div>
    </RouterLink>
    
</template>

<script setup lang="ts">
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

const props= defineProps(['blog'])
</script>
