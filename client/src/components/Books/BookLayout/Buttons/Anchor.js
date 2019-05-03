import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  buttons: PropTypes.object.isRequired
};

const Anchor = styled.a`
  align-items: ${({ buttons }) => buttons.alignItems};
  background: ${({ buttons }) => buttons.anchorBackground};
  background-size: ${({ buttons }) => buttons.backgroundSize};
  border-radius: ${({ buttons }) => buttons.borderRadius};
  color: ${({ buttons }) => buttons.color};
  display: ${({ buttons }) => buttons.display};
  height: ${({ buttons }) => buttons.height};
  justify-content: ${({ buttons }) => buttons.justifyContent};
  margin: ${({ buttons }) => buttons.margin};
  padding: ${({ buttons }) => buttons.padding};
  text-decoration: none;
  transition: all 0.5s ease;
  width: 70px;

  &:hover {
    background-position: 100px;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
  }
`;

Anchor.propTypes = propTypes;

export default Anchor;
