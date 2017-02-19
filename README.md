# 🗼🏋️🏗 babel-loader-builder
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
const babelLoaderObject = babelBuilder({asObject: true, reactjsx: true, cacheDirectory: false})

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


## with inferno, in es5
```javascript
var babelBuilder = require('babel-loader-builder')
var babelLoaderObject = babelBuilder({
  latest: true,
  stringify: true,
  inferno: {
    import: true,
    compat: false,
  },
})

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
  latest: false,
  es2015: true,
  hot: false,
  react: false,
  reactjsx: false,
  inferno: false,
  asObject: false,
  production: false,
  babelrc: false,
  cacheDirectory: true,
  babili: false,
  moduleExports: true,
  async: true,
  decorators: true,
  classProperties: true,
  objectSpread: true,
  stringify: false,
  sourceMaps: true,
  stage: '0',
  plugins: [],
  presets: [],
}
```

## params
- stringify: as json stringified option - for use in query or in loader string


# todo
- [ ] show required installations if some are missing
- [ ] if they are missing, write out a line that shows the installation npm i command
- [x] stringify the object queries such as inferno for usage as a string
- [ ] show if some options require being objects (if ^ cannot be strings)
- [ ] just loop instead of Object.assign, for compatibility, or use polyfill but that seems like overkill
- [ ] fill out more params explanation
- [ ] add .env option
- [ ] add hydrating from string
- [ ] add functions as properties on the function to manipulate a generated loader
  - [ ] reactjsx: true
  - [ ] .remove('reactjsx')
  - [ ] could also have config option that would just return the config with defaults
