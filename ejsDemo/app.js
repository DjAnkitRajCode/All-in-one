var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("home");
});

app.get("/dog/:food",function(req,res){
    var food = req.params.food;
    res.render("dog",{varFood : food});
});

app.get("/author",function(req,res){
    var book = [
        {title : "Concept of Mathsmatics", author : "R.D.Sharma"},
        {title : "Mathsmatics for JEE", author : "Amit M. Aggrawal"},
        {title : "Mathematical Concept", author : "R.S.Aggrawal"},
    ];
    res.render("author",{author : book});
});

app.listen(3000,function(){
    console.log("server is running!");
});