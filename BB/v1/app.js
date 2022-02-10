var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    passport        = require("passport"),
    multer          = require("multer"),
    path            = require("path"),
    localStrategy   = require("passport-local"),
    methodeOverride = require("method-override"),
    User            = require("./models/user"),
    Post            = require("./models/post"),
    moment          = require('moment');



mongoose.connect("mongodb://localhost/BB",{ useNewUrlParser: true,useUnifiedTopology: true });
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodeOverride("_method"));
app.set("view engine","ejs");

//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret : "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized : false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
});

var Storage = multer.diskStorage({
    destination:"./public/uploads/",
    filename:(req,file,cb)=>{
        cb(null,file.filename+"_"+Date.now()+path.extname(file.originalname));
    }
});

var upload = multer({
    storage:Storage
}).single('file');

//landing
app.get("/",function(req,res){
    res.render("landing");
});

//Index-show all member
app.get("/home",function(req,res){
    //get all members form DB
    User.find({},function(err, allmembers){
        if(err){
            console.log(err);
        }else{
            res.render("home",{members: allmembers,moment:moment});
        }
    });
});
//SHOW - Show info about one particular member
app.get("/home/:id",function(req,res){
    //find the member with provided ID
    User.findById(req.params.id,function(err, foundmember){
        if(err){
            console.log(err);
        }else{
            //render show template with that member
            res.render("profile",{member:foundmember,moment:moment});
        }
    });
});
//edit
app.get("/home/:id/edit", function(req,res){
    User.findById(req.params.id, function(err, foundmember){
        if(err){
            console.log(err);
        }else{
            res.render("edit",{member:foundmember});
        }
    });
});
//UPDATE
app.put("/home/:id", function(req, res){
    //find and update the correct campground
    User.findByIdAndUpdate(req.params.id ,function(err, updateCampground){
        if(err){
            res.redirect("/home");
        }
        else{
            res.redirect("/home/:id");
        }
    });
});
//POSTS
app.get("/home/:id/posts",function(req,res){
    User.find({},function(err, allmembers){
        if(err){
            console.log(err);
        }else{
            res.render("post",{members: allmembers,posts:allmembers});
        }
    });
});
//delete route
app.delete("/delete/:id",function(req,res){
    User.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log(err);
        }
        else{
            res.redirect("/home/server/allmembers");
        }
    });
});
//to see all member at one place
app.get("/home/server/allmembers",function(req,res){
    User.find({},function(err, allmembers){
        if(err){
            console.log(err);
        }else{
            res.render("show",{members: allmembers,moment:moment});
        }
    });
});
//KIIT SAP LINK
app.get("/sap",function(req,res){
    res.render("kiitlogin");
});
app.get("/about",function(req,res){
    res.render("about");
});
app.get("/bakchodi",function(req,res){
    res.render("bakchodi");
});
//=================
//AUTH ROUTES
//================
app.get("/register",function(req, res){
    res.render("register");
});
//handle sign up logic
app.post("/register",upload,function(req, res){
    var newUser = new User({
        username: req.body.username,
        nickname: req.body.nickname,
        email: req.body.email,
        kiitmail: req.body.kiitmail,
        phoneno: req.body.phoneno,
        whatsapp: req.body.whatsapp,
        dob: req.body.dob,
        image:  req.file.filename,
    });
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("home");
        });
    });
});



//SHOW LOGIN FORM
app.get("/login", function(req, res){
    res.render("login");
});
//handling login logic
app.post("/login", passport.authenticate("local",{
    successRedirect: "/home",
    failureRedirect: "/login"
    }), function(req, res){
});

//LOGOUT ROUTE
app.get("/logout",function(req, res){
    req.logout();
    res.redirect("/home");
});

app.listen(3000,function(){
    console.log("BB Server is Started!");
});