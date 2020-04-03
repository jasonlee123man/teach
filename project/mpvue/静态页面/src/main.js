import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false   //提示
App.mpType = 'app'          //应用级

const app = new Vue(App)    //实例化
app.$mount()                //挂载
Vue.prototype.globalData = getApp().globalData