### dateFormat(date, format)

- 描述：

  格式化日期显示形式

- 参数：

  - `{Date | string | number} date` 日期对象、或者可以转化为日期对象的字符串或时间戳
  - `{string} format` 规定返回的日期格式，使用`y`表示年，`M`表示月，`d`表示天，`h`表示小时，`m`表示分，`s`表示秒，字母前加`0`表示不满十的情况前面加 0，默认`y/M/d h:0m:0s`

- 返回值：`{string}`

- 示例：
  ```js
  f.dateFormat(new Date(), "y/M/d h:0m"); // "2018/9/7 11:06"
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
