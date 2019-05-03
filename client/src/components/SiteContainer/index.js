import styled from 'styled-components';
import { colors } from '../shared';

const SiteContainer = styled.div`
  background: linear-gradient(
    45deg,
    ${colors.contrast},
    ${colors.primary},
    ${colors.contrast} 75%
  );
  color: #333;
  font-family: 'Roboto', sans-serif;
  height: 100%;
  margin-top: 48px;
  overflow: scroll;
`;

export default SiteContainer;
