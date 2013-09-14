var ip = '186.23.145.50';
var http=require('http');

function obtenerIP(){
http.get("http://wtfismyip.com/json", function(res) {
	res.on("data", function(chunk) {
    try{
	var a = JSON.parse(chunk);
	ip = a["YourFuckingIPAddress"];
	console.log('IP actualizada: '+ ip);
	}catch(e){};
  });
}).on('error', function() {});
}

obtenerIP();
setInterval(obtenerIP,5*1000*60);

var dnsd = require('dnsd');
dnsd.createServer(function(req, res) {
  res.end(ip);
}).listen(53);