var mongoose   = require("mongoose");
var Campground = require("./models/campground");
var comment    = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
        description: "best palce to visit!"
    },
    {
        name: "Desert mesa",
        image: "https://images.unsplash.com/photo-1537565266759-34bbc16be345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
        description: "best palce to visit!"
    },
    {
        name: "Caninoin floor",
        image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
        description: "best palce to visit!"
    }
]

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
    });
    //add a few campgrounds
    data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
            if(err){
                console.log(err);
            }
                console.log("add a campground");
                //create a comment
                comment.create(
                    {
                        text: "this palce is aswm",
                        author: "Ravi Ranjan",
                    },function(err, comment){
                    if(err){
                        console.log(err);
                    }
                    else{
                        campground.comments.push(comment);
                        campground.save();
                        console.log("created a campground");
                    }
                });
        });
    });
}

module.exports = seedDB;