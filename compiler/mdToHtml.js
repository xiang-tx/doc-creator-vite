const { writeFileSync } = require('fs');

const markdown = require('marked');
const highlight = require('highlight.js');

const { readFile } = require('../libs/utils');
const {
  regexp:{
    reg_mdStr
  },
  outerPath:{
    mdPath,
    htmlPath
  },
  innerDir:{
    htmlDir
  }
} = require('../config');
const { replaceHtml } = require('../libs/utils');

markdown.setOptions({
  highlight: function(code) {
    return highlight.highlightAuto(code).value;
  }
})


function mdToHtml(filename){
  const _mdStr = readFile(mdPath + '/' + filename);
  let _htmlStr = readFile(htmlDir + '/md.html');
  const newHtmlStr = markdown(_mdStr);

  _htmlStr = replaceHtml(reg_mdStr,_htmlStr,newHtmlStr);

  writeFileSync(htmlPath + '/'+ filename.replace('.md','.html'),_htmlStr,function(err){
    if(err){
      throw new Error('File is failed to write',err);
    }
  })
}

module.exports = mdToHtml