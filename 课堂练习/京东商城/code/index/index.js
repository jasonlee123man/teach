const app = getApp()
import products from '../data/products.js';

let store = wx.getStorageSync('cart')||[];   
Page({
  data: {
    products
  },
  onLoad: function(e) {
    console.log(e)
  },
  // 添加购物车
  addCart(e) {
    let goods_id = e.target.dataset.goods_id;
    // 添加购物车
    let product = products.find((item) => {
      return item.goods_id == goods_id
    })

    //判断在购物车中是否存在
    let index = store.findIndex((item)=>{
      return item.goods_id==goods_id
    })

    if(index==-1){
      // 购物车中不存在此商品
      product.count = 1;    //购物车中此商品数量是1
      store.push(product);
    }else{
      // 购物车中存在此商品
      store[index].count++;
    }
    wx.setStorageSync('cart', store);  //存入缓存
  },

  onReachBottom(e) {

  },
  onTabItemTap(e) {
    console.log(e)
  }
})