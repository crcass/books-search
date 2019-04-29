import React from 'react';
import BooksContainer from './BooksContainer';
import BookLayout from './BookLayout';

const renderBooks = (books, handleBook, save) =>
  books.map((book, i) => (
    <BookLayout
      key={i}
      authors={book.authors}
      description={book.description}
      id={i}
      image={book.image}
      link={book.link}
      title={book.title}
      handleBook={handleBook}
      save={save}
    />
  ));

const Books = ({ books, handleBook, save }) => (
  <BooksContainer>{renderBooks(books, handleBook, save)}</BooksContainer>
);

export default Books;
