module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/monsters/'
    : '/',
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.ts', '.vue', '.json', '.scss', '.css']
    }
  }
}

// "gitHooks": { in package.json
//     "pre-commit": "lint-staged"
// },
