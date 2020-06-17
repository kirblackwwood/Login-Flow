var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack/dev')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  inline: false,
  historyApiFallback: true,
  quiet: true
}).listen(8080, 'localhost', function (error, result) {
  if (error) {
    console.log(error)
  }

  console.log('Listening at 0.0.0.0:8080')
})
