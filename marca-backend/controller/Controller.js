'use strict'

/**
 * class decoration
 * write static method
 * module export
 */

class Controller {
    static Homepage(req, res) {
        res.send('Hello dari controller');
    }
}

module.exports = {
    Controller,
};