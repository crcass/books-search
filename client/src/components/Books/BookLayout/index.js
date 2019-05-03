import React from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import Flex from './Flex';
import Title from './Title';
import Buttons from './Buttons';
import Details from './Details';
import { buttons } from '../../../components/shared';

const propTypes = {
  authors: PropTypes.string.isRequired,
  buttons: PropTypes.object,
  description: PropTypes.string,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleBook: PropTypes.func.isRequired,
  save: PropTypes.bool
};

const BookLayout = ({
  authors,
  description,
  id,
  image,
  link,
  title,
  handleBook,
  save
}) => (
  <Section>
    <Flex>
      <Title authors={authors} title={title} />
      <Buttons
        id={id}
        link={link}
        handleBook={handleBook}
        save={save}
        buttons={buttons}
      />
    </Flex>
    <Details description={description} image={image} title={title} />
  </Section>
);

BookLayout.propTypes = propTypes;

export default BookLayout;
