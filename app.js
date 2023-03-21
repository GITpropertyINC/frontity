var frontity = require("./build/server").default;
var http = require("http");
var server = http.createServer(frontity);
server.listen(4000, "104.22.31.189");