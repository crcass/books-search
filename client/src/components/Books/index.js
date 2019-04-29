import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import BooksContainer from './BooksContainer';
import BookLayout from './BookLayout';

const propTypes = {
  books: PropTypes.array.isRequired,
  handleBook: PropTypes.func.isRequired,
  save: PropTypes.bool
};

const renderBooks = (books, handleBook, save) =>
  books.map((book, i) => (
    <CSSTransition key={i} timeout={200} classNames="move">
      <BookLayout
        authors={book.authors}
        description={book.description}
        id={i}
        image={book.image}
        link={book.link}
        title={book.title}
        handleBook={handleBook}
        save={save}
      />
    </CSSTransition>
  ));

const Books = ({ books, handleBook, save }) => (
  <BooksContainer>
    <TransitionGroup className="tGroup">
      {renderBooks(books, handleBook, save)}
    </TransitionGroup>
  </BooksContainer>
);

Books.propTypes = propTypes;

export default Books;
