const { resolve } = require('path');

//默认端口号
const port = process.env.npm_config_port;
//默认域名
const domain = 'http://localhost';
//默认标题
const title = 'This is my firet Document by Vite-Doc-Creator';

/**
 * 项目目录体系
 * src ->
 *    css ->
 *    js  ->
 *    html -> md -> html
 * workspace -> 编辑markdown
 * index.html
 */ 
const outerPath = {
  rootPath:resolve(__dirname,'../../../'),
  srcPath:resolve(__dirname,'../../../src/'),
  cssPath:resolve(__dirname,'../../../src/css/'),
  jsPath:resolve(__dirname,'../../../src/js/'),
  htmlPath:resolve(__dirname,'../../../src/html'),
  mdPath:resolve(__dirname,'../../../workspace')
};

/**插件目录体系
 * temp_files ->
 *    css ->
 *    js ->
 *    html -> index.html/md.html/welcome.html
 */
const innerDir = {
  rootDir: resolve(__dirname, '../temp_files/'),
  htmlDir: resolve(__dirname, '../temp_files/html'),
  cssDir: resolve(__dirname, '../temp_files/css/'),
  jsDir: resolve(__dirname, '../temp_files/js/')
}

module.exports = {
  port,
  domain,
  title,
  outerPath,
  innerDir,
  // regexp
}