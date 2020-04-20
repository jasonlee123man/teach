<template>
  <div >
    <!-- 头部 -->
    <div class="top-box">
      <div class="top">
         <image src="../../static/tabs/dd.png" alt="" class="dd"/>
      <input type="text" placeholder="半小时漫画唐诗2"/>
      <image src="../../static/tabs/list.png" alt="" class="list"/>
      </div>
      <div class="search">
         <image src="../../static/tabs/search.png" alt="" class="dd"/>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="img">
      <swiper indidator-dots="imgUrls.length > 1" indicator-dots="true" indicator-color="rgba(0,0,0,.5)" indicator-active-color="#fff" autoplay="true" circular="true">
      <swiper-item>
          <image src="http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/102588/10/17070/98049/5e831051E8121446c/027076625c33ee1b.jpg!cr_1125x445_0_171!q70.jpg.dpg" mode="scaleToFill"></image>
        </swiper-item>
         <swiper-item>
          <image src="http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/102588/10/17070/98049/5e831051E8121446c/027076625c33ee1b.jpg!cr_1125x445_0_171!q70.jpg.dpg" mode="scaleToFill"></image>
        </swiper-item>
         <swiper-item>
          <image src="http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/102588/10/17070/98049/5e831051E8121446c/027076625c33ee1b.jpg!cr_1125x445_0_171!q70.jpg.dpg" mode="scaleToFill"></image>
        </swiper-item>

    </swiper>
    </div>
    <!-- 分类 -->
    <div class="booktype">
      <ul>
        <li>
          <image src="http://img60.ddimg.cn/upload_img/00803/1/xinshubang2-1562825207.png"  />
        </li>
        <li>
          <image src="http://img60.ddimg.cn/upload_img/00803/1/xinshubang2-1562825207.png"  />
        </li>
        <li>
          <image src="http://img60.ddimg.cn/upload_img/00803/1/xinshubang2-1562825207.png"  />
        </li>
        <li>
          <image src="http://img60.ddimg.cn/upload_img/00803/1/xinshubang2-1562825207.png"  />
        </li>
        <li>
          <image src="http://img60.ddimg.cn/upload_img/00803/1/xinshubang2-1562825207.png"  />
        </li>
        <li>
          <image src="http://img60.ddimg.cn/upload_img/00803/1/xinshubang2-1562825207.png"  />
        </li>
        <li>
          <image src="http://img60.ddimg.cn/upload_img/00803/1/xinshubang2-1562825207.png"  />
        </li>
        <li>
          <image src="http://img60.ddimg.cn/upload_img/00803/1/xinshubang2-1562825207.png"  />
        </li>
        <li>
          <image src="http://img60.ddimg.cn/upload_img/00803/1/xinshubang2-1562825207.png"  />
        </li>
      </ul>
    </div>
    <!-- 灰色背景 -->
    <section></section>
    <!-- banner -->
    <div class="banner">
      <image src="http://img62.ddimg.cn/upload_img/00803/1/1242x332_dl_0812-1570418949.jpg"/>
    </div>
    <!-- 灰色背景 -->
    <section></section>
    <!-- 图书 -->
    <div class="books">
      <ul>
        <li>
          <image src="http://img3m5.ddimg.cn/56/4/23761145-1_h_6.jpg" mode="aspectFill"/>
          <p class="name">人间失格</p>
          <div class="Self-support">
            <p class="self">当当自营</p>
            <p class="reduction">满减</p>
          </div>
          <p class="price">￥21</p>
        </li>
         <li>
          <image src="http://img3m5.ddimg.cn/56/4/23761145-1_h_6.jpg" mode="aspectFill"/>
          <p class="name">人间失格</p>
          <div class="Self-support">
            <p class="self">当当自营</p>
            <p class="reduction">满减</p>
          </div>
          <p class="price">￥21</p>
        </li>
         <li>
          <image src="http://img3m5.ddimg.cn/56/4/23761145-1_h_6.jpg" mode="aspectFill"/>
          <p class="name">人间失格</p>
          <div class="Self-support">
            <p class="self">当当自营</p>
            <p class="reduction">满减</p>
          </div>
          <p class="price">￥21</p>
        </li>
         <li>
          <image src="http://img3m5.ddimg.cn/56/4/23761145-1_h_6.jpg" mode="aspectFill"/>
          <p class="name">人间失格</p>
          <div class="Self-support">
            <p class="self">当当自营</p>
            <p class="reduction">满减</p>
          </div>
          <p class="price">￥21</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>


export default {
  data () {
    return {

    }
  },

  components: {
    
  },

  methods: {

  },
  mounted(){

  },
  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
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
