<template>
      <div class="tab-bar-item" @click="item">
          <div v-if="!IsActive"><slot name="item-icon"></slot></div>
          <div v-else><slot name="item-icon-active"></slot></div>
          <div :style="activeStyle" :class="{ active: IsActive}"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
      path: String,
      activeColor:{
        type:String,
        default:'black'
      }
    },
    data(){
      return{
        // IsActive:false
      }
    },
    computed:{
      IsActive(){
        return this.$route.path.indexOf(this.path) !==-1
        //路径中有path不等于-1
      },
      //动态决定字体颜色，由App传数据过来
      activeStyle(){
        return this.IsActive ? {color:this.activeColor}:{}
      }
    },
    methods:{
      item(){
        this.$router.replace(this.path)
      }
    }
}
</script>

<style>
.tab-bar-item img{
  height: 1.2rem;
  /* width: 1.08rem; */
}
.tab-bar-item{
   flex:1;
   text-align: center;
   line-height: .5rem;
   height: 1.8rem;
   height: 1.96rem;
   font-size: .55rem;
   vertical-align: middle;
   margin-bottom: .026667rem;
   color: gray;
 }
 .active{
   color: rgb(0, 0, 0);
 }
</style>