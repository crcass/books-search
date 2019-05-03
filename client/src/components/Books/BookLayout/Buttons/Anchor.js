import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  alignItems: PropTypes.string,
  anchorBackground: PropTypes.string,
  borderRadius: PropTypes.string,
  color: PropTypes.string,
  display: PropTypes.string,
  height: PropTypes.string,
  justifyContent: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string
};

const Anchor = styled.a`
  align-items: ${props => props.buttons.alignItems};
  background: ${props => props.buttons.anchorBackground};
  background-size: ${props => props.buttons.backgroundSize};
  border-radius: ${props => props.buttons.borderRadius};
  color: ${props => props.buttons.color};
  display: ${props => props.buttons.display};
  height: ${props => props.buttons.height};
  justify-content: ${props => props.buttons.justifyContent};
  margin: ${props => props.buttons.margin};
  padding: ${props => props.buttons.padding};
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
