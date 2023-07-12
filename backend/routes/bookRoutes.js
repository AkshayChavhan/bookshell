const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Book = require('../models/Book');

const bookRouter = express.Router() ;

// create book
bookRouter.post('/' , expressAsyncHandler(async(req,res)=> {
    const book = await Book.create(req.body);
    if(book){
        res.status(200);
        res.json(book);
    }else {
        res.status(500);
        throw new Error("Book creating failed");
    }
}))

// find book
bookRouter.get('/' , expressAsyncHandler(async(req,res)=> {
    const book = await Book.find({});
    if(book){
        res.status(200);
        res.json(book);
    }else {
        res.status(500);
        throw new Error("There are no books");
    }
}))


// update book
// find book
bookRouter.put('/:id' , 
authMiddleware , expressAsyncHandler(async(req,res)=> {
//    res.send(req.params.id);
const book = await Book.findById(req.params.id);

if(book){
    const updateBook = await Book.findByIdAndUpdate(req.params.id , req.body , {
        new : true ,
        runValidators : true
    });

    res.status(200);
    res.json(updateBook);

}else {
    res.status(500);
    throw new Error("Update failed");
}
}))


module.exports = bookRouter

