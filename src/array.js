import { isNumber } from './type'

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

/**
 * 对数组进行排序
 * @param {需要处理的数组} arr
 * @param {处理对象数组时需要传入的每项的标记属性} key
 * @param {是否是降序，默认升序} isDescend
 */
export function arrSort (arr, key, isDescend = false) {
  if (!arr.length) return arr
  if (isNumber(arr[0])) {
    // 对每项是数字的数组排序
    arr.sort(function (a, b) {
      if (key) return b - a
      else return a - b
    })
  } else {
    // 对每项是对象的数组排序
    arr.sort(function (a, b) {
      if (isDescend) return b[key] - a[key]
      else return a[key] - b[key]
    })
  }
  return arr
}
