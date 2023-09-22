<template>
    <template v-if="isAuthen">
        <TheUser :user="user"/>
    </template>
    <template v-else>
        <div class="flex gap-x-2 items-center">
            <RouterLink class="font-bold" to="/login">Đăng Nhập</RouterLink>
            <RouterLink class="px-4 py-2 rounded-md bg-amber-600  text-gray-100 font-bold " to="/register">Đăng Ký
            </RouterLink>
            <button @click="toggleDark()">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                    stroke="currentColor" class="w-6 h-6 te">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>

            </button>
        </div>
    </template>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import TheUser from './TheUser.vue';
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)

const{user,isAuthen} = inject<any>('user')
</script>

<style scoped></style>