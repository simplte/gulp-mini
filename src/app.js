import api from "./utils/http/api.js";
import "./static/js/loadshSet";
//app.js
App({
  onLaunch: function() {},
  globalData: {
    userInfo: null,
    http: api
  }
});
