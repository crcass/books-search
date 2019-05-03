import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 694px) {
    flex-direction: initial;
  }
`;

export default Flex;
