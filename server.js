
// var http = require("http");
// var express = require('express');
// http.createServer((request, response)=>{
//     response.writeHead(200, {'content-Type':'text/plan'});
//     response.end('Hello world');
// }).listen(3000);

var http = require('http');
var url = require('url');

function start(){
    function onRequest(request, response){
        var pathname = url.parse(request.url);
        console.log("Request for " + pathname + " recieve");
        response.writeHead(200, {
            "content-Type" : "text/plan"
        });
        response.write("enter server");
        response.end();
    }
    
    http.createServer(onRequest).listen(3000);
    console.log("Server has started");
}
exports.start = start;