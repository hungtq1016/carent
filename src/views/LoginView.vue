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
 
    await axios.get('https://m-car.mioto.vn/homepage/sd').then(res=>{
        data.value = res.data.data.dealArounds
    }
    ).catch(err=>console.log(err)
    )
    console.log(data.value);
    
    data.value.map(async (item:any)=>{
        let imgs:any[] =[]
        item.photos.forEach((element:any) => {
            imgs.push(element.fullUrl)
        });
        let payload = {
            car_name:item.name,
            seats:item.seat,
            electric : item.deliveryEnable,
            gear: item.optionsTransmission,
            images : imgs,
        }
        await axios.post('http://localhost:8000/api/car',payload).then(res=>{
            console.log(res);
            
    }
    ).catch(err=>console.log(err)
    )
    })
    
}
test()

</script>
