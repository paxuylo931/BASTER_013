var http = require("http");

http.createServer(function (request, response) {
	response.write("Privet mir verstalwchikiv");
	response.end();
}).listen(80);
