Page({
  data:{
    userInfo:{
      avatarUrl:"/images/user.png"
    },
    isLogin:false
  },
  onLoad: function (options) {
    //页面加载，检查登录状态：如果登录，则显示头像等信息
    wx.getSetting({
      success: (result)=>{
        // console.log(result)
        //如果登录没有过期，则获取用户信息
        if(result.authSetting['scope.userInfo']){
          wx.getUserInfo({
            success:res=>{
              //把用户信息存入缓存
              wx.setStorageSync("userInfo",res.userInfo)
              //把openid存入缓存
              this.getOpenid()
              //把头像、昵称渲染到页面
              this.setData({
                userInfo:res.userInfo,
                isLogin:true
              })
            }
          })
        }
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  /*通过用户点击按钮获取用户授权，把个人信息存入缓存*/
  getUserInfo(e){
    //获取userInfo，存入缓存
    let userInfo=e.detail.userInfo;
    wx.setStorageSync("userInfo",userInfo)
    //获取openid，存入缓存
    this.getOpenid();
    //把头像、昵称渲染到页面
    this.setData({
      userInfo,
      isLogin:true
    })
   
  },
  //获取用户openid
   getOpenid() {
    //通过云函数获取openid
    wx.cloud.callFunction({
      name:"login"
    })
    .then(res=>{
      wx.setStorageSync("openid",res.result.openid)
    })
    .catch(err=>{
      console.log(err)
    })
  }


})