## Instrall

```bash
npm instrall hg-jslibrary
```

## Usage

```js
import f from "hg-jslibrary";

f.type(new Date()); // "Date"
```

如果你不希望使用`import`引入，需要如下配置

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
