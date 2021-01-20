const server = require("./server");
require("./database");
server.start({ port: 8000 });
