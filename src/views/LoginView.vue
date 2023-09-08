<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { v4 as uuid } from 'uuid';
const data = ref()
const brands =  ref()
const models =  ref()
const test = async () => {
    await axios.get('http://localhost:8000/api/brand').then(res=>{
        brands.value = res.data.data
        
    }
    ).catch(err=>console.log(err)
    )



    await axios.get('https://m-car.mioto.vn/homepage/sd').then(res=>{
        data.value = res.data.data.dealArounds
    }
    ).catch(err=>console.log(err)
    )
    console.log(data.value);
    
    const imgs:any[] =[]
    data.value.map((item:any)=>{
        item.photos.forEach((element:any) => {
            let imgid = uuid()
            imgs.push({
                id:imgid,
                src:element.fullUrl
            })
        });
    })
    console.log(brands.value);
    
}
test()

</script>
