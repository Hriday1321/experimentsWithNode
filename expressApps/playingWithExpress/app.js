var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("Hi there, welcome to my exercises!");
})

app.get("/speak/pig", function(req,res){
    res.send("The pig says oink!");
})

app.get("/speak/cow", function(req,res){
    res.send("The cow says moo!");
})

app.get("/repeat/:word/:num", function(req, res) {
    var word = req.params.word;
    var num = req.params.num;
    var string = "";
    for(var i=0; i<num; i++){
        string += word + " "
    }
    res.send(string);
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started");
});