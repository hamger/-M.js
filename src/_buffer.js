import { type } from './type'

// 字符串模板引擎
export function tplEngine (tpl, data, separator) {
  // 初始化参数
  if (!separator && separator !== 0) {
    separator = ','
  }

  // 输出函数
  function print ($1, filter) {
    if (/\./.test($1)) {
      var arr2 = $1.split('.')
      var arr3 = data[arr2[0]][arr2[1]]
      if (arr3 instanceof Array) {
        if (filter) {
          for (var i = 0; i < arr3.length; i++) {
            arr3[i] = filter(arr3[i])
          }
        }
        return arr3.join(separator)
      } else {
        if (filter) {
          arr3 = filter(arr3)
        }
        return arr3
      }
    } else {
      var arr4 = data[$1]
      if (arr4 instanceof Array) {
        if (filter) {
          for (var i = 0; i < arr4.length; i++) {
            arr4[i] = filter(arr4[i])
          }
        }
        return arr4.join(separator)
      } else {
        if (filter) {
          arr4 = filter(arr4)
        }
        return arr4
      }
    }
  }

  // 变量填充
  var tpl = tpl.replace(/<@([^@>]+)?@>/g, function (match, $1) {
    var $1 = $1.trim()
    if (/\|/.test($1)) {
      var arr = $1.split('|')
      var filter = eval(arr[1])
      var variate = eval(arr[0])
      return filter(variate)
    } else {
      return eval($1)
    }
  })

  // 属性填充
  if (data) {
    tpl = tpl.replace(/<%([^%>]+)?%>/g, function (match, $1) {
      var $1 = $1.trim()
      if (/\|/.test($1)) {
        var arr = $1.split('|')
        var filter = eval(arr[1])
        return print(arr[0], filter)
      } else {
        return print($1)
      }
    })
  }
  return tpl
}

// 创建一个类
export function Class (obj) {
  var that
  var obj = obj || {}
  var inClass = function () {
    that = this
    if (this.initialize) {
      this.initialize.apply(this, arguments)
    }
  }
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (key === 'inherit') {
        // 利用原型链实现继承
        inClass.prototype = new obj[key]()
      } else if (type(obj[key]) === 'Function' || /\$$/.test(key)) {
        key = key.substr(0, key.length - 1)
        inClass.prototype[key] = obj[key]
      } else {
        that[key] = obj[key]
      }
    }
  }
  return inClass
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
