const { mkdirSync, existsSync } = require('fs');

const {
  outerPath:{
    srcPath,
    cssPath,
    jsPath,
    htmlPath,
    mdPath
  }
} = require('../config');

function initFolders(){
  if(!existsSync(srcPath)){
    createFolders(srcPath);
  }

  if(!existsSync(htmlPath)){
    createFolders(htmlPath);
  }

  if(!existsSync(cssPath)){
    createFolders(cssPath);
  }

  if(!existsSync(jsPath)){
    createFolders(jsPath);
  }
  if(!existsSync(mdPath)){
    createFolders(mdPath);
  }
}

function createFolders(path){
  //同步创建文件夹
  /**
   * param path 文件夹路径
   * param callback 创建失败，错误信息抛出
   */
  mkdirSync(path,function(err){
    if(err){
      throw new Error('Folder is failed to creat.',err);
    }
  })
}

module.exports = initFolders;