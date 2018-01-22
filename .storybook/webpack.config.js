// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
var path = require('path');
var sourcePath = path.join(__dirname, '../src');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  // Extend it as you need.

  // For example, add typescript loader:
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: 'awesome-typescript-loader?module=es6'
  });

  config.resolve.extensions.push('.ts', '.tsx');

  config.resolve.alias = {
    '@': sourcePath,
  };

  return config;
};
