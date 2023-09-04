<template>
    <header>
        <div class="max-w-screen-xl mx-auto">
            <div class="flex justify-between items-center py-5">
                <RouterLink to="/" >
                    <img src="/logo.png" alt="Logo company" >
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
                    <div class="border-2 border-amber-600 h-fit"></div>
                    <div class="flex gap-x-2 items-center">
                        <RouterLink 
                        class="font-bold"
                        to="/login">Đăng Nhập</RouterLink>
                        <RouterLink 
                        class="px-4 py-2 rounded-md bg-amber-600 text-amber-50 font-bold"
                        to="/about-us">Đăng Ký</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

</script>
