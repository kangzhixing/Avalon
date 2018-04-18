// pages/vote/choosenum.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 2
  },


  sliNumChange: function (e) {
    this.setData({
      num: e.detail.value
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  goVote: function (e) {
    wx.navigateTo({
      url: '../vote/vote?num=' + this.data.num
    })
  }
})