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

app.get("/r/:subreddit", function(req,res){
    res.send(req.params.subreddit);
})

app.get("*", function(req,res){
    res.send("You stoopid");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started")
})
