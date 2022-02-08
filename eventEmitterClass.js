const EventEmitter = require("events").EventEmitter;
var event = new EventEmitter();
event.on('some_event', ()=>{
    console.log('doing some_event respond');
});

//在1秒後發送事件
setTimeout(()=>{
    event.emit('some_event');
}, 1000);