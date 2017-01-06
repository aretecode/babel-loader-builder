/**
* @param {?Object} options @see readme#defaults
 * @return {Object | String}
 */
module.exports = function(options) {
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
    stage: '0',
    plugins: [],
    presets: [],
  }
  options = Object.assign(defaults, options)

  var presets = [
    // 'es2015-webpack2',
    'es2015',

    // https://babeljs.io/docs/plugins/preset-stage-0/
    // all presets from stage 1-3
  ].concat(options.presets)
  var plugins = [
    'transform-runtime',

     // async
    'transform-regenerator',
    'transform-async-to-generator',

    // es7 props
    'transform-class-properties',

    // {...props}
    'transform-object-rest-spread',

    // @decorator
    'transform-decorators-legacy',

    // supported by webpack2 already
    // 'transform-es2015-modules-commonjs',
  ].concat(options.plugins)

  // default
  if (!options.stage.includes('stage')) {
    options.stage = 'stage-' + options.stage
  }
  presets.push(options.stage)

  if (options.stripFlow) {
    plugins.push('transform-flow-strip-types')
  }
  if (options.flowRuntime) {
    // defaults
    // {
    //   'assert': true,
    //   'decorate': true,
    // }
    plugins.push('flow-runtime')
  }

  if (options.moduleExports) {
    // for .default handling
    plugins.push('add-module-exports')
  }

  if (options.react) {
    presets.push('react')
    plugins.push('transform-react-jsx')
  }
  if (options.hot) {
    plugins.push('react-hot-loader/babel')
    presets.push('react-hmre')
  }

  // babel minifier
  if (options.babili) {
    presets.push('babili')
  }

  // @TODO: inferno & inferno-compat
  if (options.inferno) {
    // presets.push('inferno')
    plugins.push('inferno')
    plugins.push(['module-resolver', {
      'root': ['.'],
      'alias': {
        'react': 'inferno-compat',
        'react-dom': 'inferno-compat',
        'react-dom/server': 'inferno-compat',
        'inferno': 'inferno-compat',
      },
    }])
  }

  if (options.asObject) {
    return {plugins, presets}
  }

  presets = 'presets[]=' + presets.join(',presets[]=')
  plugins = ',plugins[]=' + plugins.join(',plugins[]=')
  var babel = 'babel-loader?' + presets + plugins

  if (!options.babelrc) {
    babel += ',babelrc=false'
  }
  if (options.cacheDirectory) {
    babel += ',cacheDirectory=true'
  }

  return babel
}
