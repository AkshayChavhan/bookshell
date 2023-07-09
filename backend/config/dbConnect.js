const mongoose = require("mongoose");


const dbConnect = () =>{

// connect DB
    mongoose.connect("mongodb+srv://akshaychavhan676:14ArY3YUo8175WWJ@cluster0.psyupcj.mongodb.net/" , {
        // useFindAndModify : true ,   Mongoose version 6.0.0, these options are no longer supported.
        useUnifiedTopology : true ,    
        // useCreateIndex : true ,  Mongoose version 6.0.0, these options are no longer supported.
        useNewUrlParser : true ,
    })
    .then(()=> console.log("DB Connected"))
    .catch(err =>  console.log(err));
}


module.exports = dbConnect;