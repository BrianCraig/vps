/*
Cada uno de los archivos cargados acá, son independientes el uno con el otro.
Se pueden modificar
*/

var dns = require('./lib/dns.js'); // servicio DNS ( dnsd )
var app = require('./lib/app.js'); // Nucleo de la App ( http-proxy + socket.io )
var interfaz = require('./lib/interfaz.js'); // Servidor web en el puerto 8080 ( express.js )