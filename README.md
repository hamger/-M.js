# hg-jslibrary

Library of common JavaScript function

## Install

```bash
npm install hg-jslibrary
```

## Usage

```js
import f from "hg-jslibrary";

console.log(f.isFunction(console.log));
// ture
```

如果你希望每个文件里都使用`import`引入，需如下配置

```js
// webpack.config.js
module.exports = {
  ...
  plugins: [
   new webpack.ProvidePlugin({
      f: ['hg-jslibrary', 'default']
    })
  ]
}
```

## API

| property | value  | description |
| -------- | ------ | ----------- |
| AUTHOR   | String | 作者        |
| VERSION  | String | 版本        |

### type

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

## Changelog

### 2018.8.24

> v0.1.3 添加 isDef 方法

### 2018.8.24

> v0.1.2 添加 getValInObj 方法

> v0.1.1 添加 arrSort 方法

### 2018.8.23

> v0.1.0 初始化项目
