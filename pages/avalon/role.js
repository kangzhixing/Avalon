// pages/avalon/role.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firstRole: true,
    voteorder: false,
    bgdisplay: true,
    index: 1,
    voteresultdisplay: false,
    voteOrderDisplay: true,
    txtResult: true,
    btnShowResult_display: false,
    resultdisplay: false,
    votedisplay: false,
    detail1: false,
    detail2: false,
    detail3: false,
    detail4: false,
    detail5: false,
    detail6: false,
    detail7: false,
    detail8: false,
    detail9: false,
    detail10: false,
    user6: false,
    user7: false,
    user8: false,
    user9: false,
    user10: false,
    mission1: 0,
    mission2: 0,
    mission3: 0,
    mission4: 0,
    mission5: 0,
    missionresult1: "",
    missionresult2: "",
    missionresult3: "",
    missionresult4: "",
    missionresult5: "",
    agree: 0,
    disagree: 0,
    votenum: 0,
    missionindex: 0,
    roleList: [{
      id: 0,
      name: "梅林",
      src: "../resource/merlin.png"
    }, {
      id: 1,
      name: "派西维尔",
      src: "../resource/percival.png"
    }, {
      id: 2,
      name: "忠臣",
      src: "../resource/loyal.png"
    }, {
      id: 3,
      name: "莫甘娜",
      src: "../resource/morgana.png"
    }, {
      id: 4,
      name: "刺客",
      src: "../resource/assassin.png"
    }, {
      id: 5,
      name: "莫德雷德",
      src: "../resource/mordred.png"
    }, {
      id: 6,
      name: "奥伯伦",
      src: "../resource/oberon.png"
    }, {
      id: 7,
      name: "爪牙",
      src: "../resource/lackey.png"
    }],
    num: 0,
    rolestr: "",
    userList: []
  },
  showResult: function () {
    this.setData({
      voteresultdisplay: true
    });
  },
  showNextRole: function () {
    this.setData({
      bgdisplay: false
    });

  },
  closeFirstRole: function () {
    this.setData({
      firstRole: false
    });
  },
  showBg: function () {
    if (this.data.num == this.data.index) {
      this.setData({
        resultdisplay: true,
        index: parseInt(Math.random() * 100) % this.data.num
      });
      return;
    }
    this.setData({
      bgdisplay: true,
      index: this.data.index + 1
    });

  },
  finishMission: function () {
    switch (this.data.missionindex) {
      case '1':
        this.setData({
          missionresult1: this.data.disagree == 0 ? "missionsuccess" : "missionfailed"
        }); break;
      case '2':
        this.setData({
          missionresult2: this.data.disagree == 0 ? "missionsuccess" : "missionfailed"
        }); break;
      case '3':
        this.setData({
          missionresult3: this.data.disagree == 0 ? "missionsuccess" : "missionfailed"
        }); break;
      case '4':
        this.setData({
          missionresult4: this.data.disagree == 0 || (this.data.num >= 7 && this.data.disagree <= 1) ? "missionsuccess" : "missionfailed"
        }); break;
      case '5':
        this.setData({
          missionresult5: this.data.disagree == 0 ? "missionsuccess" : "missionfailed"
        }); break;


    }

    this.setData({
      votedisplay: false,
      voteresultdisplay: false,
      btnShowResult_display: false,
      votenum: 0,
      agree: 0,
      disagree: 0
    });
  },
  showVote: function (e) {
    this.setData({
      votedisplay: true,
      votenum: e.target.dataset.missionindex,
      missionindex: e.target.dataset.index,
      voteorder: Math.random() > .5
    });
  },
  closeVoteOrder: function () {
    this.setData({
      voteOrderDisplay: false
    });
  },
  voteAgree: function (e) {
    this.setData({
      agree: this.data.agree + 1,
      voteorder: Math.random() > .5
    });
    if (this.data.agree + this.data.disagree == this.data.votenum) {
      this.setData({
        btnShowResult_display: true,
        txtResult: this.data.disagree == 0 || (this.data.missionindex == 4 && this.data.num >= 7 && this.data.disagree <= 1) ? true : false
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
        txtResult: this.data.disagree == 0 || (this.data.missionindex == 4 && this.data.num >= 7 && this.data.disagree <= 1) ? true : false
      });
    } else if (this.data.agree + this.data.disagree < this.data.votenum) {
      this.setData({
        voteOrderDisplay: true
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      rolestr: options.roleStr,
      num: parseInt(options.roleStr.split('@').length - 2)
    });

    //添加到玩家角色列表
    var userList = [];
    var list = options.roleStr.split('@');
    for (var i = 0; i < list.length; i++) {
      if (list[i] != "") {
        userList.push(this.data.roleList[list[i]]);

      }
    }
    //打乱列表顺序
    function randomsort(a, b) {
      return Math.random() > .5 ? -1 : 1; //通过随机产生0到1的数，然后判断是否大于0.5从而影响排序，产生随机性的效果。
    }
    userList.sort(randomsort);
    userList.sort(randomsort);
    userList.sort(randomsort);
    userList.sort(randomsort);
    userList.sort(randomsort);
    userList.sort(randomsort);
    userList.sort(randomsort);
    userList.sort(randomsort);
    userList.sort(randomsort);
    userList.sort(randomsort);
    //赋值
    this.setData({
      userList: userList
    });
    for (var i = 0; i < userList.length; i++) {
      switch (i + 1) {
        case 1: this.setData({ img1: userList[i].src }); break;
        case 2: this.setData({ img2: userList[i].src }); break;
        case 3: this.setData({ img3: userList[i].src }); break;
        case 4: this.setData({ img4: userList[i].src }); break;
        case 5: this.setData({ img5: userList[i].src }); break;
        case 6: this.setData({ img6: userList[i].src, user6: true }); break;
        case 7: this.setData({ img7: userList[i].src, user7: true }); break;
        case 8: this.setData({ img8: userList[i].src, user8: true }); break;
        case 9: this.setData({ img9: userList[i].src, user9: true }); break;
        case 10: this.setData({ img10: userList[i].src, user10: true }); break;
      }
    }
    //填充板子
    switch (this.data.num) {
      case 5: this.setData({
        mission1: 2,
        mission2: 3,
        mission3: 2,
        mission4: 3,
        mission5: 3
      }); break;
      case 6: this.setData({
        mission1: 2,
        mission2: 3,
        mission3: 4,
        mission4: 3,
        mission5: 4
      }); break;
      case 7: this.setData({
        mission1: 2,
        mission2: 3,
        mission3: 3,
        mission4: 4,
        mission5: 4
      }); break;
      case 8:
      case 9:
      case 10:
        this.setData({
          mission1: 3,
          mission2: 4,
          mission3: 4,
          mission4: 5,
          mission5: 5
        }); break;
    }

  },
  showRoleDetail: function (e) {
    switch (e.target.dataset.i) {
      case "1": if (this.data.detail1)
        this.setData({
          detail1: false
        });
      else
        this.setData({
          detail1: true
        });; break;
      case "2": if (this.data.detail2)
        this.setData({
          detail2: false
        });
      else
        this.setData({
          detail2: true
        }); break;
      case "3": if (this.data.detail3)
        this.setData({
          detail3: false
        });
      else
        this.setData({
          detail3: true
        }); break;
      case "4": if (this.data.detail4)
        this.setData({
          detail4: false
        });
      else
        this.setData({
          detail4: true
        }); break;
      case "5": if (this.data.detail5)
        this.setData({
          detail5: false
        });
      else
        this.setData({
          detail5: true
        }); break;
      case "6": if (this.data.detail6)
        this.setData({
          detail6: false
        });
      else
        this.setData({
          detail6: true
        }); break;
      case "7": if (this.data.detail7)
        this.setData({
          detail7: false
        });
      else
        this.setData({
          detail7: true
        }); break;
      case "8": if (this.data.detail8)
        this.setData({
          detail8: false
        });
      else
        this.setData({
          detail8: true
        }); break;
      case "9": if (this.data.detail9)
        this.setData({
          detail9: false
        });
      else
        this.setData({
          detail9: true
        }); break;
      case "10": if (this.data.detail10)
        this.setData({
          detail10: false
        });
      else
        this.setData({
          detail10: true
        }); break;
    }

  }


})