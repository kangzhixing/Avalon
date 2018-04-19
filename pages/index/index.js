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
  go24: function () {
    wx.navigateTo({
      url: '../twentyfour/index'
    })
  },
  onLoad: function () {
    wx.showShareMenu({
      withShareTicket: true
    })
  }
})
