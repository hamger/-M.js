### arrSort(arr, key, isDescend)

- 描述：

  对数组进行排序

- 参数：

  - `{Array} arr` 原数组
  - `{string} key` 处理对象数组时需要传入的每项的标记属性，
  - `{boolean} isDescend` 是否是降序，默认`false`，升序

  > 原数组的每一项是数字的情况，函数的第二个参数视为 `isDescend`

- 返回值：`{Array}` 重排后的原数组

- 示例：

  ```js
  f.arrSort([2, 34, 4, 5, 22], true); // [34, 22, 5, 4, 2]
  f.arrSort([{id: 2},{id: 1},{id: 3}], "id"); // [{id: 1},{id: 2},{id: 3}]
  ```

### relativeDate (dayCount)

- 描述：

  获取相对于今天的日期对象

- 参数：

  - `{number} dayCount` 0 表示今天、-1 表示昨天、1 返回明天，以此类推

- 返回值：`{Date}`

- 示例：
  ```js
  f.relativeDate(1); // Sat Sep 08 2018 11:34:09 GMT+0800 (中国标准时间)
  ```
