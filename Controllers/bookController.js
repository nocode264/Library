const Book = require('../models/Book');

//get all books
exports.getBooks = async (req , res) => {
    try{
        const books = await Book.find();
        res.status(200).json(books);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

//create a new book
exports.createBook = async (req , res) =>{
    try{
        const newBook = new Book(req.body);
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

//get a single book
exports.getBookById = async (req , res) =>{
    try{
      const book = await Book.findById(req.params.id);
      if(!book) return res.status(404).json({message: 'Book not found'});
      res.status(200).json(book);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

//update a book
exports.updateBook = async (req , res) =>{
    try{
        const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updateBook) return res.status(404).json({message: 'Book not found'});
        res.status(200).json(updateBook);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};


//delete a book
exports.deleteBook = async (req, res) => {
    try {
      const deletedBook = await Book.findByIdAndDelete(req.params.id);
      if (!deletedBook) return res.status(404).json({ error: 'Book not found' });
      res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


//search for a book
exports.searchBook = async (req, res) => {
    try {
      const { title, author, publicationYear } = req.query;
      const query = {};

      if (title) query.title = new RegExp(title, 'i');
      if (author) query.author = new RegExp(author, 'i');
      if (publicationYear) query.publicationYear = Number(publicationYear);

      const books = await Book.find(query);
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


//get popular books
exports.getPopularBooks = async (req, res) => {
    try {
      const books = await Book.find().sort({ views: -1 }).limit(10);
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


//get recent books
exports.getRecentBooks = async (req, res) => {
    try {
      const books = await Book.find().sort({ createdAt: -1 }).limit(10);
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  