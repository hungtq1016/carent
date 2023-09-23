<template>
    <div class="flex items-center justify-center h-screen">
        <svg v-if="loading" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
            stroke="currentColor" class="w-40 h-40 text-black animate-spin">
            <path strokeLinecap="round" strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
            stroke="currentColor" class="w-40 h-40 text-green-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>

    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
const data = ref()
const loading = ref(false)
const loglocation = async () => {
    // await axios.get('https://provinces.open-api.vn/api/?depth=3').then(async(res) => {
    //     data.value = res.data
    //     await axios.post('http://localhost:8000/api/location',{provinces:data.value }).then(res => {
    //     console.log(res.data);

    // }

    // ).catch(err => console.log(err)
    // )
    // console.log(res.data);


}
const test = async () => {
    //KH1AIZ sai gon
    //K43GXE ha noi
    //KLQFIL da nang
    //KLWNLG lam dong
    //KJU8HV khanh hoa
    //KJMS4K can tho
    //KKAYTR Hai phong
    // const cars =[]
    // loading.value = true
    // await axios.get('https://m-car.mioto.vn/car/detail?carId=KFZT7D').then(res => {
    //     data.value = res.data.data.cars
    // }
    // ).catch(err => console.log(err)
    // )
    // const ind = ref(0);

    // try {
        
    //     (async () => {

    //         cars.map(async (item: any) => {

    //             const images: string[] = []
    //             let car: any
    //             await axios.get(`https://m-car.mioto.vn/car/detail?carId=${item.id}`).then(res => {
    //                 car = res.data.data.car

    //             }).catch(err => console.log(err))

    //             car.photos.forEach((element: any) => {
    //                 images.push(element.fullUrl)
    //             });

    //             let payload = {
    //                 car_name: car.name,
    //                 seats: car.seat,
    //                 fuel_type: car.optionsFuel,
    //                 transmission_type: car.optionsTransmission,
    //                 features: car.features,
    //                 images: images,
    //                 desc: car.desc,
    //                 price: car.price,
    //                 location: car.locationAddr,
    //                 isInstant: car.instant,
    //                 isInsurance: car.insSupport,
    //                 isDelivery: car.deliveryEnable,
    //                 delivery_fee: car?.deliveryLocations?.deliveryFee,
    //                 isMortgages: !car.nonMortgage,
    //                 address: car.location.street,
    //                 fuel_consumption: car.optionsFuelConsumption,
    //             }
    //             const result = await axios.post('http://localhost:8000/api/fake-car', payload)
    //                 .then((res) => {
    //                     ind.value+=1;
    //                 })
    //                 .catch(err => console.log(err))
    //             console.log(ind.value)

    //         })
    //     })();
    //     if (ind.value==10) {
    //     loading.value = false

    // }
    // } catch (error) {
    //         console.log(error);
            
    // }
   
    
}
test()

</script>

