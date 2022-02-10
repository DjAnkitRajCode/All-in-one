var express = require("express");
var router = express.Router();
var campground = require("../models/campground");

//INDEX-show all campgrounds
router .get("/",function(req,res){
    //get all campground from DB
    campground.find({},function(err, allcampgrounds){
        if(err){
            console.log(err);
        }
        else{
            res.render("campgrounds/index",{campgrounds:allcampgrounds});
        }
    });
});


//CREATE - add new campground to DB
router .post("/", isLoggedIn, function(req,res){
    //get data from form and add to compounds array
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    var newCampground = {name: name, image: image, description: description, author:author}
    //create a new campground and save to data base
    campground.create(newCampground ,function(err ,newlycreated){
        if(err){
            console.log(err);
        }
        else{
            //redirect back to campground page
            // console.log(newlycreated);
            res.redirect("/campgrounds");
        }
    });
});

//NEW - Show form to create new campground
router .get("/new", isLoggedIn, function(req,res){
    res.render("campgrounds/new");
});

//SHOW - Show info about one particular campground which is clicked/selected
router .get("/:id",function(req,res){
    //find the campground with provided ID
    campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        }
        else{
            console.log(foundCampground);
            //render show template with that campground
            res.render("campgrounds/show",{campground:foundCampground});
        }
    });
});
//Define Middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}
module.exports = router;