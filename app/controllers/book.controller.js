const Book=require('../models/book.model');


//Create new book
exports.createBook=async(req,res)=>{
    const book=new Book(req.body);

    try{
        const savedBook=await book.save();
        res.status(201).send(savedBook);

    }catch(error){
        res.status(400).send(error);
    }
};


//find all books
exports.getAllBooks=async(req,res)=>{
    try{
        const books=await Book.find();
        res.send(books);
    }catch(error){
        res.status(500).send(error);
    }
};


//find book by id
exports.getBookById=async(req,res)=>{
    try{
    const book=await Book.findById(req.params.id);
    if(!book) return res.status(404).send('Book not found');
    res.send(book);
    }catch(error){
        res.status(500).send(error);
    }
};


//update book by id
exports.updateBook=async(req,res)=>{
    try{
        const updatedBook=await Book.findByIdAndUpdate(req.params.id,
            req.body,{new:true}
        );

        if(!updatedBook) returnres.status(404).send('Book not found');
        res.send(updatedBook)
    }catch(error){
        res.status(400).send(error);
    }
};


//delete book by id
exports.deleteBook=async(req,res)=>{
    try{
        const deletedBook=await Book.findByIdAndDelete(req.params.id);
        if(!deletedBook) return res.status(404).send('Book not found');
        res.send({message: 'Book Deleted Successfully.'});
    }catch(error){
        res.status(500).send(error);
    }
};