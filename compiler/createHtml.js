const { readdirSync,copyFileSync,writeFileSync } = require('fs');

const {
  outerPath:{
    rootPath,
    htmlPath
  },
  innerDir:{
    htmlDir
  },
  regexp:{
    reg_ulContent,
    reg_titleContent,
    reg_headerTitleContent,
    reg_iframeContent
  }
} = require('../config');
const {
  readFile,
  createMenuItem,
  replaceHtml,
  createIframe
} = require('../libs/utils');

//创建index.html
function createIndexHtml(options){
  const _htmlFiles = readdirSync(htmlPath);

  if(!_htmlFiles.length){
    copyFileSync(htmlDir + '/index.html',rootPath + '/index.html',0 , function(err){
      if(err){
        throw new Error('File is failed to copy.',err);
      }
    });
    return;
  }

  const _indexHtmlStr = readFile(htmlDir + '/index.html');

  let menuList = '';
  let newHtml = '';

  _htmlFiles.map(function(fileName,index){
    menuList += createMenuItem(fileName, options.domain, options.port, !index ? true : false);
  })

  newHtml = replaceHtml(reg_ulContent, _indexHtmlStr,menuList);
  newHtml = replaceHtml(reg_titleContent, newHtml,options.title || title);
  newHtml = replaceHtml(reg_headerTitleContent, newHtml,options.title || title);
  newHtml = replaceHtml(reg_iframeContent,newHtml, createIframe(_htmlFiles[0],options.domain,options.port));
  writeFileSync(rootPath + '/index.html',newHtml);
   console.log(_htmlFiles[0]);

}



module.exports = {
  createIndexHtml
}