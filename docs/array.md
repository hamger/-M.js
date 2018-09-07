### arrSort(arr, key, isDescend)

- 描述：

  对数组进行排序

- 参数：

  - `{Array} arr` 源数组
  - `{string} key` 处理对象数组时需要传入的每项的标记属性，
  - `{boolean} isDescend` 是否是降序，默认`false`，升序

  > 源数组的每一项是数字的情况，函数的第二个参数视为 `isDescend`

- 返回值：`{Array}` 重排后的源数组

- 示例：

  ```js
  f.arrSort([2, 34, 4, 5, 22], true); // [34, 22, 5, 4, 2]
  f.arrSort([{id: 2},{id: 1},{id: 3}], "id"); // [{id: 1},{id: 2},{id: 3}]
  ```

### arrFold (arr, key)

- 描述：

  根据分类，将合适的一维数组折叠为二维数组

- 参数：

  - `{Array} arr` 源数组
  - `{string} key` 每项的标记属性

- 返回值：`{Array}`

- 示例：
  ```js
  var arr = [
    {
      type: 'c',
      value: 'c1'
    },
    {
      type: 'c',
      value: 'c2'
    },
    {
      type: 'b',
      value: 'b1'
    }
  ]
  f.arrFold(arr, 'type')
  /*
  [
    [
      {
        type: 'c',
        value: 'c1'
      },
      {
        type: 'c',
        value: 'c2'
      }
    ],
    [
      {
        type: 'b',
        value: 'b1'
      }
    ]
  ]
  */
  ```
