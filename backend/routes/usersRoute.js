const express = require("express");
const User = require("../models/User");
const usersRoute = express.Router();
const asynHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken.js");

// USERS Register
usersRoute.post("/register" , 
    asynHandler( async (req,res) =>{
        const { name , email , password } = req.body ;
        const userExists = await User.findOne({ email : email });
        if(userExists) {
            throw new Error("User exist")
        }
        const userCreated = await User.create({ email , name , password });

        res.json({
            _id : userCreated._id , 
            name : userCreated.name ,
            password : userCreated.password ,
            email : userCreated.email  ,
            token : generateToken(userCreated._id),
        });
}));

// get users
usersRoute.get("/" , async (req,res) =>{
    try {
        console.log(req.body);
    } catch (error) {
        console.log(error);
    }
})

// Login
usersRoute.post("/login" , asynHandler( async (req,res) =>{
    const { email ,password } = req.body ;

    const user = await User.findOne({ email });

    if(user && await user.isPasswordMatch(password)) {
        // set status code
        res.status(200);

        res.json({
            _id : user._id , 
            name : user.name ,
            password : user.password ,
            email : user.email  ,
            token : generateToken(user._id),
        });
    }else{
        res.status(401);
        throw new Error("Invalid credentials");
    }
}))

// Updates User
usersRoute.put("/update" , async (req,res) =>{
    try {
        console.log("update");
    } catch (error) {
        console.log(error);
    }
})

// Delete Users
usersRoute.delete("/delete/:id" , async (req,res) =>{
    try {
        console.log("delete");
    } catch (error) {
        console.log(error);
    }
})

module.exports = usersRoute ;