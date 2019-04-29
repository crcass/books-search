import styled from 'styled-components';

const BooksContainer = styled.div`
  background-color: #aaa;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 0 1em;
  margin: 1em auto;
  max-width: 960px;
  overflow: scroll;

  .tGroup {
    display: contents;
  }

  .move-enter {
    opacity: 0.01;
    transform: translate(-100px, 0);
  }

  .move-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 200ms ease-in;
  }

  .move-exit {
    opacity: 1;
    transform: translate(0, 0);
  }

  .move-exit-active {
    opacity: 0.01;
    transform: translate(100px, 0);
    transition: all 200ms ease-in;
  }
`;

export default BooksContainer;
