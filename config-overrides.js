// config-overrides.js
const { override, addLessLoader, addBabelPlugins } = require('customize-cra');

module.exports = override(
  // 添加Less加载器
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' }, // 自定义Ant Design主题色
  }),
  addBabelPlugins(
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ),
);
