import React from 'react';
import ButtonContainer from './ButtonContainer';
import Anchor from './Anchor';
import Button from './Button';

const Buttons = ({ id, link, handleBook, save }) => (
  <ButtonContainer>
    <Anchor href={link} target="_blank" rel="noopener noreferrer">
      Visit
    </Anchor>
    <Button save={save} data-index={id} onClick={handleBook}>
      {save ? 'Save' : 'Delete'}
    </Button>
  </ButtonContainer>
);

export default Buttons;
