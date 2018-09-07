### objClone(obj)

- 描述：

  对象深克隆

- 参数：

  - `{Object} obj`

- 返回值：`{Object}`


### getValInObj(obj, key)

- 描述：

  根据 key 获取对象中的值

- 参数：

  - `{Object} obj` 源数组
  - `{string} key` 描述键的字符串

- 返回值：`{any}`

- 示例：
  ```js
  f.getValInObj({a: {b: 12}}, 'a.b') // 12
  ```