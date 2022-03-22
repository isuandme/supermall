<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"

export default {
    name:"Scroll",
    data(){
        return {
            scroll:null
        }
    },
    mounted(){
        // console.log(document.querySelector('.wrapper')); 获取不准确
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true,
        })
        this.scroll.scrollTo(0,0);
    }
}
</script>

<style>

</style>