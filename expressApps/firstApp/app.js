var express = require("express");

var app = express();

app.get("/", function(req,res){
    res.send("Hello There!");
})

app.get("/colors", function(req,res){
    res.send("Red, Yellow, Blue");
})

app.get("/dog", function(req,res){
    res.send("Hello There Woof!");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started")
})