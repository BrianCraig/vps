var configuracion = require('./configuracion.js'); // cargar objeto de la configuracion
/*
Cada uno de los archivos cargados acá, son independientes el uno con el otro.
Se pueden modificar
*/

if(configuracion.dnsActivado) require('./lib/dns.js'); // servicio DNS opcional( dnsd )
require('./lib/app.js'); // Nucleo de la App ( http-proxy + socket.io )
require('./lib/interfaz.js'); // Servidor web en el puerto 8080 ( express.js )