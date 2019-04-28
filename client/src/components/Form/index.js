import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

const Form = ({ handleChange, handleSubmit }) => (
  <Fragment>
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchBar">Search by Title or Author</label>
      <input onChange={handleChange} name="term" type="text" />
      <button>Submit</button>
    </form>
  </Fragment>
);

Form.propTypes = propTypes;

export default Form;
