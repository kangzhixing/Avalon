// pages/vote/vote.js
Page({
  data: {
    votenum: 0,
    agree: 0,
    disagree: 0,
    voteorder: false,
    voteOrderDisplay: true,
    resultdisplay: false,
    txtResult: true,
    btnShowResult_display: false
  },
  voteAgree: function (e) {
    this.setData({
      agree: this.data.agree + 1,
      voteorder: Math.random() > .5
    });
    if (this.data.agree + this.data.disagree == this.data.votenum) {
      this.setData({
        btnShowResult_display: true,
        txtResult: this.data.disagree == 0 ? true : false
      });
      wx.setNavigationBarTitle({
        title: "任务结果"
      });
    } else if (this.data.agree + this.data.disagree < this.data.votenum) {
      this.setData({
        voteOrderDisplay: true
      });
    }
  },

  voteDisagree: function (e) {
    this.setData({
      disagree: this.data.disagree + 1,
      voteorder: Math.random() > .5
    });
    if (this.data.agree + this.data.disagree == this.data.votenum) {
      this.setData({
        btnShowResult_display: true,
        txtResult: this.data.disagree == 0 ? true : false
      });
      wx.setNavigationBarTitle({
        title: "任务结果"
      });
    } else if (this.data.agree + this.data.disagree < this.data.votenum) {
      this.setData({
        voteOrderDisplay: true
      });
    }
  },
  closeVoteOrder: function () {
    this.setData({
      voteOrderDisplay: false
    });
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
      voteOrderDisplay: true,
      resultdisplay:false,
      txtResult: true,
      btnShowResult_display: false
    });
  },

  goIndex:function(){
    wx.navigateBack();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      votenum: parseInt(options.num)
    })
  }

})