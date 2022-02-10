var express = require("express");
var app =  express();

// "/" => "hi there!"
app.get("/",function(req,res){
    res.send("Hi there!");
});
app.get("/hey_google_who_is_puja.com",function(req,res){
    res.send("Puja Kaun wo pagal Bps wali :)");
});
// "/bye" => "Good Bye!"
app.get("/bye",function(req,res){
    res.send("Good Bye!");
});
// "/dog" => "Meow!"
app.get("/dog",function(req,res){
    console.log("some call /dog");
    res.send("Meow!");
});

app.get("/r/:subredditName",function(req,res){
    var subreddit = req.params.subredditName;
    res.send("welcome to the " + subreddit.toUpperCase() + " Subreditt");
});

app.get("/r/:subredditName/comments/:id/:title/",function(req,res){
    var subreddit = req.params.subredditName;
    res.send("welcome to the" + subreddit.toUpperCase() + "Subreditt");
});

//If user ask for pagr which is not define
app.get("*",function(req,res){
    res.send("You are a star");
});



//Tell Express to listen for requests(start server)
app.listen(3000,function(){
    console.log("server has started!!");
});