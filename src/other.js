// 获得路由参数
export function getUrlParams () {
  var url = window.document.location.href.toString(),
    urlSlice = url.split('?')
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
