<template>
    <div class="flex flex-col gap-y-2 pt-5">
        <div>
            <input type="radio" id="receive-1" name="receive" v-model="rentStore.isReceive" :value="false" class="hidden peer">
            <label for="receive-1" class="block w-full px-4 py-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  dark:border-gray-700 dark:peer-checked:text-gray-500 peer-checked:border-amber-600 peer-checked:text-gray-600  dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
            <div class="flex flex-col gap-y-2">
                <div class="w-full font-semibold flex gap-x-2 items-center">
                    <span>Vị Trí Xe</span>
                 </div>
                <div class="text-gray-600 text-sm font-light" v-if="!rentStore.isReceive">Bạn sẽ nhận xe tại:</div>
                <div class="text-lg font-bold text-gray-800">
                    {{ rentStore.absoluteAddress }}
                </div>
                <button type="button" v-if="!rentStore.isReceive" class="bg-amber-100 py-2 rounded-md text-amber-600 hover:bg-orange-100 duration-300"
                @click="()=>{rentStore.rent.address = rentStore.absoluteAddress,emit('closeModal')}">Xác nhận</button>
            </div>
        </label>
        </div>
        <div>
            <input type="radio" id="receive-2" name="receive" v-model="rentStore.isReceive" :value="true" class="hidden peer">
            <label for="receive-2" class="block w-full px-4 py-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  dark:border-gray-700 dark:peer-checked:text-gray-500 peer-checked:border-amber-600 peer-checked:text-gray-600  dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
            <div class="flex flex-col gap-y-2">
                <div class="w-full  font-semibold flex gap-x-2 items-center">
                    <span>Vị Trí Của Bạn</span>
                    <TheQuestion answer="Tiền phí: 30.000 đ/ lượt" v-if="rentStore.isReceive"/>
                </div>
                <div class="text-gray-600 text-sm font-light flex gap-x-2 items-center" v-if="rentStore.isReceive">
                    <span>Chủ xe sẽ giao xe tại:</span>
                    <TheQuestion answer="Vui lòng ghi đúng địa chỉ. <br/><span class='text-red-600'>Địa chỉ cách nhau bằng dấu phẩy (,)</span>" v-if="rentStore.isReceive"/>
                </div>
                <input type="text" v-model="address" :disabled="!rentStore.isReceive" @input="checkValid"
                class="w-full rounded-md p-2 focus:right-0 focus:outline-none border invalid:text-red-500" :class="{'border-red-600':error}"/>
                <div v-if="error" class="text-xs text-red-600 font-light">
                    Chưa đúng yêu cầu
                </div>
                <button type="button" v-if="rentStore.isReceive" class="bg-amber-100 py-2 rounded-md text-amber-600 hover:bg-orange-100 duration-300"
                @click="submitAddress">Xác nhận</button>
            </div>
        </label>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRent } from '@/stores/rent';
import TheQuestion from '../Card/TheQuestion.vue';
import { ref } from 'vue';
const emit = defineEmits(['closeModal'])
const rentStore = useRent()
const address = ref('')
const regex = /^([^,]*,){1,}[^,]*$/;
const error = ref(false)
const count = ref(0)
const checkValid = () =>{
    let isValidate = regex.test(address.value)
    if (!isValidate && count.value > 0) {
        error.value = true
    } else {
        error.value = false
    }
}
const submitAddress = () =>{
    
    let isValidate = regex.test(address.value)
    if (isValidate) {
        error.value = false
        rentStore.rent.address = address.value
        emit('closeModal')    
    } else {
        error.value = true
        count.value++
    }

}
</script>
