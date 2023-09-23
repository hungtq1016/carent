
<template>
  <section class="py-10">
    <div class="lg:mx-auto max-w-screen-xl mx-4 md:mx-8 ">
      <form class="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
        <div>
          <div>
            <h2 class="text-lg font-medium text-gray-900">Thông tin liên hệ</h2>

            <div class="mt-4">
              <label for="email-address" class="block text-sm font-medium text-gray-700">Địa chỉ email</label>
              <div class="mt-1">
                <input
                  class="block w-full py-4 px-2 rounded-md border  shadow-sm focus:outline-none focus:ring-0 sm:text-sm"
                  type="email" id="email-address" name="email-address" autocomplete="email" :value="user.email" />
              </div>
            </div>
            <div class="mt-4">
              <label for="name" class="block text-sm font-medium text-gray-700">Họ và Tên</label>
              <div class="mt-1">
                <input
                  class="block w-full py-4 px-2 rounded-md border  shadow-sm focus:outline-none focus:ring-0 sm:text-sm"
                  type="text" id="name" name="name" autocomplete="name" :value="user.name" />
              </div>
            </div>
            <div class="mt-4">
              <label for="phone" class="block text-sm font-medium text-gray-700">Số Điện Thoại</label>
              <div class="mt-1">
                <input
                  class="block w-full py-4 px-2 rounded-md border  shadow-sm focus:outline-none focus:ring-0 sm:text-sm"
                  type="text" id="phone" name="phone" autocomplete="phone" :value="user.phone" />
              </div>
            </div>
            <div class="mt-4">
              <label for="address" class="block text-sm font-medium text-gray-700">Địa Chỉ Nhận Xe</label>
              <div class="mt-1">
                <input disabled
                  class="block w-full py-4 px-2 rounded-md border  shadow-sm focus:outline-none focus:ring-0 sm:text-sm"
                  type="text" id="address" name="address" />
              </div>
            </div>
          </div>

          <!-- Payment -->
          <div class="mt-10 border-t border-gray-200 pt-10">
            <h2 class="text-lg font-medium text-gray-900">Phương thức thanh toán</h2>
            <fieldset class="mt-4">
              <legend class="sr-only">Phương thức thanh toán</legend>
              <div class="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                <div v-for="(paymentMethod) in paymentMethods" :key="paymentMethod.id" class="flex items-center">
                  <input :id="paymentMethod.id" name="payment-type" type="radio" :value="paymentMethod"
                    v-model="selectedMethod" class="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500" />
                  <label :for="paymentMethod.id" class="ml-3 block text-sm font-medium text-gray-700">{{
                    paymentMethod.title }}</label>
                </div>
              </div>
            </fieldset>

            <div class="mt-6 grid grid-cols-4 gap-x-4 gap-y-6" v-if="selectedMethod.id == 'credit-card'">
              <div class="col-span-4">
                <label for="card-number" class="block text-sm font-medium text-gray-700">Số Thẻ</label>
                <div class="mt-1">
                  <input type="text" id="card-number" name="card-number" autocomplete="cc-number"
                    class="block w-full rounded-md shadow-sm focus:outline-none py-4 px-2 border focus:ring-amber-500 sm:text-sm" />
                </div>
              </div>

              <div class="col-span-4">
                <label for="name-on-card" class="block text-sm font-medium text-gray-700">Họ Tên</label>
                <div class="mt-1">
                  <input type="text" id="name-on-card" name="name-on-card" autocomplete="cc-name"
                    class="block w-full rounded-md shadow-sm focus:outline-none py-4 px-2 border focus:ring-amber-500 sm:text-sm" />
                </div>
              </div>

              <div class="col-span-3">
                <label for="expiration-date" class="block text-sm font-medium text-gray-700">Ngày Hết Hạn (MM/YY)</label>
                <div class="mt-1">
                  <input type="text" name="expiration-date" id="expiration-date" autocomplete="cc-exp"
                    class="block w-full rounded-md shadow-sm focus:outline-none py-4 px-2 border focus:ring-amber-500 sm:text-sm" />
                </div>
              </div>

              <div>
                <label for="cvc" class="block text-sm font-medium text-gray-700">CVC</label>
                <div class="mt-1">
                  <input type="text" name="cvc" id="cvc" autocomplete="csc"
                    class="block w-full rounded-md shadow-sm focus:outline-none py-4 px-2 border focus:ring-amber-500 sm:text-sm" />
                </div>
              </div>
            </div>
            <div v-else class="flex items-center justify-center py-5">
              <img class="w-80 h-80" :src="IMG_URL + selectedMethod.image" :alt="selectedMethod.title">
            </div>
          </div>
        </div>

        <!-- Order summary -->
        <div class="mt-10 lg:mt-0">
          <h2 class="text-lg font-medium text-gray-900">Tổng Quan</h2>

          <div class="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
            <div class="flex flex-col gap-y-2 px-4 py-6 sm:px-6">
              <div>
                <img :src="IMG_URL + rentStore.car.images[imageIdx].path" :alt="rentStore.car.info.name"
                  class="rounded-md">
              </div>
              <div class="grid grid-cols-2 gap-2 items-center md:grid-cols-3 lg:grid-cols-4">
                <img v-for="(image, index) in rentStore.car.images" :src="IMG_URL + image.path"
                  :alt="rentStore.car.info.name" class="w-fit rounded-md" @click="() => imageIdx = index" />
              </div>

              <div class="flex flex-1 flex-col">
                <div class="flex">
                  <div class="min-w-0 flex-1">
                    <h4 class="text-lg">
                      <a :href="rentStore.car.href" class="font-semibold text-gray-900 dark:text-gray-100 capitalize">{{
                        rentStore.car.info.name }}</a>
                    </h4>
                    <p class="mt-1 text-gray-500">{{ useFormatCurrency(rentStore.car.info.price) }}</p>
                    <p class="mt-1 text-sm text-gray-500">{{ rentStore.car.info.rating.total }} đánh giá</p>
                  </div>

                </div>

                <div class="flex flex-1 items-end justify-between pt-2">
                  <p class="mt-1 text-sm font-medium text-gray-900">{{ rentStore.car.info.seats }} chỗ</p>
                </div>
              </div>
            </div>
            <dl class="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
              <div class="flex items-center justify-between">
                <dt class="text-base font-medium">Tạm Tính</dt>
                <dd class="text-base font-medium text-gray-900">{{ useFormatCurrency(rentStore.total) }}</dd>
              </div>
              <div class="flex items-center justify-between">
                <dt class="text-base font-medium">Thế Chấp</dt>
                <dd class="text-base font-medium text-gray-900">{{ useFormatCurrency(rentStore.car.info.isInsurance ?
                  15000000 : 0) }}</dd>
              </div>
              <div class="flex items-center justify-between border-t border-gray-200 pt-6">
                <dt class="text-base font-medium">Tổng</dt>
                <dd class="text-base font-medium text-gray-900">{{
                  useFormatCurrency(rentStore.total += rentStore.car.info.isInsurance ? 15000000 : 0) }}</dd>
              </div>
            </dl>

            <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
              <button @click="submit" type="button"
                class="w-full rounded-md border border-transparent bg-amber-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-50">Xác
                Nhận</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
  
<script setup lang="ts">
import { inject, onMounted, ref } from 'vue'
import { IMG_URL, URL } from '@/lib/fetch';
import { useRent } from '@/stores/rent';
import { useRouter } from 'vue-router';
import useFormatCurrency from '@/lib/hook/useFormatCurrency';
import { useDark, useFetch } from '@vueuse/core';
import { toast } from 'vue3-toastify';
const { user } = inject<any>('user')
const rentStore = useRent()
const router = useRouter()
const imageIdx = ref(0)
const isDark = useDark()
if (rentStore.car == undefined) {
  router.push({
    name: 'Home',
  })
}
const paymentMethods = [
  { id: 'credit-card', title: 'Thẻ ngân hàng' },
  { id: 'momo', title: 'Momo', image: '/payment/momo.jpeg' },
  { id: 'etransfer', title: 'Chuyển khoản', image: '/payment/etransfer.png' },
]

const submit = async () => {
  let payload = {
    user_id: user.value.id,
    owner_id: rentStore.car.id,
    start_day: rentStore.rent.startDay,
    end_day: rentStore.rent.end_day,
    address: rentStore.rent.address,
    total:rentStore.total 
  }
  const { data } = await useFetch(URL + '/rent').post(payload).json()  
  toast(data.value.message, {
    autoClose: 1000,
    type: data.value.error ? 'error' : 'default',
    theme: isDark.value ? 'dark' : 'light'
  });
  if (!data.value.error) {
    router.push({
      name: 'Home',
    })
  }
}

const selectedMethod = ref(paymentMethods[0])
</script>