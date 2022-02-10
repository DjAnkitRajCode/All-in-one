var express = require("express");
var app = express();
var request = require("request");
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("search");
});

app.get("/results",function(req,res){
    var movieName = req.query.movie;
    var url = "http://www.omdbapi.com/?s="+movieName+"&apikey=94c2415";
    request(url, function(error, response ,body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results",{data : data});
        }
    });
});

app.listen(3000,function(){
    console.log("server is running! Movie app is started!");
});