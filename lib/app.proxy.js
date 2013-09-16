var httpProxy = require('http-proxy');
var options = {
  hostnameOnly: true,
  router: {}
}
var proxyServer = httpProxy.createServer(options);
proxyServer.listen(80);

var proxy = {}
proxy.agregar=function(dominio,puerto){
proxyServer.proxy.proxyTable.router[dominio]='127.0.0.1:'+puerto;
}
proxy.quitar=function(dominio){
delete proxyServer.proxy.proxyTable.router[dominio];
}




module.exports = proxy;