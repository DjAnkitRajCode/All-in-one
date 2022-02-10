var express = require("express");
var app = express();
var BodyParser = require("body-parser");

app.use(BodyParser.urlencoded({extended : true}));
app.set("view engine","ejs");

var friends = ["Ankit","Shubham","Aayush","Suraj","Vickey"];

app.get("/",function(req,res){
    res.render("home");
});

app.post("/addfriend",function(req,res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends",function(req,res){
    res.render("friends",{friends : friends});
});

app.listen(3000,function(){
    console.log("Server is started,App is now ready to run");
});