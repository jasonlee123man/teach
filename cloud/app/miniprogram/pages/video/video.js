const db=wx.cloud.database();
Page({
  data: {
    list:[]
  },
  onLoad: function (options) {
    this.getVideo()
  },
  //获取视频列表
  getVideo(){
    db.collection("videos").where({}).get()
    .then(res=>{
      // console.log(res)
      this.setData({
        list:res.data
      })
    })
    .catch(err=>{
      console.log(err)
    })
  }

})