const mongoose = require('mongoose');
// const { string } = require('joi');

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        min:6,
        max:30
    },
    lastname:{
        type:String,
        required:true,
        min:1,
        max:25,
    },
    email:{
        type:String,
        required:true,
        min:6,
        max:100
    },
    password:{
        type:String,
        required:true,
        min:2,
        max:50,
    },
    country:{
        type:String,
        required:true,
        min:1,
        max:50
    },
    date:{
        type:String,
        required:true,
    }
});

const User = mongoose.model("User",userSchema);

module.exports = User;