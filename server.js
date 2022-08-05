// create express webserver 
var express = require("express");
var bodyParser = require("body-parser");
// var router = express.Router();
var app = express();

// Here we are configuring express to use body-parser as middle-ware
app.get('/',function(req,res){
  res.sendfile("index.html");
});

app.post('/login',function(req,res){
    var user_name=req.body.user;
    var password=req.body.password;
});

app.listen(3000,function(){
    console.log("started on PORT 3000")
})

