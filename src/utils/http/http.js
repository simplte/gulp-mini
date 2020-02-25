class WxRequest {
  constructor() {
    this.BAND_RESPONSE_TEXT = "服务器异常，请稍后再试！";
    this.NETWORK_ERR_TEXT = "网络异常，请稍后再试！";
    this.CODE_SUCCESS = 200;
  }
  get(url, data, header = {}, needtoken) {
    return this._request("GET", url, data, header, needtoken);
  }
  post(url, data, header = {}, needtoken) {
    return this._request("POST", url, data, header, needtoken);
  }
  delete(url, data, header = {}, needtoken) {
    return this._request("DELETE", url, data, header, needtoken);
  }
  _request(method, url, data, header, needtoken) {
    const that = this;
    if (!needtoken) {
      return that._getNetwork().then(() => {
        return new Promise((resolve, reject) => {
          wx.request(
            that._buildData(method, url, data, header, resolve, reject)
          );
        });
      });
    } else {
      header["token"] = wx.getStorageSync("token");
      return that
        ._getNetwork()
        .then(() => {
          return new Promise((resolve, reject) => {
            wx.request(
              that._buildData(method, url, data, header, resolve, reject)
            );
          });
        });
    }
  }
  // 数据请求的格式参数
  _buildData(method, url, data, header, resolve, reject) {
    let that = this;
    header = Object.assign(
      {},
      {
        "Content-Type": "application/json"
      },
      header
    );
    const requestOption = {
      url,
      data,
      method: method || "POST",
      header,
      success: res => {
        resolve(that._beforeResponse(res));
      },
      fail: err => {
        setTimeout(function () {
          wx.showToast({
            title: that.NETWORK_ERR_TEXT,
            icon: "none",
            duration: 2000
          });
        }, 100);
        reject(err);
      }
    };
    return requestOption;
  }
  // 在接口请求前检查网络状态
  _getNetwork() {
    const that = this;
    return new Promise((resolve, reject) => {
      wx.getNetworkType({
        success(res) {
          if (res.networkType === "none") {
            setTimeout(function() {
              wx.showToast({
                title: that.NETWORK_ERR_TEXT,
                icon: "none",
                duration: 2000
              });
            }, 100);
            reject(res);
          } else {
            resolve();
          }
        },
        fail(err) {
          setTimeout(function () {
            wx.showToast({
              title: that.NETWORK_ERR_TEXT,
              icon: "none",
              duration: 2000
            });
          }, 100);
          reject(err);
        }
      });
    });
  }
  // 接口返回数据前统一处理
  _beforeResponse(res) {
    const that = this;
    let data = res.data;
    // 当没有数据返回时
    if (!data) {
      wx.showToast({
        title: that.BAND_RESPONSE_TEXT,
        icon: "none",
        duration: 2000
      });
      return Promise.reject(res);
    }
    // 当返回的状态码不对的时候
    if (data.code !== this.CODE_SUCCESS) {
      setTimeout(function() {
        wx.showToast({
          title: data.message,
          icon: "none",
          duration: 2000
        });
      }, 100);
      return Promise.reject(data);
    }
    // 正常返回
    return Promise.resolve(data);
  }
  // 检查token是否过期
  // _getTokenTime() {
  //   return new Promise((resolve, reject) => {
  //     let token = wx.getStorageSync("token");
  //     let time = Date.now() / 1000;
  //     /** 当前页面大于过期时间，则跳转到登录页面在此授权 */
  //     if (time > token) {
  //       // 跳转到登录界面，授权登录 TODO
  //       wx.reLaunch({
  //         url: "/pages/index/index"
  //       });
  //       reject();
  //     } else {
  //       resolve();
  //     }
  //   });
  // }
}
const wxRequest = new WxRequest();
export default wxRequest;
