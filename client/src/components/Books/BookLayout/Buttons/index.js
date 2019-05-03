import React from 'react';
import PropTypes from 'prop-types';
import ButtonContainer from './ButtonContainer';
import Anchor from './Anchor';
import Button from './Button';

const propTypes = {
  id: PropTypes.number,
  link: PropTypes.string,
  handleBook: PropTypes.func,
  save: PropTypes.bool,
  buttons: PropTypes.object
};

const Buttons = ({ buttons, id, link, handleBook, save }) => (
  <ButtonContainer>
    <Anchor
      buttons={buttons}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      VISIT
    </Anchor>
    <Button buttons={buttons} save={save} data-index={id} onClick={handleBook}>
      {save ? 'SAVE' : 'DELETE'}
    </Button>
  </ButtonContainer>
);

Button.propTypes = propTypes;

export default Buttons;
