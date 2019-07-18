/**
 * Created by jiachenpan on 16/11/18.
 */

export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

export function formatTime(time, option) {
  time = +time * 1000
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

export function ObjToForm(obj) {
  const form = new FormData()
  for (const key in obj) {
    form.append(key, obj[key])
  }
  return form
}

export function Fullsrceen(element) {
  const e = element || document.documentElement
  if (e.requestFullscreen) {
    e.requestFullscreen()
  } else if (e.mozRequestFullScreen) {
    e.mozRequestFullScreen()
  } else if (e.msRequestFullscreen) {
    e.msRequestFullscreen()
  } else if (e.webkitRequestFullscreen) {
    e.webkitRequestFullScreen()
  }
}

export function ExitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  }
}

export function getNowFormatDate(e) {
  //获取当前时间并转换为毫秒  
  var timestamp3 = new Date().getTime() - 86400000*e;
  var date = new Date(timestamp3);
  var seperator1 = "-";
  var seperator2 = ":";
  var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  var strDate =  date.getDate() < 10 ? "0" + date.getDate(): date.getDate();
  var currentdate =
    date.getFullYear() +seperator1 +month +seperator1 +strDate +
    " " +
    date.getHours() +
    seperator2 +
    date.getMinutes() +
    seperator2 +
    date.getSeconds();
    return currentdate;
  
}