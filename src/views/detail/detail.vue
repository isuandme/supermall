<template>
    <div id="detail">
        <nav-bar class="nav">
            <template v-slot:left>
                <div @click="leftclick">&lt;</div>
            </template>

            <template v-slot:center  >
              <div class="item">
                  <div class="list" v-for="(item, index) in  titiles" 
                    :key="item" :class="{actives:index===currentIndex }"
                     @click="listclick(index)">
                  {{item}}
                  </div>
              </div>
             </template>
        </nav-bar>
        <detail-swiper  :img="img"></detail-swiper>
        <div ref="dswiper" class="tit">{{titile}}</div>
        <div class="money"> ￥38.5
            <em>$40.00</em>
        </div>

        <div ref="comment" v-for="item in columns" :key="item">
            <p>{{item}}</p>
        </div>
        <div ref="img" v-for="item in img2" :key="item">
            <img class="imgsize" :src="item" alt="">
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import {getDetail} from "@/network/detail.js"
import DetailSwiper from "./detailSwiper"
export default {
    name: "detail",
    data(){
        return{
            iid:null,
            titiles:["商品","参数","评论","推荐"],
            currentIndex:0,
            titile:null,
            img:null,
            img2:null,
            columns:null,
            tempoffsets:[]
        }
    },
    components:{
        NavBar,
        getDetail,
        DetailSwiper
    },
    created(){
        this.iid = this.$route.params.iid;//route和router!!!
        // console.log(this.$route);
        // console.log(this.$router);
        getDetail(this.iid).then(res=>{
            console.log(res);
            this.img=res.result.itemInfo.topImages;
            this.titile=res.result.itemInfo.title;
            this.img2=res.result.detailInfo.detailImage[0].list;
            this.columns=res.result.columns;
            this.$nextTick(()=>{
                this.tempoffsets.push(0)
                this.tempoffsets.push(this.$refs.dswiper.offsetTop)
                this.tempoffsets.push(this.$refs.comment.offsetTop)
                this.tempoffsets.push(this.$refs.img.offsetTop)
                console.log(this.tempoffsets);
            })
        })
    },
    mounted(){

    },
    methods:{
        listclick(index){
            this.currentIndex=index;
            window.scrollTo(0,this.tempoffsets[index]);//this.tempoffsets

        },
        leftclick(){
            this.$router.go(-1);
        }
    }
}
</script>

<style>

.nav{
    position: fixed;
    top: 0;
    background-color: white;
    color: black;
}
em{
    color: darkgrey;
    font-size: 0.55rem;
}
.item{
    display: flex;
}
.list{
    font-size: .8rem;
    flex:1;
}
.actives{
    border-bottom: 0.1rem solid rgb(255, 111, 111);
    color: rgb(255, 153, 153);
}
.tit{
    /* background-color:  rgb(255, 188, 188); */
    margin-top: .2rem;
    color: black;
    font-size: .75rem;
}
.money{
    color: rgb(255, 106, 106);
    margin-top: .3rem;
    font-size: .9rem;
}
#detail{
    position: relative;
    top: 0;
    background-color: rgb(255, 255, 255);
    z-index: 101;
}.imgsize{
    height: 19rem;
    width: 16rem;
}
</style>