import React from 'react';
import PropTypes from 'prop-types';
import TitleContainer from './TitleContainer';

const propTypes = {
  authors: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

const Title = ({ authors, title }) => (
  <TitleContainer>
    <h2>{title}</h2>
    <h3>Written by {authors}</h3>
  </TitleContainer>
);

Title.propTypes = propTypes;

export default Title;
