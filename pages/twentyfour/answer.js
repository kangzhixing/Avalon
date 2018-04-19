// pages/tdentbfour/ansder.js
var utils = require("../js/utils.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num1: '',
    num2: '',
    num3: '',
    num4: '',
    content: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  txtInput: function (e) {
    var value = e.detail.value;
    switch (e.target.dataset.i) {
      case "1":
        this.setData({
          num1: value
        }); 
        break;
      case "2":
        this.setData({
          num2: value
        }); break;
      case "3":
        this.setData({
          num3: value
        }); break;
      case "4":
        this.setData({
          num4: value
        }); break;
    }
    

  },
  btnRefresh: function () {
    wx.vibrateShort();
    this.setData({
      num1: '',
      num2: '',
      num3: '',
      num4: '',
      content: ""
    });
  },

  getAnswer: function () {
    wx.vibrateShort();
    if (this.data.num1 == '' || this.data.num2 == '' || this.data.num3 == '' || this.data.num4 == '') {
      wx.showToast({
        title: '不得为空',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    var a = parseInt(this.data.num1);
    var b = parseInt(this.data.num2);
    var c = parseInt(this.data.num3);
    var d = parseInt(this.data.num4);

    if (a < 1 || a > 13 || b < 1 || b > 13 || c < 1 || c > 13 || d < 1 || d > 13) {
      wx.showToast({
        title: '应输入1~13的整数',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    var result = utils.get24(a, b, c, d);

    for (var i = result.length; i > 0; i--) {
      result = result.substring(0, i - 1) + " " + result.substring(i - 1, result.length + 1);
    }
    this.setData({
      content: result == "" ? "无解" : result
    });

  }



})