<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { v4 as uuid } from 'uuid';
const data = ref()

const test = async () => {

    await axios.get('https://m-car.mioto.vn/homepage/sd').then(res => {
        data.value = res.data.data.dealArounds
        console.log(data.value);

    }
    ).catch(err => console.log(err)
    )


    data.value.map(async (item: any) => {
        
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
            electric: car.deliveryEnable,
            gear: car.optionsTransmission,
            features: car.features,
            images: images,
            desc: car.desc,
            price: car.price,
            location:car.locationAddr,
            notes:car.notes
        }
            await axios.post('http://localhost:8000/api/car', payload)
        .then( (res) => {
            console.log(res);
        })
        .catch(err => console.log(err))
       
        
    })

}
test()

</script>
