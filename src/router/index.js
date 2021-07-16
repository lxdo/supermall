import Vue from "vue";
import VueRouter from "vue-router";

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '/',
    redirect:'/home',
  },
  {
    path:'/home',
    component:()=>import('../views/home/Home')
  },
  {
    path:'/category',
    component:()=>import('../views/category/Category')
  },
  {
    path:'/cart',
    component:()=>import('../views/cart/Cart')
  },
  {
    path:'/profile',
    component:()=>import('../views/profile/Profile')
  },
]
const router = new VueRouter({
  routes,
  mode:'history'
})

export default router 