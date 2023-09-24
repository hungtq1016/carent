<template>
    <div class="flex gap-y-px flex-col">
        <template v-if="isAuthen">
            <div class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200">
                Xin chào! {{ user.name }}
            </div>
            <RouterLink
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200"
                to="/user/history">Lịch Sử</RouterLink>
            <RouterLink
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200"
                to="/user/favorite">Yêu Thích</RouterLink>
            <RouterLink
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200"
                to="/#">Đăng Xuất</RouterLink>
        </template>
        <template v-else>
            <RouterLink
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200"
                to="/login">Đăng Nhập</RouterLink>
            <RouterLink
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-amber-600 hover:bg-gray-50"
                to="/register">Đăng Ký
            </RouterLink>
        </template>
        <button @click="toggleDark()"  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                class="w-6 h-6 te">
                <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>

        </button>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)

const { user, isAuthen } = inject<any>('user')
</script>

<style scoped></style>