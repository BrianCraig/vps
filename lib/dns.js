var dnsd = require('dnsd');
dnsd.createServer(function(req, res) {
  res.end('186.23.145.50');
}).listen(53);