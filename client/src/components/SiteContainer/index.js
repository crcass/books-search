import styled from 'styled-components';

const SiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  justify-content: center;
  margin-top: 48px;

  .example-enter {
    opacity: 0.01;
  }

  .example-enter.example-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  .example-leave {
    opacity: 1;
  }

  .example-leave.example-leave-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`;

export default SiteContainer;
