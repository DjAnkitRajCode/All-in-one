var express = require("express");
var router = express.Router({mergeParams: true});
var campground = require("../models/campground");
var comment = require("../models/comment");

//comments new
router.get("/new", isLoggedIn, function(req, res){
    //find campground by id 
    campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        }
        else{
            res.render("comments/new",{campground: campground});
        }
    });
});
//Comments Create
router.post("/", isLoggedIn, function(req, res){
    //look campground using ID
    campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        }
        else{
            //create new comment
            comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                }
                else{
                    //connect new comment to campground
                    campground.comments.push(comment);
                    campground.save();
                    //redirect campground show page
                    res.redirect('/campgrounds/' + campground._id);
                }
            });
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