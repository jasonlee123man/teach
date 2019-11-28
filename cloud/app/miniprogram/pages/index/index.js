// miniprogram/pages/index/index.js
const db = wx.cloud.database();
Page({
  data: {
    page: 1,
    data:[],
  },
  onShow: function(options) {
    this.getContent(1)
  },
  onPulldownRefresh:function(){
    this.getContent(1)
  },
  getContent(page) {
    db.collection("users").where({}).get()
      .then(res => {
        this.setData({
          data: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  //设置分享
  onShareAppMessage(res){
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '技能互换',
      path: '/pages/index/index'
    }
  }

})