import React, { Component } from 'react';
import Books from '../../components/Books';
import { getBooks, deleteBook } from '../../api';

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  async loadBooks() {
    const response = await getBooks();
    this.setState({ books: response.data });
  }

  removeBook = e => {
    const { index } = e.target.dataset;
    const { books } = this.state;
    deleteBook(books[index]._id);
    books.splice(index, 1);
    this.setState({ books });
  };

  render() {
    return <Books books={this.state.books} handleBook={this.removeBook} />;
  }
}

export default Saved;
