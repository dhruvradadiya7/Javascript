var mysql = require('mysql');
const express = require('express');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: 'myweb419'
});

const app = express();

app.listen(3306, () =>{
    console.log('server started on 3306');
});

var sql = `show tables`;
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
    });
  }); 