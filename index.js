const {
  initFolders,
  initFiles,
  initWatchers
} = require('./init');


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
    initWatchers(this.options);
  }
}

module.exports = ViteDocCreator;