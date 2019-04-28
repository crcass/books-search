import React from 'react';
import BooksContainer from './BooksContainer';
import BookLayout from './BookLayout';

const renderBooks = (books, saveBook, save) =>
  books.map(book => (
    <BookLayout
      key={book.id}
      authors={book.authors}
      description={book.description}
      id={book.id}
      image={book.image}
      link={book.link}
      saveBook={saveBook}
      title={book.title}
      save={save}
    />
  ));

const Books = ({ books, saveBook, save }) => (
  <BooksContainer>{renderBooks(books, saveBook, save)}</BooksContainer>
);

export default Books;
