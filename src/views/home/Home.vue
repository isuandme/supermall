<template>
  <div id="home">
    <div class="navbar">
       <nav-bar>
        <template v-slot:center>
          购物街
        </template>
      </nav-bar>
    </div>
      <!-- <scroll class="content" ref="scroll"> -->
        <!-- scroll无效待解决 -->
        <home-swiper :banners="banners"></home-swiper>
        <recommend-view :recommends="recommends">
        </recommend-view>
        <!-- 本周流行-->
        <img class="week" src="@/assets/img/weekpopular.png" alt="">
        <tab-control class="tab-control" :titles="['精选','流行','新款']" v-on:tabclick="tabclick"></tab-control>
        
          <goods-list :goods="goods[currrentType].list"></goods-list>
      <!-- </scroll> -->
      <back-top>
      </back-top>
  </div>
</template>
<script>

import NavBar from '@/components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from "./childComps/HomeRecommendView"
import TabControl from "@/components/content/tabControl/TabControl.vue"
import GoodsList from "@/components/content/goods/GoodsList.vue"
import Scroll from "@/components/common/scroll/Scroll.vue"
import BackTop from "@/components/content/backtop/BackTop.vue"
import {getHomeMultidata, getHomeGoods} from "@/network/home.js"

export default {
  name:'Home', 
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data(){
    return{
      // result:null
      banners:[],
      recommends:[],
      goods:{
        'pop': {page: 0 ,list :[]},
        'new': {page: 0 ,list :[]},
        'sell': {page: 0 ,list :[]}
      },
      currrentType:'pop'
    }
  },
  created(){
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
  },
  methods:{
    // 网络请求
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // console.log(this.banners);
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page++
        // console.log(this.goods);
      })
    },
    // 事件监听
    tabclick(index){
      this.currrentType = Object.keys(this.goods)[index]
    }
  }
}
</script>

<style>
.navbar{
  height: 1.76em;
}
.week{
  width: 100%;
}
.tab-control{
  z-index: 100;
  position: sticky;
  top: 1.75rem;
}
.content{
  height: calc(100%-93px);
  overflow: hidden;
  /* margin-top: 1.76rem; */
}


</style>