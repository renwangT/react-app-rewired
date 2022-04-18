const { 
  override, 
  addLessLoader, 
  addWebpackAlias, 
  fixBabelImports,
  adjustStyleLoaders,
  addWebpackPlugin
} = require("customize-cra");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin")

const path = require("path");
module.exports = override(
  addWebpackAlias({
    "@": path.resolve(__dirname, 'src')
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { "@primary-color": "#FF6699" }
    }
  }),
  fixBabelImports("import",{
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  // 解决less配置问题
  adjustStyleLoaders(({use: [, , postcss]}) => {
    const postcssOptions = postcss.options;
    postcss.options = {postcssOptions}
  }),

  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  addWebpackPlugin(new ProgressBarPlugin()),
  process.env.ANALYZER && addWebpackPlugin(new BundleAnalyzerPlugin()),
  process.env.NODE_ENV === 'production' && 
  addWebpackPlugin(
    UglifyJsPlugin({
      // 打包缓存
      cache: true,
      // 多线程打包
      paraller: true,
      uglifyOptions: {
        // 删除警告
        warnings: true,
        compress: {
          dorp_config: true,
          dorp_debugger: true
        }
      }
    })
  ),
  (config) => {
    config.resolve.plugins = config.resolve.plugins.filter((plugin) => !(plugin instanceof ModuleScopePlugin)) // 解决无法引用src意外的资源
    return config;
  }
)
