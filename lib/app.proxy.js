/*
Modulo que se encarga de el Proxy que encapsula y redirije los paquetes dependiendo del HOST del HEADER de cada paquete
Utiliza el modulo http-proxy@0.10.3
*/

var httpProxy = require('http-proxy');
var options = {
    hostnameOnly: true,
    router: {}
}
var proxyServer = httpProxy.createServer(options);
proxyServer.listen(80);

var proxy = {}
proxy.agregar = function (dominio, puerto) {
    proxyServer.proxy.proxyTable.router[dominio] = '127.0.0.1:' + puerto;
}
proxy.quitar = function (dominio) {
    delete proxyServer.proxy.proxyTable.router[dominio];
}


module.exports = proxy;