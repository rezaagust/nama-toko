'use strict'

/**
 * initialization mysql
 * import db config
 * create connection to database
 * open mysql connection
 * module exports
 */

// initialization mysql
const mysql = require ('mysql');

// import db config
const DBConfig = require ('./db.config');

// create connection to database 
const connectDB = mysql.createConnection({
    host: DBConfig.HOST,
    user: DBConfig.USER,
    password: DBConfig.PASSWORD,
    database:DBConfig.DB,
})

// open mysql connection
connectDB.connect(err => {
    if (err) throw err;
    console.log('COnnected to Database')
})

module.exports = connectDB;