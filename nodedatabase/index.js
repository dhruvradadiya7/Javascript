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

var sql = `CREATE TABLE Product (
  Productnid int NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  description varchar(255),
  price int,
  PRIMARY KEY (Productnid)
);`;
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