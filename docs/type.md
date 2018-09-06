| function         | parameter  | description                 | return  |
| ---------------- | ---------- | --------------------------- | ------- |
| type(arg)        | `arg`: any | 判断数据类型                | String  |
| isFunction(arg)  | `arg`: any | 判断是否为函数类型          | Boolean |
| isObject(arg)    | `arg`: any | 判断是否为对象类型          | Boolean |
| isArray(arg)     | `arg`: any | 判断是否为数组类型          | Boolean |
| isString(arg)    | `arg`: any | 判断是否为字符串类型        | Boolean |
| isNumber(arg)    | `arg`: any | 判断是否为数字类型          | Boolean |
| isBoolean(arg)   | `arg`: any | 判断是否为布尔类型          | Boolean |
| isUndefined(arg) | `arg`: any | 判断是否为 undefined 类型   | Boolean |
| isNull(arg)      | `arg`: any | 判断是否为 null 类型        | Boolean |
| isStrOrNum(arg)  | `arg`: any | 判断是否为字符串或数字类型  | Boolean |
| isDef(arg)       | `arg`: any | 判断值是否为真(0 返回 ture) | Boolean |
| isEmptyObj(arg)  | `arg`: any | 判断是否为空对象            | Boolean |
| isEmptyArr(arg)  | `arg`: any | 判断是否为空数组            | Boolean |
| isEmptyArr(arg)  | `arg`: any | 判断是否为空数组            | Boolean |
| isMobile()       | --         | 判断是否为移动端            | Boolean |

### type(arg)

- 参数

  - `{any} arg`

- 返回值：{string} 用于描述数据类型的字符串

- 用法
  ```js
  f.type(new Date()); // "Date"
  ```

### isFunction(arg)

- 参数

  - `{any} arg`

- 返回值：{boolean} 是否为函数类型

- 用法
  ```js
  f.isFunction(console.log); // true
  ```
