import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../shared';

const propTypes = {
  loaded: PropTypes.bool.isRequired
};

const BooksContainer = styled.div`
  background-color: ${colors.background};
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  padding: ${({ loaded }) => (loaded ? '0 1em 1em' : 'none')};
  margin: 1em auto;
  max-width: 960px;

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

BooksContainer.propTypes = propTypes;

export default BooksContainer;
