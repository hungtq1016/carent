<template>
    <div class="">
        <button @click="()=>{openModal(),toggle()}"
            class="lg:px-3 rounded-md lg:border py-2 lg:py-1 border-gray-600 hover:border-amber-600 duration-300 group dark:border-slate-100 dark:hover:border-gray-400" :class="{'!border-amber-600':isActive}">
            <div class="flex gap-x-2 items-center">
                <div v-html="filter.icon" :class="{'active':isActive}"></div>
                <div class="text-gray-600 group-hover:text-amber-600 duration-300 dark:text-gray-100 dark:group-hover:text-gray-400" :class="{'!text-amber-600':isActive}">
                    {{ filter.name }}
                </div>
            </div>
        </button>
    </div>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10 ov">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-scroll">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-xl transform overflow-hidden rounded-md bg-white dark:bg-zinc-800 dark:shadow-zinc-900 p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle as="h3" class="text-lg font-semibold leading-6 text-gray-900 capitalize pb-3 dark:text-gray-100 flex items-center justify-between">
                                {{ filter.name }}
                                <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                            @click="closeModal">
                            <span class="sr-only">Close menu</span>
                            <XMarkIcon class="h-6 w-6 text-gray-900 dark:text-gray-100" aria-hidden="true" />
                        </button>
                            </DialogTitle>
                          
                            <component :is="name" @closeModal="closeModal"/>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from 'vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle, } from '@headlessui/vue'
import { useCars } from '@/stores/cars';
import { XMarkIcon } from '@heroicons/vue/24/outline';
const props = defineProps(['filter'])

const name = computed (() => defineAsyncComponent(() => import(`@/components/Modal/${props.filter?.nameModal}.vue`)))
const isOpen = ref<boolean>(false)
const carsStore = useCars()
const isActive = false
const toggle = ()=>{
    if (props.filter.value == 'electric-car') {
        carsStore.query.fuel_type = isActive? 'all' :3
    }
}
function closeModal() {
    isOpen.value = false
}
function openModal() {
    props.filter.isOpenModal ?  isOpen.value = true :''
}
</script>

<style>
.active> svg{
    @apply !fill-amber-600
}
</style>