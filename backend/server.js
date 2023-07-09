const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();




// dbConnect calling
dbConnect()


// Routes
// USERS Register
app.post("/api/users/register" , (req,res) =>{
    res.send("Hearing Users POst");
})

// get users
app.get("/api/users" , (req,res) =>{
    res.send("Hearing Users list");
})

// Login
app.post("/api/users/login" , (req,res) =>{
    res.send("Hearing Login POst");
})

// Updates User
app.put("/api/users/update" , (req,res) =>{
    res.send("Hearing Update POst");
})

// Delete Users
app.delete("/api/users/delete/:id" , (req,res) =>{
    res.send("Hearing Delete POst");
})





// Server
const PORT = process.env.PORT || 5000 

app.listen( PORT , () =>{
    console.log("Server running")
})


// 14ArY3YUo8175WWJ