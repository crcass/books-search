import React from 'react';
import TitleContainer from './TitleContainer';

const Title = ({ authors, title }) => (
  <TitleContainer>
    <h2>{title}</h2>
    <h3>Written by {authors}</h3>
  </TitleContainer>
);

export default Title;
