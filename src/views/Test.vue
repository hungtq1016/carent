<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useFetch, useInfiniteScroll } from '@vueuse/core'

const loading = ref(false)
const items = ref<any[]>([])
const page = ref(1)
const last_page = ref(0)
onMounted(async () => {
    loadMore()
    
})
const loadMore = async () => {
    const {data} = await useFetch(`http://localhost:8000/api/car?page=${page}&brand=bmw`).get().json()
    items.value = [...items.value,...data.value.data]
    last_page.value = data.value.meta.last_page
    console.log(last_page.value);
    
}

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        if (page.value<last_page.value) {
            page.value++;
            loadMore()

        }
    }
};

</script>

<template>
    <div ref="el" class="flex flex-col gap-2 p-4 w-300px bg-gray-500/5 rounded">
        <div v-for="item in items" :key="item" class="h-48 bg-gray-500/5 rounded p-3" id="infinite-list">
            {{ item.info.name }}
            {{ item.id }}
        </div>
    </div>
</template>