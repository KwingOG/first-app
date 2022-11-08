const http = require("http");
//const https = require("https");
//const fs = require("fs");
//const path = require("path");

let rqListener = (req, res) => {
 console.log(req);
}

const server = http.createServer(rqListener);

server.listen(3000);
