# purpose
an easy string or object babel loader

# installation
```
npm i --save-dev babel-loader-builder
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
  hot: false,
  react: false,
  asObject: false,
  production: false,
  babelrc: false,
  cacheDirectory: true,
  babili: false,
  moduleExports: true,
  inferno: false,
  stage: '0'
}
```

# todo
- [ ] show required installations if some are missing
- [ ] if they are missing, write out a line that shows the installation npm i command
- [ ] stringify the object queries such as inferno for usage as a string
- [ ] just loop instead of Object.assign, for compatibility, or use polyfill but that seems like overkill
