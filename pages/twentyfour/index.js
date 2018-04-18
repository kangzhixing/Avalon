//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  goGame: function () {
    wx.navigateTo({
      url: '../twentyfour/game'
    })
  },
  goAnswer: function () {
    wx.navigateTo({
      url: '../twentyfour/answer'
    })
  },
  onLoad: function () {

  }
})
