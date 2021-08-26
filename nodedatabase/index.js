var mysql = require('mysql');
const express = require('express');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: 'myweb419'
});

const app = express();

app.listen(3307, () =>{
    console.log('server started on 3306');
});

var sql = `insert into Product (title, description, price) VALUES("One indian girl","book by chetan bhagat",20);`;
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result[0]);
      console.log(result[1]);
      console.log("Result: " + result);
    });
  }); 