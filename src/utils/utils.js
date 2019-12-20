import hex_md5 from './MD5.js' 

const Utils = {}
Utils.secret = 'F8E5A81A6E624EA468F7794091B5A7F1' 
Utils.apiData = {
  appKey:"CMVP",
  action:"",
  sign:"",
  timestamp:"",
  bizContent:{}
}
Utils.aciton = {
  /**
    * 发送验证码
    */
   COMPOSITION_CODE: 'ailab.mvp.chineseComposition.sms',
 
   /**
    * 登录
    */
   COMPOSITION_LOGIN: 'ailab.mvp.chineseComposition.login',
 
   /**
    * ocr
    */
   COMPOSITION_OCR: 'ailab.mvp.chineseComposition.ocr',
 
   /**
    * 作文批改
    */
   COMPOSITION_CORRECTION: 'ailab.mvp.chineseComposition.correction',
 }
Utils.getCookie = (name) => {
  let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  arr = document.cookie.match(reg)
  if (arr)
    return unescape(arr[2]);
  else
    return null;
}

Utils.setCookie = (obj, time) => {
  let str = time * 2 * 60 * 60 * 1000
  let exp = new Date();
  exp.setTime(exp.getTime() + str);
  for (let key in obj) {
    document.cookie = key + "=" + escape(obj[key]) + ";expires=" + new Date(exp);
  }
}

Utils.clearCookie = () => {
  let keys = document.cookie.match(/[^ =;]+(?=\=)/g);
  if (keys) {
    for (let i = keys.length; i--;)
      document.cookie = keys[i] + '=0;expires=' + new Date(0)
  }
}
Utils.formatDate = () => {
  let fmt = "YYYY-mm-dd HH:MM:ss";
  let date = new Date();
  let ret;
  let opt = {
      "Y+": date.getFullYear().toString(),        // 年
      "m+": (date.getMonth() + 1).toString(),     // 月
      "d+": date.getDate().toString(),            // 日
      "H+": date.getHours().toString(),           // 时
      "M+": date.getMinutes().toString(),         // 分
      "s+": date.getSeconds().toString()          // 秒
  };
  for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
          fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
      };
  };
  return fmt;
}
Utils.sign = () => {
  let originStr = "action="+Utils.apiData.action+"&appKey="+Utils.apiData.appKey+"&timestamp="+Utils.apiData.timestamp+Utils.secret;
  let strMd5 = hex_md5(originStr).toUpperCase();
  Utils.apiData.sign = strMd5
}
Utils.smsCode = (action) => {
  Utils.apiData.action = action
  Utils.apiData.timestamp = Utils.formatDate()
  Utils.sign();
  return Utils.apiData
}

export default Utils