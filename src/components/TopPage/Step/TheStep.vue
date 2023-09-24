<template>
    <section class="py-10 dark:bg-zinc-900 dark:text-gray-100">
        <div class="max-w-screen-xl xl:mx-auto lg:mx-8 md:mx-6 mx-4">
            <h3 class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center dark:text-gray-200">Hướng Dẫn</h3>
            <div class="font-normal text-sm md:text-base xl:text-lg text-gray-600 text-center mt-3 dark:text-gray-100">Thủ tục nhanh và đơn giản.</div>
            <div class="pb-5 pt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-4">
                <div class="flex flex-col items-center gap-y-2" v-for="step in steps">
                    <div class="p-4 md:p-6 xl:p-8 bg-amber-600 text-black rounded-full duration-1000">
                        <svg xmlns="http://www.w3.org/2000/svg" class="xl:w-20 xl:h-20 w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 fill-white dark:fill-gray-100" viewBox="0 0 512 512" v-html="step.icon"> </svg>
                    </div>
                    <div class="text-base md:text-lg xl:text-2xl font-semibold dark:text-gray-200">{{step.title}}</div>
                    <div class="text-gray-700 text-center w-3/4 mx-auto dark:text-gray-100 text-sm md:text-base">{{ step.desc }}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const steps = [
    {
        title: 'Đặt Xe',
        desc:'Lựa chọn xe bạn yêu thích và phù hợp cho chuyến đi.',
        icon: '<path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />'
    },
    {
        title: 'Liên Hệ',
        desc:'Cộng tác viên sẽ liên hệ, hướng dẫn và hỗ trợ bạn cho chuyến đi.',
        icon: '<path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" />'
    },
    {
        title: 'Tận Hưởng',
        desc:'Khám phá nhiều điều mới.Để mỗi chặn đường là kỷ niệm đáng nhớ.',
        icon: '<path d="M432 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM347.7 200.5c1-.4 1.9-.8 2.9-1.2l-16.9 63.5c-5.6 21.1-.1 43.6 14.7 59.7l70.7 77.1 22 88.1c4.3 17.1 21.7 27.6 38.8 23.3s27.6-21.7 23.3-38.8l-23-92.1c-1.9-7.8-5.8-14.9-11.2-20.8l-49.5-54 19.3-65.5 9.6 23c4.4 10.6 12.5 19.3 22.8 24.5l26.7 13.3c15.8 7.9 35 1.5 42.9-14.3s1.5-35-14.3-42.9L505 232.7l-15.3-36.8C472.5 154.8 432.3 128 387.7 128c-22.8 0-45.3 4.8-66.1 14l-8 3.5c-32.9 14.6-58.1 42.4-69.4 76.5l-2.6 7.8c-5.6 16.8 3.5 34.9 20.2 40.5s34.9-3.5 40.5-20.2l2.6-7.8c5.7-17.1 18.3-30.9 34.7-38.2l8-3.5zm-30 135.1l-25 62.4-59.4 59.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L340.3 441c4.6-4.6 8.2-10.1 10.6-16.1l14.5-36.2-40.7-44.4c-2.5-2.7-4.8-5.6-7-8.6zM256 274.1c-7.7-4.4-17.4-1.8-21.9 5.9l-32 55.4L147.7 304c-15.3-8.8-34.9-3.6-43.7 11.7L40 426.6c-8.8 15.3-3.6 34.9 11.7 43.7l55.4 32c15.3 8.8 34.9 3.6 43.7-11.7l64-110.9c1.5-2.6 2.6-5.2 3.3-8L261.9 296c4.4-7.7 1.8-17.4-5.9-21.9z" />'
    },
    {
        title: 'Trả Xe',
        desc:'Liên hệ với cộng tác viên khi đã hoàn thành chuyến đi. Hoàn tất thủ tục trả xe.',
        icon: '<path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM625 177L497 305c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L591 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />'
    },
]
</script>

