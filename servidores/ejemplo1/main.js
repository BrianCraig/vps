var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hola mundo ! Servidor corriendo en el puerto '+process.env.PORT);
}).listen(process.env.PORT || 8082, '127.0.0.1'); // linea importantisima

console.log('Servidor corriendo en el puerto '+process.env.PORT);