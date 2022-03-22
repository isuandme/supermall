<template>
      <tab-bar>
      <tab-bar-item path="/home" >
        <template v-slot:item-icon>
        <img src="../../../assets/img/首页.png" alt="">
        </template>
        <template v-slot:item-icon-active>
        <img src="../../../assets/img/home-fill.png" alt="">
        </template>
        <template v-slot:item-text>
          <div >首页</div>
        </template>
      </tab-bar-item>

      
      <tab-bar-item path="/category" >
        <template v-slot:item-icon>
        <img src="../../../assets/img/all.png" alt="">
        </template>
        <template v-slot:item-icon-active>
        <img src="../../../assets/img/all-fill.png" alt="">
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/cart" >
        <template v-slot:item-icon>
        <img src="../../../assets/img/add-cart.png" alt="">
        </template>
        <template v-slot:item-icon-active>
        <img src="../../../assets/img/cart-fill.png" alt="">
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/profile">
        <template v-slot:item-icon>
        <img src="../../../assets/img/bussiness-man.png" alt="">
        </template>
        <template v-slot:item-icon-active>
        <img src="../../../assets/img/account-fill.png" alt="">
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '../../common/tabbar/Tabbarr.vue'
import TabBarItem from '../../common/tabbar/tabbaritem.vue'
export default {
    name:'MainTabbar',
    components:{
        TabBar,
        TabBarItem
    }
}
</script>

<style>

</style>