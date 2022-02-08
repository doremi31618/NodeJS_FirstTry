const express = require('express');
var app = express();

app.get('/', (req, res)=>{
    res.send("Hello world");
});

app.get('/app', (req, res)=>{
    res.send("enter app");
});

var server = app.listen(8000, ()=>{
    const host = server.address().address;
    const port = server.address().port;
    console.log("server listening http://" + host+":"+port );
});