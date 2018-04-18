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
    this.initNumbers();
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
  initNumbers: function () {
    while (true) {
      var a = utils.RandomNumBoth(1, 13);
      var b = utils.RandomNumBoth(1, 13);
      var c = utils.RandomNumBoth(1, 13);
      var d = utils.RandomNumBoth(1, 13);

      var result = utils.get24(a, b, c, d);
      if (result != "") {
        this.setData({
          num1: a,
          num2: b,
          num3: c,
          num4: d
        });
        break;
      }
    }


  },
  btnNext: function () {
    this.setData({
      content: ""
    });
    this.initNumbers();
  },
  getAnswer: function () {
    var a = parseInt(this.data.num1);
    var b = parseInt(this.data.num2);
    var c = parseInt(this.data.num3);
    var d = parseInt(this.data.num4);

    var result = utils.get24(a, b, c, d);

    for (var i = result.length; i > 0; i--) {
      result = result.substring(0, i - 1) + " " + result.substring(i - 1, result.length + 1);
    }
    this.setData({
      content: result == "" ? "无解" : result
    });

  }



})