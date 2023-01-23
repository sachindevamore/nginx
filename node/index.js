var express = require('express');  
var app = express();  
var port = process.argv[2] || 8000   //default port 8000
var servername = process.argv[3] || "S1"

app.get('/api', function (req, res) {  
   res.send(`API Response ${servername}`);  
})  

app.use('/static', express.static('./public'));

var server = app.listen(Number(port), function () {  
var host = server.address().address  
  var port = server.address().port  
 console.log("Example app listening at http://%s:%s", host, port)  
})  