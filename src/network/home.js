/* 首页数据请求封装 */
import { request } from "./request";

// 首页模块
export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}

// 商品列表
export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }

  })
}

/**
  把一个数组追加到另一个数组
 */
let totalNums = [10,20,30]
let num1=[40,50,60]
totalNums.push(...num1) // 原理 1.数组的结构 2.push 可以接收多个参数
console.log(totalNums)