import styled from 'styled-components';

const HeroContainer = styled.div`
  background: #eee;
  background-position: center;
  background-size: cover;
  height: 20em;
  width: 100%;

  section {
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', Arial, Helvetica Neue, Helvetica, sans-serif;
    height: 100%;
    justify-content: center;
    width: 100%;
  }

  h1 {
    font-size: 1.75em;
    @media (min-width: 768px) {
      font-size: 2.75em;
    }
  }

  p {
    max-width: 80%;
  }
`;

export default HeroContainer;
