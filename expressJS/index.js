const http = require("http");
//npm install -g nodemon 
//npm install --save express
const express = require("express");
//create express application
const app = express();
// MIddleware
//Request--> Middleware(req,res,next) ==next()--> Middleware2> res.send()--> response
app.use((req, res, next) => {
  console.log("In the Middleware1");
 next(); // allows req to continue to next middleware in line
});
// This is second middleware 
app.use((req, res, next) => {
  console.log("In the Middleware 2");
  res.send("<h1>Hello from Express</h1>");
  //Response won't send any default response so we have to add a response
});
const server = http.createServer(app);
server.listen(3306);