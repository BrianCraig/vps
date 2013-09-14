var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Segundo ejemplo de servidor, localizado en ./servidores/ejemplo2/ ! Servidor corriendo en el puerto '+process.env.PORT);
}).listen(process.env.PORT || 80, '127.0.0.1'); // linea importantisima

console.log('Servidor corriendo en el puerto '+process.env.PORT);