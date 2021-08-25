const http = require("http");
//npm install --save express
const express = require("express");
//create express application
const app = express();
// MIddleware
app.use("/", (req, res, next) => {
  console.log("welcome page");
  next();
});
app.use("/viewitems", (req, res, next) => {
  console.log("In the Middleware add product");
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
  //Response won't send any default response so we have to add a response
});
app.get("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});
const server = http.createServer(app);
server.listen(5000);