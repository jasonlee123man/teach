let  timer = null;
let  onOff=  true;
let  number = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pcImage:"../../image/bu.png",
    myImage:"../../image/wenhao.png",
    allImage:[
      "../../image/bu.png",
      "../../image/shitou.png",
      "../../image/jiandao.png"
    ],
    pcid:null,
    result:"看结果",
    winNum:0
  },
  // 随即改变电脑出拳的图片
  pcChuquan:function(){
    // 定时器
    let  obj = this;
    timer  = setInterval(function(){
      let  num = Math.floor(Math.random()*3);
      obj.setData({
        pcImage: obj.data.allImage[num],
        pcid:num
      })
    },50)
    
  },
  // 自己出拳的方法
  myChuquan:function(e){
    //当开关为false的时候，直接返回，停止向下运行
    if(!onOff){
      return;
    }
    
    let myid = e.target.id;  //获取自己出拳的图片索引
    this.setData({
      myImage:this.data.allImage[myid]  //根据索引将图片付给我自己出拳的位置
    })
    // 清除电脑出拳的定时器
    clearInterval(timer);
    // 将开关关闭
    onOff = false;

    // 比较大小
    //  布  0  石头 1  剪刀  2  
    //我出的拳 myid  
    // 电脑出的拳 pcid
    // 获取电脑出的拳
    let pcid = this.data.pcid;
    // console.log(myid+'--'+pcid);
    let  str= "";  //定义最新比较结果显示变量

    if(myid == pcid){
        str = "平局了";
    }else if((myid == 0 && pcid == 1) || (myid == 1 && pcid==2) || (myid==2 && pcid == 0 )){
        str = "您赢了";
        // 计算赢得次数
        number = this.data.winNum +1;
    }else{
        str = "您输了";
    }
    // 将最终的结果付给data里面的变量
    this.setData({
        result:str,
        winNum:number
    })
  },

  // 再来一次
  again:function(){
    // 清除定时器
    clearInterval(timer)
    // 调用电脑出拳函数
    this.pcChuquan();
    // 将开关打开
    onOff  = true
    this.setData({
      myImage:"../../image/wenhao.png"
    })
  },
  // 清空
  clear(){
    //  console.log(123)
    clearInterval(timer)  //清除定时器
    onOff = true; //开关初始化
    number = 0;  //赢得次数初始化

    // 设置显示的初始值
    this.setData({
      winNum:0,
      result:"看结果",
      myImage:"../../image/wenhao.png"
    })
    // 电脑出拳
    this.pcChuquan()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 调用电脑出拳函数
    this.pcChuquan();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})