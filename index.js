const express = require('express');
const app = express();
const port = 3000;

const films = require ('./routes/films.js');
const categories = require ('./routes/categories.js');

app.get('/', function (req,res) {
    res.send('Hallo Vendi Rahman');
})

app.use('/films', films);
app.use('/categories', categories);

app.listen(port);
console.log('server running');