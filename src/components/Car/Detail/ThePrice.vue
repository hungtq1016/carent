<template>
    <div class="lg:col-span-1 md:col-span-2 col-span-1">
        <div class="flex flex-col gap-y-3">
            <div v-if="data.isInsurance"
                class="bg-green-100 flex items-center px-2 py-4 rounded-md gap-x-2 justify-center dark:bg-green-600/40">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    class="w-8 h-8 fill-green-500 dark:text-gray-100" viewBox="0 0 36 36" version="1.1"
                    preserveAspectRatio="xMidYMid meet">
                    <path
                        d="M31.25,7.4a43.79,43.79,0,0,1-6.62-2.35,45,45,0,0,1-6.08-3.21L18,1.5l-.54.35a45,45,0,0,1-6.08,3.21A43.79,43.79,0,0,1,4.75,7.4L4,7.59v8.34c0,13.39,13.53,18.4,13.66,18.45l.34.12.34-.12c.14,0,13.66-5.05,13.66-18.45V7.59ZM30,15.93c0,11-10,15.61-12,16.43-2-.82-12-5.44-12-16.43V9.14a47.54,47.54,0,0,0,6.18-2.25,48.23,48.23,0,0,0,5.82-3,48.23,48.23,0,0,0,5.82,3A47.54,47.54,0,0,0,30,9.14Z"
                        class="clr-i-outline clr-i-outline-path-1" />
                    <path d="M10.88,16.87a1,1,0,0,0-1.41,1.41l6,6L26.4,13.77A1,1,0,0,0,25,12.33l-9.47,9.19Z"
                        class="clr-i-outline clr-i-outline-path-2" />
                    <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
                </svg>
                <div class="font-bold text-green-500 dark:text-gray-100">
                    Xe đã được đăng ký bảo hiểm tai nạn
                </div>
            </div>
            <div class="px-4 py-8 bg-gray-100 rounded-md flex flex-col gap-y-3 dark:bg-zinc-800 dark:text-gray-100">
                <div class="text-xl font-semibold dark:text-gray-200 text-gray-900">{{ useFormatCurrency(data?.price) }} /
                    ngày
                </div>
                <VueDatePicker class="date-picker" :enable-time-picker="false" cancelText="Hủy" selectText="Gửi" fixed-start
                    min-range="1" format="dd-MM-yyyy" :multi-calendars="{ solo: true }" id="date"
                    v-model="rentStore.selected_day" range :format-locale="vi"></VueDatePicker>
                <LocationPicker :isDelivery="data.isDelivery" :address="data.address" />
                <div class="border-t border-gray-400 pt-2">
                    <div class="flex flex-col gap-y-1">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-x-2">
                                <p class="text-gray-600 font-semibold dark:text-gray-100">Đơn giá</p>
                                <TheQuestion answer="Giá thuê cơ bản" />
                            </div>
                            <p class="text-gray-600 font-medium dark:text-gray-200"><span>{{ useFormatCurrency(data.price)
                            }} /
                                    ngày</span>
                            </p>
                        </div>

                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-x-2">
                                <p class="text-gray-600 font-semibold dark:text-gray-100">Phí bảo hiểm</p>
                                <TheQuestion answer="Bảo hiểm của xe" />
                            </div>
                            <p class="text-gray-600 font-medium dark:text-gray-200"><span>{{
                                useFormatCurrency(data.isInsurant ? data.price * 0.1 : 0)
                            }} /
                                    ngày</span></p>
                        </div>
                        <div class="border-t border-gray-400"></div>

                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-x-2">
                                <p class="text-gray-600 font-semibold dark:text-gray-100">Tạm tính</p>
                                <TheQuestion answer="Giá tiền được tạm tính" />
                            </div>
                            <p class="text-gray-600 font-medium dark:text-gray-200"><span>{{
                                useFormatCurrency(rentStore.rent.total_per_day)
                            }} / ngày</span></p>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-x-2">
                                <p class="text-gray-600 font-semibold dark:text-gray-100">Ngày</p>
                                <TheQuestion answer="Tổng số ngày" />
                            </div>
                            <p class="text-gray-600 font-medium dark:text-gray-200"><span>{{ rentStore.rent.count_days
                            }} ngày</span></p>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-x-2">
                                <p class="text-gray-600 font-semibold dark:text-gray-100">Tổng</p>
                                <TheQuestion answer="Giá tính tất cả ngày" />
                            </div>
                            <p class="text-gray-600 font-medium dark:text-gray-200"><span>{{
                                useFormatCurrency(rentStore.total)
                            }} </span></p>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-x-2">
                                <p class="text-gray-600 font-semibold dark:text-gray-100">Phí dịch vụ</p>
                                <TheQuestion answer="Phí duy trì và quản lý dịch vụ" />
                            </div>
                            <p class="text-gray-600 font-medium dark:text-gray-200"><span>{{
                                useFormatCurrency(rentStore.deliveryFee)
                            }}</span></p>
                        </div>


                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-x-2">
                                <p class="text-gray-600 font-semibold dark:text-gray-100">Giảm giá</p>
                                <TheQuestion answer="Áp dụng mã dưới đây" />
                            </div>
                            <p class="text-gray-600 font-medium dark:text-gray-200"><span>-{{
                                useFormatCurrency(rentStore.discount) }}</span>
                            </p>
                        </div>
                        <div class="flex flex-col gap-y-3">
                            <input type="text" class="w-full rounded-md py-1 px-2 mt-3 border border-gray-400" id="">
                            <button>
                                <div class="flex gap-x-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="w-6 h-6 fill-gray-600 dark:fill-slate-200" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M21.3 10.8394C21.69 10.8394 22 10.5294 22 10.1394V9.20938C22 5.10938 20.75 3.85938 16.65 3.85938H7.35C3.25 3.85937 2 5.10938 2 9.20938V9.67938C2 10.0694 2.31 10.3794 2.7 10.3794C3.6 10.3794 4.33 11.1094 4.33 12.0094C4.33 12.9094 3.6 13.6294 2.7 13.6294C2.31 13.6294 2 13.9394 2 14.3294V14.7994C2 18.8994 3.25 20.1494 7.35 20.1494H16.65C20.75 20.1494 22 18.8994 22 14.7994C22 14.4094 21.69 14.0994 21.3 14.0994C20.4 14.0994 19.67 13.3694 19.67 12.4694C19.67 11.5694 20.4 10.8394 21.3 10.8394ZM9 8.87938C9.55 8.87938 10 9.32938 10 9.87938C10 10.4294 9.56 10.8794 9 10.8794C8.45 10.8794 8 10.4294 8 9.87938C8 9.32938 8.44 8.87938 9 8.87938ZM15 15.8794C14.44 15.8794 13.99 15.4294 13.99 14.8794C13.99 14.3294 14.44 13.8794 14.99 13.8794C15.54 13.8794 15.99 14.3294 15.99 14.8794C15.99 15.4294 15.56 15.8794 15 15.8794ZM15.9 9.47937L9.17 16.2094C9.02 16.3594 8.83 16.4294 8.64 16.4294C8.45 16.4294 8.26 16.3594 8.11 16.2094C7.82 15.9194 7.82 15.4394 8.11 15.1494L14.84 8.41938C15.13 8.12938 15.61 8.12938 15.9 8.41938C16.19 8.70938 16.19 9.18937 15.9 9.47937Z">
                                        </path>
                                    </svg>
                                    <p class="text-gray-600 font-medium dark:text-gray-200">Sử dụng mã khuyến mãi</p>
                                </div>
                            </button>
                        </div>
                        <div class="border-t border-gray-400"></div>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-x-2">
                                <p class="text-gray-600 font-bold dark:text-gray-100">Tổng cộng</p>
                                <TheQuestion answer="Bắt đầu tính từ ngày mượn" />
                            </div>
                            <p class="text-gray-600 font-medium dark:text-gray-200"><span>{{
                                useFormatCurrency(rentStore.rent.total_all_days)
                            }} </span></p>
                        </div>
                        <button class="mt-3" @click="checkout">
                            <div
                                class="py-4 text-center bg-amber-600 rounded-md text-xl font-bold text-white hover:bg-orange-600 dark:hover:shadow-md dark:hover:shadow-orange-600 dark:hover:text-gray-100 duration-300">
                                Thuê Xe
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div class="p-2 border-gray-400 border rounded-md">
                <div class="font-bold text-lime-600">Phụ phí phát sinh</div>
                <div class="flex flex-col gap-y-1 mt-3" v-for="fee in fees">
                    <div class="flex justify-between items-center">
                        <div class="text-sm font-bold dark:text-gray-200">
                            {{ fee.title }}
                        </div>
                        <div class="text-xs font-medium dark:text-gray-100">
                            {{ useFormatCurrency(fee.price) }}
                            /
                            {{ fee.per }}
                        </div>
                    </div>
                    <div class="text-xs text-gray-600 font-light dark:text-gray-100" v-html="fee.info"></div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRent } from '@/stores/rent';
import useFormatCurrency from '@/lib/hook/useFormatCurrency';
import LocationPicker from './LocationPicker.vue';
import TheQuestion from '@/components/Card/TheQuestion.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import { vi } from 'date-fns/locale';
import { useRouter } from 'vue-router';
const router = useRouter()

const rentStore = useRent()
const props = defineProps(['data'])

const checkout = () =>{
    router.push({
        name: 'checkout',
    })
}

onMounted(() => {
    const now = new Date();
    const seven_day = new Date().setDate(now.getDate() + 7)
    const startDate = new Date(props.data.isInstant ? now : seven_day);
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));

    rentStore.selected_day = [startDate, endDate];
    rentStore.rent.total_per_day = props.data.isInsurance ? props.data?.price * 1.1 : props.data?.price
    rentStore.total = rentStore.rent.total_per_day * rentStore.rent.count_days
    rentStore.deliveryFee = rentStore.isDriver ? props.data.delivery_fee : 0
    rentStore.rent.total_all_days = rentStore.deliveryFee + rentStore.total + rentStore.discount
    rentStore.absoluteFee = props.data.delivery_fee
})

const fees = [
    {
        title: 'Phí quá giới hạn',
        info: 'Phát sinh nếu lộ trình di chuyển vượt quá 300km/ngày',
        price: 5000,
        per: 'km'
    },
    {
        title: 'Phí quá hạn',
        info: 'Phụ phí phát sinh nếu hoàn trả xe trễ giờ. Trường hợp trễ quá 5 tiếng, phụ phí thêm 1 ngày thuê',
        price: props.data.price,
        per: 'ngày'
    },
    {
        title: 'Phí vệ sinh',
        info: 'Phụ phí phát sinh khi xe hoàn trả không đảm bảo vệ sinh <br/>(nhiều vết bẩn, bùn cát, sình lầy...)',
        price: 50000,
        per: 'lần'
    },
    {
        title: 'Phí khử mùi',
        info: 'Phụ phí phát sinh khi xe hoàn trả bị ám mùi khó chịu<br/> (mùi thuốc lá, thực phẩm nặng mùi...)',
        price: 300000,
        per: 'lần'
    },
]

</script>
