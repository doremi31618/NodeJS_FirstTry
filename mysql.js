const mysql = require('mysql');
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'admin',
  password : 'root123',
  database : 'test'  
});
connection.connect((err)=>{
    if (err) throw err;
    else console.log("connect success");
});
