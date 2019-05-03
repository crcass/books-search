import styled from 'styled-components';
import { colors } from '../shared';

const Navbar = styled.nav`
  align-items: center;
  background: linear-gradient(22deg, ${colors.primary} 27%, ${colors.contrast});
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  color: #fff;
  display: flex;
  height: 48px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;

  a {
    color: inherit;
    margin: 0 2em 0.1em;
    text-decoration: inherit;
    transition: all 0.3s ease;

    &:hover {
      color: ${colors.nav};
    }
  }
  .active::after {
    background-color: ${colors.nav};
    border-radius: 4px;
    content: '';
    display: block;
    height: 2px;
    width: 2em;
  }
`;

export default Navbar;
