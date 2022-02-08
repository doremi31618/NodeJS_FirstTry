var http = require("http");
var express = require('express');
http.createServer((request, response)=>{
    response.writeHead(200, {'content-Type':'text/plan'});
    response.end('Hello world');
}).listen(3000);