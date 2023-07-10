const mongoose = require("mongoose");


const dbConnect = () =>{

// connect DB
    mongoose.connect(process.env.MONGODB_URL , {
        // useFindAndModify : true ,   Mongoose version 6.0.0, these options are no longer supported.
        useUnifiedTopology : true ,    
        // useCreateIndex : true ,  Mongoose version 6.0.0, these options are no longer supported.
        useNewUrlParser : true ,
    })
    .then(()=> console.log("DB Connected"))
    .catch(err =>  console.log(err));
}


module.exports = dbConnect;