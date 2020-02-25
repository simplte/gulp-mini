//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    motto: "Hello World",
    userInfo: {},
    hasUserInfo: false
  },

  apitest() {
    var _this = this;
    app.globalData.http
      .musicList()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
});
