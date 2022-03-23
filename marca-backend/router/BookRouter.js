'use strict'

/**
 * initialization express
 */

const express = require('express');
const { BookController } = require('../controller/BookController');
const bookRouter = express.Router();

// endpoint home
bookRouter.get('/', BookController.FindAllBooks);

// endpoint book by id
bookRouter.get('/:id', BookController.FindBookById);

// endpoint post
bookRouter.post('/post', BookController.AddNewBook);

// endpoint update
bookRouter.put('/update/:id', BookController.UpdateBook);

// ekspor modul
module.exports = {bookRouter};