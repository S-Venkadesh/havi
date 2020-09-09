const express = require('express');
const router = express.Router();
const User = require('../model/userM');
const Posts = require('../model/todoM');
const Joi = require('joi');
const bcryptjs = require('bcryptjs');
let user_id = '';

const ValidateSignUp = (reqBody)=>{
    const schema = Joi.object({
        firstname:Joi.string().min(2).max(30).required(),
        lastname:Joi.string().min(1).max(25).required(),
        email:Joi.string().min(6).max(100).required().email(),
        password:Joi.string().min(6).max(30).required(),
        country:Joi.string().min(1).max(25).required(),
        date:Joi.string().required(),
    });

    return schema.validate(reqBody);
}

const ValidateSignIn = (reqBody)=>{
    const schema = Joi.object({
        email:Joi.string().min(6).max(100).required().email(),
        password:Joi.string().min(6).max(30).required(),
    });

    return schema.validate(reqBody);
}

router.post('/register',async(req,res)=>{
    console.log(req.body);
    const {error} = ValidateSignUp(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }
    const user = await User.findOne({email:req.body.email});
    if(user){
        return res.status(400).send('user already exixsts');
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(req.body.password,salt);

    try{
        const savingtodb = new User({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            password:hashedPassword,
            country:req.body.country,
            date:req.body.date
        })

        const SavedUser = await savingtodb.save();
        console.log(SavedUser);
        res.status(200).send('Registered sucessfully');
    }
    catch(err){
        res.status(400).send(err);
    }
})

router.post('/login',async(req,res)=>{

    const {error} = ValidateSignIn(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }
    const user = await User.findOne({email:req.body.email});
    user_id = user._id;
    if(!user){
        return res.status(400).send('user does not exixts');
    }
    
    const passwordCheck = await bcryptjs.compare(req.body.password,user.password);
    if(!passwordCheck){
        return res.status(401).send('Email or password does not exist');
    }
    res.status(200).send('Signed in successfully');
})

router.get('/admin',async(req,res)=>{
    let users = await User.find();
    res.send(users);
})

router.post('/posts',async (req,res)=>{
    const savingposts = new Posts({
        content:req.body.content,
        postedBy:user_id
    })

    const savedPosts = await savingposts.save();
     return res.send(savedPosts);
})

module.exports = router;
