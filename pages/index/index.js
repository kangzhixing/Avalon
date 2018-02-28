//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  goAvalon: function () {
    wx.navigateTo({
      url: '../avalon/newgame'
    })
  },
  onLoad: function () {
    
  }
})
