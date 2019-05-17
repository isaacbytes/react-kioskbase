const path = require('path');
const autoprefixer = require('autoprefixer');


module.exports = function(env, arg) {
  const isProduction = env === 'production';

  const CSSModuleLoader = {
    loader: 'css-loader',
    options: {
      modules: true,
      sourceMap: true,
      localIdentName: '[local]__[hash:base64:5]'
    }
  };
  const CSSLoader = {
    loader: 'css-loader',
    options: {
      modules: false,
      sourceMap: true
    }
  };
  const postCSSLoader = {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      sourceMap: true,
      plugins: () => [
        autoprefixer({
          browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
        })
      ]
    }
  };

  return {
    mode: isProduction ? 'production' : 'development',
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          exclude: /\.module\.scss$/,
          use: ['style-loader', CSSLoader, postCSSLoader, 'sass-loader']
        },
        {
          test: /\.module\.scss$/,
          use: [
            'style-loader',
            CSSModuleLoader,
            postCSSLoader,
            'sass-loader',
          ]
        }
      ]
    },
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public')
    }
  };

};