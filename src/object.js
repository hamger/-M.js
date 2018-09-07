import { type } from './type'

/**
 * 对象深克隆
 * @param {Object} obj
 */
export function objClone (obj) {
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

/**
 * 根据 key 获取对象中的值
 * @param {取值对象} obj
 * @param {描述键的字符串，支持链式键，如 a.b.c} key
 */
export function getValInObj (obj, key) {
  return key.split('.').reduce((obj, name) => obj[name], obj)
}
