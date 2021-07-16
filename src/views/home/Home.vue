<template>
  <div id="home">
    <!-- 头部导航 -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"></tab-control>
    <goods-list :goods="showGoods"></goods-list>
  </div>
</template>

<script>
// 公共组件
// common通用组件
import NavBar from '@/components/common/navbar/NavBar' // 头部导航
// content项目通用组件
import TabControl from '@/components/content/tabControl/TabControl' // tab切换
import GoodsList from '@/components/content/goods/GoodsList' // 商品列表

// 模块子组件
import HomeSwiper from '@/views/home/childComps/HomeSwiper' // 轮播图
import RecommendView from '@/views/home/childComps/RecommendView' // 推荐模块
import FeatureView from '@/views/home/childComps/FeatureView' // 本周流行

// 数据
import {
  getHomeMultidata,
  getHomeGoods
  } from 'network/home' // 首页数据

export default {
  name: "Home",
  components:{
    // 公共组件
    // common通用组件
    NavBar, // 头部导航
    // content项目通用组件
    TabControl, // tab切换
    GoodsList, // 商品列表

    // 模块子组件
    HomeSwiper, // 轮播图
    RecommendView, // 推荐模块
    FeatureView // 本周流行

  },
  data(){
    return {
      banners:[],
      recommends:[],
      // 商品列表
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop'
    }
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  created(){
    // 1.请求多个数据 
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  methods:{
    /**
     * 事件监听相关方法
     */
    tabClick(index){
      switch(index){
        case 0 :
          this.currentType='pop'
          break
        case 1:
          this.currentType= 'new'
          break
        case 2:
          this.currentType='sell'
          break  

      }
    },
    /**
     * 网络请求相关方法
     */
    getHomeMultidata(){
      // 请求分类
      getHomeMultidata().then(res=>{
        // console.log(res)
        // 数据比较复杂时，把数据拆分赋值
        this.banners=res.data.banner.list
        this.recommends=res.data.recommend.list
      })
    },
    getHomeGoods(type){
      // 请求商品列表
      let page = this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page++
      })
    },
  
  }
}
</script>

<style scoped>
  #home {
    /* 限制头部导航滚动 */
    padding-top: 44px;
  }

  .home-nav {
    background-color:var(--color-tint) ; /* 使用base.css 中设置的变量  */
    color:#fff ;
    /* 限制头部导航滚动 */
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  /* tab切换 下拉固定切换分类 */
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }
</style>
