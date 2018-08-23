export function type (arg) {
  return Object.prototype.toString.call(arg).replace(/\[object\s|\]/g, '')
}

export function isFunction (arg) {
  return type(arg) === 'Fuction'
}

export function isObject (arg) {
  return type(arg) === 'Object'
}

export function isArray (arg) {
  return type(arg) === 'Array'
}

export function isString (arg) {
  return type(arg) === 'String'
}

export function isNumber (arg) {
  return type(arg) === 'Number'
}

export function isBoolean (arg) {
  return type(arg) === 'Boolean'
}

export function isUndefined (arg) {
  return type(arg) === 'Undefined'
}

export function isNull (arg) {
  return type(arg) === 'Null'
}

// 判断是否是字符串或数字
export function isStrOrNum (arg) {
  return isString(arg) || isNumber(arg)
}

// 判断值是否被定义
export function isDef (arg) {
  return !isNull(arg) && !isUndefined(arg)
}

// 判断是否是空对象
export function isEmptyObj (arg) {
  if (isObject(arg)) {
    for (var key in arg) return false
    return true
  }
  return false
}

// 判断是否是空数组
export function isEmptyArr (arg) {
  if (isArray(arg)) {
    if (arg.length === 0) return true
    return false
  }
  return false
}
