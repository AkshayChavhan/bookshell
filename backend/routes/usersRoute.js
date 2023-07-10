const express = require("express");
const User = require("../models/User");
const usersRoute = express.Router();
const asynHandler = require("express-async-handler");

// USERS Register
usersRoute.post("/register" , 
    asynHandler( async (req,res) =>{
        const { name , email , password } = req.body ;
        const userExists = await User.findOne({ email : email });
        if(userExists) {
            throw new Error("User exist")
        }
        const userCreated = await User.create({ email , name , password });

        res.send(userCreated);
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
usersRoute.post("/login" , async (req,res) =>{
    try {
        console.log("login");
    } catch (error) {
        console.log(error);
    }
})

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