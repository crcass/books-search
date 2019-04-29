import styled from 'styled-components';

const HeroContainer = styled.div`
  align-items: center;
  background: #e0e0e0;
  background-position: center;
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 20em;
  justify-content: center;
  width: 100%;

  h1 {
    font-size: 1.75em;
    @media (min-width: 768px) {
      font-size: 2.75em;
    }
  }

  /* p {
    max-width: 80%;
  } */
`;

export default HeroContainer;
