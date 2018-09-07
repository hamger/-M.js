### getUrlParams()

- 描述：

  获得表示路由参数的对象

- 返回值：`{Object}`

- 示例：
  ```js
  // 如当前页面地址为 http://localhost:8080/?a=12&b=hl==&c=243
  f.getUrlParams() // {a: "12", b: "hl==", c: "243"}
  ```
