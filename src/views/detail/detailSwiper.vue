<template>
    <swiper class="swipe">
        <template v-slot:si>
            <swiper-item v-for="item in img" :key="item">
            <a :href="item.link">
              <img :src="item" alt="">
            </a>       
            </swiper-item>  
        </template>
</swiper>
</template>

<script>
import {Swiper,SwiperItem} from "@/components/common/swiper"
export default {
    name:'DetailSwiper',
    props:{
        img:{
            type: Array,
            default(){
                return []
            }
        }
    },
    components:{
        Swiper,
        SwiperItem
    }
}
</script>

<style>
.swipe{
    height: 12rem;
    overflow: hidden;
}
</style>