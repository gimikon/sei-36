const express = require('express');
const ejs = require('ejs');
const books = require('google-books-search');

const PORT = 1337;
const server = express();
server.set('view-engine',ejs);
server.get('/',(req,res) => {
  res.render('home.ejs');
});


server.get('/search',(req,res) => {
 const Book = req.query.book;
 books.search(Book, function(error, results) {
    if ( ! error ) {
        console.log(results[0].thumbnail);
        res.render('result.ejs',{Book:Book, src: results});
    } else {
        console.log(error);
    }
});
});
server.listen(PORT, () => console.log(`Listening on http://localhost: ${PORT}`));
