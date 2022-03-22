'use strict'

/**
 * sql init from config
 */

const sql = require('../config/db');

class Book {
    constructor(id, book_label, book_title, book_author, book_genre, book_publisher, book_isbn, book_year, book_price, book_stock, created_at, updated_at) {
        this.id = id;
        this.book_label = book_label;
        this.book_title = book_title;
        this.book_author = book_author;
        this.book_genre = book_genre;
        this.book_publisher = book_publisher;
        this.book_isbn = book_isbn;
        this.book_year = book_year;
        this.book_price = book_price;
        this.book_stock = book_stock;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    /**
     * Tampilkan semua buku
     * Menampilkan buku berdasarkan id
     * Input buku baru
     * Update data buku
     * Delete buku
     */

    /**
         * sql connection
         * query sql command
         * get result
         * change to object
         * send to controller
         */
    static showAllBooks (result) {
        let sqlQuery = `SELECT * FROM book`;
        sql.query(sqlQuery, (err, res) => {
            if(err) {
                console.log ('This is Err => /n', err)
                result(err, null)
            } else {
                console.log ('resuit', res);
                result(null, res);
            }
        })
    }

}

module.exports = {
    Book
}