### delBlank(str)

- 参数

  - `{string} str`

- 返回值：{string} 去除空格后的字符串

- 用法
  去除字符串两侧的空格，内含的多个空格转化为一个空格

- 示例  
  ```js
  f.delBlank(' he ll  o ')  // "he ll o"
  ```

### omitStr (str, len)

- 参数

  - `{string} str` 原字符串
  - `{number} len` 最大长度，默认为原字符串的长度

- 返回值：{string} 省略的字符串

- 用法
  字符串溢出省略

- 示例  
  ```js
  f.omitStr(' hello world', 6) // " hello..."
  ```