let timer = null;
let tag = true;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    message: '请出拳',
    pcImage: "/image/bu.png",
    myImage: "/image/wenhao.png",
    allImage: [
      "/image/bu.png",
      "/image/shitou.png",
      "/image/jiandao.png",
    ],
    pcIndex: 0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.pcChuquan()
  },
  /*电脑出拳*/
  pcChuquan: function () {
    // setInterval生成0-2，加载对应的图片$allImage
    timer = setInterval(() => {
      let pcIndex = Math.floor(Math.random() * 3);
      let pcImage = this.data.allImage[pcIndex];
      this.setData({
        pcImage,
        pcIndex
      })
    }, 100)
  },
  // 我出拳
  myChuquan(e) {
    // 断输赢：
    // 我赢：我：布（0）  &&	 电脑：石头（1）
    // 	  我：石头 （1） && 电脑：剪刀（2）
    // 	  我：剪刀（2）  && 电脑：布（0）

    // 	  $message 您赢了
    // 	  $myImage 改变
    // 	  $count 	加1
    // 平局：相等
    // 	  $message 平局
    // 	  $myImage 改变
    // 	  $count 	不动
    // 输	：剩下的情况
    // 	  $message 您输了
    // 	  $myImage 改变
    // 	  $count  不动
    // console.log(e)
    if (!tag) {
      return
    }
    let myIndex = e.currentTarget.id;
    let pcIndex = this.data.pcIndex;
    if ((myIndex == 0 && pcIndex == 1) || (myIndex == 1 && pcIndex == 2) || (myIndex == 2 && pcIndex == 0)) {
      //我赢了
      this.setData({
        myIndex,
        message: "您赢了",
        myImage: this.data.allImage[myIndex],
        count: ++this.data.count
      })

    } else if (myIndex == pcIndex) {
      //平局
      this.setData({
        message: "平局",
        myImage: this.data.allImage[myIndex]
      })
    } else {
      //我输了
      this.setData({
        message: "您输了",
        myImage: this.data.allImage[myIndex]
      })
    }

    clearInterval(timer)
    tag = false;
  },
  again: function () {
    // 电脑出拳  pcChuquan()
    this.pcChuquan()
    // 	$myImage  wenhao.png
    this.setData({
      myImage:"/image/wenhao.png"
    })
    // 	tag设置为true
    tag=true
    
  }


})