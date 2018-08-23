import { type, isStrOrNum } from './type'

// 转Date对象
export function toDate (dateArg) {
  if (type(dateArg) === 'Date') {
    return dateArg
  } else if (isStrOrNum(dateArg)) {
    return new Date(dateArg)
  } else {
    throw Error('You need input a right Date argument!')
  }
}

// Date对象转日期
export function dateFormat (date, format) {
  var date = toDate(date)
  var format = format || 'yyyy/MM/dd'
  var tf = function (i) {
    return (i < 10 ? '0' : '') + i
  }
  return format.replace(/yyyy|MM|dd|hh|mm|ss/g, function (a) {
    switch (a) {
      case 'yyyy':
        return tf(date.getFullYear())
      case 'MM':
        return tf(date.getMonth() + 1)
      case 'mm':
        return tf(date.getMinutes())
      case 'dd':
        return tf(date.getDate())
      case 'hh':
        return tf(date.getHours())
      case 'ss':
        return tf(date.getSeconds())
    }
  })
}

// 获取相对于今天的日期。 -1 返回昨天；1 返回明天
export function relativeDate (dayCount) {
  if (dayCount === null) dayCount = 0
  var dd = new Date()
  dd.setDate(dd.getDate() + dayCount)
  var y = dd.getFullYear()
  var m = dd.getMonth() + 1
  var d = dd.getDate()
  return y + '/' + m + '/' + d
}

// 日期比较大小,返回负数date1更早
export function dateCompare (date1, date2) {
  var date1 = toDate(date1)
  var date2 = toDate(date2)
  return date1.getTime() - date2.getTime()
}
