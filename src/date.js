import { type, isStrOrNum } from './type'

// 转Date对象
function toDate (dateArg) {
  if (type(dateArg) === 'Date') {
    return dateArg
  } else if (isStrOrNum(dateArg)) {
    return new Date(dateArg)
  } else {
    throw Error('You need input a right Date argument!')
  }
}

function add0 (i) {
  return (i < 10 ? '0' : '') + i
}

// Date对象转日期
export function dateFormat (date, format) {
  var date = toDate(date)
  var format = format || 'y/M/d h:0m:0s'

  return format.replace(/y|0M|M|0d|d|0h|h|0m|m|0s|s/g, function (a) {
    switch (a) {
      case 'y':
        return date.getFullYear()
      case 'M':
        return date.getMonth() + 1
      case '0M':
        return add0(date.getMonth() + 1)
      case 'd':
        return date.getDate()
      case '0d':
        return add0(date.getDate())
      case 'h':
        return date.getHours()
      case '0h':
        return add0(date.getHours())
      case 'm':
        return date.getMinutes()
      case '0m':
        return add0(date.getMinutes())
      case 's':
        return date.getSeconds()
      case '0s':
        return add0(date.getSeconds())
    }
  })
}

// 获取相对于今天的日期。 -1 返回昨天；1 返回明天
export function relativeDate (dayCount) {
  if (dayCount === null) dayCount = 0
  var dd = new Date()
  dd.setDate(dd.getDate() + dayCount)
  return dd
}
