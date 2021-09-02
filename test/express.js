var express = require('express')
var app = express()

var Log = function (req, res, next) {
  console.log("verifcation")
}

app.use(Log)

app.get('/', function (req, res) {
  res.send("Welcome user")
})

app.listen(3000)
3,
function shop() {
    console.log("Load products");
}

app.get("/user",
  (req, res, next) => {
    if (shop()) {
      res.send("in the shop");
    } else {
      next();
    }
  },
   (req, res, next) => {
    res.send("in the user section");
  }
);