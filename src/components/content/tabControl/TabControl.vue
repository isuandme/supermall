<template>
  <div class="tab-control">
      <div v-for="(item,index) in titles" :key="item" 
      class="tab-control-item" 
      :class="{active: index===currentIndex}"
      @click="itemClick(index)">
          <span >{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'tabControl',
    props:{
            titles:{
                type:Array,
                default(){
                    return []
                }
            }
    },
    data(){
        return {
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex = index;
            // console.log(index);
            this.$emit('tabclick',index);
        }
    }
}
</script>

<style>
.tab-control{
    background-color: rgb(255, 255, 255);
    display: flex;
    text-align: center;
    font-size: .7rem;
    height: 1.6rem;
    line-height: 1.6rem; 
}
.tab-control-item{
    flex: 1;
}
.tab-control-item span{
    padding: .2rem;
}
.active{
    /* color:var(--color-high-text); */
    color: rgb(255, 142, 150);
}
.active span{
    /* border-bottom: .12rem solid var(--color-tint); */
    border-bottom: .12rem solid rgb(255, 142, 150);
}
</style>