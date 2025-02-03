const express = require('express');
const router = express.Router();
const bookController = require('../Controllers/bookController');

router.get('/',bookController.getBooks);
router.post('/', bookController.createBook);
router.get('/:id', bookController.getBookById);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);
router.get('/search', bookController.searchBook);
router.get('/popular', bookController.getPopularBooks);
router.get('/recent', bookController.getRecentBooks);

module.exports = router;