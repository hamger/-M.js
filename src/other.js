import { type, isBoolean, isString } from './type'

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
/**
 * 对数组进行排序
 * @param {需要处理的数组} arr
 * @param {处理对象数组时需要传入的每项的标记属性} key
 * @param {是否是降序，默认升序} isDescend
 */
export function arrSort (arr, key = false, isDescend) {
  if (isBoolean(key)) {
    // 对每项是数字的数组排序
    arr.sort(function (a, b) {
      if (key) return b - a
      else return a - b
    })
  } else if (isString(key)) {
    // 对每项是对象的数组排序
    arr.sort(function (a, b) {
      if (isDescend) return b[key] - a[key]
      else return a[key] - b[key]
    })
  } else {
    throw Error(`the params 'key' of arrSort must be boolean or string.`)
  }
}

/**
 * 根据 key 获取对象中的值
 * @param {取值对象} obj
 * @param {描述键的字符串，支持链式键，如 a.b.c} key
 */
export function getValInObj (obj, key) {
  return key.split('.').reduce((obj, name) => obj[name], obj)
}
