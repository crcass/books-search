import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  save: PropTypes.bool
};

const Button = styled.button`
  align-items: center;
  background-color: ${props => (props.save ? '#021aee' : '#ee0290')};
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  margin: 1em;
  padding: 0 15px;
  text-decoration: none;
  width: 100px;
`;

Button.propTypes = propTypes;

export default Button;
