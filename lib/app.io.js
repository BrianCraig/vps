var app = require('./app.js');
var io = require('socket.io').listen(8081,{'log level':2});

io.sockets.on('connection', function (socket) {

  socket.emit('apps', app.Apps);
  
  socket.on('nuevaApp', function (data) {
	exports.emitir('nuevaApp',app.nuevaApp(data));
  });
  
  socket.on('iniciar', function (data) {
	app.iniciarApp(data);
  });
  
  socket.on('terminar', function (data) {
	app.terminarApp(data);
  });
  
  socket.on('quitarApp', function (data) {
	app.quitarApp(data);
  });

});
exports.emitir = function(a,b){
var lista = io.sockets.sockets;
	for(x in lista){
		lista[x].volatile.emit(a,b);
	}
}


