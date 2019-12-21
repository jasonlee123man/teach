// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    page:1
  },
  //请求数据
  getList(page){
    wx.showLoading({
      title: '正在请求',
    })
    let url = `http://route.showapi.com/87-60?showapi_appid=123271&showapi_sign=811cfa33499a4fe4972cb642bfa132ff&cityName=%E8%A5%BF%E5%AE%89&page=${page}`;
    wx.request({
      url: url,
      success: (res) => {
        wx.hideLoading()
        this.setData({
          list: this.data.list.concat(res.data.showapi_res_body.hospitalList)  
        })
      }
    })
  },
  // 下拉刷新
  onPullDownRefresh(){
    this.data.list=[];
    this.data.page=1;
    this.getList(1)
  },
  //页面加载，请求第1页的数据
  onLoad: function (options) {
   this.getList(1)
  },
  //页面触底，请求下一页数据
  onReachBottom(){
    let page=this.data.page++;
    this.getList(page)
  }

})