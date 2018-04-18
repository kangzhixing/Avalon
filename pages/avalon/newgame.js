// pages/avalon/newgame.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loyal2: false,
    loyal3: false,
    loyal4: false,
    mordred: false,
    oberon: false,
    lackey: false,
    loyalnum: "",
    num: 5,
    roleStr: "@0@1@2@3@4@"
  },

  sliNumChange: function (e) {
    this.setData({
      num: e.detail.value
    });
    switch (e.detail.value) {
      case 5: {
        this.setData({
          loyal2: false,
          loyal3: false,
          loyal4: false,
          mordred: false,
          oberon: false,
          lackey: false,
          roleStr: "@0@1@2@3@4@"
        });
        break;
      }
      case 6: {
        this.setData({
          loyal2: true,
          loyal3: false,
          loyal4: false,
          mordred: false,
          oberon: false,
          lackey: false,
          roleStr: "@0@1@2@2@3@4@"
        });
        break;
      }
      case 7: {
        this.setData({
          loyal2: true,
          loyal3: false,
          loyal4: false,
          mordred: false,
          oberon: true,
          lackey: false,
          roleStr: "@0@1@2@2@3@4@6@"
        });
        break;
      }
      case 8: {
        this.setData({
          loyal2: true,
          loyal3: false,
          loyal4: true,
          mordred: false,
          oberon: false,
          lackey: true,
          roleStr: "@0@1@2@2@2@3@4@7@"
        });
        break;
      }
      case 9: {
        this.setData({
          loyal2: true,
          loyal3: true,
          loyal4: true,
          mordred: true,
          oberon: false,
          lackey: false,
          roleStr: "@0@1@2@2@2@2@3@4@5@"
        });
        break;
      }
      case 10: {
        this.setData({
          loyal2: true,
          loyal3: true,
          loyal4: true,
          mordred: true,
          oberon: true,
          lackey: false,
          roleStr: "@0@1@2@2@2@2@3@4@5@6@"
        });
        break;
      }
    }
  },
  getRole: function (e) {
    wx.navigateTo({
      url: '../avalon/role?roleStr=' + this.data.roleStr
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  goVote: function (e) {
    wx.navigateTo({
      url: '../avalon/vote/choosenum'
    })
  }
})