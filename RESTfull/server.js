var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type':'application/json'}); //write a response to the client
  var myObj = {
      name: 'mostafa'
  }
  res.end(JSON.stringify(myObj)); //end the response
}).listen(8000); //the server object listens on port 8080