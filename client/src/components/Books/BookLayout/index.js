import React from 'react';
import Section from './Section';
import Flex from './Flex';
import Title from './Title';
import Buttons from './Buttons';
import Details from './Details';

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
      <Buttons id={id} link={link} handleBook={handleBook} save={save} />
    </Flex>
    {/* <img src={image} alt={title} />
    <p>{description}</p> */}
    <Details description={description} image={image} title={title} />
  </Section>
);

export default BookLayout;
