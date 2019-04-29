import React from 'react';
import PropTypes from 'prop-types';
import ButtonContainer from './ButtonContainer';
import Anchor from './Anchor';
import Button from './Button';

const propTypes = {
  id: PropTypes.number,
  link: PropTypes.string,
  handleBook: PropTypes.func,
  save: PropTypes.bool
};

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

Button.propTypes = propTypes;

export default Buttons;
