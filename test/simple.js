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
    cacheDirectory: true
  }

  compareObjectValues(defaultLoaderAsObject, expectDefaultLoaderAsObject)
}

console.log('all good, eh!')
