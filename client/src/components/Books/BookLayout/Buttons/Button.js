import styled from 'styled-components';

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

export default Button;
