<template>
    <section class="py-10 dark:bg-zinc-950 dark:text-gray-100" id="post">
        <div class="max-w-screen-xl xl:mx-auto lg:mx-8 md:mx-6 mx-4">
            <h3 class="text-4xl font-bold text-center dark:text-gray-200">Bài Viết</h3>
            <div class="font-normal text-lg text-gray-600 text-center mt-3 dark:text-gray-100">Chia sẻ đến từ các thành viên có kinh nghiệm.</div>
            <div class="flex flex-col gap-y-2 py-5">
                <BlogItem v-for="blog in blogs " :blog="blog" :key="blog.id"/>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useFetch } from '@vueuse/core';
import BlogItem from './BlogItem.vue';
import { URL } from '@/lib/fetch';
import { ref } from 'vue';

const blogs = ref()
const fetchBlog =  async () => {
    const {data} = await useFetch(URL+'/blog').get().json()
    blogs.value = data.value.data
}
fetchBlog()
// const blogs = [
//     {
//         id:1,
//         title:'ABc',
//         date:'2020/01/03',
//         status:1,
//         sortContent:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi porro neque dolor velit fugiat ut esse aliquam ex quasi, veritatis quas saepe dicta quidem debitis doloremque aliquid delectus tempora sit?'
//     },
//     {
//         id:2,
//         title:'BCD',
//         date:'2020/01/03',
//         status:3,
//         sortContent:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi porro neque dolor velit fugiat ut esse aliquam ex quasi, veritatis quas saepe dicta quidem debitis doloremque aliquid delectus tempora sit?'
//     },
//     {
//         id:3,
//         title:'12adsdas',
//         date:'2020/01/03',
//         status:2,
//         sortContent:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi porro neque dolor velit fugiat ut esse aliquam ex quasi, veritatis quas saepe dicta quidem debitis doloremque aliquid delectus tempora sit?'
//     },
//     {
//         id:4,
//         title:'asdasd',
//         date:'2020/01/03',
//         status:1,
//         sortContent:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi porro neque dolor velit fugiat ut esse aliquam ex quasi, veritatis quas saepe dicta quidem debitis doloremque aliquid delectus tempora sit?'
//     }
// ]

</script>
