<template>
  <div>
      <img :src="goodsitem.show.img" alt="">
      <div>
          <p>{{goodsitem.title}}</p>
          <span class="price">{{goodsitem.price}}</span>
          <span class="collect">{{goodsitem.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:"GoodsListItem",
    props:{
        goodsItem:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style>

</style>