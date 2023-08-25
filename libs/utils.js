const {
  readFileSync
} = require('fs');

const {
  domain,
  port
} = require('../config');

function readFile(path){
  return readFileSync(path,'utf8')
}

//创建菜单项（模板）
function createMenuItem (filename, userDomain, userPort, isActive) {
  return `
    <li class="menu-item${ isActive ? ' active' : '' }">
      <a href="${_formatBaseUrl(userDomain, userPort)}/src/html/${filename}" target="myIframe">${filename.replace('.html', '')}</a>
    </li>
  `;
}

//创建iframe
function createIframe (filename, userDomain, userPort) {
  return `
    <iframe src="${_formatBaseUrl(userDomain, userPort)}/src/html/${filename}" name="myIframe"> </iframe>
  `
}

function _formatBaseUrl(userDomain, userPort){

  userPort = Number(userPort);

  console.log( process.env.port || process.env.npm_config_port);
  if(userDomain && userPort){
    return `${userDomain}:${userPort}`
  }else if(userDomain && !userPort){
    return `${userDomain}`;
  }else if(!userDomain && userPort){
    return `${domain}:${userPort}`;
  }else{
    return `${domain}:${port}`;
  }
}

function replaceHtml(regexp,html,content){
  return html.replace(html.match(regexp)[1],content);
}

module.exports = {
  readFile,
  createMenuItem,
  replaceHtml,
  createIframe
}
