/*
Modulo para activar un servidor DNS en el puerto 53.
A todas las preguntas, responde con una respuesta del tipo A, asociada a la IP con que esta PC entra a Internet
Utiliza el modulo dnsd@0.9.4 y es totalmente independiente del funcionamiento del resto de la App
*/

exports.ip = '186.23.145.50';
var miIp = require('./dns.ip.js');

miIp();
setInterval(miIp, 5 * 1000 * 60); // obtener nueva IP cada 5 min

var dnsd = require('dnsd');
dnsd.createServer(function (req, res) {
    res.end(exports.ip);
}).listen(53);