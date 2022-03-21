'use strict'

/**
 * initialization express
 */

const express = require('express');
const { Controller } = require('../controller/Controller');
const router = express.Router();

// book router
const {bookRouter} = require('./BookRouter');

// endpoint home
router.get('/', Controller.Homepage);

// endpoint book
router.use('/books', bookRouter);

// ekspor modul
module.exports = {router};