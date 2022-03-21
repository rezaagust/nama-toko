'use strict'

/**
 * class decoration
 * write static method
 * module export
 */

class BookController {
    static FindAllBooks(req, res) {
        res.send('Hello dari Book Controller');
    }
}

module.exports = {
    BookController,
};