<template>
    <section class="py-2">
        <div class="flex gap-x-2 items-center">
            <h4 class="text-xl font-semibold py-2 dark:text-gray-200">Bình Luận</h4>
            <TheQuestion
                answer="Bạn chỉ có thể bình luận sau khi đã thuê xe." />
        </div>
        <TheComment v-for="comment in comments" :comment="comment" :post_id="post_id" />
        <CommentLoading v-if="isFetch" />
        <button @click="fetchComments" v-if="isNext && !isFetch" class="font-medium text-gray-600 mt-3 dark:text-gray-50">Xem thêm bình
            luận</button>
    </section>
</template>

<script setup lang="ts">
import { useFetch } from '@vueuse/core';
import type { IComment } from '@/lib/interface';
import { onMounted, ref } from 'vue';
import TheComment from '@/components/Card/TheComment.vue';
import TheQuestion from '@/components/Card/TheQuestion.vue';
import CommentLoading from '@/components/Loading/CommentLoading.vue';
import { URL } from '@/lib/fetch';
const props = defineProps(['post_id'])
const comments = ref<Array<IComment>>([])
const isNext = ref(false)
const nextPage = ref<number>(1)
const isFetch = ref(false)
onMounted(() => {
    fetchComments()
})

const fetchComments = async () => {
    isFetch.value = true
    const { data} = await useFetch(`${URL}/comment?post_id=${props.post_id}&page=${nextPage.value}`).get().json()
    comments.value = [...comments.value, ...data.value.data]
    if (data.value.meta.current_page < data.value.meta.last_page) {
        isNext.value = true;
        nextPage.value++;
    } else {
        isNext.value = false
    }
    isFetch.value = false
}

</script>
