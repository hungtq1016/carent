<template>
    <div class="absolute inset-x-0 bottom-0 translate-y-1/2">
        <div class="max-w-screen-xl mx-auto bg-white shadow rounded-md px-10 py-5 space-y-5 ">
            <div class="grid w-full gap-6 md:grid-cols-2">
                    <div>
                        <input type="radio" id="by-self" v-model="rent" name="rent" value="bySelf" class="hidden peer"
                            required>
                        <label for="by-self"
                            class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-amber-500 peer-checked:border-amber-600 peer-checked:text-amber-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div class="block">
                                <div class="w-full text-lg font-semibold">Tự Lái</div>
                            </div>
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="need-driver" v-model="rent" name="rent" value="needDriver" class="hidden peer">
                        <label for="need-driver"
                            class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-amber-500 peer-checked:border-amber-600 peer-checked:text-amber-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div class="block">
                                <div class="w-full text-lg font-semibold">Thêm Tài Xế</div>
                            </div>
                        </label>
                    </div>
                </div>
            <div class="grid grid-cols-8 gap-x-2">
                <div class="col-span-2">
                    <label for="location" class="font-semibold text-lg">
                        Địa điểm
                    </label>
                    <input type="text" id="location" placeholder="Tôi muốn xe ở."
                        class="w-full border-b text-sm py-2 px-1 focus:ring-0 focus:outline-none">
                </div>
                <div>
                    <label for="seat" class="font-semibold text-lg">
                        Chỗ Ngồi
                    </label>
                    <select id="seat" class="w-full border-b text-sm py-2 px-1 focus:ring-0 focus:outline-none">
                        <option value="2">2</option>
                        <option value="4">4</option>
                        <option value="7">7</option>
                        <option value="16">16</option>
                    </select>
                </div>
                <div class="col-span-2">
                    <label for="max-price" class="font-semibold text-lg">
                        Giá Tối Đa
                    </label>
                    <input type="number" id="max-price" placeholder="Ngân sách tôi muốn bỏ ra."
                        class="w-full border-b text-sm py-2 px-1 focus:ring-0 focus:outline-none">
                </div>
                <div>
                    <label for="seat" class="font-semibold text-lg">
                        Ngày Đi
                    </label>
                    <select id="seat" class="w-full border-b text-sm py-2 px-1 focus:ring-0 focus:outline-none">
                        <option value="2">2</option>
                        <option value="4">4</option>
                        <option value="7">7</option>
                        <option value="16">16</option>
                    </select>
                </div>
                <div>
                    <label for="seat" class="font-semibold text-lg">
                        Ngày Về
                    </label>
                    <select id="seat" class="w-full border-b text-sm py-2 px-1 focus:ring-0 focus:outline-none">
                        <option value="2">2</option>
                        <option value="4">4</option>
                        <option value="7">7</option>
                        <option value="16">16</option>
                    </select>
                </div>
                <div class="flex items-center justify-end">
                    <button class="bg-amber-100 text-amber-600 rounded-md px-10 py-4">Tìm</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const rent = ref('bySelf')
</script>
