<template>
  <header class="bg-white dark:bg-zinc-700">
    <nav class="mx-4 md:mx-6 lg:mx-8 xl:mx-auto flex max-w-screen-xl items-center justify-between py-6" aria-label="Global">
      <div class="flex">
        <RouterLink to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Carent</span>
          <div class="text-4xl font-['Roboto'] font-bold text-amber-600 h-[45px]">Carent</div>
        </RouterLink>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
          @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <RouterLink to="/" class="text-sm md:text-base xl:text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100 px-2 py-1 nav-item">Trang Chủ</RouterLink>
        <RouterLink to="/find" class="text-sm md:text-base xl:text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100 px-2 py-1 nav-item">Tìm Xe</RouterLink>
        <RouterLink to="/about-us" class="text-sm md:text-base xl:text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100 px-2 py-1 nav-item">Về Chúng Tôi</RouterLink>
        <RouterLink to="/faq" class="text-sm md:text-base xl:text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100 px-2 py-1 nav-item">Hỏi Đáp</RouterLink>
      </div>
      <TheAuthen/>   
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-zinc-800 dark:shadow px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Carent</span>
            <div  class="text-2xl font-['Roboto'] font-bold text-amber-600 h-[45px]">Carent</div>
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <RouterLink to="/" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200">Trang Chủ</RouterLink>
              <RouterLink to="/find" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200">Tìm Xe</RouterLink>
              <RouterLink to="/about-us" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200">Về Chúng Tôi</RouterLink>
              <RouterLink to="/faq" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200">Hỏi Đáp</RouterLink>
            </div>
            <div class="py-6">
              <TheAuthenMobile/>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel, } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, } from '@heroicons/vue/24/outline'
import TheAuthen from './TheAuthen.vue';
import TheAuthenMobile from './TheAuthenMobile.vue';


const mobileMenuOpen = ref(false)
</script>
<style scoped>
.nav-item:not(.router-link-active.router-link-exact-active){
    @apply relative
    before:content-[''] before:absolute before:top-0 before:left-0 before:bottom-1/2 before:right-3/4 before:border-t-2 before:border-l-2 before:border-amber-600 hover:before:right-0 hover:before:bottom-0 before:duration-500
    after:content-[''] after:absolute after:top-1/2 after:left-3/4 after:bottom-0 after:right-0 after:border-b-2 after:border-r-2 after:border-amber-600 hover:after:left-0 hover:after:top-0 after:duration-500
}
.nav-item.router-link-active{
    @apply relative
    before:content-[''] before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:border-t-2 before:border-l-2 before:border-amber-600 before:duration-500
    after:content-[''] after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:border-b-2 after:border-r-2 after:border-amber-600 after:duration-500
}
</style>