const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-ts');
const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (webpackConfigEnv, argv) => {
  const orgName = 'career';
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: 'root-config',
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  const nxConfig = {
    output: {
      filename: '[name].js',
      path: join(__dirname, '../../dist/apps/front-root'),
    },
    devServer: {
      port: 51235,
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: './src/app/index.ejs',
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
      new NxAppWebpackPlugin({
        tsConfig: './tsconfig.app.json',
        compiler: 'tsc',
        main: './src/main.ts',
        index: './src/app/index.ejs',
        baseHref: '/',
        assets: ['./src/favicon.ico', './src/assets'],
        styles: ['./src/styles.scss'],
        outputHashing:
          process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
        optimization: process.env['NODE_ENV'] === 'production',
        sourceMap: true,
      }),
    ],
  };

  return merge(defaultConfig, nxConfig);
};
