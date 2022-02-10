var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("Hi there, welcome to my assigment");
});

app.get("/speak/:animal",function(req,res){
    var sounds = {
        pig : "oink",
        cow : "mao",
        dog : "woof woof",
        cat : "meao",
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says " + sound);
});

app.get("/repeat/:str/:num",function(req,res){
    var str = req.params.str;
    var num = Number(req.params.num);
    var result = "";
    for(var i=0; i<num; i++){
        result +=str +" ";
    }
    res.send(result);
});

app.get("*",function(req,res){
    res.send("Sorry,page not Found...what are you doing with your?")
}); 

app.listen(3000,function(){
    console.log("Sever is started!!");
});