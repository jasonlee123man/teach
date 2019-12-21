<template>
  <div>
    <!-- 上面部分 -->
    <div class="top">
      <div>
        <div class="img">
          <image :src="detail.image" mode="aspectFit" />
        </div>
        <div class="des">
          <p>
            <span class="span1">当当自营</span>
            <span class="span2">{{detail.name}}</span>
          </p>
          <p class="text">{{detail.desc}}</p>
        </div>
        <div class="price">
          <p class="price1">
            ￥{{detail.price}}
            <span class="sale">(9.48折)</span>
            <span class="notice">降价通知</span>
          </p>
          <p class="old_price">
            定价
            <span>￥{{detail.old_price}}</span>
          </p>
        </div>
      </div>
    </div>
    <!-- 灰色背景 -->
    <section></section>
    <!-- 下面部分 -->
    <div class="bottom">
      <div class="shop_box">
        <image src="../../static/tabs/shop.png" class="shop" />
        <p>店铺</p>
      </div>
      <div class="cart_box">
        <image src="../../static/tabs/cart.png" class="cart" />
        <p>购物车</p>
      </div>
      <div class="button">
        <button class="immediately">立即购买</button>
        <button class="join" @tap="addCart(id)">加入购物车</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      books: "",
      id: "",
      detail: {}
    };
  },
  //读取商品详情
  onLoad: function(options) {
    let id = options.id;
    wx.request({
      url: "http://127.0.0.1:8080/book.json",
      success: res => {
        let detail = res.data.find(item => {
          return item.id == id;
        });
        this.detail = detail;
        this.id=id
      }
    });
  },
  methods: {
    // 添加购物车：
    addCart(id){
      // console.log(id)
      //  1.读取购物车数据（缓存），是一个数组arr
      let cart=wx.getStorageSync("cart")||[];
      //  2.遍历arr，根据id查找商品在商品中是否存在（arr.findIndex）：
      let index=cart.findIndex((item)=>{
        return item.id==id
      })
      //如果商品在购物车中不存在：count=1，push到arr
      if(index==-1){
         this.detail.count=1;
         this.detail.checked=true;     //购物车中商品默认选中
         cart.push(this.detail) //商品数量默认是1
      }else{
        //如果商品在购物车中存在：count++
        cart[index].count++
      }
      //  3.把arr存到缓存里面
      wx.setStorageSync("cart", cart);   
      wx.showToast({
        title: '成功添加购物车',
        icon: 'success',
        duration: 1500,
        mask: true
      });  
      
    }

  }
};
</script>

<style>
/* 上面的部分 */
.top .img {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  text-align: center;
  padding: 20rpx 0rpx;
}
.top .des {
  margin: 30rpx;
  line-height: 40rpx;
}
.top .des .span1 {
  width: 120rpx;
  background: #f2303c;
  border-radius: 30rpx;
  color: #fff;
  padding: 8rpx;
  font-size: 20rpx;
  margin-right: 20rpx;
}
.top .des .span2 {
  font-size: 30rpx;
  color: #4d525d;
}
.top .des .text {
  color: rgb(150, 150, 150);
  font-size: 25rpx;
}
.price1 {
  margin: 30rpx;
  margin-bottom: 0rpx;
}
.price {
  color: #ff463c;
  font-size: 40rpx;
  font-weight: bold;
}

.price .sale {
  color: #969696;
  font-size: 25rpx;
  margin: 0rpx 20rpx 0 5rpx;
  font-weight: normal;
  display: inline-block;
  vertical-align: top;
  margin-top: 10rpx;
}
.price .notice {
  display: inline-block;
  width: 100rpx;
  border: 1px solid #000;
  border-radius: 20rpx;
  color: #000;
  font-weight: normal;
  padding: 5rpx;
  padding-left: 8rpx;
  padding-right: 8rpx;
  font-size: 25rpx;
}
.old_price {
  font-size: 25rpx;
  color: #969696;
  font-weight: normal;
  margin: 30rpx;
  margin-top: 10rpx;
  margin-left: 33rpx;
}
.old_price span {
  text-decoration: line-through;
}
/* 下面部分 */
.bottom {
  position: fixed;
  bottom: 0rpx;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100rpx;
}
/* .bottom image{
  width: 50rpx;
  height: 50rpx;
} */
.bottom image {
  width: 50rpx;
  height: 50rpx;
}
.bottom .button {
  vertical-align: bottom;
}
.bottom button {
  width: 200rpx;
  font-size: 30rpx;
  letter-spacing: 0rpx;
  display: inline-block;
  margin-top: 5rpx;
  color: #fff;
  padding: 20rpx;
  border-radius: 0rpx;
  padding-top: 10rpx;
}
.bottom .shop_box {
  margin-left: 20rpx;
}
.bottom .shop_box,
.bottom .cart_box {
  text-align: center;
  font-size: 30rpx;
  color: #4d525d;
}
.bottom .immediately {
  background-color: rgb(255, 190, 35);
}
.bottom .join {
  background-color: rgb(243, 85, 75);
}
/* 灰色背景 */
section {
  width: 100%;
  height: 25rpx;
  background: #f0f0f0;
}
</style>
