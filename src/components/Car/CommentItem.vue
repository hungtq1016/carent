<template>
    <div class="flex justify-between relative flex-row pt-2">
        <div class="basis-10">
            <img class="rounded-full object-cover w-10" :src="`https://picsum.photos/50/50?rand=${comment.user.id}`"
                :alt="comment.user.name">
        </div>
        <div class="basis-[calc(100%-45px)]">
            <div class="flex flex-col gap-y-1 bg-gray-100 rounded pl-3 pr-1 py-1 w-fit">
                <div class="font-medium">{{ comment.user.name }}</div>
                <div class="text-gray-700 text-sm">{{ comment.content }}</div>
            </div>
            <div class="flex justify-between mt-0.5">
                <div class="flex gap-x-2 ">
                    <button class="text-sm font-bold text-gray-600">Thích</button>
                    <button class="text-sm font-bold text-gray-600">Trả lời</button>
                </div>
                <div>
                    
                </div>
            </div>
            <CommentItem v-for="sub in comment.children" :comment="sub"/>
        </div>
        <div v-if="comment.hasChild" class="absolute top-10 bottom-1 left-5 w-5 -z-[1] border-l-2 border-b-2 rounded-bl-lg"></div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps(['comment'])

</script>
