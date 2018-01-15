// pages/vote/vote.js
Page({
  data: {
    num: 0,
    agree: 0,
    disagree: 0,
    resultdisplay: false,
    txtResult: true,
    btnShowResult_display: false
  },

  voteAgree: function (e) {
    if (this.data.agree + this.data.disagree < this.data.num) {
      this.setData({
        agree: this.data.agree + 1
      });
    }
    if (this.data.agree + this.data.disagree == this.data.num) {
      this.setData({
        btnShowResult_display: true
      });
      if (this.data.disagree != 0) {
        this.setData({
          txtResult: false
        });
      }
      wx.setNavigationBarTitle({
        title: "任务结果"
      });
    }
  },

  voteDisagree: function (e) {
    if (this.data.agree + this.data.disagree < this.data.num) {
      this.setData({
        disagree: this.data.disagree + 1
      });
    }
    if (this.data.agree + this.data.disagree == this.data.num) {
      this.setData({
        btnShowResult_display: true
      });
      if (this.data.disagree != 0) {
        this.setData({
          txtResult: false
        });
      }
      wx.setNavigationBarTitle({
        title: "任务结果"
      });
    }
  },

  showResult: function () {
    this.setData({
      resultdisplay: true
    });
  },

  reVote: function () {
    this.setData({
      agree: 0,
      disagree: 0,
      resultdisplay: false,
      txtResult: true,
      btnShowResult_display: false
    });
  },

  goIndex:function(){
    wx.navigateTo({
      url: '../index/index'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      num: parseInt(options.num)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})