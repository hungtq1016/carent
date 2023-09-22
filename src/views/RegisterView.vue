
<template>
    <section class="py-20 dark:bg-zinc-900">
        <div class="max-w-screen-xl mx-4 md:mx-8 lg:mx-auto">
            <div
                class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 dark:bg-zinc-800 rounded-md dark:shadow dark:shadow-zinc-800">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img class="mx-auto h-10 w-auto" src="/icon.png" alt="Your Company" />
                    <h2
                        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
                        Đăng Ký
                    </h2>
                </div>

                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form class="space-y-2" action="#" method="POST">
                        <div>
                            <label for="name"
                                class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">Họ và Tên</label>
                            <div class="mt-2">
                                <input id="name" name="name" type="text" v-model="form.name"
                                    class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label for="email"
                                class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">Email</label>
                            <div class="mt-2">
                                <input id="email" name="email" type="email" v-model="form.email"
                                    class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div>
                                <label for="password"
                                    class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">Mật
                                    Khẩu</label>

                            </div>
                            <div class="mt-2">
                                <input id="password" name="password" type="password" 
                                    v-model="form.password"
                                    class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label for="re-password"
                                    class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"> Nhập Lại Mật
                                    Khẩu</label>
                            <div class="mt-2">
                                <input id="re-password" name="re-password" type="password"
                                    v-model="form.password_confirmation"
                                    class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label for="phone"
                                class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">Số Điện Thoại</label>
                            <div class="mt-2">
                                <input id="phone" name="phone" type="text" v-model="form.phone"
                                    class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                            <div>
                            <label for="address"
                                class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">Địa Chỉ</label>
                            <div class="mt-2">
                                <input id="address" name="address" type="text" v-model="form.address"
                                    class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <button type="button" @click="submit"
                                class="flex w-full justify-center rounded-md bg-amber-600 px-3 py-1.5 mt-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600">Đăng
                                Ký</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { URL } from '@/lib/fetch';
import { useFetch, useDark } from '@vueuse/core';
import { inject, ref } from 'vue';
import Cookies from 'universal-cookie';
import { toast } from 'vue3-toastify';
import router from '@/router';
const cookies = new Cookies(null, { path: '/' });
const isDark = useDark()
const form = ref({
    email: '',
    name:'',
    password: '',
    password_confirmation :'',
    phone:'',
    address:''
})
const{updateUser,updateAuthen} = inject<any>('user')

const submit = async () => {
    const { data, error, isFetching, isFinished } = await useFetch(URL + '/register').post(form.value).json()
    console.log(data.value.error_msg);
    
    toast(data.value.message, {
        autoClose: 2000,
        type: data.value.error ? 'error' : 'default',
        theme: isDark.value ? 'dark' : 'light'
    });

    if (isFinished && !data.value.error) {
        cookies.set('token', data.value.access_token);
        cookies.set('type', data.value.token_type);
        localStorage.setItem('user', JSON.stringify(data.value.data))
        updateUser(data.value.data)
        updateAuthen(true)
        router.push('/')
    }
}

</script>
  