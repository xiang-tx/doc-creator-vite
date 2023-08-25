const { readdirSync,copyFileSync } = require('fs');

const {
  outerPath:{
    cssPath,
    jsPath,
    htmlPath
  },
  innerDir:{
    cssDir,
    jsDir,
    htmlDir
  }
} = require('../config')
const { createIndexHtml } = require('../compiler');

function initFiles(options){
  copyFiles('css');
  copyFiles('js');  
  copyWelcomePage();
  createIndexHtml(options);
}

function copyFiles(field){
  let _innerFiles = [];
  let _outerFiles = [];
  let _dir = '';
  let _path = '';
  
  switch (field) {
    case 'css':
      _dir = cssDir;
      _path = cssPath;
      _innerFiles = readdirSync(cssDir);
      _outerFiles = readdirSync(cssPath)
      break;
    case 'js':
      _dir = jsDir;
      _path = jsPath;
      _innerFiles = readdirSync(jsDir);
      _outerFiles = readdirSync(jsPath)
      break;
    default:
      break;  
  }

  _innerFiles.map(function(innerFile) {
    if(_outerFiles.indexOf(innerFile) === -1){
      copyFileSync(_dir+'/'+innerFile, _path + '/' + innerFile,0 , function(err){
        if(err){
          throw new Error('File is failed to copy',err)
        }
      })
    } 
  })

  
}

//拷贝欢迎页面
function copyWelcomePage() {
  const _htmlFiles = readdirSync(htmlPath);

  //只有在外层html文件夹中没有任何文件的前提下拷贝welcome.html
  if(!_htmlFiles.length){
    copyFileSync(htmlDir + '/welcome.html',htmlPath + '/welcome.html',0,function(err){
      if(err){
        throw new Error('File is failed to copy.',err);
      }
    })
  }

}

module.exports = initFiles;