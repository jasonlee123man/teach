<template>
  <div >
    <div class="books">
      <ul>
        <li>
          <image src="http://img3m5.ddimg.cn/56/4/23761145-1_h_6.jpg" mode="aspectFit"/>
          <p class="name">人间失格</p>
          <div class="Self-support">
            <p class="self">当当自营</p>
            <p class="reduction">满减</p>
          </div>
          <div class="footer">
             <p class="price">10</p>
            <div class="cart">添加购物车</div>
          </div>
         
        </li>
         <li>
          <image src="http://img3m5.ddimg.cn/56/4/23761145-1_h_6.jpg" mode="aspectFit"/>
          <p class="name">人间失格</p>
          <div class="Self-support">
            <p class="self">当当自营</p>
            <p class="reduction">满减</p>
          </div>
          <div class="footer">
             <p class="price">10</p>
            <div class="cart">添加购物车</div>
          </div>
         
        </li>
         <li>
          <image src="http://img3m5.ddimg.cn/56/4/23761145-1_h_6.jpg" mode="aspectFit"/>
          <p class="name">人间失格</p>
          <div class="Self-support">
            <p class="self">当当自营</p>
            <p class="reduction">满减</p>
          </div>
          <div class="footer">
             <p class="price">10</p>
            <div class="cart">添加购物车</div>
          </div>
         
        </li>
         <li>
          <image src="http://img3m5.ddimg.cn/56/4/23761145-1_h_6.jpg" mode="aspectFit"/>
          <p class="name">人间失格</p>
          <div class="Self-support">
            <p class="self">当当自营</p>
            <p class="reduction">满减</p>
          </div>
          <div class="footer">
             <p class="price">10</p>
            <div class="cart">添加购物车</div>
          </div>
         
        </li>
      </ul>
    </div>
  </div>
</template>

<script>


export default {
  data () {
    return {
      books:[]
    }
  },

  components: {
    
  },

  methods: {
   detail(e){
     wx.navigateTo({
       url: '/pages/detail/main?id='+e, // 指定页面的url
       success:()=>{

       }
     });
   }
  },
  mounted(){
    wx.request({
      url: 'http://localhost:8080/book.json', // 目标服务器url
      success: (res) => {
        // console.log(res);
        this.books=res.data
      }
    });
  },
  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.cart{
  border: 1rpx solid #ccc;
  padding: 5rpx;
}
.footer{
  display: flex;
  justify-content: space-between;
}
/* 顶部样式 */
.top-box{
  position: relative;
}
.top{
  width: 100%;
}
.top image{
  width: 70rpx;
  height: 70rpx;
}
.top{
  display: flex;
  justify-content: space-evenly;
}
.top input{
  width: 500rpx;
  padding: 10rpx 0rpx;
  border-radius: 30rpx;
  background: #e8ecf0;
  font-size: 25rpx;
  color: #b5bec5;
  text-indent: 0.5rem;
}
.search{
  position: absolute;
  top: 3rpx;
  left: 125rpx;
}
.search image{
  width: 60rpx;
  height: 60rpx;
}
/* 轮播图样式 */
.img{
  width: 100%;
  margin-top: 20rpx;
}
.img swiper-item {
  width: 100%;
  height: 500rpx;
}
.img swiper-item image{
  width: 100%;
  height: 100%;
}
/* 图书分类 */
.booktype ul {
  display: flex;
  flex-wrap: wrap;
}
.booktype ul li p {
  text-align: center;
  margin-top: -20rpx;
}
.booktype ul li a{
  font-size: 25rpx;
}
.booktype image{
  width: 150rpx;
  height: 150rpx;
}
/* banner */
.banner{
  width: 100%;
  height: 240rpx;
}
.banner image{
  width: 100%;
  height: 100%;
}
/* 灰色背景 */
section{
  width: 100%;
  height: 25rpx;
  background: #f0f0f0;
}
/* 图书样式 */
.books{
  background: #f0f0f0;
  width: 100%;
}
.books ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.books ul li{
  background: #fff;
  font-size: 28rpx;
  width: 370rpx;
  margin-bottom: 10rpx;
  text-align: center;
}
.books ul li image{
  width: 300rpx;
  height: 300rpx;
  margin-top: 10rpx;
}
.name{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    margin: 10rpx;
}
.Self-support {
  text-align: left;
  margin: 10rpx;
  display: flex;
  font-size: 26rpx;
}
.Self-support .self{
  color: #f2303c;
  border: 1px solid #f2303c;
  border-radius: 2px;
  padding: 0 1px ;
  margin-right: 6rpx;
}
.Self-support .reduction{
   background: #f2303c;
   border: 1px solid #f2303c;
   border-radius: 2px;
   padding: 0 1px ;
   color: #fff;
}
.price{
  color: #f2303c;
  font-size: 26rpx;
  text-align: left;
  margin: 10rpx;
}
</style>
