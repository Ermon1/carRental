const path = require('path')
module.exports = {
    resolve: {
        fallback: {
        

            resolve: {
  fallback: {
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    fs: false,
    path: require.resolve('path-browserify'),
    crypto: require.resolve('crypto-browserify'),
    querystring: require.resolve('querystring-es3'),
    url: require.resolve('url/'),
    stream: require.resolve('stream-browserify')
  }
}

    }}
} 