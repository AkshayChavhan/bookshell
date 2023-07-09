const express = require("express");
const User = require("../models/User");
const usersRoute = express.Router();


// USERS Register
usersRoute.post("/register" , async (req,res) =>{
    try {
        // console.log(req.body);
        const { name , email , password } = req.body ;
        const user = await User.create({ name , email , password})
        res.send(user);

    } catch (error) {
        console.log(error);
    }
});

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