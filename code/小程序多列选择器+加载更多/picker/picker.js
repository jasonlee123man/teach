// pages/picker/picker.js
Page({
  data: {
    starArr: [
      ['刘松华', '刘德华', '冯小刚'], 
      ['野狼Disco', '妲己', '戏子', '忐忑']
    ],
    starIndex:[0,0]
  },
  //列改变的时候触发
  myColumnChange(e){
    //滚动的第几列
    let column=e.detail.column; 

    //选中了列中的第几个元素
    let columnValue=e.detail.value;

    //最终选中的值
    let starIndex=this.data.starIndex;
    starIndex[column] = columnValue;

    //滚动第1列的时候，对第2列进行改变
    let starArr = this.data.starArr;
    if(column==0){
      if(columnValue==1){
        starArr[1] = ['忘情水', '开心的马骝', '我的老家', '冰雨'];
      }else if(columnValue==2){
        starArr[1] = ['老炮', '手机', '芳华', '春晚'];
      }else{
        starArr[1] = ['野狼Disco', '妲己', '戏子', '忐忑'];
      }
      //第2列默认选中第一个元素
      starIndex[1] = 0;
    }
    //把数据渲染到页面
    this.setData({
      starArr,
      starIndex
    })

  },

  //点击确定
  myChange(e){
    let starIndex=e.detail.value;
    this.setData({
      starIndex
    })

  }
})