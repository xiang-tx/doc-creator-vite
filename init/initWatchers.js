const {
  watch, existsSync,unlinkSync
} = require('fs');

const {
  outerPath:{
    htmlPath,
    mdPath
  }
} = require('../config');

const {
  createIndexHtml, mdToHtml
} = require('../compiler');

function initWatchers(options){
  watchHtml(options);
  watchMarkdown();
}

function watchHtml(options){
  watch(htmlPath, function(event,filename) {
    if(filename){
      createIndexHtml(options,event === 'change' && filename);
    }
  })
}

function watchMarkdown(){
  watch(mdPath,function(event,filename){
    if(filename){
      if(!existsSync(mdPath + '/' + filename)){
        const removingFile = htmlPath + '/' + filename.replace('.md','.html');
        existsSync(removingFile) && unlinkSync(removingFile);
        return ;
      }
      
    }
    mdToHtml(filename);
  })
}


module.exports = initWatchers;