//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  goGame: function () {
    var num1 = wx.getStorageSync('num1');
    var num2 = wx.getStorageSync('num2');
    var num3 = wx.getStorageSync('num3');
    var num4 = wx.getStorageSync('num4');
    wx.navigateTo({
      url: '../twentyfour/game?num1=' + num1 + '&num2=' + num2 + '&num3=' + num3 + '&num4=' + num4
    })
  },
  goAnswer: function () {
    wx.navigateTo({
      url: '../twentyfour/answer'
    })
  },
  onLoad: function () {
    wx.showShareMenu({
      withShareTicket: true
    })
  }
})
