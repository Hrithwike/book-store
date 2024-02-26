const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes.js');
// const cors = require('cors');
const app = express();

app.use(express.json());
app.use('/books', router);

// app.use(cors());

mongoose
  .connect('mongodb://localhost:27017/bookstore')
  .then(() => console.log('Connected To Database'))
  .then(() => {
    app.listen(5000);
  })
  .catch(err => console.log(err));
