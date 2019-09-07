var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  console.log('Server listening on: http://localhost:8080');
  var parsedUrl = url.parse(request.url);
  //just return the data
  if(parsedUrl.path == '/listings'){
    response.write(JSON.stringify(listingData));
    response.end();
  }
  else{
    response.writeHead(404);
    response.end("Bad gateway error");
  }
};

fs.readFile('listings.json', 'utf8', function(err, data) {
    
    listingData = JSON.parse(data);
    server = http.createServer(requestHandler);
    server.listen(port); 
});


