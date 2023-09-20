<template>
    <div class="flex justify-between relative flex-row pt-2">
        <div class="basis-10">
            <img class="rounded-full object-cover w-10" :src="`https://picsum.photos/50/50?rand=${comment.user.id}`"
                :alt="comment.user.name">
        </div>
        <div class="basis-[calc(100%-45px)]">
            <div class="flex flex-col gap-y-1 bg-gray-100 dark:bg-gray-600 rounded pl-3 pr-2 py-1 w-fit">
                <div class="font-medium dark:text-slate-200 dark:font-medium">{{ comment.user.name }}</div>
                <div class="text-gray-700 text-sm dark:text-slate-100">{{ comment.content }}</div>
                
            </div>
            <div class="flex gap-x-2 mt-0.5 ">
                <button @click="()=>Swal.fire( 'Tính năng đang cải tiến.', '','warning' )"
                class="text-sm font-medium text-gray-600 dark:text-gray-100">Thích</button>
                <button class="text-sm font-medium text-gray-600 dark:text-gray-100">Trả lời</button>
                <div v-if="comment.like_count>0" class="text-sm font-medium text-gray-600 dark:text-gray-100">
                    {{comment.like_count}} lượt thích
                </div>
                <div class="text-sm text-gray-600 font-medium dark:text-gray-100">
                    {{ formatDistance(parseISO(comment.created_at), new Date(), { addSuffix: true,locale:vi }) }}
                </div>
            </div>
            <CommentLoading v-if="isFetch" :count="countCommentChild"/>
            <template v-else>
                <button @click="fetchChildren"
                v-if="children.length == 0 && comment.hasChild" 
                class="text-sm text-gray-600 dark:text-gray-100">Xem thêm {{ countCommentChild }} bình luận còn lại</button>
                <template v-else>
                    <CommentItem v-for="sub in children" :comment="sub"/>
                </template>
            </template>
            
        </div>
        <div v-if="comment.hasChild" class="absolute top-10 bottom-1 left-5 w-5 -z-[1] border-l-2 border-b-2 rounded-bl-lg"></div>
    </div>
</template>

<script setup lang="ts">
import type { IComment } from '@/lib/interface';
import { useFetch } from '@vueuse/core';
import { formatDistance, parseISO } from 'date-fns';
import { vi } from 'date-fns/locale';
import { ref } from 'vue';
import Swal from 'sweetalert2'
import CommentLoading from '../Loading/CommentLoading.vue';

const props = defineProps(['comment','post_id'])
const children = ref<Array<IComment>>([])
const isFetch = ref(false)
const countCommentChild = (props.comment.right - props.comment.left -1)/2
children.value = props.comment.children
const fetchChildren = async() =>{
    isFetch.value = true
    const {data,error,isFetching} = await useFetch(`http://localhost:8000/api/comment?parent_id=${props.comment.id}&post_id=${props.post_id}`).get().json()
    children.value = data.value.data
    isFetch.value =false            
}
</script>
