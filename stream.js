const mode = 5;
const fs = require("fs");

//reading stream........................
if (mode == 1){
    
    console.log("mode 1");
    var data = "";

    var readStream = fs.createReadStream('input.txt');

    readStream.on('data', (chunk)=>{
        data += chunk;
        console.log("chunk" + chunk);
        console.log("data" + data);
    });

    readStream.on("end", ()=>{
        console.log(data);
    });

    readStream.on("error", (err)=>{
        console.log(err.stack);
    });

    console.log("program finished");
}



//writing stream 
else if (mode == 2){
    console.log("mode 2");
    var writing_data = "菜鸟教程官网地址：www.runoob.com";
    var writeStream = fs.createWriteStream('outpu.txt');

    writeStream.write(data,'UTF8');
    writeStream.end();
    writeStream.on('finish', ()=>{
        console.log("finish writing");
    });

    writeStream.on('error', (err)=>{
    console.log(err.stack);
    });

    console.log("finish program");
}


//管道流 : 在輸入流的同時進行輸出流
else if (mode == 3){
    console.log("mode 3");
    var readStream_pipe = fs.createReadStream("input.txt");
    var writeStream_pipe = fs.createWriteStream("output.txt");

    readStream_pipe.pipe(writeStream_pipe);
    console.log("finish program");
}


//鍊式流 compress to gz
else if (mode==4){
    const zlib = require('zlib');
    fs.createReadStream('input.txt')
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream('input.txt.gz'));
    console.log("document compress finish");
}


//鍊式流 decompress to txt
else if (mode==5){
    const zlib = require('zlib');
    fs.createReadStream('input.txt.gz')
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream('input2.txt'));
    console.log("document decompress finish");
}