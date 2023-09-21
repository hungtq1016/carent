<template>
  <div class="t">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center items-center rounded-md bg-gray-100 px-4 py-1 hover:bg-gray-300 hover:dark:bg-zinc-900 text-gray-900 dark:text-gray-100 dark:bg-zinc-700 duration-500 dark:text-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <div class="flex items-center gap-x-2">
            <img class="rounded-full w-10 h-10" :src="`https://randomuser.me/api/portraits/men/${random}.jpg`" :alt="user.name">
            <span>{{ user.name }}</span>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            class="ml-2 -mr-1 h-5 w-5 text-gray-900 dark:text-gray-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>

        </MenuButton>
      </div>

      <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
        <MenuItems
          class="absolute right-0 mt-2 w-56 z-10 origin-top-right divide-y divide-gray-200 dark:divide-gray-600 rounded-md bg-white dark:bg-zinc-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div class="">
            <MenuItem v-slot="{ active }">
            <button :class="[
              active ? 'bg-amber-500 text-gray-100' : 'text-gray-900 dark:text-gray-100',
              'group flex w-full items-center p-2',
            ]">
                 Xin chào, {{ user.name }} !
            </button>
            </MenuItem>
          </div>
          <div>
            <MenuItem v-slot="{ active }">
            <RouterLink to="/" :class="[
              active ? 'bg-amber-500 text-gray-100' : 'text-gray-900 dark:text-gray-100',
              'group flex w-full items-center p-2',
            ]">
              
              Lịch Sử Đặt Xe
            </RouterLink>
            </MenuItem>
            <MenuItem v-slot="{ active }">
            <RouterLink to="/" :class="[
              active ? 'bg-amber-500 text-gray-100' : 'text-gray-900 dark:text-gray-100',
              'group flex w-full items-center p-2',
            ]">
              Xe Yêu Thích
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
                    stroke="currentColor" class="w-6 h-6 te">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              {{isDark ? 'Tắt':'Bật'}}
            </button>
            </MenuItem>
          </div>
          <div>
            <MenuItem v-slot="{ active }">
            <button :class="[
              active ? 'bg-amber-500 text-gray-100' : 'text-gray-900 dark:text-gray-100',
              'group flex w-full items-center p-2',
            ]">
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
const random = Math.floor(Math.random()*100)
</script>
  