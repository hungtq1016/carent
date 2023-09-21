<template>
    <div class="flex justify-between relative flex-row pt-2">
        <div class="basis-10">
            <img class="rounded-full object-cover w-10" :src="`https://picsum.photos/50/50?rand=${comment.user.id}`"
                :alt="comment.user.name">
        </div>
        <div class="basis-[calc(100%-45px)]">
            <div class="flex flex-col gap-y-1 bg-gray-100 dark:bg-zinc-700 rounded pl-3 pr-2 py-1 w-fit">
                <div class="font-medium dark:text-gray-200 dark:font-medium">{{ comment.user.name }}</div>
                <div class="text-gray-700 text-sm dark:text-gray-100">{{ comment.content }}</div>
            </div>
            <div class="flex gap-x-2 mt-0.5 ">
                <button @click="toggleLike" class="text-sm font-medium text-gray-600 dark:text-gray-100"
                    :class="{ '!text-sky-600 !font-bold': isLike}">Thích</button>
                <button class="text-sm font-medium text-gray-600 dark:text-gray-100">Trả lời</button>
                <div v-if="countLike > 0" class="text-sm font-medium text-gray-600 dark:text-gray-100">
                    {{ countLike }} lượt thích
                </div>
                <div class="text-sm text-gray-600 font-medium dark:text-gray-100">
                    {{ formatDistance(parseISO(comment.created_at), new Date(), { addSuffix: true, locale: vi }) }}
                </div>
            </div>
            <CommentLoading v-if="isFetch" :count="countChild" />
            <template v-else>
                <button @click="fetchChildren" v-if="children.length == 0 && comment.hasChild"
                    class="text-sm text-gray-600 dark:text-gray-100">Xem thêm {{ countChild }} bình luận còn lại</button>
                <template v-else>
                    <TheComment v-for="sub in children" :comment="sub" />
                </template>
            </template>

        </div>
        <div v-if="comment.hasChild" class="absolute top-10 bottom-1 left-5 w-5 -z-[1] border-l-2 border-b-2 rounded-bl-lg border-gray-900">
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IComment } from '@/lib/interface';
import { formatDistance, parseISO } from 'date-fns';
import { vi } from 'date-fns/locale';
import CommentLoading from '../Loading/CommentLoading.vue';
import { URL } from '@/lib/fetch';
import { useDark, useFetch } from '@vueuse/core';
import useAuthen from '@/lib/hook/useAuthen';
import useUser from '@/lib/hook/useUser';
import { computed, onMounted, ref } from 'vue';
import { toast } from 'vue3-toastify';
import type { IUser } from '@/lib/interface'
const props = defineProps(['comment', 'post_id'])


const user_like = ref<Array<Partial<IUser>>>([])
const children = ref<Array<IComment>>([])
const isFetch = ref(false)
const isAuthen = useAuthen()
const user = useUser()
const isDark = useDark()

onMounted(async () => {
    user_like.value = props.comment.likes
    children.value = props.comment.children    
})

const fetchChildren = async () => {
    isFetch.value = true
    const { data, error, isFetching } = await useFetch(`${URL}/comment?parent_id=${props.comment.id}&post_id=${props.post_id}`).get().json()
    children.value = data.value.data
    isFetch.value = false
}

const isLike = computed(() =>user_like.value.some(person => person.id == user.id))
const countLike = computed(() => user_like.value.length)
const countChild = computed(() => (props.comment.right - props.comment.left - 1) / 2)

const toggleLike = async () => {
    if (!isAuthen) {
        toast('Yêu cầu đăng nhập', {
            autoClose: 1000,
            type: 'error',
            theme: isDark.value ? 'dark' : 'light'
        });
    } else {
        let payload = {
            post_id: props.comment.id,
            user_id: user.id,
            like: !isLike.value,
            type: 'comment'
        }
        const { data, isFinished } = await useFetch(`${URL}/like`).post(payload).json()
        user_like.value = data.value.data
    }
}
</script>
