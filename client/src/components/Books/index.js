import React from 'react';
import BooksContainer from './BooksContainer';
import BookLayout from './BookLayout';

const renderBooks = (books, removeBook, saveBook, save) =>
  books.map((book, i) => (
    <BookLayout
      key={i}
      authors={book.authors}
      description={book.description}
      id={i}
      image={book.image}
      link={book.link}
      title={book.title}
      removeBook={removeBook}
      saveBook={saveBook}
      save={save}
    />
  ));

const Books = ({ books, removeBook, saveBook, save }) => (
  <BooksContainer>
    {renderBooks(books, removeBook, saveBook, save)}
  </BooksContainer>
);

export default Books;
