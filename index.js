const {
  initFolders,
  initFiles,
  initWatchers
} = require('./init');

const {
  outerPath:{
    mdPath
  }
} = require('./config');

const { mdToHtml } = require('./compiler');

class ViteDocCreator {
  constructor(options){
    this.options = {
      title:undefined,
      port:0,
      domain:undefined
    }

    if(options){
      Object.assign(this.options,options);
    }
    this.initialize()
  }

  initialize(){
    initFolders(this.options);
    initFiles(this.options);
    // initWatchers(this.options);
    mdToHtml('/README.md');
  }
}

module.exports = ViteDocCreator;