import React from 'react';
import PropTypes from 'prop-types';
import FormContainer from './FormContainer';

const propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  value: PropTypes.any
};

const Form = ({ handleChange, handleSubmit, value }) => (
  <FormContainer>
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchBar">Search by Title</label>
      <input onChange={handleChange} name="term" type="text" value={value} />
      <button>Submit</button>
    </form>
  </FormContainer>
);

Form.propTypes = propTypes;

export default Form;
