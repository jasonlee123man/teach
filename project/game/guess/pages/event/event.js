// pages/event/event.js
Page({

  // bind函数
  bindclick:function(){
    console.log('bind')
  },

  // catch
  catchclick:function(){
    console.log('catch');
  },
  bindone: function () {
    console.log('bindone')
  },
  catchtwo: function () {
    console.log("catchtwo")
  },

  // 事件对象
  event:function(e){
    // console.log(e.target.id)
    // console.log(e.target.dataset.name)
    console.log(e.target.dataset.info[0])
  }
})