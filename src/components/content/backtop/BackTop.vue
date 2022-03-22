<template>
  <div class="back-top" @click="btclick">
      <img src="@/assets/img/箭头.png" alt="">
  </div>
</template>

<script>
export default {
    name:"BackTop",
    methods:{
        btclick(){
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
    }
}
</script>

<style>
.back-top{
    z-index: 200;
    position: fixed;
    right: .4rem;
    bottom: 2.4rem;
    height: 2rem;
    width: 2rem;
    border: .2rem solid rgb(228, 123, 123);
    border-radius: 50%;
    padding-bottom: 1.7rem;
}
.back-top img{
    height: 1.72rem;
    width: 1.72rem;
}
</style>