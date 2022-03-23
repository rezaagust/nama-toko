'use strict'

/**
 * class decoration
 * write static method
 * add model to controller
 * module export
 */

const {Book} = require('../model/Book');

class BookController {
    static FindAllBooks(req, res) {
        Book.showAllBooks ((err, data) => {
            if (err) {
                console.log('Error', err)
            } else {
                res.json({
                    title : "API Backend Marca",
                    message : "Koleksi Buku",
                    status : 200,
                    data
                })
            }
        })
    }

    static FindBookById(req, res) {
        // console.log('ini id', req.params.id);
        const {id} = req.params;
        Book.showBookById(id, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.json({
                    title : "API Backend Marca",
                    message : "Koleksi Buku",
                    status : 200,
                    data
                })
            }
        })
    }

    

}

module.exports = {
    BookController,
};