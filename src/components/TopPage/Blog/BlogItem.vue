<template>
    <RouterLink to="#">
        <div class="flex items-center py-3 border-b gap-x-2">
            <div class="text-sm font-bold">
                <div class="w-32 text-center py-2 bg-amber-100 text-amber-600 rounded-md"
                v-if="blog.status == 1">
                    Bài Viết
                </div>
                <div class="w-32 text-center py-2 bg-lime-100 text-lime-600 rounded-md"
                v-if="blog.status == 2">
                    Kiến Thức
                </div>
                <div class="w-32 text-center py-2 bg-sky-100 text-sky-600 rounded-md"
                v-if="blog.status == 3">
                    Kinh Nghiệm
                </div>
            </div>
            <div class="font-medium text-sm">
                {{ blog.date }}
            </div>
            <div class="font-bold">
                {{ blog.title }}
            </div>
        </div>
    </RouterLink>
    
</template>

<script setup lang="ts">
const props= defineProps(['blog'])
</script>
