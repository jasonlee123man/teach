const db=wx.cloud.database()
Page({
  data: {
    list:[],
    page:0,
    pageSize:10
  },
  onShow(){
    this.data.list=[]
    this.getList(0)
  },
  getList(page){
    wx.showLoading({
      title:"正在加载",
      icon:"loading"
    })
    let pageSize=this.data.pageSize;
    db.collection("star").where({status:1})
    .skip(page*pageSize)
    .limit(pageSize)
    .orderBy('addtime', 'desc')
    .get()
    .then(res => {
      wx.hideLoading()
      this.setData({
        list:this.data.list.concat(res.data)
      })
    })
  },
  onReachBottom(){
    let page=++this.data.page;
    this.getList(page)
  },
  onPullDownRefresh(){
    this.data.list=[];
    this.getList(0)
  },
  //跳转详情页
  detail(e){
    let id=e.currentTarget.id;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`,
      success: (res)=>{
        console.log(res)
      }
    });
  },
  //页面分享
  onShareAppMessage(){
    let index=this.list.length-1;
   return{
    title:"小草上墙"
   }
  }
})