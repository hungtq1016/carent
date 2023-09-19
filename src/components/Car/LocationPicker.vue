<template>
  <button type="button" v-if="isDelivery" @click="openModal"
    class="rounded-md bg-white border border-gray-200 p-2 text-gray-900 hover:bg-opacity-30 focus:outline-none">
    <div class="text-left font-semibold text-gray-700">Địa điểm nhận xe</div>

    <div class="text-sm text-left text-gray-700">
      <p  class="line-clamp-1 hover:line-clamp-2">{{ rentStore.rent.address }} </p>     
    </div>
  </button>
  <button type="button" v-else
    class="rounded-md bg-white border border-gray-200 p-2 text-gray-900 hover:bg-opacity-30 focus:outline-none">
    <div class="text-left font-semibold text-gray-700">Địa điểm nhận xe</div>

    <div class="text-sm text-left text-gray-700">
      <p  class="line-clamp-1 hover:line-clamp-2">{{ rentStore.rent.address }} </p>     
    </div>
  </button>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-[2]">
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
              class="w-full max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <DialogTitle as="h3" class="text-xl text-center font-semibold leading-6 text-gray-900">
                Địa điểm nhận xe
              </DialogTitle>
              <LocationModal @close-modal="closeModal"/>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import { useRent } from '@/stores/rent';
import LocationModal from '../Modal/LocationModal.vue';
const rentStore = useRent()
const isOpen = ref(false)
const props = defineProps(['isDelivery','address'])
function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}
</script>
  