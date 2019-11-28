const db = wx.cloud.database();
Page({
  data: {
    userInfo: {},
    videos: []
  },
  //页面加载
  onLoad: function (options) {
    let id = options.id;
    //获取用户信息
    db.collection("users").doc(id).get()
      .then(res => {
        console.log(res)
        this.setData({
          userInfo: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })

  },
  //设置分享
  onShareAppMessage(){
    
  }
})