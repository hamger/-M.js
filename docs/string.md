### delBlank(str)
- 描述：

  去除字符串两侧的空格，内含的多个空格转化为一个空格

- 参数：

  - `{string} str`

- 返回值：`{string}`

- 示例： 
  ```js
  f.delBlank(' he ll  o ')  // "he ll o"
  ```

### omitStr (str, len)

- 描述：

  字符串溢出省略

- 参数：

  - `{string} str` 原字符串
  - `{number} len` 最大长度，默认为原字符串的长度

- 返回值：`{string}`

- 示例： 
  ```js
  f.omitStr(' hello world', 6) // " hello..."
  ```