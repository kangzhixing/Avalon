//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  newGame: function () {
    wx.navigateTo({
      url: '../avalon/newgame'
    })
  },
  onLoad: function () {
  },
  goVote: function (e) {
    wx.navigateTo({
      url: '../vote/choosenum'
    })
  }
})
