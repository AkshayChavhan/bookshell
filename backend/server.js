const express = require("express");
const dbConnect = require("./config/dbConnect");
const User = require("./models/User");
const usersRoute = require("./routes/usersRoute");
const app = express();
const error = require("../backend/errorMiddlewareHandler/errorMiddlewareHandler");


// passing body data
app.use(express.json());



// dbConnect calling
dbConnect()




// Routes
 app.use("/api/users" , usersRoute)


// Error middleware
app.use(error.errorMiddlewareHandler);


// Server
const PORT = process.env.PORT || 5000 

app.listen( PORT , () =>{
    console.log("Server running")
})


// 14ArY3YUo8175WWJ