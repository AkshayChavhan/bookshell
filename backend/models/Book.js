const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    catagory : {
        type : String ,
        required : [ true , "Book catagory is required" ]
    },
    author : {
        type : String ,
        required :  true
    },
    title : {
        type : String ,
        required :  true
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "User",
        required :  true
    }
},
{
    timestamps : true
});

const Book = mongoose.model("Book" , bookSchema) ;
module.exports = Book;
