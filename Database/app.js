var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");


var catShema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String,
});

var Cat = mongoose.model("Cat",catShema);

//adding a new cat in DB
// var george = new Cat({
//     name: "Mrs.Norris",
//     age: 7,
//     temperament: "Evil" 
// });

// george.save(function(err,cat){
//     if(err){
//         console.log("Something went wrong");
//     }
//     else{
//         console.log("We just save one cat");
//         console.log(cat);
//     }
// });
Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "bland",
},function(err,cat){
    if(err){
        console.log(err);
    }
    else{
        console.log(cat);
    }
});
//retrive all cats from the Db and console.log each one

Cat.find({},function(err,cats){
    if(err){
        console.log("Oh no ,ERROR!");
        console.log(err);
    }
    else{
        console.log("all the cats....");
        console.log(cats);
    }
});

