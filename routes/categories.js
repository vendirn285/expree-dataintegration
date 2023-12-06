const express = require('express');
const router = express.Router();

const pool = require('../queries.js');

router.get('/', function (req, res) {
    pool.query('SELECT * FROM category', (error, results) => {
        if (error) {
            throw error;
        }
        res.send(results.rows);
    });
});

router.get('/:category', function (req, res) {
    pool.query( `SELECT * FROM film_category INNER JOIN film ON film_category.film_id = film.film_id INNER JOIN category ON film_category.category_id = category.category_id WHERE category.name = '${req.params.category}'`,
    (error, results) => {
        if (error) {
            throw error;
        }
        res.send(results.rows);
    });
});



module.exports = router;