<template>
  <div class="recommend">
      <div class="recommend-item" v-for="item in recommends" :key="item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:"HomeRecommendView",
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
.recommend{
    display: flex;
    text-align: center;
    font-size: .55rem;
    padding: .1rem 0 .8rem;
    border-bottom: 10px solid #eee;
}
.recommend-item{
    flex: 1;
}
.recommend-item img{
    margin-bottom: .2rem;
    width: 95%;
}
</style>