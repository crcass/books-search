import React from 'react';
import PropTypes from 'prop-types';
import BooksContainer from './BooksContainer';
import BookLayout from './BookLayout';

const propTypes = {
  books: PropTypes.array.isRequired,
  handleBook: PropTypes.func.isRequired,
  save: PropTypes.bool
};

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

Books.propTypes = propTypes;

export default Books;
