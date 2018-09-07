// 获得路由参数
export function getUrlParams () {
  var url = window.document.location.href.toString(),
    urlSlice = url.split('?')
  if (urlSlice[1]) {
    urlSlice = urlSlice[1].split('&')
    var pObj = {},
      pArr = []
    for (var i = 0; i < urlSlice.length; i++) {
      pArr = urlSlice[i].split('=')
      pObj[pArr[0]] = pArr[1]
    }
    return pObj
  } else {
    return {}
  }
}
