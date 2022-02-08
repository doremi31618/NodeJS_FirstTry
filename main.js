//阻塞式代碼 : 讀取完後才執行程序
var fs = require("fs");
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("program finish");

//非阻塞式代碼 : 不須等待文件讀取完
var data_2 = fs.readFile('input.txt',
    (err, data)=>{
        if (err) return console.error(err);
        console.log(data.toString());
    }
)

console.log("program2 finished");