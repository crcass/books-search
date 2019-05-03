import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  buttons: PropTypes.object.isRequired
};

const Button = styled.button`
  background: ${({ save, buttons }) =>
    save ? `${buttons.save}` : `${buttons.delete}`};
  background-size: ${({ buttons }) => buttons.backgroundSize};
  border: ${({ buttons }) => buttons.border};
  border-radius: ${({ buttons }) => buttons.borderRadius};
  color: ${({ buttons }) => buttons.color};
  cursor: pointer;
  height: ${({ buttons }) => buttons.height};
  margin: ${({ buttons }) => buttons.margin};
  padding: ${({ buttons }) => buttons.padding};
  transition: all 0.6s ease;
  width: 100px;

  &:hover {
    background-position: -100px;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
  }
`;

Button.propTypes = propTypes;

export default Button;
