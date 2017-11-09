const path = require('path');
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (config, env) => {
  const storybookConfig = genDefaultConfig(config, env);

  return {
    ...storybookConfig,
    context: path.resolve(__dirname, '../src'),
    resolve: {
      alias: {
        'wix-style-react': path.resolve(__dirname, '../src')
      }
    },
    module: {
      rules: storybookConfig.module.rules
        .filter(rule => !'file.css'.match(rule.test))
        .concat({
          test: /\.md$/,
          use: [
            { loader: 'html-loader' },
            { loader: 'markdown-loader' }
          ]
        })
        .concat({
          test: /\.(png|jpg|gif|svg)$/,
          use: [ 'file-loader' ]
        })
        .concat({
          test: /\.s?css$/,
          include: [
            './',
            '../src',
            '../stories',
            '../node_modules/highlight.js',
            '../node_modules/github-markdown-css',
            '../node_modules/wix-animations',
            '../node_modules/bootstrap-sass'
            ].map(p => path.resolve(__dirname, p)),
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader/locals',
              options: {
                camelCase: true,
                localIdentName: '[hash:base64:5]',
                modules: true,
                importLoader: 1
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths: ['node_modules']
              }
            }
          ]
        })
    }
  };
};
