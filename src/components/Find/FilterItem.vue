<template>
    <div class="">
        <button @click="openModal"
            class="px-3 rounded-md border py-1 border-gray-600 hover:border-amber-600 duration-300 group">
            <div class="flex gap-x-2 items-center">
                <div v-html="filter.icon"></div>
                <div class="text-gray-600 group-hover:text-amber-600 duration-300">
                    {{ filter.name }}
                </div>
            </div>
        </button>
    </div>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-xl transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle as="h3" class="text-lg font-semibold leading-6 text-gray-900 capitalize pb-3">
                                {{ filter.name }}
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
const props = defineProps(['filter'])

const name = computed (() => defineAsyncComponent(() => import(`@/components/Modal/${props.filter?.nameModal}.vue`)))
const isOpen = ref<boolean>(false)

function closeModal() {
    isOpen.value = false
}
function openModal() {
    props.filter.isOpenModal ?  isOpen.value = true :''
}
</script>
