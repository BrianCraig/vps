var dns = require('./lib/dns.js');
var io = require('./lib/io.js');
var app = require('./lib/app.js');
app.io(io); // enviar el modulo io
io.app(app);// enviar el modulo app
//var proxy = require('./lib/proxy.js');

var interfaz = require('./lib/interfaz.js');