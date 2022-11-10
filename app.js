const http = require("http");
const routes = require("./routes");
//const path = require("path");

const server = http.createServer(routes);

server.listen(3000);
