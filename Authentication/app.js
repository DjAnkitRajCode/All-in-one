var express               = require("express"),
    mongoose              = require("mongoose");
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    User                  = require("./models/user");
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect('mongodb+srv://test:1234@cluster0.y9j83.mongodb.net/test');

var app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(require("express-session")({
    secret: "Rusty is the best dog and cat",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//=================
//ROUTES
//=================
//Index
app.get("/",function(req,res){
    res.render("home");
});

app.get("/secret",isLoggedIn,function(req,res){
    res.render("secret");
}); 

//Auth Routes
//show sign up form 
app.get("/register",function(req,res){
    res.render("register");
});
//handling user sign up
app.post("/register",function(req,res){
    req.body.username
    req.body.password
    User.register(new User({username: req.body.username}), req.body.password, function(err ,user){
        if(err){
            console.log(err);
            return res.render('register');
        }
        passport.authenticate("local")(req,res,function(){
            res.redirect("/secret");
        });
    });
});

//LOGIN ROUTES
//RENDER LOGIN FORM
app.get("/login",function(req,res){
    res.render("login");
});
//login logic
//middleware
app.post("/login", passport.authenticate("local" , {
    successRedirect: "/secret",
    failureRedirect: "/login"
}),function(req,res){
});

app.get("/logout",function(req,res){
    req.logout();
    res.redirect("/");
});

//own middle ware : very very important concept
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login")
}

app.listen(3000,function(){
    console.log("Authentication Sever Starts!");
});