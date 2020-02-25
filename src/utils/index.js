import wxRequest from "./http/http";
import apiList from "./http/api";
import WxValidate from "./validate/WxValidate.js";
import { rules, messages } from "./validate/validateRules.js";
const ServerAPIH5 = require("../env.js");
const _ = require("../static/js/_lodash");
const requestApi = wxRequest;

// 自定义时间处理
function formatTime(date) {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  return (
    [year, month, day].map(formatNumber).join("/") +
    " " +
    [hour, minute, second].map(formatNumber).join(":")
  );
}

function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : "0" + n;
}

//数据脱敏处理
function desensitization(str) {
  var tempStr = str;
  if (typeof str == "string") {
    //参数为字符串类型
    tempStr = str;
  } else {
    tempStr = str.toString();
  }
  let reten = ""; //返回值
  //大陆手机
  if (tempStr.length <= 4) {
    //手机号长度<4，直接返回
    return tempStr;
  } else if (tempStr.length == 11 || tempStr.indexOf("+86") > -1) {
    if (tempStr.length == 11) {
      //13771800295 替换为 173****1099
      reten = tempStr.substring(0, 3) + "****" + tempStr.substring(7);
      return reten;
    } else if (tempStr.indexOf("+86-") > -1) {
      //+86-13771800295 替换为 +86-137****0295
      reten = tempStr.substring(0, 7) + "****" + tempStr.substring(11);
      return reten;
    } else {
      //+8613771800295 替换为 +86137****0295
      reten = tempStr.substring(0, 6) + "****" + tempStr.substring(10);
      return reten;
    }
  } else if (
    tempStr.length == 8 ||
    tempStr.indexOf("+852") > -1 ||
    tempStr.indexOf("+853") > -1
  ) {
    //港澳手机
    if (tempStr.length == 8) {
      //88886666 转化为 88****66
      reten = tempStr.substring(0, 2) + "****" + tempStr.substring(6);
      return reten;
    } else if (tempStr.indexOf("+852") > -1) {
      if (tempStr.indexOf("+852-") > -1) {
        //+852-88886666 转化为 +852-88****66
        reten = tempStr.substring(0, 7) + "****" + tempStr.substring(11);
        return reten;
      } else {
        //+85288886666 转化为 +85288****66
        reten = tempStr.substring(0, 6) + "****" + tempStr.substring(10);
        return reten;
      }
    } else if (tempStr.indexOf("+853") > -1) {
      if (tempStr.indexOf("+853-") > -1) {
        //+853-88886666 转化为 +853-88****66
        reten = tempStr.substring(0, 7) + "****" + tempStr.substring(11);
        return reten;
      } else {
        //+85388886666 转化为 +85388****66
        reten = tempStr.substring(0, 6) + "****" + tempStr.substring(10);
        return reten;
      }
    }
  } else if (tempStr.indexOf("+") > -1) {
    //处理非大陆、港澳手机号
    if (tempStr.indexOf("-") > -1) {
      //+1-6267807552 转化为 +1-6267****52
      reten = tempStr.substring(0, 7) + "****" + tempStr.substring(11);
      return reten;
    } else {
      //+16267807552 转化为 +16267****52
      reten = tempStr.substring(0, 6) + "****" + tempStr.substring(10);
      return reten;
    }
  } else {
    //当固话处理
    //010-86551122 转化为 010-8655****
    reten = tempStr.substring(0, tempStr.length - 4) + "****";
    return reten;
  }
}

export {
  requestApi,
  apiList,
  ServerAPIH5,
  WxValidate,
  rules,
  messages,
  formatTime,
  desensitization,
  _
};
