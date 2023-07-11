const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Book = require('../models/Book');

const bookRouter = express.Router() ;

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

module.exports = bookRouter
