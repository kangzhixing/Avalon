var utils = require("../js/utils.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orinum1: 0,
    orinum2: 0,
    orinum3: 0,
    orinum4: 0,
    num1: 0,
    num2: 0,
    num3: 0,
    num4: 0,
    txt1focus: false,
    txt2focus: false,
    txt3focus: false,
    txt4focus: false,
    sign1focus: false,
    sign2focus: false,
    sign3focus: false,
    sign4focus: false,
    txt1show: true,
    txt2show: true,
    txt3show: true,
    txt4show: true,
    tempnum: 0,
    tempsign: '',
    content: "",
    welldone: false,
    countDone: 0
  },

  txtfocus: function (e) {
    wx.vibrateShort();
    var i = parseInt(e.target.dataset.i);
    switch (i) {
      case 1: {
        if (this.data.txt1focus) {
          this.setData({
            tempnum: 0,
            txt1focus: false
          });
        } else {
          if ((this.data.txt2focus || this.data.txt3focus || this.data.txt4focus) && this.data.tempsign != '') {
            var result = 0;
            switch (this.data.tempsign) {
              case '+': result = this.data.tempnum + this.data.num1; break;
              case '-': result = this.data.tempnum - this.data.num1; break;
              case '*': result = this.data.tempnum * this.data.num1; break;
              case '/': result = this.data.tempnum / this.data.num1; break;
            }
            this.setData({
              num1: result,
              tempsign: ''
            });
            if (this.data.txt2focus) {
              this.setData({
                txt2show: false,
              });
            } else if (this.data.txt3focus) {
              this.setData({
                txt3show: false,
              });
            } else if (this.data.txt4focus) {
              this.setData({
                txt4show: false,
              });
            }
            if (result == 24 && !this.data.txt2show && !this.data.txt3show && !this.data.txt4show) {
              this.wellDone();
            }
          }
          this.setData({
            tempnum: this.data.num1,
            tempsign: ''
          });
          this.initNum(i);
          this.initSign();
        }
        break;
      }
      case 2: {
        if (this.data.txt2focus) {
          this.setData({
            tempnum: 0,
            txt2focus: false
          });
        } else {
          if ((this.data.txt1focus || this.data.txt3focus || this.data.txt4focus) && this.data.tempsign != '') {
            var result = 0;
            switch (this.data.tempsign) {
              case '+': result = this.data.tempnum + this.data.num2; break;
              case '-': result = this.data.tempnum - this.data.num2; break;
              case '*': result = this.data.tempnum * this.data.num2; break;
              case '/': result = this.data.tempnum / this.data.num2; break;
            }
            this.setData({
              num2: result,
              tempsign: ''
            });
            if (this.data.txt1focus) {
              this.setData({
                txt1show: false,
              });
            } else if (this.data.txt3focus) {
              this.setData({
                txt3show: false,
              });
            } else if (this.data.txt4focus) {
              this.setData({
                txt4show: false,
              });
            }
            if (result == 24 && !this.data.txt1show && !this.data.txt3show && !this.data.txt4show) {
              this.wellDone();
            }
          }
          this.setData({
            tempnum: this.data.num2,
            tempsign: ''
          });
          this.initNum(i);
          this.initSign();
        }
        break;
      }
      case 3: {
        if (this.data.txt3focus) {
          this.setData({
            tempnum: 0,
            txt3focus: false
          });
        } else {
          if ((this.data.txt1focus || this.data.txt2focus || this.data.txt4focus) && this.data.tempsign != '') {
            var result = 0;
            switch (this.data.tempsign) {
              case '+': result = this.data.tempnum + this.data.num3; break;
              case '-': result = this.data.tempnum - this.data.num3; break;
              case '*': result = this.data.tempnum * this.data.num3; break;
              case '/': result = this.data.tempnum / this.data.num3; break;
            }
            this.setData({
              num3: result,
              tempsign: ''
            });
            if (this.data.txt1focus) {
              this.setData({
                txt1show: false,
              });
            } else if (this.data.txt2focus) {
              this.setData({
                txt2show: false,
              });
            } else if (this.data.txt4focus) {
              this.setData({
                txt4show: false,
              });
            }
            if (result == 24 && !this.data.txt1show && !this.data.txt2show && !this.data.txt4show) {
              this.wellDone();
            }
          }
          this.setData({
            tempnum: this.data.num3,
            tempsign: ''
          });
          this.initNum(i);
          this.initSign();
        }
        break;
      }
      case 4: {
        if (this.data.txt4focus) {
          this.setData({
            tempnum: 0,
            txt4focus: false
          });
        } else {
          if ((this.data.txt1focus || this.data.txt2focus || this.data.txt3focus) && this.data.tempsign != '') {
            var result = 0;
            switch (this.data.tempsign) {
              case '+': result = this.data.tempnum + this.data.num4; break;
              case '-': result = this.data.tempnum - this.data.num4; break;
              case '*': result = this.data.tempnum * this.data.num4; break;
              case '/': result = this.data.tempnum / this.data.num4; break;
            }
            this.setData({
              num4: result,
              tempsign: ''
            });
            if (this.data.txt1focus) {
              this.setData({
                txt1show: false,
              });
            } else if (this.data.txt2focus) {
              this.setData({
                txt2show: false,
              });
            } else if (this.data.txt3focus) {
              this.setData({
                txt3show: false,
              });
            }
            if (result == 24 && !this.data.txt1show && !this.data.txt2show && !this.data.txt3show) {
              this.wellDone();
            }
          }
          this.setData({
            tempnum: this.data.num4,
            tempsign: ''
          });
          this.initNum(i);
          this.initSign();
        }
        break;
      }
      case 5: {
        if (this.data.sign1focus) {
          this.setData({
            tempsign: '',
            sign1focus: false
          });
        } else {
          this.setData({
            tempsign: '+'
          });
          this.initSign(1);
        }
        break;
      }
      case 6: {
        if (this.data.sign2focus) {
          this.setData({
            tempsign: '',
            sign2focus: false
          });
        } else {
          this.setData({
            tempsign: '-'
          });
          this.initSign(2);
        }
        break;
      }
      case 7: {
        if (this.data.sign3focus) {
          this.setData({
            tempsign: '',
            sign3focus: false
          });
        } else {
          this.setData({
            tempsign: '*'
          });
          this.initSign(3);
        }
        break;
      }
      case 8: {
        if (this.data.sign4focus) {
          this.setData({
            tempsign: '',
            sign4focus: false
          });
        } else {
          this.setData({
            tempsign: '/'
          });
          this.initSign(4);
        }
        break;
      }

    }

  },

  btnNext: function () {
    wx.vibrateShort();

    wx.redirectTo({
      url: '../twentyfour/index'
    })
  },
  wellDone: function () {
    this.setData({
      welldone: true
    });
  },

  initNum: function (e) {
    this.setData({
      txt1focus: false,
      txt2focus: false,
      txt3focus: false,
      txt4focus: false
    });
    switch (e) {
      case 1: this.setData({ txt1focus: true }); break;
      case 2: this.setData({ txt2focus: true }); break;
      case 3: this.setData({ txt3focus: true }); break;
      case 4: this.setData({ txt4focus: true }); break;
    }
  },

  initSign: function (e) {
    this.setData({
      sign1focus: false,
      sign2focus: false,
      sign3focus: false,
      sign4focus: false
    });
    switch (e) {
      case 1: this.setData({ sign1focus: true }); break;
      case 2: this.setData({ sign2focus: true }); break;
      case 3: this.setData({ sign3focus: true }); break;
      case 4: this.setData({ sign4focus: true }); break;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.num1 != null && options.num2 != null && options.num3 != null && options.num4 != null &&
      options.num1 != '' && options.num2 != '' && options.num3 != '' && options.num4 != '') {
      this.initNumbers(parseInt(options.num1), parseInt(options.num2), parseInt(options.num3), parseInt(options.num4));
    } else {
      this.initNumbers();
    }
    
  },
  initNumbers: function (a, b, c, d) {
    if (a != null) {
      this.setData({
        orinum1: a,
        orinum2: b,
        orinum3: c,
        orinum4: d,
        num1: a,
        num2: b,
        num3: c,
        num4: d,
        tempnum: 0
      });
    } else {
      while (true) {
        a = utils.RandomNumBoth(1, 13);
        b = utils.RandomNumBoth(1, 13);
        c = utils.RandomNumBoth(1, 13);
        d = utils.RandomNumBoth(1, 13);

        var result = utils.get24(a, b, c, d);
        if (result != "") {
          this.setData({
            orinum1: a,
            orinum2: b,
            orinum3: c,
            orinum4: d,
            num1: a,
            num2: b,
            num3: c,
            num4: d,
            tempnum: 0
          });
          break;
        }
      }
    }


  },
  onShareAppMessage: function (res) {
    return {
      title: '能帮我解出这道题么',
      path: 'pages/twentyfour/shareBack?num1=' + this.data.orinum1 + "&num2=" + this.data.orinum2
      + "&num3=" + this.data.orinum3 + "&num4=" + this.data.orinum4,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
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
  btnRefresh: function () {
    wx.vibrateShort();
    this.setData({
      num1: this.data.orinum1,
      num2: this.data.orinum2,
      num3: this.data.orinum3,
      num4: this.data.orinum4,
      tempnum: 0,
      tempsign: '',
      txt1show: true,
      txt2show: true,
      txt3show: true,
      txt4show: true,
      content: "",
      welldone: false
    });

    this.initNum();
    this.initSign();
  }

})