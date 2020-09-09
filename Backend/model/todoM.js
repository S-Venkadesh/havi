const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;
const User = require('./userM');

const todoSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
        min:10
    },
    postedBy:{
        type:ObjectId,
        ref:"User"
    }
})

const Posts = mongoose.model("Posts",todoSchema);

module.exports = Posts;

