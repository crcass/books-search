import React, { Component, Fragment } from 'react';
import Form from '../../components/Form';
import Books from '../../components/Books';
import { getBooks } from '../../api';
import { formatResults } from '../../helpers';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      term: '',
      books: []
    };
  }

  handleChange = e => this.setState({ term: e.target.value.toLowerCase() });

  handleSubmit = e => {
    e.preventDefault();
    const form = document.querySelector('form');
    const { term } = this.state;
    this.setState({ term });
    this.searchBooks(term);
    form.reset();
  };

  async searchBooks(term) {
    try {
      const response = await getBooks(term);
      this.setState({
        books: formatResults(response.data.items)
      });
    } catch (error) {
      throw error;
    }
  }

  saveBook = e => {
    const { id } = e.target.dataset;
    const { books } = this.state;
    console.log(books[id]);
    console.log(`Saving ${id} to database`);
  };

  render() {
    return (
      <Fragment>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Books books={this.state.books} saveBook={this.saveBook} save />
      </Fragment>
    );
  }
}

export default Search;
