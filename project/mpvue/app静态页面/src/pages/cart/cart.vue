<template>
  <div class="box">
    <!-- 上面部分 -->
    <div class="top">
      <ul>
        <li>
          <div class="above">
            <p class="input">
              <input type="checkbox" checked />
            </p>
            <image src="http://img3m5.ddimg.cn/56/4/23761145-1_h_6.jpg" />
            <div class="des">
              <p class="name">人间失格</p>
              <p class="price">
                <span class="price1">￥21</span>
                <span class="price2">￥42</span>
              </p>
            </div>
            <div class="calculation">
              <span class="minus">-</span>
              <span class="num">2</span>
              <span class="plus">+</span>
            </div>
          </div>
          <div class="below">
            <span class="purchase">加价购</span>
            <span class="text">购买1件，即可享受换购优惠</span>
            <span class="choice">删除</span>
          </div>
        </li>
         <li>
          <div class="above">
            <p class="input">
              <input type="checkbox" checked/>
            </p>
            <image src="http://img3m5.ddimg.cn/56/4/23761145-1_h_6.jpg" />
            <div class="des">
              <p class="name">人间失格</p>
              <p class="price">
                <span class="price1">￥21</span>
                <span class="price2">￥42</span>
              </p>
            </div>
            <div class="calculation">
              <span class="minus">-</span>
              <span class="num">2</span>
              <span class="plus">+</span>
            </div>
          </div>
          <div class="below">
            <span class="purchase">加价购</span>
            <span class="text">购买1件，即可享受换购优惠</span>
            <span class="choice">删除</span>
          </div>
        </li>
         <li>
          <div class="above">
            <p class="input">
              <input type="checkbox" checked="true"/>
            </p>
            <image src="http://img3m5.ddimg.cn/56/4/23761145-1_h_6.jpg" />
            <div class="des">
              <p class="name">人间失格</p>
              <p class="price">
                <span class="price1">￥21</span>
                <span class="price2">￥42</span>
              </p>
            </div>
            <div class="calculation">
              <span class="minus">-</span>
              <span class="num">2</span>
              <span class="plus">+</span>
            </div>
          </div>
          <div class="below">
            <span class="purchase">加价购</span>
            <span class="text">购买1件，即可享受换购优惠</span>
            <span class="choice">删除</span>
          </div>
        </li>
         <li>
          <div class="above">
            <p class="input">
              <input type="checkbox" checked/>
            </p>
            <image src="http://img3m5.ddimg.cn/56/4/23761145-1_h_6.jpg" />
            <div class="des">
              <p class="name">人间失格</p>
              <p class="price">
                <span class="price1">￥21</span>
                <span class="price2">￥42</span>
              </p>
            </div>
            <div class="calculation">
              <span class="minus">-</span>
              <span class="num">2</span>
              <span class="plus">+</span>
            </div>
          </div>
          <div class="below">
            <span class="purchase">加价购</span>
            <span class="text">购买1件，即可享受换购优惠</span>
            <span class="choice">删除</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- 下面部分 -->
    <div class="bottom">
      <p class="select_all">
        <input type="checkbox" checked/>全选
      </p>
      <p class="total">
        合计：
        <span>￥305</span>
      </p>
      <p class="settlement">
        结算
        <span>4</span>
      </p>
    </div>
  </div>
</template>
    
<script>
export default {

  data() {
    return {

    };
  },
  methods: {

  }

};
</script>
    
<style  scoped>
.box {
  background: #f0f0f0;
  width: 100vw;
  height: 100vh;
}
/* 上面的部分 */
.top ul {
  padding: 20rpx 0rpx;
}
.top ul li {
  background: #fff;
  border-radius: 20rpx;
  margin: 20rpx;
  margin-top: 0rpx;
  padding: 10rpx;
  text-align: center;
}
.top .above {
  display: flex;
  justify-content: space-between;
}
.top .above .input {
  display: inline-block;
  margin-top: 60rpx;
}
.top .above image {
  width: 80rpx;
  height: 100rpx;
  margin-top: 40rpx;
}
.top .above .des {
  margin: 0rpx 30rpx;
  line-height: 80rpx;
  padding: 0rpx 10rpx;
}
.top .above .des .name {
  font-size: 30rpx;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.top .above .des .price {
  text-align: left;
}
.top .above .des .price1 {
  color: #fb4741;
  font-weight: bold;
  margin-right: 10rpx;
}
.top .above .des .price2 {
  font-size: 25rpx;
  color: #787878;
  text-decoration: line-through;
}
.top .above .calculation {
  margin-top: 100rpx;
}
.top .above .calculation .minus,
.top .above .calculation .plus {
  background: #f0f0f0;
  border-radius: 50%;
  width: 50rpx;
  height: 50rpx;
  display: inline-block;
}
.top .above .calculation .num {
  margin: 0rpx 20rpx;
}
.top .below {
  margin-top: 20rpx;
  font-size: 28rpx;
  margin-bottom: 20rpx;
}
.top .below .purchase {
  display: inline-block;
  width: 80rpx;
  border: 1px solid #fb4741;
  color: #fb4741;
  font-size: 20rpx;
}
.top .below .text {
  color: #787878;
  margin: 0rpx 80rpx 0rpx 20rpx;
}
.top .below .choice {
  color: #333;
}
/* 下面部分 */
.bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: 40rpx;
  background: #fff;
  font-weight: bold;
}
.bottom .select_all {
  padding-top: 20rpx;
}

.bottom .total {
  padding-top: 10rpx;
  margin: 10rpx 80rpx 0rpx 20rpx;
}
.bottom .settlement {
  width: 220rpx;
  border-radius: 40rpx;
  background: #fb4741;
  color: #fff;
  font-weight: normal;
  padding: 20rpx;
  text-align: center;
  vertical-align: middle;
}
</style>