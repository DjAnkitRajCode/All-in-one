var bodyParser   = require("body-parser"),
methodeOverride  = require("method-override"),
expressSanitizer = require("express-sanitizer"),
mongoose         = require("mongoose"),
express          = require("express"),
Story            = require("./models/story"),
app              = express();
const PORT = process.env.PORT || 5000;

//APP CONFIG
mongoose.connect("mongodb+srv://test:test123@cluster0.y9j83.mongodb.net/test",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(express.static("partials"));
app.set("view engine","ejs");
app.use(expressSanitizer());
app.use(methodeOverride("_method"));

//Landing Route
app.get("/",(req,res)=>{
    res.render("index");
});

//HOME ROUTE
app.get("/badmassamerica",(req,res)=>{
    res.render("home");
});

app.get("/badmassamerica/viedo",(req,res)=>{
    res.render("viedo");
});

//INDEX ROUTE
app.get("/badmassamerica/story",function(req,res){
    Story.find({},function(err, storys){
        if(err){
            console.log("ERROR!");
        }
        else{
            res.render("storyHome",{storys: storys});
        }
    });
});

//NEW ROUTE
app.get("/badmassamerica/new",function(req,res){
    res.render("newStory");
});

//CREATE ROUTE
app.post("/badmassamerica/story",function(req,res){
    //create Story
    req.body.story.body = req.sanitize(req.body.story.body);
    Story.create(req.body.story,function(err, newStory){
        if(err){
            res.render("newStory");
        }
        else{
            //then redirect to index
            res.redirect("/badmassamerica/story");
        }
    });
});

//SHOW ROUTE
app.get("/badmassamerica/story/:id",function(req, res){
    Story.findById(req.params.id,function(err, story){
        if(err){
            res.redirect("/badmassamerica/story");
        }
        else{
            res.render("showStory",{story: story});
        }
    });
});

//EDIT ROUTE
app.get("/badmassamerica/story/:id/edit",function(req,res){
    Story.findById(req.params.id,function(err, story){
        if(err){
            res.redirect("/badmassamerica/story/"+ req.params.id);
        }
        else{
            res.render("editStory",{story: story});
        }
    });
});

//UPDATE ROUTE
app.put("/badmassamerica/story/:id",function(req,res){
    req.body.story.body = req.sanitize(req.body.story.body);
    Story.findByIdAndUpdate(req.params.id, req.body.story, function(err, story){
        if(err){
            res.redirect("/badmassamerica/story");
        }
        else{
            res.redirect("/badmassamerica/story/"+ req.params.id);
        }
    });
});

//DELETE ROUTE
app.delete("/badmassamerica/story/:id",function(req,res){
    //destroy blog
    Story.findByIdAndRemove(req.params.id,function(err){
        if(err){
            res.redirect("/badmassamerica/story/"+ req.params.id);
        }
        else{
            res.redirect("/badmassamerica/story");
        }
    });
    //redirect somewhere
});


app.listen(PORT, () => console.log(`Server started on port localhost: ${PORT}`));