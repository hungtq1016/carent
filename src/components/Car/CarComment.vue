<template>
   <div class="text">
        <CommentItem v-for="comment in comments" :comment="comment" />
   </div>
</template>

<script setup lang="ts">
import { useFetch } from '@vueuse/core';
import type { IComment } from '@/lib/interface';
import { onMounted, ref } from 'vue';
import CommentItem from './CommentItem.vue';
const props = defineProps(['post_id'])
const comments = ref<Array<IComment>>([])

onMounted(async ()=>{
    const {data,error,isFetching} = await useFetch(`http://localhost:8000/api/comment?post_id=${props.post_id}`).get().json()
    comments.value = data.value.data    
})


</script>
