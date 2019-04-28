import styled from 'styled-components';

const Navbar = styled.nav`
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid black;
  display: flex;
  height: 4em;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;

  a {
    text-decoration: inherit;
    color: inherit;
  }
`;

export default Navbar;
