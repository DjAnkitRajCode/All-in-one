var mongoose = require("mongoose");

//POST - text,image
var postSchema = new mongoose.Schema({
    text: String,
    image: String
});
module.exports = mongoose.model("Post", postSchema);
