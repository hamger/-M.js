/*************************************************************
 *@Author		: Hanger 
 *@Date		    : 2017/7/7 
 *@Comments     : Personal JavaScript framework
 **************************************************************/
(function () {
    var root = this
    var $ = {
        NAME: '$M.js',
        AUTHOR: 'Hanger',
        VERSION: '1.0.0'
    }

    // 判断类型
    $.type = function (arg) {
        if (arg === null) {
            return "null"
        } else if (typeof (arg) == "object") {
            if (arg instanceof Array) {
                return "array"
            } else {
                return "object"
            }
        } else {
            return typeof (arg)
        }
    }

    // 创建一个类
    $.Class = function (obj) {
        var that 
        var obj = obj || {}
        var inClass = function () {
            that = this  
            if (this.initialize) {
                this.initialize.apply(this, arguments)
            }
        }
        for (var key in obj) {
            if(obj.hasOwnProperty(key)){
                if (key == "inherit") { // 利用原型链实现继承
                    inClass.prototype = new obj[key]()
                } else if($.type(obj[key]) == 'function' || /\$$/.test(key)){
                    key = key.substr(0,key.length -1)
                    inClass.prototype[key] = obj[key]
                } else {
                    that[key] = obj[key]
                }
            }
        }
        return inClass
    }

    // 字符串模板引擎
    $.tplEngine = function (tpl, data, separator) {
        // 初始化参数
        if (!separator && separator !== 0) {
            separator = ','
        }

        // 输出函数
        function print($1, filter) {
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

    // 转Date对象
    $.toDate = function (dateArg) {
        if (Object.prototype.toString.call(dateArg) == "[object Date]") {
            return dateArg
        } else if ($.type(dateArg) == 'number' || 'string') {
            return new Date(dateArg)
        } else {
            throw Error('You need input a right Date argument!')
        }
    }

    // Date对象转日期
    $.dateFormat = function (date, format) {
        var date = $.toDate(date)
        var format = format || 'yyyy/MM/dd'
        var tf = function (i) { return (i < 10 ? '0' : '') + i };
        return format.replace(/yyyy|MM|dd|hh|mm|ss/g, function (a) {
            switch (a) {
                case 'yyyy':
                    return tf(date.getFullYear());
                    break;
                case 'MM':
                    return tf(date.getMonth() + 1);
                    break;
                case 'mm':
                    return tf(date.getMinutes());
                    break;
                case 'dd':
                    return tf(date.getDate());
                    break;
                case 'hh':
                    return tf(date.getHours());
                    break;
                case 'ss':
                    return tf(date.getSeconds());
                    break;
            }
        })
    }

    // 日期比较大小,返回负数date1更早
    $.dateCompare = function (date1, date2) {
        var date1 = $.toDate(date1)
        var date2 = $.toDate(date2)
        return date1.getTime() - date2.getTime()
    }

    // 对象深克隆
    $.clone = function (obj) {
        var clone = {}
        var cloneOf = function (item) {
            switch ($.type(item)) {
                case 'array': case 'object': return $.clone(item);
                default: return item;
            }
        }
        for (var key in obj) {
            clone[key] = cloneOf(obj[key])
        }
        return clone
    }

    // 获得路由参数
    $.getUrlParams = function () {
        var url = window.document.location.href.toString(),
            urlSlice = url.split('?')
        if (urlSlice[1]) {
            urlSlice = urlSlice[1].split('&')
            var pObj = {}, pArr = []
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
    $.omitStr = function (str, len, start) {
        var len = len || str.length
        var start = start || 0
        return str.subStr(strat, len) + '...'
    }

    // 移动端支持px开发
    $.supportPx = function (size) {
        var size = size || 640
        if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
            var version = parseFloat(RegExp.$1);
            if (version > 2.3) {
                var phoneScale = parseInt(window.screen.width) / size;
                document.write('<meta name="viewport" content="width=' + size + ', minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">')
            } else {
                document.write('<meta name="viewport" content="width=' + size + ', target-densitydpi=device-dpi">')
            }
        } else {
            document.write('<meta name="viewport" content="width=' + size + ', user-scalable=no, target-densitydpi=device-dpi">')
        }

        if (window.innerWidth != size) {
            var style = document.createElement("style")
            style.appendChild(document.createTextNode("html{zoom:" + (window.innerWidth / size) + ";}"))
            document.head.appendChild(style)
        }
    }

    // 暴露接口
	if (typeof exports == "object") {
		module.exports = $;
	} else if (typeof define == "function" && define.amd) {
		define([], function () {
			return $;
		})
	} else {
		root.$M = $;
	}
}.call(this))
