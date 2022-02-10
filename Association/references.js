var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");

var User = require("./models/user");

//USER CREATED HERE,
// User.create({
//     email: "rahulkujar@gamil.com",
//     name: "Rahul Kujar"
// });

//POST CREATE HERE,
// Post.create({
//     title: "Legend Batsman4",
//     content: "Most Runs In International T-20 Cricket"
// },function(err, post){
//     User.findOne({email: "rahulkujar@gamil.com"},function(err, foundUser){
//         if(err){
//             console.log(err);
//         }
//         else{
//             foundUser.posts.push(post);
//             foundUser.save(function(err, data){
//                 if(err){
//                     console.log(err);
//                 }
//                 else{
//                     console.log(data);
//                 }
//             });
//         }
//     });
// });

//Find User
User.findOne({email: "rahulkujar@gamil.com"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    }
    else{
        console.log(user);
    }
});