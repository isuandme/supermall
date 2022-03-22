<template>
  <div class="goods">
      
    <div class="goods-item" v-for="item in goods" :key="item" :goods-item="item"
    @click="gclick(item)">
    <!-- <div class="goodss"> -->
        <!-- <div class="goods-item"> -->
      <img :src="item.show.img" alt="">
       <div class="goods-info">
          <p>{{item.title}}</p>
          <span class="price">￥{{item.price}}</span>
          <span class="collect">{{item.cfav}}</span>
       </div> 
     </div>
    <!-- </div> -->
    <!-- </div>  -->
  </div>
</template>

<script>
import GoodsListitem from './GoodsListItem.vue'
export default {
    name:'GoodsList',
    conponents:{
        GoodsListitem
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        gclick(item){
         //点击跳转详情页 
         this.$router.push("/detail/"+item.iid ); 
        }
    }
}
</script>

<style>
.goods{
    display: flex;
    flex-wrap: wrap;
    margin-top: .4rem;
    /* justify-content: space-around; */
}
.goods-item{
    padding-bottom: 1.6rem;
    margin-left: .55rem;
    position: relative;
    width: 45%;
}
.goods-item img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
}
.goods-info{
    font-size: .48rem;
    position: absolute;
    bottom: .2rem;
    left: 0rem;
    right: 0rem;
    overflow: hidden;
    text-align: center;
}
.goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: .12rem;
}
.goods-info .price{
    color: rgb(255, 134, 134);
    margin-right: .8rem;
}
.goods-info .collect{
    position: relative;
}
.goods-info .collect::before{
    content: '';
    position: absolute;
    left: -0.6rem;
    top: -0.04rem;
    width: .56rem;
    height: .56rem;
    background: url("~@/assets/img/collect.svg") 0  0/.56rem .56rem;
}
</style>