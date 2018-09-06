/**
 * 去除字符串两侧的空格，内含的多个空格转化为一个空格
 * @param {需要处理的字符串} str
 */
export function delBlank (str) {
  var regEx = /\s+/g
  return str.trim().replace(regEx, ' ')
}

/**
 * 字符串溢出省略
 * @param {待处理字符串} str
 * @param {最大长度} len
 */
export function omitStr (str, len) {
  var len = len || str.length
  return str.substr(0, len) + '...'
}
