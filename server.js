const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// return all saved books as JSON
app.get('/api/books', (req, res) => console.log(req, res));

// save a new book to the database
app.post('/api/books', (req, res) => console.log(req, res));

// delete a book from the database by Mongo _id
app.delete('/api/books/:id', (req, res) => console.log(req, res));

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './client/build/index.html'))
);

app.listen(PORT, () => console.log(`🌎 ==> API server now on port ${PORT}!`));
