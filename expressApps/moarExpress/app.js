var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.render("home.ejs")
})

app.get("/favFood/:food", function(req,res){
    var foodItem = req.params.food;
    res.render("favorite.ejs", {food: foodItem});
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started");
})