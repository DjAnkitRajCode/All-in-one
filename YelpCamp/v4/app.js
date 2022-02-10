var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    campground = require("./models/campground"),
    Comment    = require("./models/comment"),
    seedDB     = require("./seeds");

seedDB();

mongoose.connect("mongodb://localhost/yelp_camp_v3");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("landing");
});

//INDEX-show all campgrounds
app.get("/campgrounds",function(req,res){
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
app.post("/campgrounds",function(req,res){
    //get data from form and add to compounds array
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {name: name, image: image, description: description}
    //create a new campground and save to data base
    campground.create(newCampground ,function(err ,newlycreated){
        if(err){
            console.log(err);
        }
        else{
            //redirect back to campground page
            res.redirect("/campgrounds");
        }
    });
});

//NEW - Show form to create new campground
app.get("/campgrounds/new",function(req,res){
    res.render("campgrounds/new");
});

//SHOW - Show info about one particular campground which is clicked/selected
app.get("/campgrounds/:id",function(req,res){
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

//==========================================================================
//COMMENTS ROUTES
//==========================================================================

app.get("/campgrounds/:id/comments/new",function(req, res){
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

app.post("/campgrounds/:id/comments",function(req, res){
    //look campground using ID
    campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        }
        else{
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                }
                else{
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect('/campgrounds/' + campground._id);
                }
            });
        }
    });
    //create new comment
    //connect new comment to campground
    //redirect campground show page
});

app.listen(3000,function(){
    console.log("Yelpcamp server is started");
});