var configuracion = require('../configuracion.js');

var express = require('express');
var app = express();
app.listen(configuracion.puertoInterfaz);
app.get('/cerrar', function(req, res){
  process.exit();
});
app.use(express.static(__dirname +'/estatico'));