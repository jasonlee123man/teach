// miniprogram/pages/test/test.js
const  db = wx.cloud.database();
console.log(db)
Page({
  data: {

  },

  onLoad: function (options) {
    console.log(db);
  },
  add(){
    db.collection("users").add({
      data:{
        username:"zhangsan",
        age:21
      }
    })
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.error(err)
    })
  }

})