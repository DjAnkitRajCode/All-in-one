var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//POST - Title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);

//USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

// var newUser = new User({
//     email: "raj@abhi.edu",
//     name: "Abhi Raj"
// });
// newUser.posts.push({
//     title:"Mathsmatical Termnology",
//     content:"All Formula & methods"
// });
// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title:"Ray optics",
//     content:"Reflection of light"
// });
// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(post);
//     }
// });

User.findOne({name: "Abhi Raj"},function(err, user){
    if(err){
            // console.log(err);
    }
    else{
        user.posts.push({
            title:"Physics Termnology",
            content:"All Derivations & Formula"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            }
            else{
                console.log(user);
            }
        });
    }
});