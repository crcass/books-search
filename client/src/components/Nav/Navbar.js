import styled from 'styled-components';

const Navbar = styled.nav`
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid black;
  color: #666;
  display: flex;
  height: 48px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;

  a {
    color: inherit;
    margin: 0 2em;
    text-decoration: inherit;

    &:hover {
      color: #000;
    }
  }
`;

export default Navbar;
