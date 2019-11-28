// miniprogram/pages/addSelf/addSelf.js
const db = wx.cloud.database()
let fileManage = require("../../utils/util")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {
      region: ["广东省", "广州市", "南沙区"],
      image: "../../images/add.png"
    },
    region: ["广东省", "广州市", "南沙区"],
    image: "../../images/add.png"
    // exists: false, //标识用户是否添加过信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _openid = wx.getStorageSync('openid');
    db.collection("users").where({
        _openid
      }).get()
      .then(res => {
        if (res.data.length != 0) {
          this.setData({
            detail: res['data'][0],
            image:res['data'][0]['image'],
            region:res['data'][0]['region']
          })
        }

      })
      .catch(err => {
        console.log(err)
      })
  },
  //添加图片
  addPicture: function () {
    //选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (result) => {
        // console.log(result)
        this.setData({
          image:  result.tempFilePaths[0]
        })

      },
      fail: () => {},
      complete: () => {}
    });
  },
  //改变地址
  bindRegionChange(e) {
    this.setData({
      region: e.detail.value
    })
  },
  /*提交表单*/
  bindsubmit: function (e) {
    wx.showLoading({
      title: "正在提交",
      mask: true
    });
    //上传图片到云存储，添加数据到云数据库
    this.addDetail(e.detail.value)
  },
/*
* @tempImagePath  图片本地临时地址
  @data           表单信息
*/
addDetail(data){
  // console.log(data)
  let tempImagePath=data.image;
  let newname = fileManage(tempImagePath)
  //上传图片
  wx.cloud.uploadFile({
    cloudPath: "images/" + newname,
    filePath: tempImagePath,
  })
  .then(res=>{
     /***把表单信息添加到数据库***/
    data.image= res.fileID  //获取图片线上地址

    //如果用户存在则更新，否则添加
    let id=data._id;    
    delete data._id;  //删除_id字段

    let userInfo=wx.getStorageSync("userInfo");
    data.avatarUrl=userInfo.avatarUrl
    data.nickName=userInfo.nickName

    if (id!="") {
      db.collection("users").doc(id).update({
        data
      })
      .then(res=>{
        wx.hideLoading();
        wx.showToast({
          title:"成功提交"
        })
        wx.switchTab({
          url: '/pages/index'
        });
      })
      .catch(err=>{
        console.log(err)
      })
    } else {
      db.collection("users").add({
          data
        })
        .then(res => {
          wx.hideLoading()
          wx.showToast({
            title: '成功添加',
            duration: 1500,
          });
        })
        .catch(err => {
          console.log(err)
        })
    }
  })
},


})