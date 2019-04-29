import React, { Component, Fragment } from 'react';
import Form from '../../components/Form';
import Books from '../../components/Books';
import { getBooks, postBook } from '../../api';
import { formatAPIResults } from '../../helpers';

class Search extends Component {
  state = {
    term: '',
    books: []
  };

  handleChange = e => this.setState({ term: e.target.value.toLowerCase() });

  handleSubmit = e => {
    e.preventDefault();
    const { term } = this.state;
    if (term === '') {
      return alert('Please enter a book title');
    }
    this.searchBooks(term);
    this.setState({ term: '', books: [] });
  };

  async searchBooks(term) {
    try {
      const response = await getBooks(term);
      this.setState({
        books: formatAPIResults(response.data.items)
      });
    } catch (error) {
      throw error;
    }
  }

  saveBook = e => {
    const { index } = e.target.dataset;
    const { books } = this.state;
    postBook(books[index]);
  };

  render() {
    return (
      <Fragment>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={this.state.term}
        />
        <Books books={this.state.books} handleBook={this.saveBook} save />
      </Fragment>
    );
  }
}

export default Search;
