<template>
    <header class="dark:bg-slate-900 dark:text-slate-100">
        <div class="max-w-screen-xl mx-auto">
            <div class="flex justify-between items-center py-5">
                <RouterLink to="/" >
                    <img src="/logo.png" alt="Logo company" v-if="!isDark">
                    <div v-else class="text-4xl font-['Roboto'] font-bold text-amber-600 h-[45px]">Carent</div>
                </RouterLink>
                <div class="flex items-center gap-x-5">
                    <div class="flex items-center gap-x-5 ">
                        <RouterLink 
                        class="nav-item"
                        to="/about-us">Về Chúng Tôi</RouterLink>
                        <RouterLink 
                        class="nav-item"
                        to="/faq">Hỏi Đáp</RouterLink>
                    </div>
                    <div class="border-2 border-amber-600 dark:border-amber-100 h-fit"></div>
                    <div class="flex gap-x-2 items-center">
                        <RouterLink 
                        class="font-bold"
                        to="/login">Đăng Nhập</RouterLink>
                        <RouterLink 
                        class="px-4 py-2 rounded-md bg-amber-600  text-amber-50 font-bold dark:bg-amber-100 dark:text-amber-600"
                        to="/about-us">Đăng Ký</RouterLink>
                    </div>
                    <button @click="toggleDark()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 te">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>

                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style scoped>

.nav-item{
    @apply relative font-bold px-2 py-1
    before:content-[''] before:absolute before:top-0 before:left-0 before:bottom-1/2 before:right-3/4 before:border-t-2 before:border-l-2 before:border-amber-600 hover:before:right-0 hover:before:bottom-0 before:duration-500
    after:content-[''] after:absolute after:top-1/2 after:left-3/4 after:bottom-0 after:right-0 after:border-b-2 after:border-r-2 after:border-amber-600 hover:after:left-0 hover:after:top-0 after:duration-500
}

</style>