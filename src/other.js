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

/**
 * 根据 key 获取对象中的值
 * @param {取值对象} obj
 * @param {描述键的字符串，支持链式键，如 a.b.c} key
 */
export function getValInObj (obj, key) {
  return key.split('.').reduce((obj, name) => obj[name], obj)
}
