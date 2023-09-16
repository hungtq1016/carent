<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { v4 as uuid } from 'uuid';
const data = ref()
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
    await axios.get('https://m-car.mioto.vn/car/detail?carId=KH1AIZ').then(res => {
        data.value = res.data.data.cars
        console.log(data.value);

    }
    ).catch(err => console.log(err)
    )


    await axios.get(`http://localhost:8001/api/brand`).then(res => {
            console.log(res.data);
            
        }).catch(err => console.log(err))
    data.value.map(async (item: any,index:number) => {
        
        const images:string[] = []
        let car :any
        await axios.get(`https://m-car.mioto.vn/car/detail?carId=${item.id}`).then(res => {
            car =  res.data.data.car
            console.log(car);
            
        }).catch(err => console.log(err))

        car.photos.forEach((element: any) => {
            images.push(element.fullUrl)
        });

        let payload = {
            car_name: car.name,
            seats: car.seat,
            fuel_type: car.optionsFuel,
            isDelivery: car.deliveryEnable,
            transmission_type: car.optionsTransmission,
            features: car.features,
            images: images,
            desc: car.desc,
            price: car.price,
            location:car.locationAddr,
            isInstant:car.instant,
            isMortgages:!car.nonMortgage,
            address:car.location.street,
            fuel_consumption:car.optionsFuelConsumption,
        }
            await axios.post('http://localhost:8000/api/car', payload)
        .then( (res) => {
            console.log(index, res);
        })
        .catch(err => console.log(err))
       
        
    })

}
test()

</script>
