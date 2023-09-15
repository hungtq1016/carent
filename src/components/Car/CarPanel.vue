<template>
    <div class="w-full max-w-screen-xl mx-auto ">
        <TabGroup>
            <TabList class="flex border-gray-100 ">
                <Tab v-for="category in categories" as="template" :key="category" v-slot="{ selected }">
                    <button :class="[
                        ' py-3 px-4 font-medium border-b-2',
                        ' focus:outline-none focus:ring-0',
                        selected
                            ? ' border-amber-600 text-amber-600'
                            : 'text-gray-600 border-gray-100',
                    ]">
                        {{ category }}
                    </button>
                </Tab>
                <div class="flex-auto border-b-2 py-3 border-gray-100"></div>
            </TabList>

            <TabPanels class="mt-2">
                <TabPanel>
                    <div v-html="tab.desc"></div>
                </TabPanel>
                <TabPanel>
                    <CarComment :post_id="car_id" />
                </TabPanel>
                <TabPanel>
                    <div class="flex gap-x-2 items-center">
                        <h4 class="text-xl font-semibold py-2">Giấy tờ thuê</h4>
                        <TheQuestion answer="BẢN GỐC tất cả giấy tờ thuê xe khi làm thủ tục nhận xe."/>
                    </div>
                    <div class="font-light text-gray-700">Thỏa mãn <span class="text-red-600 font-bold">1</span> trong <span class="font-bold">2</span> điều kiện sau</div>
                    <ul class="space-y-1 mt-1 bg-red-100 p-2 border-l-4 border-red-600 rounded w-fit">
                        <li class="text-sm text-gray-900">◦ GPLX & CCCD gắn chip (đối chiếu)</li>
                        <li class="text-sm text-gray-900">◦ GPLX (đối chiếu) & Passport (giữ lại)</li>
                    </ul>
                    <div class="flex gap-x-2 items-center">
                        <h4 class="text-xl font-semibold py-2">Thế Chấp</h4>
                        <TheQuestion answer="Bạn sẽ để lại tài sản thế chấp (tiền mặt/chuyển khoản hoặc xe máy kèm cà vẹt gốc) cho chủ xe khi làm thủ tục nhận xe
                        Chủ xe sẽ gửi lại tài sản thế chấp khi bạn hoàn trả xe theo như nguyên trạng ban đầu lúc nhận xe"/>
                    </div>
                    <ul class="space-y-1 mt-1 bg-red-100 p-2 border-l-4 border-red-600 rounded w-fit">
                        <li class="text-sm text-gray-900">◦ 15.000.000 ₫ (tiền mặt/chuyển khoản cho chủ xe khi nhận xe) hoặc Xe máy (kèm cà vẹt gốc) giá trị tương đương</li>
                    </ul>
                </TabPanel>
                <TabPanel>
                    <div class="flex gap-x-2 items-center">
                        <h4 class="text-xl font-semibold py-2">Chính Sách Hủy Chuyến</h4>
                        <TheQuestion answer="Có thể thỏa thuận giữa người thuê và chủ thuê (Carent sẽ chịu trách nhiệm trung gian)."/>
                    </div>
                    <div class="py-5">
                        <div class="flex flex-row">
                            <div class="flex-1"
                            v-for="(cancels, idx) in Object.keys(cancelTable)">
                                <div class="font-semibold">{{ cancels }}</div>
                                <div class="flex flex-col h-full mt-2">
                                    <div v-for="cancel in Object.values(cancelTable)[idx]" class="text-sm flex-1 border-t pt-2" v-html="cancel.content"></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </TabPanels>
        </TabGroup>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import CarComment from './CarComment.vue';
import TheQuestion from '../Card/TheQuestion.vue';
const props = defineProps(['tab','car_id'])
const categories = ref(['Mô tả', 'Bình luận', 'Yêu cầu','Chính Sách'])
const cancelTable = ref({
    'Thời Gian':[
        {
            content:'Trong vòng 2 giờ sau khi đặt'
        },
        {
            content:'Trước 7 ngày sau khi đặt'
        },
        {
            content:'Trong vòng 7 ngày sau khi đặt'
        }
    ],
    'Khách Thuê':[
        {
            content:'<span class="text-green-600">Không mất cọc</span>'
        },
        {
            content:'<span class="text-amber-600">Mất 50% cọc </span>'
        },
        {
            content:'<span class="text-red-600">Mất 100% cọc</span>'
        }
    ],
    'Chủ Xe':[
        {
            content:'<div class="text-green-600">Hoàn cọc 100%</div><div class="text-gray-600 text-xs">(Bị đánh giá 3 sao)</div>'
        },
        {
            content:'<div class="text-amber-600">Hoàn cọc 100% (+50% giá trị cọc)</div><div class="text-gray-600 text-xs">(Bị đánh giá 2 sao)</div>'
        },
        {
            content:'<div class="text-red-600">Hoàn cọc 100% (+100% giá trị cọc)</div><div class="text-gray-600 text-xs">(Bị đánh giá 1 sao)</div>'
        }
    ],
})
</script>
  