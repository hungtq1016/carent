<template>
    <section class="py-5 dark:bg-zinc-900">
        <div class="max-w-screen-xl mx-4 md:mx-8 lg:mx-auto">
        <TabGroup>
            <TabList class="flex flex-col md:flex-row border-gray-100 dark:border-slate-400">
                <Tab v-for="category in categories" as="template" :key="category" v-slot="{ selected }">
                    <button :class="[
                        ' py-3 px-0 md:px-4 font-medium md:border-b-2 text-left md:text-center',
                        ' focus:outline-none focus:ring-0',
                        selected
                            ? ' border-amber-600 text-amber-600'
                            : 'text-gray-600 border-gray-100 dark:text-gray-200',
                    ]">
                        {{ category }} <span v-if="category == 'Bình luận'">({{ comment_count }})</span>
                    </button>
                </Tab>
                <div class="flex-auto border-b-2 py-3 border-gray-100 hidden md:block"></div>
            </TabList>

            <TabPanels class="mt-2">
                <TabPanel>
                    <div class="text-gray-600 p-2 dark:text-gray-100"
                    v-html="tabs?.desc"></div>
                </TabPanel>
                <TabPanel as="div" class="overflow-y-auto max-h-[550px]">
                    <TheComment :post_id="car_id"/>
                </TabPanel>
                <TabPanel >
                    <div class="flex gap-x-2 items-center">
                        <h4 class="text-center text-lg lg:text-xl font-semibold dark:text-gray-200">Giấy tờ thuê</h4>
                        <TheQuestion answer="BẢN GỐC tất cả giấy tờ thuê xe khi làm thủ tục nhận xe."/>
                    </div>
                    <div v-if="tabs.isIdentity" class="font-light text-gray-700">Thỏa mãn <span class="text-red-600 font-bold">1</span> trong <span class="font-bold">{{ tabs.identity.length }}</span> điều kiện sau</div>
                    <ul v-if="tabs.isIdentity"
                        class="space-y-1 mt-1 bg-red-100 p-2 border-l-4 border-red-600 rounded w-fit">
                        <li v-for="identity in tabs.identity"
                        class="text-sm text-gray-900">{{ identity }}</li>
                    </ul>
                    <div v-else class="space-y-1 mt-1 bg-red-100 p-2 border-l-4 border-red-600 rounded w-fit text-sm">Không có yêu cầu</div>
                    <div class="flex gap-x-2 items-center">
                        <h4 class="text-center text-lg lg:text-xl font-semibold dark:text-gray-200">Thế Chấp</h4>
                        <TheQuestion answer="Bạn sẽ để lại tài sản thế chấp (tiền mặt/chuyển khoản hoặc xe máy kèm cà vẹt gốc) cho chủ xe khi làm thủ tục nhận xe
                        Chủ xe sẽ gửi lại tài sản thế chấp khi bạn hoàn trả xe theo như nguyên trạng ban đầu lúc nhận xe"/>
                    </div>
                    <ul class="space-y-1 mt-1 bg-red-100 p-2 border-l-4 border-red-600 rounded w-fit">
                        <li class="text-sm text-gray-900">{{ tabs.mortgage[tabs.isMortgages] }}</li>
                    </ul>
                </TabPanel>
                <TabPanel>
                    <div class="flex gap-x-2 items-center">
                        <h4 class="text-center text-lg lg:text-xl font-semibold dark:text-gray-200">Chính Sách Hủy Chuyến</h4>
                        <TheQuestion answer="Có thể thỏa thuận giữa người thuê và chủ thuê (Carent sẽ chịu trách nhiệm trung gian)."/>
                    </div>
                    <div class="py-5 overflow-x-auto">
                        <div class="flex flex-row">
                            <div class="flex-1"
                            v-for="(policy, idx) in Object.keys(tabs.policies)">
                                <div class="font-semibold dark:text-gray-100">{{ policy }}</div>
                                <div class="flex flex-col h-full mt-2 dark:text-gray-50">
                                    <div v-for="polValue in Object.values(tabs.policies)[idx]" class="text-sm flex-1 border-t pt-2 whitespace-nowrap px-2" v-html="polValue"></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <TheOwner :user="tabs.user"/>
                </TabPanel>
            </TabPanels>
        </TabGroup>
    </div>
    </section>
    
</template>
  
<script setup lang="ts">
import { ref ,inject} from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import TheComment from './TheComment.vue';
import TheQuestion from '@/components/Card/TheQuestion.vue';
import TheOwner from './TheOwner.vue';

const props = defineProps(['tabs','car_id'])
const {comment_count} = inject<any>('messageRight')
const categories = ref(['Mô tả', 'Bình luận', 'Yêu cầu','Chính Sách','Chủ Xe'])
</script>
  