import React from 'react';
import DetailsContainer from './DetailsContainer';

const Details = ({ description, image, title }) => (
  <DetailsContainer>
    <img src={image} alt={title} />
    <p>{description}</p>
  </DetailsContainer>
);

export default Details;
