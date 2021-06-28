var express = require("express");

var app = express();

var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var food = ["pizza", "burger"];

app.get("/", function(req,res){
    res.render("home")
})

app.post("/addfood",function(req,res){
    var n = req.body.nFood;
    food.push(n);
    res.redirect("/food");
})

app.get("/food", function(req,res){

    res.render("food", {food:food});
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started")
})