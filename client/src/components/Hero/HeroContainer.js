import styled from 'styled-components';
import books from './books.jpg';

const HeroContainer = styled.div`
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${books});
  background-position: center;
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 24em;
  justify-content: center;
  width: 100%;

  h1 {
    font-size: 1.75em;
    @media (min-width: 768px) {
      font-size: 2.75em;
    }
  }
`;

export default HeroContainer;
