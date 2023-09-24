<template>
  <div class="t">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center items-center rounded-md text-gray-900 duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <img class="rounded-full w-10 h-10" :src="`https://randomuser.me/api/portraits/men/${random}.jpg`"
            :alt="user.name">
        </MenuButton>
      </div>

      <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
        <MenuItems
          class="absolute right-0 mt-2 w-56 z-50 origin-top-right divide-y divide-gray-200 dark:divide-gray-600 rounded-md bg-white dark:bg-zinc-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div class="">
            <MenuItem v-slot="{ active }">
            <button :class="[
              active ? 'bg-amber-500 text-gray-100' : 'text-gray-900 dark:text-gray-100',
              'group flex w-full items-center p-2 gap-x-2',
            ]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="fill-zinc-600 dark:fill-zinc-100 w-6 h-6 line-clamp-1 hover:line-clamp-2">
                <path fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd" />
              </svg>

              Xin chào, {{ user.name }} !
            </button>
            </MenuItem>
          </div>
          <div>
            <MenuItem v-slot="{ active }">
            <RouterLink to="/user/history" :class="[
              active ? 'bg-amber-500 text-gray-100' : 'text-gray-900 dark:text-gray-100',
              'group flex w-full items-center p-2 gap-x-2',
            ]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                stroke="currentColor" class="w-6 h-6 fill-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>

              Lịch Sử Đặt Xe
            </RouterLink>
            </MenuItem>
            <MenuItem v-slot="{ active }">
            <RouterLink to="/user/favorite" :class="[
              active ? 'bg-amber-500 text-gray-100' : 'text-gray-900 dark:text-gray-100',
              'group flex w-full items-center p-2 gap-x-2',
            ]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6 stroke-rose-600 ">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              Yêu Thích
            </RouterLink>
            </MenuItem>
          </div>
          <div>
            <MenuItem v-slot="{ active }">
            <button :class="[
              active ? 'bg-amber-500 text-gray-100' : 'text-gray-900 dark:text-gray-100',
              'group flex w-full items-center p-2 gap-x-2',
            ]" @click="toggleDark()">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                stroke="currentColor" class="w-6 h-6 stroke-yellow-500 dark:stroke-yellow-400">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
              {{ isDark ? 'Tắt' : 'Bật' }}
            </button>
            </MenuItem>
          </div>
          <div>
            <MenuItem v-slot="{ active }">
            <button :class="[
              active ? 'bg-amber-500 text-gray-100' : 'text-gray-900 dark:text-gray-100',
              'group flex w-full items-center p-2 gap-x-2',
            ]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="stroke-gray-600 dark:stroke-gray-100 w-6 h-6">
                <path fillRule="evenodd"
                  d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                  clipRule="evenodd" />
              </svg>

              Đăng Xuất
            </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>
  
<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
const props = defineProps(['user'])
const random = Math.floor(Math.random() * 100)
</script>
  