'use strict'

/**
 * initialization express
 */

const express = require('express');
const { BookController } = require('../controller/BookController');
const bookRouter = express.Router();

// endpoint home
bookRouter.get('/', BookController.FindAllBooks);

// ekspor modul
module.exports = {bookRouter};