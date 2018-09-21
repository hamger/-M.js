// 获得路由参数
export function getUrlParams (url) {
  if (!isUrl(url)) return
  var urlSlice = url.split('?')
  if (urlSlice[1]) {
    urlSlice = urlSlice[1].split('&')
    var pObj = {}
    for (var i = 0; i < urlSlice.length; i++) {
      var index = urlSlice[i].indexOf('=')
      pObj[urlSlice[i].substring(0, index)] = urlSlice[i].substring(index + 1)
    }
    return pObj
  } else {
    return {}
  }
}

// 简单的判断是否是合法路由
export function isUrl (url) {
  var strRegex = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/
  var re = new RegExp(strRegex)
  return re.test(url)
}

/**
 * 解析url
 * @param {string} url
 * @return {object}
 */
export function parseUrl (url) {
  if (!isUrl(url)) return
  // 解决vue-router路由把#当成hash问题
  url = url.replace(/([\s\S]*)(#)(\/[\s\S]*)/i, '$1$3')
  let a = document.createElement('a')
  a.href = url

  return {
    protocol: a.protocol.replace(':', ''),
    host: a.hostname,
    port: a.port,
    search: a.search,
    params: (() => {
      let qs = a.search.length > 0 ? a.search.substring(1) : '',
        args = Object.create(null),
        len = qs.length,
        items = len > 0 ? qs.split('&') : [],
        item = null,
        name = null,
        value = null,
        i = 0
      for (i; i < len; i++) {
        // 两个&&情况
        if (!items[i]) continue
        item = items[i].split('=')
        name = decodeURIComponent(item[0])
        value = decodeURIComponent(item[1])
        if (name.length > 0) {
          value = +value + '' === value ? value | 0 : value
          if (args[name] === undefined) args[name] = value
          else args[name] = [].concat.call([], args[name], value)
        }
      }

      return args
    })(),
    hash: a.hash.replace('#', ''),
    path: a.pathname,
    filename: (a.pathname.match(/\/([^/?#]+)$/i) || [undefined, ''])[1]
  }
}
