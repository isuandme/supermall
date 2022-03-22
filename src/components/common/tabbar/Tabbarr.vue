<template>
  <div id="tab-bar">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'TabBar'
}
</script>

<style>

#tab-bar {
  z-index: 100;
   display: flex;
   background-color: #f6f6f6;
   position: fixed;
   left: 0;
   right: 0;
   bottom: 0;
   box-shadow: 0 -0.026667rem .013333rem rgba(235, 235, 235, 0.95);
 }
 
</style>