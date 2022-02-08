const router = require("./route");
const server = require("./server.js");
server.start(router.route);