<template>
  <section class="py-10 dark:bg-zinc-900 min-h-screen">
    <div class="max-w-screen-xl mx-4 md:mx-8 lg:mx-auto ">
      <div class="divide-gray-900/10 dark:divide-gray-100">
        <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-gray-100">Câu hỏi thường gặp</h2>
        <dl class="mt-10 space-y-6 divide-y divide-gray-900/10 dark:divide-gray-100">
          <Disclosure as="div" v-for="faq in faqs" :key="faq.title" class="pt-6" v-slot="{ open,active }">
            <dt>
              <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-900 dark:text-gray-100" :class="{'!text-amber-600':open}">
                <span class="text-base font-semibold leading-7">{{ faq.title }}</span>
                <span class="ml-6 flex h-7 items-center">
                  <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
                  <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base leading-7 text-gray-800 dark:text-gray-200" v-html="faq.answer"></p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </section>
</template>
  
<script setup lang="ts">
import { URL } from '@/lib/fetch';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'
import { useFetch } from '@vueuse/core';
import { ref } from 'vue';

const faqs = ref()
const fetchFaQ = async () => {
  const { data } = await useFetch(URL + '/faq').get().json()
  faqs.value = data.value.data
}

fetchFaQ()
// const faqs = [
//   {
//     question: "What's the best thing about Switzerland?",
//     answer:
//       "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
//   },
//   // More questions...
// ]
</script>