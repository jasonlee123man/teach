<template>
  <div class="box">
    <!-- 上面部分 -->
    <div class="top">
      <ul>
        <li v-for="(item,index) in cart" :key="index">
          <div class="above">
            <p class="input">
              <input type="checkbox" :checked="item.checked" @tap="singleCheck(index)" />
            </p>
            <image :src="item.pic" />
            <div class="des">
              <p class="name">{{item.name}}</p>
              <p class="price">
                <span class="price1">￥{{item.price}}</span>
                <span class="price2">￥{{item.old_price}}</span>
              </p>
            </div>
            <div class="calculation">
              <span class="minus" @tap="reduce(index)">-</span>
              <span class="num">{{item.count}}</span>
              <span class="plus" @tap="add(index)">+</span>
            </div>
          </div>
          <div class="below">
            <span class="purchase">加价购</span>
            <span class="text">购买1件，即可享受换购优惠</span>
            <span class="choice" @click="deleteOne(index)">删除</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- 下面部分 -->
    <div class="bottom">
      <p class="select_all">
        <input type="checkbox" :checked="isCheckAll" @click="checkAll"/>全选
      </p>
      <p class="total">
        合计：
        <span>￥{{total}}</span>
      </p>
      <p class="settlement">
        结算
        <span>()</span>
      </p>
    </div>
  </div>
</template>
    
<script>
export default {
  data() {
    return {
      cart: [],
      total: 0,
      isCheckAll: true
    };
  },
  methods: {
    //计算总价
    getTatal() {
      //forEach遍历数组，把checked为true的每一项，pirce*count，累加
      let total = 0;
      this.cart.forEach(item => {
        if (item.checked == true) {
          total += item.price * item.count;
        }
      });
      this.total = total;
    },
    //添加数量
    add(index) {
      // console.log(index)
      this.cart[index].count++;
      wx.setStorageSync("cart", this.cart);
      this.getTatal()
    },
    // 减少数量
    reduce(index) {
      this.cart[index].count--;
      if (this.cart[index].count < 1) {
        this.cart[index].count = 1;
      }
      wx.setStorageSync("cart", this.cart);
      this.getTatal()
    },
    // 单选
    singleCheck(index){
      this.cart[index].checked = !this.cart[index].checked;
      //如果每一个商品都选中，全选就选中
      //如果有一个商品没有选中，全选就不选中
      let isCheckAll=this.cart.every((item)=>{
        return item.checked==true;
      })
      this.isCheckAll=isCheckAll;
      wx.setStorageSync("cart",this.cart)
      this.getTatal()

    },
    //全选
    checkAll(){
      // 选中：遍历数组，把每一项的checked属性设置为true
      // 不选中：遍历数组，把每一项的checked属性设置为false
      this.isCheckAll=!this.isCheckAll;
      this.cart.forEach((item)=>{
        item.checked=this.isCheckAll
      })
      //存入缓存
      wx.setStorageSync("cart",this.cart)
      //计算总价
      this.getTatal()
      
    },
    //删除一件商品
    deleteOne(index){
      this.cart.splice(index,1);
      wx.setStorageSync('cart',this.cart);
      //计算总价
      this.getTatal()
    }
  },

  // 遍历缓存（数组），把数组中的内容渲染到页面
  onShow() {
    let cart = wx.getStorageSync("cart") || [];
    this.cart = cart;

    this.getTatal()
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