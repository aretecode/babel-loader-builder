var builder = require('../src/index.js')

function compareObjectValues(o1, o2) {
  var keys = Object.keys(o1)
  var keys2 = Object.keys(o2)
  console.assert(keys.length === keys2.length, ' keys length')

  // loop through,
  // compare values very simply
  keys.forEach(key => {
    var expectedVal = o2[key]
    var resultVal = o1[key]

    if (Array.isArray(expectedVal)) {
      expectedVal = expectedVal.join('')
      resultVal = resultVal.join('')
    }
    var msg = {
      msg: key + ' as object key...',
      expectedVal,
      resultVal,
    }

    console.assert(expectedVal == resultVal, msg)
  })
}

function compareAsString() {
  var defaultLoaderAsString = builder({})
  var expectDefaultLoaderAsString = 'babel-loader?presets[]=es2015,presets[]=stage-0,plugins[]=transform-runtime,plugins[]=transform-regenerator,plugins[]=transform-async-to-generator,plugins[]=transform-class-properties,plugins[]=transform-object-rest-spread,plugins[]=transform-decorators-legacy,plugins[]=add-module-exports,babelrc=false,cacheDirectory=true'
  console.assert(defaultLoaderAsString === expectDefaultLoaderAsString, 'loader as string...')
}

function compareAsObject() {
  var defaultLoaderAsObject = builder({asObject: true})
  var expectDefaultLoaderAsObject = {
    plugins: [
      'transform-runtime',
       'transform-regenerator',
       'transform-async-to-generator',
       'transform-class-properties',
       'transform-object-rest-spread',
       'transform-decorators-legacy',
       'add-module-exports'
    ],
    presets: ['es2015', 'stage-0'],
    babelrc: false,
    cacheDirectory: true,
    sourceMaps: true,
  }
  compareObjectValues(defaultLoaderAsObject, expectDefaultLoaderAsObject)
}

function compareStringifiedToStringifiedObj() {
  var asObj = builder({asObject: true})
  var objToStr = JSON.stringify(asObj)

  var asStr = builder({stringify: true})
  var strToObj = JSON.parse(asStr)

  compareObjectValues(asObj, strToObj)
  console.assert(asStr == objToStr, 'object to string, string to object')
}

function returnsStringIfOptionsRequire() {
  var loader = builder({inferno: true})
  var split = loader.split('?')
  console.assert(split.length === 2, 'has babel-loader?query')
  console.assert(split[1] === 'babel-loader', 'first split is `babel-loader`')
  console.assert(typeof JSON.parse(split[2]) === 'object', 'second part can be parsed')
}


compareAsObject()
compareStringifiedToStringifiedObj()
console.log('all good, eh!')
