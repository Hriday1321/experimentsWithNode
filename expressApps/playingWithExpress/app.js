var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("Hi there, welcome to my exercises!");
})

app.get("/speak/:animal", function(req,res){
    var sounds = {
        pig: "Oink!",
        cow: "Moo!",
        dog: "Woof!"
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says " + sound);
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

app.get("/*", function(req, res) {
    res.send("Sorry, page not found... get a life")
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started");
});