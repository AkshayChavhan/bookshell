const express = require("express");
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv");
const usersRoute = require("./routes/usersRoute");
const app = express();
const error = require("../backend/errorMiddlewareHandler/errorMiddlewareHandler");
const bookRouter = require("./routes/bookRoutes");



// 
dotenv.config();


// passing body data
app.use(express.json());



// dbConnect calling
dbConnect()




// Routes
    // users
app.use("/api/users" , usersRoute)
    
    // book
app.use("/api/books" , bookRouter);


// Error middleware
app.use(error.errorMiddlewareHandler);


// Server
const PORT = process.env.PORT || 5000 

app.listen( PORT , () =>{
    console.log("Server running")
})


// 14ArY3YUo8175WWJ