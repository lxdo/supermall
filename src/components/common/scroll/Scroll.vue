<template>
  <!---
  ref如果是绑定在组件中的，那么通过this.$refs.ref的值 获取到的是一个组件对象
  -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'Scroll',
  data(){
    return {
      scroll:null
    }
  },
  mounted(){
    this.scroll=new BScroll(this.$refs.wrapper,{
      
    })
  }
}
</script>

<style scoped>

</style>