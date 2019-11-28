const db=wx.cloud.database()
var fileManage=require("../../utils/util.js")
Page({
  data: {
    tag:true,   //true 开始按钮；false 停止按钮 
    videoPath:""
  },

  onLoad: function (options) {
    this.ctx=wx.createCameraContext();
  },
  //摄影
  takePhoto(){
    this.ctx.startRecord({
      success:(res)=>{
        console.log(res)
      }
    });

  },
  //开始摄影
  startRecord(){
    this.ctx.startRecord({
      success:res=>{
        // console.log(res)
        this.setData({
          tag:false
        })
        
      }
    })
  },
  stopRecord(){
    this.ctx.stopRecord({
      success:res=>{
        console.log(res)
        this.setData({
          videoPath:res.tempVideoPath,
          tag:true
        })
      }
    })
  },
  //上传视频
  videoUpload(e){
    wx.showLoading({
      title:"正在上传"
    })
    let videoPath=e.currentTarget.dataset.videoPath;
    let mewname=fileManage(videoPath)

    //上传视频
    wx.cloud.uploadFile({
      cloudPath:"videos/"+mewname,
      filePath:videoPath,
      success:res=>{
        //添加数据库
        db.collection("videos").add({
          data:{video:res.fileID},
          success:res=>{
            wx.hideLoading()
            wx.showToast({
              title:"成功上传",
              type:"success"
            })
            wx.redirectTo({
              url: 'pages/video/video',
            })
          }
        })
      },
      fail:res=>{
        console.log(res)
      }
    })
  }
})