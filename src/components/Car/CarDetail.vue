<template>
    <div class="grid grid-cols-3 py-5 gap-x-3">
        <div class="col-span-2 divide-y">
            <div class="flex flex-col gap-y-5 pb-5">
                <div class="flex items-center justify-between">
                    <div class="flex gap-x-2 items-center">
                        <div class="text-4xl font-semibold capitalize">{{ car.info.name }}</div>
                        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" class="w-8 h-8 stroke-green-500">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                    <div class="flex items-center gap-x-2">
                        <button class="border-gray-600 border p-1 rounded-full relative group">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6 stroke-gray-600">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                            <div class="absolute -bottom-2 left-0 text-xs text-gray-600 hidden group-hover:inline-block bg-white shadow w-20 text-center translate-y-full -translate-x-1/2 rounded-md">
                                Yêu Thích
                            </div>
                        </button>
                        <button class="border-red-600 border p-1 rounded-full relative group">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" class="w-6 h-6 stroke-red-600">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                            </svg>
                            <div class="absolute -bottom-2 left-0 text-xs text-gray-600 hidden group-hover:inline-block bg-white shadow w-20 text-center translate-y-full -translate-x-1/2 rounded-md">
                                Báo cáo xe
                            </div>
                        </button>
                    </div>
                </div>
                <div class="flex gap-x-3 items-center">
                    <div class="flex items-center gap-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                            stroke="currentColor" class="w-6 h-6 stroke-yellow-400">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        <span class="text-gray-600">{{ Number(car.review).toFixed(1) }}</span>
                    </div>
                    <div class="flex items-center gap-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                            stroke="currentColor" class="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        <span class="text-gray-600">{{ car.total_review }}</span>
                    </div>
                    <div class="flex items-center gap-x-1">

                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                            class="w-6 h-6 fill-amber-600" viewBox="0 0 256 256" enable-background="new 0 0 256 256"
                            xml:space="preserve">
                            <g>
                                <g>
                                    <g>
                                        <path fill="#d97706"
                                            d="M90.6,18.9c-1.5,1.1-2.4,3.5-2.4,6.5V28h-8.1c-9.5,0-10.7,0.4-11.6,3.7c-0.7,2.9-0.4,52.3,0.4,53.7c1.5,2.5,0.4,2.5,39.4,2.5c40,0,38.3,0.1,39.6-3c1-2.3,1-51.5,0-53.8c-1.2-2.9-1.9-3.1-11.1-3.1h-8.3l-0.2-3.6c-0.1-3.3-0.3-3.7-1.7-4.9l-1.5-1.4h-16.8C93.7,18.2,91.6,18.3,90.6,18.9z M118.2,53.1v25.1h-9.8h-9.8V53.1V28h9.8h9.8V53.1z M88.2,58v19.7h-4.9h-4.9V58V38.3h4.9h4.9V58z M138.3,58v19.7h-4.9h-4.9V58V38.3h4.9h4.9V58z" />
                                        <path fill="#d97706"
                                            d="M97.1,99c-19.8,2.2-33.7,7.9-44.3,18C45,124.6,39.7,134.5,38,145l-0.6,3.4l-2.6,0.9c-6.2,2.3-12.1,7.6-16,14.3c-5.2,9.2-8.9,24.1-8.9,36.5c0,6.7,0.9,7.6,8.6,7.6c4.8,0,5,0,6.5-1.4c1.3-1.2,1.5-1.7,1.5-3.6c0-1.9-0.2-2.4-1.5-3.6c-1.1-1-2-1.4-3.4-1.4h-1.9l0.3-3c1.7-18.5,7.7-31.3,16.8-35.7l2.8-1.4h77.7c73.5,0,78,0,82.7,0.8c17.7,3.1,28,10.9,32.9,25c1.3,3.6,2.7,10.1,2.7,12.6v1.6h-2.5c-2.2,0-2.8,0.2-4,1.4c-2.5,2.3-1.8,6.4,1.2,8c0.6,0.3,3.4,0.5,6.6,0.5c4.7,0,5.8-0.1,7-0.9c2-1.2,2.2-2.3,1.9-8.8c-1-20.5-9.9-35.7-25.4-43.4c-7.4-3.7-14.4-5.4-24.6-6.4c-9.7-0.8-8.6-0.3-10.1-5c-0.7-2.2-2.5-6.5-4-9.3c-9.9-19.5-26.6-31.4-49.1-34.8C127.1,98.4,104,98.2,97.1,99z M132,109.3c20.9,3.1,36.6,15.7,43.5,34.7l1.2,3.4h-34.2h-34.2V128v-19.4h9.4C123.8,108.6,128.9,108.8,132,109.3z M98.5,128.2v19.2H73H47.6l0.4-2.2c2.4-12.8,11.1-23.6,24-29.6c6.6-3.1,19.2-6.4,25.1-6.5l1.5,0V128.2z" />
                                        <path fill="#d97706"
                                            d="M58.4,179c-8.2,1.8-15.9,8.9-18.5,17c-4.4,14.1,6.1,29.4,21.6,31.2c11.1,1.3,23.6-8.7,25.8-20.6C89.5,194.8,80.5,182,68,179C64.4,178.2,62.2,178.2,58.4,179z M69.9,189.8c2.2,1.2,5.1,3.9,6.1,6c2,3.8,2,10.5,0,14.4c-1.3,2.5-4.8,5.4-7.6,6.4c-3.3,1.1-9.2,0.7-12.1-0.7c-4.7-2.4-7.1-6.1-7.4-11.8c-0.3-5.1,0.8-8.3,3.9-11.4c3.2-3.2,5.3-3.9,11-3.8C67,188.9,68.8,189.2,69.9,189.8z" />
                                        <path fill="#d97706"
                                            d="M188.7,178.9c-5.7,1.1-12.5,5.7-15.9,11c-6.6,9.9-4.9,22.8,4,30.8c10.3,9.3,23.4,8.8,33.2-1.1c3.8-3.9,5.6-6.9,6.8-11.8c3-12-6-25.7-19.1-28.8C194.4,178.3,192.1,178.2,188.7,178.9z M199.9,190c4.8,2.5,7.4,6.9,7.4,12.9c0,4.8-1.2,7.9-4.3,10.7c-3,2.8-6,3.8-11,3.5c-6.4-0.4-10.4-3.1-12.5-8.8c-1.4-3.6-1.1-9.1,0.7-12.5c1.5-2.8,4.3-5.5,7.1-6.5C190.1,188.3,197.4,188.6,199.9,190z" />
                                        <path fill="#d97706"
                                            d="M100.3,199.4c-1.3,1.2-1.5,1.7-1.5,3.6c0,1.9,0.2,2.4,1.5,3.6l1.5,1.4H128c19.3,0,26.5-0.1,27.4-0.6c3.3-1.5,3.3-7.2,0-8.7c-0.9-0.4-8.1-0.6-27.4-0.6h-26.2L100.3,199.4z" />
                                        <path fill="#d97706"
                                            d="M15.5,228.9c-1.8,1.4-2.4,3.7-1.5,5.8c1.4,3.4-8.8,3.1,114.8,3.1H240l1.6-1.6c2.3-2.3,2.1-5.3-0.5-7.4c-0.9-0.8-7.5-0.8-112.7-0.8C17.1,228,16.7,228,15.5,228.9z" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <span class="text-gray-600">{{ car.total_trip }}</span>
                    </div>
                    <div class="flex items-center gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                            stroke="currentColor" class="w-6 h-6 stroke-gray-900">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <RouterLink v-if="car.district"
                            :to="`/find?district=${car.district.slug}&province=${car.province.slug}`"
                            class="text-gray-900 text-lg font-semibold">{{ car?.district.name }}, </RouterLink>
                        <RouterLink v-if="car.province" :to="`/find?province=${car.province.slug}`"
                            class="text-gray-900 text-lg font-semibold">{{ car?.province.name }}</RouterLink>
                    </div>
                </div>
                <div class="flex gap-x-3">
                    <div class="bg-amber-100 px-3 py-2 rounded-md">
                        {{ car.transmission_type == 1 ? 'Số tự động' : 'Số sàn' }}
                    </div>
                    <div v-if="car.isDelivery" class="bg-green-100 px-3 py-2 rounded-md">
                        Giao tận nơi
                    </div>
                </div>
                <div>
                    <template v-for="(rate, index) in car.rating">
                        <div class="flex items-center gap-x-1">
                            <div class="flex items-center gap-x-px w-8 justify-between">
                                <span>{{ index + 1 }}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-5 h-5 fill-yellow-400">
                                    <path fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd" />
                                </svg>

                            </div>
                            <div class="w-80 h-2 rounded-full bg-gray-300">
                                <div :style="{ width: `${(rate / car.total_review) * 100}%` }"
                                    class="h-2 bg-yellow-400 rounded-l-full"
                                    :class="{ 'rounded-r-full': (rate / car.total_review) * 100 == 100 }"></div>
                            </div>
                            <div class="flex gap-x-px w-14 justify-end text-sm text-gray-600">
                                <span>{{ rate }}</span> /
                                <span>{{ car.total_review }}</span>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <div class="py-5">
                <h4 class="text-xl font-semibold">Thông Số</h4>
                <div class="grid grid-cols-4 mt-5">
                    <div class="flex gap-x-2 items-center">
                        <div class="bg-lime-600 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                class="w-10 h-10 fill-white" viewBox="0 0 256 256" enable-background="new 0 0 256 256"
                                xml:space="preserve">
                                <g>
                                    <g>
                                        <g>
                                            <path fill="#fff"
                                                d="M117.3,10.3c-22,2.3-42.3,10.3-60.2,23.7c-5.9,4.4-18.7,17.2-23,23C18,78.6,10,102.2,10,128.2c0,39.4,20.1,75.9,54.2,98.7c10.1,6.7,25,13.1,37.3,16c27.8,6.5,57.2,2.5,82.2-11.3c27.7-15.2,48.1-40.3,57.3-70.1c3.4-11.2,4.9-21.3,4.9-33.9c0-18.3-3.8-34.4-11.9-50.8c-17.6-35.8-50.8-60.1-90.2-66C138.2,10.1,122.9,9.7,117.3,10.3z M142.8,20.9c27.2,3.5,52.7,17.8,69.8,39.3c11.3,14.1,18.8,31.1,22.1,49.9c1.4,8,1.6,26.7,0.2,34.6c-4,23.7-14,43.6-30.2,59.8c-25.1,25.1-61.3,36.2-96.9,29.6C66,226.4,33.1,195.2,23,153.8c-2.2-9.1-2.8-14.9-2.8-25.8c0-18.1,3.2-32.5,11-48.3c5.6-11.5,12-20.2,21.5-29.5C76.4,27.1,108.8,16.5,142.8,20.9z" />
                                            <path fill="#fff"
                                                d="M78.2,61.5C69.7,64.2,64,73.1,65.6,80.9c1.1,5.3,5.2,10.6,9.8,12.8l2.4,1.1l0,30.6v30.6l-2.4,1.1c-2.9,1.4-7.3,5.8-8.5,8.7c-2.9,6.6-1.7,12.7,3.4,18.4c1.5,1.7,3.4,3.1,5.5,4.1c2.7,1.4,3.6,1.6,6.9,1.6c3.3,0,4.2-0.2,6.9-1.5c3.9-1.9,7.1-5.2,9-9.3c1.3-2.8,1.4-3.4,1.3-7c-0.1-3.1-0.5-4.4-1.6-6.6c-1.6-3.2-5.4-6.9-8.5-8.4l-2.2-1v-14v-14h15.1h15.1v14v14l-2.2,1c-4.9,2.4-9,7.8-10.1,13.1c-1.3,6.8,3.2,14.6,10.3,18.1c2.7,1.4,3.6,1.6,6.9,1.6c3.1,0,4.2-0.2,6.4-1.2c8.7-4.1,12.9-13.5,9.8-21.7c-1.2-3.3-4.9-7.5-8.3-9.4l-2.5-1.4V142V128h23.1c24.9,0,25.1,0,26.4-2.4c0.4-0.7,0.5-5.4,0.5-15.7L178,95l2.6-1.3c3.6-1.8,7.8-6.4,9.2-9.9c0.8-2.2,1-3.4,0.8-6.5c-0.3-4.7-1.7-7.8-5.3-11.3c-2.9-2.9-5.9-4.4-9.8-5.1c-2.6-0.4-3.3-0.4-6.2,0.5c-1.9,0.6-4.3,1.8-5.6,2.8c-7.1,5.4-9.4,13.5-5.9,20.6c1.8,3.6,5,7,8.2,8.7l2.2,1.2v11.6v11.7h-20h-20v-11.7c0-11.3,0-11.8,0.9-12.1c1.7-0.6,5.7-3.9,7.5-6.3c3.7-4.9,4.4-11,2-16.2c-2.5-5.5-6.8-9-12.4-10.5c-2.7-0.7-3.5-0.8-5.8-0.2c-6,1.2-10.5,4.7-13.2,10.2c-1.4,2.8-1.7,4-1.7,6.4c-0.1,3.8,1.1,7.3,3.4,10.4c1.9,2.6,6,5.9,7.8,6.4l1.1,0.3v11.7v11.7l-14.9-0.1l-15-0.1l-0.1-11.3l-0.1-11.4l2.5-1.4c3.5-2,7.5-6.5,8.8-9.8c1.4-3.6,1.2-9.2-0.4-12.4c-2.6-5.1-7-8.8-12.1-10.1C83,60.4,81.5,60.5,78.2,61.5z M87.1,71.9c1.9,1.2,2.9,3.4,2.9,6.5c0,5.6-5.6,8.8-11.1,6.3c-2.4-1.1-3.5-3.2-3.5-6.6c0-4.7,2.4-7.1,7.3-7.1C84.8,71,86,71.3,87.1,71.9z M127.1,71.9c2.7,1.7,3.8,6.7,2.2,10.2c-1.5,3.1-6.4,4.3-10.4,2.6c-2.3-1-3.5-3.2-3.5-6.4c0-4.9,2.4-7.3,7.3-7.3C124.8,71,126,71.3,127.1,71.9z M178,71.9c1.9,1.2,2.9,3.4,2.9,6.5c0,5.6-5.6,8.8-11.1,6.3c-2.4-1.1-3.5-3.2-3.5-6.6c0-4.7,2.4-7.1,7.3-7.1C175.6,71,176.9,71.3,178,71.9z M87.1,166.3c2.2,1.4,3,3.5,2.9,6.7c-0.3,4.7-2.6,6.9-7.2,6.9c-3,0-4.8-0.9-6.3-3c-0.9-1.4-1.1-2.1-0.9-4.8c0.1-2.7,0.4-3.3,1.6-4.6c0.8-0.8,2-1.6,2.8-1.9C81.8,165,85.7,165.4,87.1,166.3z M127.1,166.3c1.9,1.3,3,3.5,3,6.4c0,4.6-2.6,7.2-7.3,7.2c-4.6,0-7.3-2.6-7.3-7.1c0-3.8,1.6-6.3,4.5-7.2C121.8,165,125.7,165.4,127.1,166.3z" />
                                            <path fill="#fff"
                                                d="M161.2,148.3c-0.6,0.3-1.5,1.1-2,1.8c-0.9,1.2-1,6.3-0.9,28.9l0,8l1.6,1.6c1.5,1.5,1.8,1.6,3.7,1.4c1.4-0.2,2.4-0.7,3.3-1.7c1.2-1.4,1.3-1.6,1.3-7.1v-5.6h2.4h2.3l4.6,6.4c2.5,3.5,5.1,6.8,5.8,7.3c2.8,2.2,7.6-0.4,7.6-4c0-1.6-0.7-2.7-5.6-9.7l-1.6-2.2l2.4-2.4c3.1-3.1,4.5-6,4.5-9.7c0-4.8-3.2-9.5-8.1-11.9c-2.6-1.3-3-1.3-11.4-1.5C164.6,147.7,162,147.9,161.2,148.3z M179.9,158.6c0.8,0.7,0.7,4.2-0.1,5.4c-0.6,0.8-1.4,0.9-6.1,1l-5.5,0.2v-3.6v-3.5l3.7-0.2C176.1,157.7,179,158,179.9,158.6z" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>

                        <div class="flex flex-col gap-y-0.5">
                            <span class="text-lg font-bold">Hộp Số</span>
                            <span class="text-gray-600">{{ car.transmission_type == 1 ? 'Số tự động' : 'Số sàn' }}</span>
                        </div>
                    </div>
                    <div class="flex gap-x-2 items-center">
                        <div class="bg-lime-600 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                class="w-10 h-10 fill-white" viewBox="0 0 95.42 122.88" xml:space="preserve">
                                <g>
                                    <path
                                        d="M35.99,0h23.13c1.22,0,2.39,0.25,3.46,0.69c1.11,0.46,2.11,1.14,2.94,1.97c0.84,0.84,1.51,1.83,1.97,2.94 c0.44,1.07,0.69,2.24,0.69,3.46v10.12c0,1.05-0.18,2.07-0.52,3.01c-0.29,0.8-0.68,1.56-1.17,2.24c1.91,0.29,3.72,0.87,5.4,1.7 c1.89,0.93,3.6,2.16,5.07,3.63c3.42,3.42,5.54,8.14,5.54,13.33v40.2c0.74-0.25,1.48-0.43,2.21-0.52c0.87-0.11,1.74-0.1,2.59,0.04 c1.13,0.18,2.21,0.57,3.18,1.18c0.93,0.59,1.78,1.38,2.51,2.4c1.45,2.03,2.38,4.99,2.43,8.99c0.04,3.49-0.59,7.77-2.13,12.92 l-2.09,6.98c-0.16,0.53-0.28,0.97-0.38,1.35c-0.11,0.4-0.19,0.73-0.26,1.03c-0.19,0.77-0.33,1.37-0.54,1.88 c-0.22,0.54-0.5,0.97-0.94,1.39c-1.14,1.05-2.29,1.05-4.93,1.05l-0.54,0c-18.6,2.24-52.15-0.28-72.62,0.01 c-2.43,0.02-3.58,0.03-4.71-0.96l-0.07-0.05c-0.96-0.87-1.16-1.85-1.54-3.66l0,0c-0.07-0.32-0.14-0.68-0.23-1.08 c-0.09-0.4-0.2-0.87-0.34-1.44l-1.74-6.89c-0.18-0.73-0.33-1.28-0.48-1.83l-0.02-0.09c-0.82-3.11-1.72-6.51-1.86-9.88 c-0.14-3.4,0.51-6.76,2.8-9.7c0.55-0.7,1.16-1.3,1.83-1.8c0.67-0.5,1.41-0.88,2.18-1.15c0.73-0.25,1.49-0.4,2.27-0.44 c0.77-0.04,1.56,0.03,2.36,0.21c0.16,0.04,0.32,0.08,0.47,0.12l0.05,0.01V43.08c0-2.54,0.51-4.98,1.43-7.2 c0.96-2.31,2.37-4.39,4.11-6.13c1.54-1.54,3.34-2.82,5.34-3.76c1.77-0.83,3.69-1.4,5.71-1.65c-0.47-0.67-0.85-1.41-1.13-2.2 c-0.33-0.93-0.51-1.94-0.51-2.97V9.06c0-1.22,0.25-2.39,0.69-3.46c0.46-1.11,1.14-2.11,1.97-2.94l0.02-0.02 c0.83-0.83,1.82-1.5,2.92-1.95C33.6,0.25,34.77,0,35.99,0L35.99,0z M62.61,47.01c0.34-0.52,0.86-0.85,1.42-0.96 c0.56-0.12,1.16-0.02,1.67,0.31l0.03,0.02c0.51,0.34,0.84,0.85,0.95,1.41c0.11,0.56,0.02,1.16-0.31,1.67l-0.02,0.02 c-1.49,2.26-2.84,4.64-4.03,7.15c-1.19,2.51-2.22,5.14-3.06,7.91c-0.84,2.78-1.5,5.7-1.95,8.79c-0.45,3.09-0.69,6.34-0.71,9.77 c0,0.62-0.25,1.18-0.66,1.58c-0.41,0.41-0.97,0.66-1.59,0.66c-0.62,0-1.18-0.25-1.59-0.66l-0.02-0.02 c-0.39-0.4-0.64-0.96-0.64-1.57c0.01-3.66,0.27-7.14,0.76-10.44c0.48-3.3,1.19-6.44,2.09-9.42c0.91-2.99,2.01-5.83,3.29-8.52 C59.54,52.02,61,49.46,62.61,47.01L62.61,47.01z M28.88,49.5l-0.04-0.06c-0.32-0.51-0.42-1.1-0.3-1.65 c0.11-0.55,0.43-1.06,0.93-1.4l0.06-0.04c0.51-0.32,1.1-0.42,1.65-0.3c0.56,0.12,1.08,0.45,1.42,0.96c1.61,2.45,3.07,5.01,4.35,7.7 c1.28,2.7,2.39,5.53,3.3,8.52c0.91,2.99,1.61,6.12,2.09,9.42c0.48,3.3,0.74,6.77,0.75,10.44c0,0.62-0.25,1.18-0.66,1.58 c-0.4,0.41-0.97,0.66-1.58,0.66c-0.62,0-1.18-0.25-1.58-0.66c-0.41-0.41-0.66-0.97-0.66-1.59c-0.01-3.43-0.25-6.68-0.7-9.77 c-0.45-3.09-1.11-6.01-1.95-8.79c-0.84-2.77-1.87-5.4-3.06-7.91C31.72,54.13,30.37,51.76,28.88,49.5L28.88,49.5z M78,85.94V43.08 c0-1.94-0.39-3.79-1.09-5.48c-0.73-1.76-1.8-3.34-3.13-4.67c-1.33-1.33-2.91-2.4-4.67-3.13c-1.69-0.7-3.54-1.09-5.48-1.09H30.85 c-1.94,0-3.79,0.39-5.48,1.09c-1.76,0.73-3.34,1.8-4.67,3.13c-1.33,1.33-2.4,2.91-3.13,4.67c-0.7,1.69-1.09,3.54-1.09,5.48v42.73 c1.31,1.11,2.61,2.56,3.83,4.39c1.12,1.67,2.17,3.66,3.13,5.97c3.56-1.8,7.24-3.13,11.03-4.01c3.9-0.91,7.92-1.34,12.06-1.32 c4.12,0.02,8.35,0.51,12.68,1.43c4.22,0.9,8.54,2.21,12.95,3.93c0.45-2.08,1.18-3.97,2.11-5.62C75.3,88.73,76.59,87.17,78,85.94 L78,85.94z M13.44,89.13c-0.19-0.07-0.36-0.17-0.52-0.28c-0.16-0.12-0.31-0.26-0.44-0.41c-0.34-0.21-0.67-0.39-1-0.53 c-0.34-0.15-0.68-0.26-1.01-0.34c-0.39-0.09-0.77-0.12-1.13-0.11c-0.36,0.01-0.71,0.08-1.04,0.19c-0.36,0.12-0.7,0.31-1.03,0.56 c-0.33,0.25-0.63,0.55-0.92,0.92c-1.59,2.05-1.98,4.63-1.8,7.35c0.18,2.76,0.96,5.68,1.66,8.34l0.03,0.13 c0.18,0.7,0.36,1.37,0.48,1.83l1.74,6.89c0.25,1.01,0.45,1.94,0.61,2.7l0.01,0.03c0.1,0.51,0.16,0.87,0.2,1.1 c0,0.03,0,0.04-0.01,0.06c0.02-0.01,0.06-0.02,0.11-0.02c0.3-0.02,0.81-0.06,1.6-0.07l1.42-0.02h71.13l0.08,0.01l0.53,0 c0.86,0,1.41,0.03,1.73,0.05c0.05,0,0.09,0.01,0.13,0.03l0-0.04c0.04-0.19,0.09-0.5,0.2-0.93l0.01-0.02 c0.17-0.71,0.39-1.6,0.69-2.59l2.09-6.98c1.34-4.47,1.94-8.11,1.98-11.01c0.05-3.25-0.58-5.55-1.63-7.02 c-0.36-0.5-0.77-0.89-1.22-1.18c-0.47-0.3-0.97-0.49-1.5-0.57c-0.56-0.09-1.17-0.07-1.79,0.06c-0.63,0.13-1.28,0.36-1.93,0.7 c-1.73,0.89-3.37,2.46-4.6,4.58c-1.11,1.9-1.88,4.25-2.08,6.96l-0.01,0.06c-0.01,0.1-0.03,0.2-0.05,0.3l0,0.01 c-0.03,0.11-0.06,0.22-0.11,0.33c-0.24,0.57-0.69,0.99-1.22,1.21c-0.53,0.22-1.14,0.23-1.71-0.01c-4.69-1.98-9.26-3.49-13.7-4.52 c-4.43-1.02-8.73-1.55-12.89-1.58c-4.12-0.02-8.12,0.45-11.98,1.44c-3.86,0.99-7.59,2.5-11.18,4.54l-0.18,0.09 c-0.06,0.03-0.13,0.06-0.19,0.08l-0.02,0.01c-0.58,0.19-1.18,0.14-1.69-0.11c-0.52-0.25-0.94-0.7-1.14-1.28 c-0.92-2.64-1.95-4.83-3.05-6.62C15.91,91.57,14.68,90.13,13.44,89.13L13.44,89.13z M86.05,117.57l0.01,0.01 C86.06,117.57,86.06,117.57,86.05,117.57L86.05,117.57z M59.12,4.5H35.99c-0.61,0-1.2,0.12-1.74,0.35 c-0.56,0.23-1.06,0.57-1.48,0.99l-0.02,0.02c-0.41,0.42-0.75,0.92-0.98,1.47c-0.22,0.53-0.35,1.12-0.35,1.74v10.12 c0,1.25,0.51,2.39,1.34,3.22l0.02,0.02c0.82,0.82,1.96,1.32,3.2,1.32h23.13c1.25,0,2.39-0.51,3.22-1.34l0.02-0.02 c0.82-0.83,1.32-1.96,1.32-3.2V9.06c0-0.61-0.12-1.2-0.35-1.74c-0.23-0.56-0.57-1.06-1-1.48c-0.42-0.42-0.93-0.76-1.48-0.99 C60.32,4.62,59.74,4.5,59.12,4.5L59.12,4.5z" />
                                </g>
                            </svg>

                        </div>
                        <div class="flex flex-col gap-y-0.5">
                            <span class="text-lg font-bold">Chỗ Ngồi</span>
                            <span class="text-gray-600">{{ car.seats }} ghế</span>
                        </div>
                    </div>
                    <div class="flex gap-x-2 items-center">
                        <div class="bg-lime-600 p-2 rounded-full">
                            <svg class="w-10 h-10 fill-white" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M522.267 910.508c16.962 0 30.72-13.758 30.72-30.72v-736.43c0-16.962-13.758-30.72-30.72-30.72H143.356c-16.962 0-30.72 13.758-30.72 30.72v736.43c0 16.962 13.758 30.72 30.72 30.72h378.911zm0 40.96H143.356c-39.583 0-71.68-32.097-71.68-71.68v-736.43c0-39.583 32.097-71.68 71.68-71.68h378.911c39.583 0 71.68 32.097 71.68 71.68v736.43c0 39.583-32.097 71.68-71.68 71.68zm388.62-678.049v500.265c0 49.412-40.054 89.467-89.467 89.467-49.443 0-89.498-40.054-89.498-89.467 0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48c0 72.034 58.393 130.427 130.427 130.427 72.065 0 130.458-58.393 130.458-130.427V273.419c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z" />
                                <path
                                    d="M731.92 779.436V368.648c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48v410.788c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48z" />
                                <path
                                    d="M731.943 365.513v-34.499c0-49.414-40.053-89.467-89.467-89.467-49.415 0-89.477 40.054-89.477 89.467v34.499c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48v-34.499c0-26.789 21.722-48.507 48.517-48.507 26.792 0 48.507 21.715 48.507 48.507v34.499c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48zM942.5 254.981L767.785 80.266c-7.998-7.998-20.965-7.998-28.963 0s-7.998 20.965 0 28.963l174.715 174.715c7.998 7.998 20.965 7.998 28.963 0s7.998-20.965 0-28.963zM438.84 281.52c5.657 0 10.24-4.583 10.24-10.24V225.2c0-5.657-4.583-10.24-10.24-10.24H225.541a10.238 10.238 0 00-10.24 10.24v46.08c0 5.657 4.583 10.24 10.24 10.24H438.84zm0 40.96H225.541c-28.278 0-51.2-22.922-51.2-51.2V225.2c0-28.278 22.922-51.2 51.2-51.2H438.84c28.278 0 51.2 22.922 51.2 51.2v46.08c0 28.278-22.922 51.2-51.2 51.2z" />
                                <path
                                    d="M928.972 358.832h-48.978c-11.309 0-20.48-9.171-20.48-20.48V191.091c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48v147.261c0 33.931 27.509 61.44 61.44 61.44h48.978c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48z" />
                            </svg>
                        </div>
                        <div class="flex flex-col gap-y-0.5">
                            <span class="text-lg font-bold">Nhiên Liệu</span>
                            <span class="text-gray-600">{{ car.fuel_type == 3 ? 'Điện' : car.fuel_type == 2 ? 'Dầu'
                                : 'Xăng' }}</span>
                        </div>
                    </div>
                    <div class="flex gap-x-2 items-center">
                        <div class="bg-lime-600 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                class="w-10 h-10 fill-white" viewBox="0 0 256 256" enable-background="new 0 0 256 256"
                                xml:space="preserve">
                                <g>
                                    <g>
                                        <g>
                                            <path fill="#fff"
                                                d="M116.6,10.3C81,13.9,49.3,33,29.3,62.9C21.9,74,14.9,90.5,12.3,103.5c-2,10-2.4,13.6-2.3,24.7c0,12,0.8,18.9,3.6,29.5c2.2,8.3,4.3,14,8.6,22.6c23.7,47.9,76.6,73.9,129,63.4c39.1-7.8,72.2-35.7,86.8-73.1c4.9-12.6,7.4-24.7,7.9-38.8c1.1-31.9-10.8-62.7-33.1-85.8c-18.6-19.2-41.6-31-68.3-35.1C138.7,10,122.5,9.6,116.6,10.3z M142.7,29c32.3,4.9,60.6,25.6,74.9,54.8c4.7,9.5,7.3,17.8,9.2,28.9c1.4,8.2,1.4,22.2,0,30.5c-3.2,19-10.6,35-22.6,49.4c-12.8,15.3-31.4,27.1-50.7,32.1c-9.2,2.4-15.3,3.1-25.6,3.1c-10.2,0-16.3-0.7-25.6-3.1c-19.2-5-37.8-16.7-50.7-32.1c-30.3-36.1-31.7-87.2-3.4-125.1c4.2-5.6,13.6-15,19.2-19.2c15-11.2,32.6-18.1,51-20C124,27.7,136.7,28,142.7,29z" />
                                            <path fill="#fff"
                                                d="M126,53c-0.4,0.1-1.2,0.7-1.7,1.2c-1.1,0.9-1.1,1-1.1,16.3c0,8.4,0.1,15.7,0.3,16.1c0.4,0.9,2.5,2.1,3.9,2.1c0.6,0,1.6-0.6,2.4-1.3l1.3-1.3V71.2c0-8.3-0.2-15.3-0.5-15.9c-0.2-0.6-1.1-1.5-1.8-1.9C127.4,52.6,127.2,52.6,126,53z" />
                                            <path fill="#fff"
                                                d="M88.2,63.2c-0.4,0.1-1.2,0.7-1.7,1.2c-2,1.8-1.6,3.1,5.7,15.6c3.7,6.4,7.1,11.9,7.5,12.3c1.3,1,3.7,0.7,4.9-0.6c2.1-2,1.7-3.1-5.6-15.8C91.7,63.3,90.8,62.2,88.2,63.2z" />
                                            <path fill="#fff"
                                                d="M161.4,63.3c-0.5,0.2-1.2,0.8-1.7,1.2c-1.4,1.6-13.8,23.4-13.8,24.3c0,1.2,1.2,3.4,2.1,3.7c1.4,0.5,3.4,0.3,4.3-0.6c0.8-0.6,11.3-18.4,13.7-23.1c1.1-2.1,0.6-4.1-1.2-5.2C163.1,62.8,162.7,62.7,161.4,63.3z" />
                                            <path fill="#fff"
                                                d="M60.5,90.9c-1.7,0.6-2.8,2.2-2.8,3.8c0,1.2,0.3,2,1.1,2.6c0.6,0.6,4.8,3.2,9.5,5.9c9.3,5.4,10.7,5.8,12.6,3.7c1.2-1.3,1.5-3.8,0.6-5c-1-1.2-19.4-11.6-20.1-11.4C61.2,90.6,60.9,90.7,60.5,90.9z" />
                                            <path fill="#fff"
                                                d="M189.3,90.9c-1.7,0.6-18.2,10.4-18.8,11.1c-1,1.3-0.7,3.7,0.6,4.9c2,2,3.3,1.6,13.2-4.1c9.6-5.5,10.5-6.4,9.9-9.1C193.7,91.8,191,90.2,189.3,90.9z" />
                                            <path fill="#fff"
                                                d="M163.1,124.8c-4.2,2.9-12.8,8.7-19,12.9l-11.3,7.7l-1.4-0.7c-2.1-1.2-7.1-1.3-9.8-0.4c-5.4,1.8-9.1,7.1-9,13c0,4,1.2,6.7,3.9,9.5c2.7,2.7,5.5,3.9,9.5,3.9c8,0.1,14-6.3,13.5-14.3l-0.2-3l18.6-12.6c20.4-13.8,20.6-13.9,19.6-17.4c-0.7-2.3-2.4-3.6-4.7-3.6C171.1,119.6,169.6,120.4,163.1,124.8z" />
                                            <path fill="#fff"
                                                d="M50.8,137.4v15.9h10.4h10.4l-0.1-2.9l-0.1-2.9l-6.6-0.1l-6.6-0.1v-3.6V140l5.9-0.1l5.9-0.1l0.1-2.9l0.1-2.9h-6h-6v-3.2v-3.2h6.2h6.2v-3v-3h-9.9h-9.9V137.4L50.8,137.4z" />
                                            <path fill="#fff"
                                                d="M185.1,137.4v15.9h3.7h3.7v-6.5v-6.5h5.8h5.8v-2.8v-2.7l-5.6-0.1l-5.7-0.1l-0.1-3.6l-0.1-3.6h6.3h6.2v-3v-3h-9.9h-9.9L185.1,137.4L185.1,137.4z" />
                                            <path fill="#fff"
                                                d="M98.8,196.7v5.1h5.1h5.1v-5.1v-5.1h-5.1h-5.1L98.8,196.7L98.8,196.7z" />
                                            <path fill="#fff" d="M122.8,196.7v5.1h5.1h5.1v-5.1v-5.1h-5.1h-5.1V196.7z" />
                                            <path fill="#fff" d="M146.8,196.7v5.1h5.1h5.1v-5.1v-5.1h-5.1h-5.1V196.7z" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div class="flex flex-col gap-y-0.5">
                            <span class="text-lg font-bold">Hao Phí</span>
                            <span v-if="car.fuel_type == 3" class="text-gray-600">{{ car.fuel_consumption }} KM / Lần
                                Sạc</span>
                            <span v-else class="text-gray-600">{{ car.fuel_consumption }} Lít / 100KM</span>
                        </div>
                    </div>
                </div>
            </div>
            <CarFeature :features="car.features" />
            <div class="py-5">
                <div class="flex gap-x-2 items-center">
                    <h4 class="text-xl font-semibold py-2">Điều Khoản</h4>
                    <TheQuestion
                        answer="Người thuê có nhiệm vụ đúng với trách nhiệm dưới đây.<span class='text-red-600'>(Mọi thiệt hại người thuê phải chịu 100%)</span>" />
                </div>
                <div class="text-sm text-gray-600" v-html="car.notes.replace(/◦/g, '<br/>' + '◦')
                    .replace('Quy định khác:', text)"></div>
            </div>
        </div>
        <div class="col-span-1">
            <div class="flex flex-col gap-y-3">
                <div class="bg-green-100 flex items-center px-2 py-4 rounded-md gap-x-2 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="w-8 h-8 fill-green-500" viewBox="0 0 36 36" version="1.1"
                        preserveAspectRatio="xMidYMid meet">
                        <path
                            d="M31.25,7.4a43.79,43.79,0,0,1-6.62-2.35,45,45,0,0,1-6.08-3.21L18,1.5l-.54.35a45,45,0,0,1-6.08,3.21A43.79,43.79,0,0,1,4.75,7.4L4,7.59v8.34c0,13.39,13.53,18.4,13.66,18.45l.34.12.34-.12c.14,0,13.66-5.05,13.66-18.45V7.59ZM30,15.93c0,11-10,15.61-12,16.43-2-.82-12-5.44-12-16.43V9.14a47.54,47.54,0,0,0,6.18-2.25,48.23,48.23,0,0,0,5.82-3,48.23,48.23,0,0,0,5.82,3A47.54,47.54,0,0,0,30,9.14Z"
                            class="clr-i-outline clr-i-outline-path-1" />
                        <path d="M10.88,16.87a1,1,0,0,0-1.41,1.41l6,6L26.4,13.77A1,1,0,0,0,25,12.33l-9.47,9.19Z"
                            class="clr-i-outline clr-i-outline-path-2" />
                        <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
                    </svg>
                    <div class="font-bold text-green-500">
                        Xe đã được đăng ký bảo hiểm tai nạn
                    </div>
                </div>
                <div class="px-4 py-8 bg-gray-100 rounded-md flex flex-col gap-y-3">
                    <div class="text-xl font-semibold text-gray-900">{{ formatter.format(car?.price) }} / ngày</div>
                    <VueDatePicker class="date-picker" :enable-time-picker="false" cancelText="Hủy" selectText="Gửi"
                        fixed-start min-range="1" format="dd-MM-yyyy" :multi-calendars="{ solo: true }" id="date"
                        v-model="selectedDate" range :format-locale="vi"></VueDatePicker>
                    <LocationPicker />
                    <div class="border-t border-gray-400 pt-2">
                        <div class="flex flex-col gap-y-1">
                            <div class="flex justify-between items-center">
                                <div class="flex items-center gap-x-2">
                                    <p class="text-gray-600 font-semibold">Đơn giá thuê</p>
                                    <TheQuestion answer="Giá cơ bản từ chủ cho thuê" />
                                </div>
                                <p class="text-gray-600 font-medium"><span>{{ formatter.format(car?.price) }} / ngày</span>
                                </p>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center gap-x-2">
                                    <p class="text-gray-600 font-semibold">Phí dịch vụ</p>
                                    <TheQuestion answer="Phí duy trì và quản lý dịch vụ" />
                                </div>
                                <p class="text-gray-600 font-medium"><span>{{ formatter.format(car?.price * 0.11) }} /
                                        ngày</span></p>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center gap-x-2">
                                    <p class="text-gray-600 font-semibold">Phí bảo hiểm</p>
                                    <TheQuestion answer="Phí bảo hiểm đã được đăng ký" />
                                </div>
                                <p class="text-gray-600 font-medium"><span>{{ formatter.format(car?.price * 0.11) }} /
                                        ngày</span></p>
                            </div>
                            <div class="border-t border-gray-400"></div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center gap-x-2">
                                    <p class="text-gray-600 font-semibold">Tạm tính</p>
                                    <TheQuestion answer="Giá tiền được tạm tính" />
                                </div>
                                <p class="text-gray-600 font-medium"><span>{{ formatter.format(car?.price * 1.22) }} /
                                        ngày</span></p>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center gap-x-2">
                                    <p class="text-gray-600 font-semibold">Giảm giá</p>
                                    <TheQuestion answer="Áp dụng mã dưới đây" />
                                </div>
                                <p class="text-gray-600 font-medium"><span>{{ formatter.format(0) }} / ngày</span></p>
                            </div>
                            <div class="flex flex-col gap-y-3">
                                <input type="text" class="w-full rounded-md py-1 px-2 mt-3 border border-gray-400" id="">
                                <button>
                                    <div class="flex gap-x-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-gray-600"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M21.3 10.8394C21.69 10.8394 22 10.5294 22 10.1394V9.20938C22 5.10938 20.75 3.85938 16.65 3.85938H7.35C3.25 3.85937 2 5.10938 2 9.20938V9.67938C2 10.0694 2.31 10.3794 2.7 10.3794C3.6 10.3794 4.33 11.1094 4.33 12.0094C4.33 12.9094 3.6 13.6294 2.7 13.6294C2.31 13.6294 2 13.9394 2 14.3294V14.7994C2 18.8994 3.25 20.1494 7.35 20.1494H16.65C20.75 20.1494 22 18.8994 22 14.7994C22 14.4094 21.69 14.0994 21.3 14.0994C20.4 14.0994 19.67 13.3694 19.67 12.4694C19.67 11.5694 20.4 10.8394 21.3 10.8394ZM9 8.87938C9.55 8.87938 10 9.32938 10 9.87938C10 10.4294 9.56 10.8794 9 10.8794C8.45 10.8794 8 10.4294 8 9.87938C8 9.32938 8.44 8.87938 9 8.87938ZM15 15.8794C14.44 15.8794 13.99 15.4294 13.99 14.8794C13.99 14.3294 14.44 13.8794 14.99 13.8794C15.54 13.8794 15.99 14.3294 15.99 14.8794C15.99 15.4294 15.56 15.8794 15 15.8794ZM15.9 9.47937L9.17 16.2094C9.02 16.3594 8.83 16.4294 8.64 16.4294C8.45 16.4294 8.26 16.3594 8.11 16.2094C7.82 15.9194 7.82 15.4394 8.11 15.1494L14.84 8.41938C15.13 8.12938 15.61 8.12938 15.9 8.41938C16.19 8.70938 16.19 9.18937 15.9 9.47937Z">
                                            </path>
                                        </svg>
                                        <p class="text-gray-600 font-medium">Sử dụng mã khuyến mãi</p>
                                    </div>
                                </button>
                            </div>
                            <div class="border-t border-gray-400"></div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center gap-x-2">
                                    <p class="text-gray-600 font-bold">Tổng cộng</p>
                                    <TheQuestion answer="Bắt đầu tính từ ngày mượn" />
                                </div>
                                <p class="text-gray-600 font-medium"><span>{{ formatter.format(car?.price * 1.22) }} /
                                        ngày</span></p>
                            </div>
                            <button class="mt-3">
                                <div
                                    class="py-4 text-center bg-amber-600 rounded-md text-xl font-bold text-white hover:bg-orange-600 hover:text-amber-100 duration-300">
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
                            <div class="text-sm font-bold">
                                {{ fee.title }}
                            </div>
                            <div class="text-xs font-medium">
                                {{ formatter.format(fee.price) }}
                                /
                                {{ fee.per }}
                            </div>
                        </div>
                        <div class="text-xs text-gray-600 font-light" v-html="fee.info"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import TheQuestion from '../Card/TheQuestion.vue';
import CarFeature from './CarFeature.vue';
import LocationPicker from './LocationPicker.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import { vi } from 'date-fns/locale';
import { onMounted, ref } from 'vue';
const selectedDate = ref();
onMounted(() => {
    const now = new Date();
    const startDate = new Date(new Date().setDate(now.getDate() + 7));
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    selectedDate.value = [startDate, endDate];
})
const props = defineProps(['car'])

const text = '<span class="text-base font-medium text-gray-900">Quy định khác:</span>'
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
        price: props.car.price,
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
const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',

});
</script>
c
<style>.date-picker input {
    @apply !rounded-md
}</style>