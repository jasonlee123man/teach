<template>
  <div class="home">
      <div class="top">
          <img src="/static/images/logo.png" alt="">
          <div><input type="text" placeholder="搜索商品，店铺，种类"></div>
          <img src="/static/images/gory.png" alt="">
      </div>
      <swiper :indicator-dots="true"
        :autoplay="true" :circular="true" class="swiper">
          <swiper-item v-for="(item,index) in imgs" :key="index">
            <image :src="item" alt=""/>
          </swiper-item>
      </swiper>
      <ul class="books">
          <li v-for="(item,index) in types" :key="index">
              <img mode="aspectFit" :src="item.img" alt=""/>
              <div>{{item.name}}</div>
          </li>
      </ul>
      <img class="img" src="/static/images/me.jpg" alt="">
      <div class="list">
          <div class="item" v-for="(item,index) in list" :key="index" @click="todetail(item._id)">
              <img mode="aspectFit" :src="item.img" alt=""/>
              <div>{{item.name}}</div>
              <div class="tag"><span class="left">当当自营</span><span class="right">满减</span></div>
              <div><span class="now">￥{{item.price}}</span><span class="before">￥{{item.old_price}}</span></div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
        types:[],
        list:[],
        imgs:['/static/images/ma.jpg','/static/images/mb.jpg','/static/images/mc.jpg','/static/images/md.jpg','/static/images/me.jpg']
    }
  },
  methods: {
      todetail(id){
          wx.navigateTo({
              url:'/pages/detail/main?id='+id
          })
      }
  },
  created () {
      var url="http://localhost:3000/api/book/typelist"
      var url1="http://localhost:3000/api/book/booklist"
      wx.request({
          url,
          success:res=>{
              this.types=res.data
          }
      })
      wx.request({
          url:url1,
          success:res=>{
              this.list=res.data
          }
      })
  }
}
</script>

<style scoped>
.home{
    width: 100vw;
    height: 100vw;
}
.top{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
}
.top img{
    width: 40px;
    height: 40px;
}
.top input{
    width: 280px;
    height: 30px;
    border-radius: 15px;
    border: 1px solid #ccc;
    text-indent: 15px;
    margin: 0 5px;
}
.swiper image{
    width: 750rpx;
    height: 300rpx;
}
.img{
    width: 750rpx;
    height: 300rpx;
}
.books{
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-sizing: border-box;
}
.books li{
    width: 20%;
    text-align: center;
}
.books img{
    width: 80%;
    height: 60px;
}
.list{
    width: 100%;
    padding: 6px 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-sizing: border-box;
    background: rgb(246, 243, 243);
}
.list .item{
    width: 49%;
    background: #fff;
    margin-bottom: 2%;
    padding: 10px 0;
    box-sizing: border-box;
    text-align: center;
}
.list img{
    width: 80%;
    height: 180px;
}
.tag{
    margin: 10px 0;
    font-size: 14px;
}
.tag .left{
    border: 1px solid #ff0000;
    padding: 2px;
    color: red;
    margin-right: 5px;
}
.tag .right{
    background: red;
    color: #fff;
    padding: 2px;
}
.list .now{
    color: red;
    margin-right: 10px;
}
.list .before{
    font-size: 14px;
}
</style>
