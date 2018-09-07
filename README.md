# hg-jslibrary

Library of common JavaScript function

## Install

```bash
npm install hg-jslibrary
```

## Usage

```js
import f from "hg-jslibrary";

f.type(new Date()); // "Date"
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

[文档地址](https://hamger.github.io/hg-jslibrary/)

## Changelog

### 2018.9.7

> v0.1.4 添加文档

### 2018.8.24

> v0.1.2 添加 getValInObj 方法

> v0.1.1 添加 arrSort 方法

### 2018.8.23

> v0.1.0 初始化项目
