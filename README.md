[![npm
version](https://badge.fury.io/js/babel-loader-builder.svg)](https://badge.fury.io/js/babel-loader-builder)

# purpose
an easy string or object babel loader

# installation
```
npm i babel-loader-builder --save-dev
```

# usage
_(in `webpack.config`)_

## as a string
```javascript
  import babelBuilder from 'babel-loader-builder'
  const babelLoaderString = babelBuilder({cacheDirectory: false, moduleExports: false})

  // ...
  loaders: [
    {
      test: /\.js?$/,
      loaders: babelLoaderString,
    }
  ],
  // ...
```

## as an object
```javascript
import babelBuilder from 'babel-loader-builder'
const babelLoaderObject = babelBuilder({asObject: true, inferno: true, cacheDirectory: false})

// ...
loaders: [
  {
    test: /\.js?$/,
    loaders: 'babel-loader',
    query: loader,
  }
],
// ...
```

## defaults
```
var defaults = {
  es2015: true,
  hot: false,
  react: false,
  asObject: false,
  production: false,
  babelrc: false,
  cacheDirectory: true,
  babili: false,
  moduleExports: true,
  inferno: false,
  async: true,
  decorators: true,
  classProperties: true,
  objectSpread: true,
  stage: '0',
  plugins: [],
  presets: [],
}
```

# todo
- [ ] show required installations if some are missing
- [ ] if they are missing, write out a line that shows the installation npm i command
- [ ] stringify the object queries such as inferno for usage as a string
- [ ] show if some options require being objects (if ^ cannot be strings)
- [ ] just loop instead of Object.assign, for compatibility, or use polyfill but that seems like overkill
