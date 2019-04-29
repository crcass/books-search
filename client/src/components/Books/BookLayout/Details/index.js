import React from 'react';
import PropTypes from 'prop-types';
import DetailsContainer from './DetailsContainer';

const propTypes = {
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

const Details = ({ description, image, title }) => (
  <DetailsContainer>
    <img src={image} alt={title} />
    <p>{description}</p>
  </DetailsContainer>
);

Details.propTypes = propTypes;

export default Details;
