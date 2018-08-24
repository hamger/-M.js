import { type } from './type'

// 对象深克隆
export function clone (obj) {
  var clone = {}
  var cloneOf = function (item) {
    switch (type(item)) {
      case 'Array':
      case 'Object':
        return clone(item)
      default:
        return item
    }
  }
  for (var key in obj) {
    clone[key] = cloneOf(obj[key])
  }
  return clone
}

// 获得路由参数
export function getUrlParams () {
  var url = window.document.location.href.toString(),
    urlSlice = url.split('?')
  if (urlSlice[1]) {
    urlSlice = urlSlice[1].split('&')
    var pObj = {},
      pArr = []
    for (var i = 0; i < urlSlice.length; i++) {
      pArr = urlSlice[i].split('=')
      pObj[pArr[0]] = pArr[1]
    }
    return pObj
  } else {
    return {}
  }
}

// 字符串溢出省略
export function omitStr (str, len, start) {
  var len = len || str.length
  var start = start || 0
  return str.substr(start, len) + '...'
}

// 根据需要将一维数组转化为二维数组
export function sortData (arr, key) {
  var arr2 = []
  var j = 0
  for (var i = 0; i < arr.length; i++) {
    if (i === 0) {
      arr2[j] = []
      arr2[j].push(arr[i])
    } else {
      if (arr[i][key] !== arr[i - 1][key]) {
        j++
        arr2[j] = []
      }
      arr2[j].push(arr[i])
    }
  }
  return arr2
}

//  普通字符串转为 unicode 编码的字符串
export function encodeUnicode (str) {
  var res = []
  for (var i = 0; i < str.length; i++) {
    res[i] = ('00' + str.charCodeAt(i).toString(16)).slice(-4)
  }
  return '\\u' + res.join('\\u')
}

// unicode 编码的字符串转为普通字符串
export function decodeUnicode (str) {
  return decodeURI(str)
}
