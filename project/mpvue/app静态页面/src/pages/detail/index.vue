<template>
  <div>
    <!-- 上面部分 -->
    <div class="top">
      <div>
        <div class="img">
          <image src="https://images-cn.ssl-images-amazon.com/images/I/41YhILZu8vL.jpg" mode="aspectFit" />
        </div>
        <div class="des">
          <p>
            <span class="span1">当当自营</span>
            <span class="span2">人间失格</span>
          </p>
          <p class="text">本书是《赢者思维：欧洲最受欢迎的思维方法》的精华本。为什么听了很多道理，却依然无法过好这一生？因为听到和领悟中间有巨大的鸿沟，领悟和行动中间又有巨大的鸿沟。本书的独特在于，它拉着我们的手，去跨越这两个鸿沟。新西兰最著名的神经心理学家克里•斯帕克曼教你为快乐和激情建立大脑神经上的链接，一步一步改变自己的思维、心理甚至潜意识，从而迈向成功。目标不仅需要设定，还需要每天被“看”到，不仅要看到，还要听到它、闻到它、感受它、坚定不移地相信它。从了解自己出发，真正的自我会引领你成为理想中的你</p>
        </div>
        <div class="price">
          <p class="price1">
            ￥21
            <span class="sale">(9.48折)</span>
            <span class="notice">降价通知</span>
          </p>
          <p class="old_price">
            定价
            <span>￥23</span>
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
        <button class="join">加入购物车</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
    };
  },

  methods: {}
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
