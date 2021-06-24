var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.render("home.ejs")
})

app.get("/favFood/:food", function(req,res){
    var foodItem = req.params.food;
    res.render("favorite.ejs", {food: foodItem});
})

app.get("/comments/hate", function(req,res){
    var comments = [
        {content:"hate you", author:"hater1"},
        {content:"bad person", author:"hater23"},
        {content:"boring person", author:"hate4life"},
    ];
    res.render("hateComments.ejs", {comments: comments});
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started");
})