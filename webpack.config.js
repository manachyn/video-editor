var path = require('path');
var webpack = require('webpack');

var env = process.env.NODE_ENV;

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  resolve: {
    extensions: [
      '',
      '.js',
      '.css',
      '.json'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      ReactDOMServer: 'react-dom/server',
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.css$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[name]-[local]--[hash:base64:5]',
          'postcss-loader'
        ]
      },
      { test: /\.svg$/, exclude: /node_modules/, loader: 'file-loader' },
      {
        test: /\.(glsl|frag|vert)$/,
        exclude: /node_modules/,
        loaders: ['raw-loader', 'glslify-loader']
      },
      {
        test: /\.js$/,
        include: /linebreak/,
        loader: 'transform?brfs'
      },
    ]
  },
  postcss: [
    require('postcss-import')({
      addDependencyTo: webpack,
      path: [
        'modules',
        'styles'
      ]
    }),
    require('postcss-custom-media'),
    require('precss'),
    require('postcss-cssnext')({
      sourcemap: true,
      messages: {
        browser: true,
        console: true
      }
    }),
    require('lost'),
    //require('postcss-assets')(assets),
    //require('postcss-font-magician')(fontMagician),
    require('postcss-size'),
    require('postcss-position'),
    require('postcss-easings'),
    require('postcss-hexrgba'),
    require('postcss-color-rgba-fallback'),
    require('postcss-input-style'),
    require('postcss-quantity-queries'),
    require('postcss-responsive-type')({
      minSize: '1rem',
      maxSize: '2rem',
      minWidth: '22.5rem',
      maxWidth: '85.375rem',
      rootSize: '1rem'
    }),
    ...(process.env.NODE_ENV === 'production' ? require('cssnano') : []),
    require('postcss-reporter'),
    require('postcss-browser-reporter')
  ]
};