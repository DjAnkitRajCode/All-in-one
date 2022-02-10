var mongoose = require("mongoose");

var storySchema = new mongoose.Schema({
    authorName:String,
    title: String,
    para1: String,para2: String,para3: String,para4: String,para5: String,
    para6: String,para7: String,para8: String,para9: String,para10: String,
    image1: String,image2: String,image3: String,image4: String,image5: String,
    image6: String,image7: String,image8: String,image9: String,image10: String,
    created: {type: Date, default: Date.now},
});
module.exports = mongoose.model("Story", storySchema);