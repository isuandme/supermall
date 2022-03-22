<template>
  <div class="nav-bar">
      <div class="left">  <slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"> <slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
    name:"NavBar"
}
</script>

<style>
.nav-bar{
    display: flex;
    line-height: 1.76rem;
    /* height: 1.76rem; */
    text-align: center;
    box-shadow: 0 .04rem .04rem rgba(100, 100, 100, .1);
    z-index: 8;
    background-color:rgb(255, 142, 150);
    color: aliceblue;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
}
.left,
.right{
    width: 2.4rem;
}

.center{
    flex: 1;
}
</style>