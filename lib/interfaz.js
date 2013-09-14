
var express = require('express');
var app = express();
app.listen(8080);
app.get('/cerrar', function(req, res){
  process.exit();
});
app.use(express.static(__dirname +'/estatico'));