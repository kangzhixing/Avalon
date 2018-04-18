// pages/tdentbfour/ansder.js
var utils = require("../js/utils.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num1: 0,
    num2: 0,
    num3: 0,
    num4: 0,
    num: [],
    content: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  txtInput: function (e) {
    switch (e.target.dataset.i) {
      case "1":
        this.setData({
          num1: e.detail.value == "" ? 0 : e.detail.value
        }); break;
      case "2":
        this.setData({
          num2: e.detail.value == "" ? 0 : e.detail.value
        }); break;
      case "3":
        this.setData({
          num3: e.detail.value == "" ? 0 : e.detail.value
        }); break;
      case "4":
        this.setData({
          num4: e.detail.value == "" ? 0 : e.detail.value
        }); break;
    }

  },

  getAnswer: function () {
    var a = parseInt(this.data.num1);
    var b = parseInt(this.data.num2);
    var c = parseInt(this.data.num3);
    var d = parseInt(this.data.num4);

    if (a < 1 || a > 13 || b < 1 || b > 13 || c < 1 || c > 13 || d < 1 || d > 13) {
      this.setData({
        content: "应输入1~13的整数"
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