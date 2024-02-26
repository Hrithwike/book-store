const express = require('express');
const router = express.Router();

const Book = require('../model/Book.js');
// const booksController = require('../controllers/books-controller.js');
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
  } catch (err) {
    console.log(err);
  }

  if (!books) {
    return res.status(404).json({ message: 'No products found' });
  }
  return res.status(200).json({ books });
});

// router.get('/', booksController.getAllBooks);
// router.post('/', booksController.addBook);
// router.get('/:id', booksController.getById);
// router.put('/:id', booksController.updateBook);
// router.delete('/:id', booksController.deleteBook);

module.exports = router;
